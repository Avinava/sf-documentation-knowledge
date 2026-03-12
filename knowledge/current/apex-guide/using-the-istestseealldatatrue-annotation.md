---
title: "Using the isTest(SeeAllData=True) Annotation"
domain: apex-guide
topic: using-the-istestseealldatatrue-annotation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.066Z
estimatedTokens: 594
keywords: [isTest, SeeAllData=True, Annotation, Annotate, test, IsTest, SeeAllData=true, open, data, access, records, organization., annotation, applies, queries, doesn't, apply, record, creation, changes]
---

# Using the isTest(SeeAllData=True) Annotation

> Annotate your test class or test method with IsTest(SeeAllData=true) to open up data access to records in your organization. The
    IsTest(SeeAllData=true) annotation applies to data queries but doesn't apply to record creation
    or changes, including deletions. New and changed records are still rolled back in Apex tests
    even when using the annotation.

# Using the isTest(SeeAllData=True) Annotation

Annotate your test class or test method with IsTest(SeeAllData=true) to open up data access to records in your organization. The IsTest(SeeAllData=true) annotation applies to data queries but doesn't apply to record creation or changes, including deletions. New and changed records are still rolled back in Apex tests even when using the annotation.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

By annotating your class with @isTest(SeeAllData=true), you allow test methods to access all org records. The best practice, however, is to run Apex tests with data silo using @isTest(SeeAllData=false). For data access considerations in Salesforce API version 23.0 and earlier, see [Isolation of Test Data from Organization Data in Unit Tests](atlas.en-us.apexcode.meta/apexcode/apex_testing_data_access.htm).

This example shows how to define a test class with the @IsTest(SeeAllData=true) annotation. All the test methods in this class have access to all data in the organization.

```

```

This second example shows how to apply the @IsTest(SeeAllData=true) annotation on a test method. Because the test method’s class isn’t annotated, you have to annotate the method to enable access to all data for the method. The second test method doesn’t have this annotation, so it can access only the data it creates. In addition, it can access objects that are used to manage your organization, such as users.

```

```

Considerations for the @IsTest(SeeAllData=true) Annotation

-   If a test class is defined with the @IsTest(SeeAllData=true) annotation, the SeeAllData=true applies to all test methods that don’t explicitly set the SeeAllData keyword.
-   The @IsTest(SeeAllData=true) annotation is used to open up data access when applied at the class or method level. However, if the containing class has been annotated with @IsTest(SeeAllData=true), annotating a method with @IsTest(SeeAllData=false) is ignored for that method. In this case, that method still has access to all the data in the organization. Annotating a method with @IsTest(SeeAllData=true) overrides, for that method, an @IsTest(SeeAllData=false) annotation on the class.
-   @IsTest(SeeAllData=true) and @IsTest(IsParallel=true) annotations can’t be used together on the same Apex method.

## Code Examples

```apex
// All test methods in this class can access all data.
@IsTest(SeeAllData=true)
public class TestDataAccessClass {

    // This test accesses an existing account. 
    // It also creates and accesses a new test account.
    @IsTest
    static void myTestMethod1() {
        // Query an existing account in the organization. 
        Account a = [SELECT Id, Name FROM Account WHERE Name='Acme' LIMIT 1];
        System.assert(a != null);
        
        // Create a test account based on the queried account.
        Account testAccount = a.clone();
        testAccount.Name = 'Acme Test';
        insert testAccount;
        
        // Query the test account that was inserted.
        Account testAccount2 = [SELECT Id, Name FROM Account 
                                WHERE Name='Acme Test' LIMIT 1];
        System.assert(testAccount2 != null);
    }
       
    
    // Like the previous method, this test method can also access all data
    // because the containing class is annotated with @IsTest(SeeAllData=true).
    @IsTest
    static void myTestMethod2() {
        // Can access all data in the organization.
   }
  
}
```

```apex
// This class contains test methods with different data access levels.
@IsTest
private class ClassWithDifferentDataAccess {

    // Test method that has access to all data.
    @IsTest(SeeAllData=true)
    static void testWithAllDataAccess() {
        // Can query all data in the organization.      
    }
    
    // Test method that has access to only the data it creates
    // and organization setup and metadata objects.
    @IsTest
    static void testWithOwnDataAccess() {
        // This method can still access the User object.
        // This query returns the first user object.
        User u = [SELECT UserName,Email FROM User LIMIT 1]; 
        System.debug('UserName: ' + u.UserName);
        System.debug('Email: ' + u.Email);
        
        // Can access the test account that is created here.
        Account a = new Account(Name='Test Account');
        insert a;      
        // Access the account that was just created.
        Account insertedAcct = [SELECT Id,Name FROM Account 
                                WHERE Name='Test Account'];
        System.assert(insertedAcct != null);
    }
}
```

## Related Topics

- Isolation of Test Data from Organization Data in Unit Tests (atlas.en-us.apexcode.meta/apexcode/apex_testing_data_access.htm)
