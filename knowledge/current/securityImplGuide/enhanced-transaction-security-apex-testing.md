---
title: "Enhanced Transaction Security Apex Testing"
domain: securityImplGuide
topic: enhanced-transaction-security-apex-testing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.669Z
estimatedTokens: 1417
keywords: [Enhanced, Transaction, Security, Apex, Testing, Writing, robust, tests, engineering, best, practice, ensure, code, expect, errors]
---

# Enhanced Transaction Security Apex Testing

> Writing robust tests is an engineering best practice to ensure that your code does
        what you expect and to find errors before your users and customers do. It’s even more
        important to write tests for your transaction security policy’s Apex code because it
        executes during critical user actions in your Salesforce org. For example, a bug in your
        LoginEvent policy that’s not caught during testing can result in locking your users out of
        your org, a situation best avoided.

# Enhanced Transaction Security Apex Testing

Writing robust tests is an engineering best practice to ensure that your code does what you expect and to find errors before your users and customers do. It’s even more important to write tests for your transaction security policy’s Apex code because it executes during critical user actions in your Salesforce org. For example, a bug in your LoginEvent policy that’s not caught during testing can result in locking your users out of your org, a situation best avoided.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=securityImplGuide)

#### Warning

Use API version 47.0 or later when writing Apex tests for enhanced transaction security policies.

When you test your Apex code by simulating a set of conditions, you are by definition writing unit tests. But writing unit tests isn’t enough. Work with your business and security teams to understand all your use cases. Then create a comprehensive test plan that mimics your actual users’ experience using test data in a sandbox environment. The test plan typically includes both manual testing and automated testing using external tools such as Selenium.

Let’s look at some sample unit tests to get you started. Here’s the Apex policy that we want to test.

```

```

## Plan and Write Tests

Before we start writing tests, let’s outline the positive and negative use cases that our test plan covers.

| If the evaluate method receives... | And ... | Then the evaluate method returns... |
| --- | --- | --- |
| An ApiEvent object | The ApiEvent has Lead in its QueriedEntities field and a number greater than 2000 in its RowsProcessed field | true |
| A ReportEvent object | The ReportEvent has Lead in its QueriedEntities field and a number greater than 2000 in its RowsProcessed field | true |
| A ListViewEvent object | The ListViewEvent has Lead in its QueriedEntities field and a number greater than 2000 in its RowsProcessed field | true |
| Any event object | The event doesn’t have Lead in its QueriedEntities field and has a number greater than 2000 in its RowsProcessed field | false |
| Any event object | The event has Lead in its QueriedEntities field and has a number less than or equal to 2000 in its RowsProcessed field | false |
| Any event object | The event doesn’t have Lead in its QueriedEntities field and has a number less than or equal to 2000 in its RowsProcessed field | false |

| If the evaluate method receives... | And ... | Then the evaluate method returns... |
| --- | --- | --- |
| A LoginEvent object | (no condition) | false |
| A null value | (no condition) | false |
| An ApiEvent object | The QueriedEntities field is null | false |
| A ReportEvent object | The RowsProcessed field is null | false |

Here’s the Apex testing code that implements all of these use cases.

```

```

## Refine the Policy Code After Running the Tests

Let's say you run the tests and the testNullQueriedEntities test case fails with the error System.NullPointerException: Attempt to de-reference a null object. Great news, the tests identified an area of the transaction security policy that isn't checking for unexpected or null values. Because policies run during critical org operations, make sure that the policies fail gracefully if there's an error so that they don't block important functionality.

Here's how to update the evaluate method in the Apex class to handle those null values gracefully.

```

```

We’ve changed the code so that before performing the .contains operation on the queriedEntities variable, we first check if the value is null. This change ensures that the code doesn’t dereference a null object.

In general, when you encounter unexpected values or situations in your Apex code, you have two options. Determine what is best for your users when deciding which option to choose:

