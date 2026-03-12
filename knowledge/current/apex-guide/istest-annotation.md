---
title: "IsTest
        Annotation"
domain: apex-guide
topic: istest-annotation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.527Z
estimatedTokens: 2469
keywords: [IsTest, Annotation, @IsTest, IsParallel=true, indicate, test, classes, run, parallel, SeeAllData=true, OnInstall=true, critical=true, Beta, testFor=]
---

# IsTest
        Annotation

> Use the @IsTest(IsParallel=true) annotation to indicate test classes that
                    can run in parallel.

# IsTest Annotation

Use the @IsTest annotation to define classes and methods that only contain code used for testing your app. The annotation can take multiple modifiers within parentheses and separated by blanks.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The @IsTest annotation on methods is equivalent to the testMethod keyword. As best practice, Salesforce recommends that you use @IsTest rather than testMethod. The testMethod keyword may be versioned out in a future release.

Classes and methods that are defined as @IsTest can be either private or public. Classes defined as @IsTest must be top-level classes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Classes defined with the @IsTest annotation don't count against your organization limit of 6 MB for all Apex code.

Here’s an example of a private test class that contains two test methods.

```

```

Here’s an example of a public test class that contains utility methods for test data creation:

```

```

Classes defined as @IsTest can't be interfaces or enums.

Methods of a public test class can only be called from a running test, that is, a test method or code invoked by a test method. Non-test requests can’t call public methods.. To learn about the various ways you can run test methods, see [Run Unit Test Methods](atlas.en-us.apexcode.meta/apexcode/apex_testing_unit_tests_running.htm "To verify the functionality of your Apex code, execute unit tests. You can run Apex test methods in the Developer Console, in Setup, in the Salesforce extensions for Visual Studio Code, or using the API.").

## @IsTest(SeeAllData=true) Annotation

For Apex code saved using Salesforce API version 24.0 and later, use the @IsTest(SeeAllData=true) annotation to grant test classes and individual test methods access to all data in the organization. The access includes pre-existing data that the test didn’t create. Starting with Apex code saved using Salesforce API version 24.0, test methods don’t have access to pre-existing data in the organization. However, test code saved against Salesforce API version 23.0 and earlier continues to have access to all data in the organization. See [Isolation of Test Data from Organization Data in Unit Tests](atlas.en-us.apexcode.meta/apexcode/apex_testing_data_access.htm).

Considerations for the @IsTest(SeeAllData=true) Annotation

-   If a test class is defined with the @IsTest(SeeAllData=true) annotation, the SeeAllData=true applies to all test methods that don’t explicitly set the SeeAllData keyword.
-   The @IsTest(SeeAllData=true) annotation is used to open up data access when applied at the class or method level. However, if the containing class has been annotated with @IsTest(SeeAllData=true), annotating a method with @IsTest(SeeAllData=false) is ignored for that method. In this case, that method still has access to all the data in the organization. Annotating a method with @IsTest(SeeAllData=true) overrides, for that method, an @IsTest(SeeAllData=false) annotation on the class.
-   @IsTest(SeeAllData=true) and @IsTest(IsParallel=true) annotations can’t be used together on the same Apex method.

This example shows how to define a test class with the @IsTest(SeeAllData=true) annotation. All the test methods in this class have access to all data in the organization.

```

```

This second example shows how to apply the @IsTest(SeeAllData=true) annotation on a test method. Because the test method’s class isn’t annotated, you have to annotate the method to enable access to all data for the method. The second test method doesn’t have this annotation, so it can access only the data it creates. In addition, it can access objects that are used to manage your organization, such as users.

```

```

## @IsTest(OnInstall=true) Annotation

Use the @IsTest(OnInstall=true) annotation to specify which Apex tests are executed during package installation. This annotation is used for tests in managed or unmanaged packages. Only test methods with this annotation, or methods that are part of a test class that has this annotation, are executed during package installation. Tests annotated to run during package installation must pass in order for the package installation to succeed. It’s no longer possible to bypass a failing test during package installation. A test method or a class that doesn't have this annotation, or that is annotated with @IsTest(OnInstall=false) or @IsTest, isn’t executed during installation.

Tests annotated with IsTest(OnInstall=true) that run during package install and upgrade aren’t counted towards code coverage. However, code coverage is tracked and counted during a package creation operation. Because Apex code installed from a managed package is excluded from org level requirements for code coverage, it’s unlikely that you’re affected. But, if you track managed package test coverage, you must rerun these tests outside of the package install or upgrade operation for code coverage statistics to be updated. Package install isn’t blocked by code coverage requirements.