-   Ignore the values or situation and return false so that the policy doesn't trigger.
-   Fail-close the operation by returning true.

## Advanced Example

Here's a more complex Apex policy that uses SOQL queries to get the profile of the user who is attempting to log in.

```

```

Here's our test plan for positive test cases:

-   -   If the user attempting to log in has the profile we’re interested in monitoring, then the evaluate method returns true.
    -   If the user attempting to log in doesn't have the profile we’re interested in monitoring, then the evaluate method returns false.

And here’s our plan for negative test cases:

-   -   If querying for the Profile object throws an exception, then the evaluate method returns false.
    -   If querying for the Profile object returns null, then the evaluate method returns false.

Because every Salesforce user is always assigned a profile, there's no need to create a negative test for it. It’s also not possible to create actual tests for the two negative test cases. We take care of them by updating the policy itself. But we explicitly list the use cases in our plan to make sure that we cover many different situations.

The positive test cases rely on the results of SQQL queries. To ensure that these queries execute correctly, we must also create some test data. Let's look at the test code.

```

```

Let’s handle the two negative test cases by updating the transaction security policy code to check for exceptions or null results when querying the Profile object.

```

```

## Code Examples

```apex
global class LeadExportEventCondition implements TxnSecurity.EventCondition {
    public boolean evaluate(SObject event) {
        switch on event{
            when ApiEvent apiEvent {
                return evaluate(apiEvent.QueriedEntities, apiEvent.RowsProcessed);
            }
            when ReportEvent reportEvent {
                return evaluate(reportEvent.QueriedEntities, reportEvent.RowsProcessed);
            }
            when ListViewEvent listViewEvent {
                return evaluate(listViewEvent.QueriedEntities, listViewEvent.RowsProcessed);
            }
            when null {
                 return false;   
            }
            when else {
                return false;
            }
        }
    }

    private boolean evaluate(String queriedEntities, Decimal rowsProcessed){
        if (queriedEntities.contains('Lead') && rowsProcessed > 2000){
            return true;
        }
        return false;
    }
}
```

```apex
/**
 * Tests for the LeadExportEventCondition class, to make sure that our Transaction Security Apex 
 * logic handles events and event field values as expected.
 **/
 @isTest
 public class LeadExportEventConditionTest {
 
    /**
     * ------------ POSITIVE TEST CASES ------------
     ** /
 
     /**
      * Positive test case 1: If an ApiEvent has Lead as a queried entity and more than 2000 rows 
      * processed, then the evaluate method of our policy's Apex should return true.
      **/ 
      static testMethod void testApiEventPositiveTestCase() {
          // set up our event and its field values
          ApiEvent testEvent = new ApiEvent();
          testEvent.QueriedEntities = 'Account, Lead';
          testEvent.RowsProcessed = 2001;
          
          // test that the Apex returns true for this event
          LeadExportEventCondition  eventCondition = new LeadExportEventCondition();
          System.assert(eventCondition.evaluate(testEvent));   
      }
     
     /**
      * Positive test case 2: If a ReportEvent has Lead as a queried entity and more than 2000 rows 
      * processed, then the evaluate method of our policy's Apex should return true.
      **/ 
      static testMethod void testReportEventPositiveTestCase() {
          // set up our event and its field values
          ReportEvent testEvent = new ReportEvent();
          testEvent.QueriedEntities = 'Account, Lead';
          testEvent.RowsProcessed = 2001;
          
          // test that the Apex returns true for this event
          LeadExportEventCondition  eventCondition = new LeadExportEventCondition();
          System.assert(eventCondition.evaluate(testEvent));   
      }
     
     /**
      * Positive test case 3: If a ListViewEvent has Lead as a queried entity and more than 2000 rows 
      * processed, then the evaluate method of our policy's Apex should return true.
      **/ 
      static testMethod void testListViewEventPositiveTestCase() {
          // set up our event and its field values
          ListViewEvent testEvent = new ListViewEvent();
          testEvent.QueriedEntities = 'Account, Lead';
          testEvent.RowsProcessed = 2001;
          
          // test that the Apex returns true for this event
          LeadExportEventCondition  eventCondition = new LeadExportEventCondition();
          System.assert(eventCondition.evaluate(testEvent));   
      }
     
     /**
      * Positive test case 4: If an event does not have Lead as a queried entity and has more 
      * than 2000 rows processed, then the evaluate method of our policy's Apex 
      * should return false.
      **/ 
      static testMethod void testOtherQueriedEntityPositiveTestCase() {
          // set up our event and its field values
          ApiEvent testEvent = new ApiEvent();
          testEvent.QueriedEntities = 'Account';
          testEvent.RowsProcessed = 2001;
          
          // test that the Apex returns false for this event
          LeadExportEventCondition  eventCondition = new LeadExportEventCondition();
          System.assertEquals(false, eventCondition.evaluate(testEvent));   
      }
      
    /**
      * Positive test case 5: If an event has Lead as a queried entity and does not have 
      * more than 2000 rows processed, then the evaluate method of our policy's Apex 
      * should return false.
      **/ 
      static testMethod void testFewerRowsProcessedPositiveTestCase() {
          // set up our event and its field values
          ReportEvent testEvent = new ReportEvent();
          testEvent.QueriedEntities = 'Account, Lead';
          testEvent.RowsProcessed = 2000;
          
          // test that the Apex returns false for this event
          LeadExportEventCondition  eventCondition = new LeadExportEventCondition();
          System.assertEquals(false, eventCondition.evaluate(testEvent));   
      }
      
    /**
      * Positive test case 6: If an event does not have Lead as a queried entity and does not have 
      * more than 2000 rows processed, then the evaluate method of our policy's Apex 
      * should return false.
      **/ 
      static testMethod void testNoConditionsMetPositiveTestCase() {
          // set up our event and its field values
          ListViewEvent testEvent = new ListViewEvent();
          testEvent.QueriedEntities = 'Account';
          testEvent.RowsProcessed = 2000;
          
          // test that the Apex returns false for this event
          LeadExportEventCondition  eventCondition = new LeadExportEventCondition();
          System.assertEquals(false, eventCondition.evaluate(testEvent));   
      }
      
      /**
       * ------------ NEGATIVE TEST CASES ------------
       **/
     
     /**
      * Negative test case 1: If an event is a type other than ApiEvent, ReportEvent, or ListViewEvent,
      * then the evaluate method of our policy's Apex should return false.
      **/
      static testMethod void testOtherEventObject() {
          LoginEvent loginEvent = new LoginEvent();
          LeadExportEventCondition  eventCondition = new LeadExportEventCondition();
          System.assertEquals(false, eventCondition.evaluate(loginEvent));   
      } 
 
     /**
      * Negative test case 2: If an event is null, then the evaluate method of our policy's
      * Apex should return false.
      **/
      static testMethod void testNullEventObject() {
          LeadExportEventCondition  eventCondition = new LeadExportEventCondition();
          System.assertEquals(false, eventCondition.evaluate(null));   
      } 
     
     /**
      * Negative test case 3: If an event has a null QueriedEntities value, then the evaluate method 
      * of our policy's Apex should return false.
      **/
      static testMethod void testNullQueriedEntities() {
          ApiEvent testEvent = new ApiEvent(); 
          testEvent.QueriedEntities = null;
          testEvent.RowsProcessed = 2001;
          
          LeadExportEventCondition  eventCondition = new LeadExportEventCondition();
          System.assertEquals(false, eventCondition.evaluate(testEvent));   
      }
     
     /**
      * Negative test case 4: If an event has a null RowsProcessed value, then the evaluate method 
      * of our policy's Apex should return false.
      **/
      static testMethod void testNullRowsProcessed() {
          ReportEvent testEvent = new ReportEvent(); 
          testEvent.QueriedEntities = 'Account, Lead';
          testEvent.RowsProcessed = null;
          
          LeadExportEventCondition  eventCondition = new LeadExportEventCondition();
          System.assertEquals(false, eventCondition.evaluate(testEvent));   
      } 
 }
```