This example shows how to annotate a test method that is executed during package installation. In this example, test1 is executed but test2 and test3 isn’t.

```

```

```

```

## @IsTest(IsParallel=true) Annotation

Use the @IsTest(IsParallel=true) annotation to indicate test classes that can run in parallel.

Considerations for the @IsTest(IsParallel=true) annotation

-   This annotation forces the test to run in parallel even if the org-wide Disable Parallel Apex Testing option is set.
-   @IsTest(SeeAllData=true) and @IsTest(IsParallel=true) annotations can’t be used together on the same Apex method.

Restrictions on Apex tests using the @IsTest(IsParallel=true) annotation

-   Tests can’t call the Test.getStandardPricebookId()method.
-   Tests can’t call the System.schedule() and System.enqueueJob() methods.
-   Tests can’t insert a ContentNote SObject.
-   Tests can’t create User or GroupMember SObjects.
-   Tests can’t use the SObjects that are listed in [sObjects That Can't Be Used Together in DML Operations](atlas.en-us.apexcode.meta/apexcode/apex_dml_non_mix_sobjects.htm "DML operations on certain sObjects, sometimes referred to as setup objects, can’t be mixed with DML on non-setup sObjects in the same transaction. This restriction exists because some sObjects affect the user’s access to records in the org. You must insert or update these types of sObjects in a different transaction to prevent operations from happening with incorrect access-level permissions. For example, you can’t update an account and a user role in a single transaction.").

## @IsTest(critical=true) Annotation (Beta)

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

The RunRelevantTests test level and the associated @IsTest() annotations are pilot or beta services that are subject to the Beta Services Terms at Agreements — Salesforce.com or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the Product Terms Directory. Use of these pilot or beta services are at the Customer’s sole discretion.

If you set the deployment test level to [RunRelevantTests](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_deploy_run_relevant_tests.htm), use the @IsTest(critical=true) annotation to guarantee that the test class always runs during deployments, regardless of the deployment payload. This annotation is available at the test class level in Salesforce API version 66.0 and later. Using this annotation on a test method results in a compilation error.

This example code shows a test class marked with the @IsTest(critical=true) annotation. When you set the deployment test level to RunRelevantTests, the tests in this class always run.

```

```

## @IsTest(testFor='...') Annotation (Beta)

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

The RunRelevantTests test level and the associated @IsTest() annotations are pilot or beta services that are subject to the Beta Services Terms at Agreements — Salesforce.com or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the Product Terms Directory. Use of these pilot or beta services are at the Customer’s sole discretion.

If you set the deployment test level to [RunRelevantTests](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_deploy_run_relevant_tests.htm), use the @IsTest(testFor='...') annotation to guarantee that the tests in the class run whenever the deployment includes new or modified versions of the referenced Apex components. This annotation is available at the test class level in Salesforce API version 66.0 and later. Using this annotation on a test method results in a compilation error.

To use @IsTest(testFor='...'), set the testFor parameter to a comma-separated string of Apex classes and Apex triggers. For Apex classes, use the format ApexClass:ClassName. For Apex triggers, use the format ApexTrigger:TriggerName. If specifying a class or trigger from a different namespace, use the fully qualified name, for example, ApexClass:MyNamespace.ClassName.

This example code shows a test class marked with the @IsTest(testFor='...') annotation. If you set the deployment test level to RunRelevantTests, this test class runs whenever AccountHandler or AccountTrigger are new or modified in the deployment payload.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm "InvocableVariable Annotation")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_JsonAccess.htm "JsonAccess Annotation")

## Code Examples

```apex
@IsTest
private class MyTestClass {

   // Methods for testing
   @IsTest
   static void test1() {
      // Implement test code
   }

   @IsTest
   static void test2() {
      // Implement test code
   }

}
```

```apex
@IsTest 
public class TestUtil {

   public static void createTestAccounts() { 
      // Create some test accounts
   }

   public static void createTestContacts() {
      // Create some test contacts
   }

}
```

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

```apex
public class OnInstallClass {
   // Implement logic for the class.
   public void method1(){
      // Some code
   }
}
```

## Related Topics

- Run Unit Test Methods (atlas.en-us.apexcode.meta/apexcode/apex_testing_unit_tests_running.htm)
- Isolation of Test Data from Organization Data in Unit Tests (atlas.en-us.apexcode.meta/apexcode/apex_testing_data_access.htm)
- sObjects That Can't Be
                                        Used Together in DML Operations (atlas.en-us.apexcode.meta/apexcode/apex_dml_non_mix_sobjects.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_JsonAccess.htm)