```apex
private boolean evaluate(String queriedEntities, Decimal rowsProcessed) {
    boolean containsLead = queriedEntities != null ? queriedEntities.contains('Lead')
    if (containsLead && rowsProcessed > 2000){
        return true;
    }
    return false;
}
```

```apex
global class ProfileIdentityEventCondition implements TxnSecurity.EventCondition {

    // For these powerful profiles, let's prompt users to complete 2FA
    private Set<String> PROFILES_TO_MONITOR = new Set<String> { 
        'System Administrator', 
        'Custom Admin Profile'
    };
    
    public boolean evaluate(SObject event) {
        LoginEvent loginEvent = (LoginEvent) event;
        String userId = loginEvent.UserId;
        
        // get the Profile name from the current users profileId
        Profile profile = [SELECT Name FROM Profile WHERE Id IN 
                    (SELECT profileId FROM User WHERE Id = :userId)];
        
        // check if the name of the Profile is one of the ones we want to monitor
        if (PROFILES_TO_MONITOR.contains(profile.Name)) {
            return true;
        }
        
        return false;
    }   
 }
```

```apex
/**
 * Tests for the ProfileIdentityEventCondition class, to make sure that our 
 * Transaction Security Apex logic handles events and event field values as expected.
 **/
 @isTest
 public class ProfileIdentityEventConditionTest {
 
    /**
     * ------------ POSITIVE TEST CASES ------------
     ** /
 
     /**
      * Positive test case 1: Evaluate will return true when user has the "System 
      * Administrator" profile.
      **/ 
      static testMethod void testUserWithSysAdminProfile() {
          // insert a User for our test which has the System Admin profile
          Profile profile = [SELECT Id FROM Profile WHERE Name='System Administrator'];
          assertOnProfile(profile.id, true); 
      }

     /**
      * Positive test case 2: Evaluate will return true when the user has the "Custom
      * Admin Profile"
      **/ 
      static testMethod void testUserWithCustomProfile() {
          // insert a User for our test which has the System Admin profile
          Profile profile = [SELECT Id FROM Profile WHERE Name='Custom Admin Profile'];
          assertOnProfile(profile.id, true);
      }
      
     /**
      * Positive test case 3: Evalueate will return false when user doesn't have
      * a profile we're interested in. In this case we'll be using a profile called
      * 'Standard User'.
      **/ 
      static testMethod void testUserWithSomeProfile() {
          // insert a User for our test which has the System Admin profile
          Profile profile = [SELECT Id FROM Profile WHERE Name='Standard User'];
          assertOnProfile(profile.id, false);
      }
      
      /**
       * Helper to assert on different profiles.
       **/
      static void assertOnProfile(String profileId, boolean expected){
          User user = createUserWithProfile(profileId);
          insert user;
      
          // set up our event and its field values
          LoginEvent testEvent = new LoginEvent();
          testEvent.UserId = user.Id;
          
          // test that the Apex returns true for this event
          ProfileIdentityEventCondition  eventCondition = new ProfileIdentityEventCondition();
          System.assertEquals(expected, eventCondition.evaluate(testEvent));  
      }
      
      /**
       * Helper to create a user with the given profileId.
       **/
      static User createUserWithProfile(String profileId){
          // Usernames have to be unique.
          String username = 'ProfileIdentityEventCondition@Test.com';
          
          User user = new User(Alias = 'standt', Email='standarduser@testorg.com', 
          EmailEncodingKey='UTF-8', LastName='Testing', LanguageLocaleKey='en_US', 
          LocaleSidKey='en_US', ProfileId = profileId, 
          TimeZoneSidKey='America/Los_Angeles', UserName=username);
          return user;
      }
 }
```
