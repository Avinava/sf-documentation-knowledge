---
title: "Using Test Setup Methods"
domain: apex-guide
topic: using-test-setup-methods
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:34.081Z
estimatedTokens: 858
keywords: [Test, Setup, annotated, @testSetup, records, once, access, every, time-saving, prerequisite, data, common, operate, Considerations]
---

# Using Test Setup Methods

> Use test setup methods (methods that are annotated with @testSetup) to create test records once and then
            access them in every test method in the test class. Test setup methods can be
            time-saving when you need to create reference or prerequisite data for all test methods,
            or a common set of records that all test methods operate on.

# Using Test Setup Methods

Use test setup methods (methods that are annotated with @testSetup) to create test records once and then access them in every test method in the test class. Test setup methods can be time-saving when you need to create reference or prerequisite data for all test methods, or a common set of records that all test methods operate on.

Test setup methods can reduce test execution times especially when you’re working with many records. Test setup methods enable you to create common test data easily and efficiently. By setting up records once for the class, you don’t need to re-create records for each test method. Also, because the rollback of records that are created during test setup happens at the end of the execution of the entire class, the number of records that are rolled back is reduced. As a result, system resources are used more efficiently compared to creating those records and having them rolled back for each test method.

If a test class contains a test setup method, the testing framework executes the test setup method first, before any test method in the class. Records that are created in a test setup method are available to all test methods in the test class and are rolled back at the end of test class execution. If a test method changes those records, such as record field updates or record deletions, those changes are rolled back after each test method finishes execution. The next executing test method gets access to the original unmodified state of those records.

Similarly, if you create a static variable in a test setup method, and then modify that variable in a test method, the change doesn’t persist to other test methods. Every test method, including the test setup method, runs as a separate transaction. The static context of the test class is reinitialized before each transaction begins. Therefore, static variable initializers and static blocks are executed fresh at the start of every test method. Any change to a static variable within a test setup method is confined to that specific transaction. After the transaction completes, those in-memory changes are discarded.

## Syntax

Test setup methods are defined in a test class, take no arguments, and return no value. The following is the syntax of a test setup method.

```

```

## Example

This example shows how to create test records once and then access them in multiple test methods. Also, the example shows how changes that are made in the first test method are rolled back and are not available to the second test method.

```

```

## Test Setup Method Considerations

-   Test setup methods are supported only with the default data isolation mode for a test class. If the test class or a test method has access to organization data by using the @isTest(SeeAllData=true) annotation, test setup methods aren’t supported in this class. Because data isolation for tests is available for API versions 24.0 and later, test setup methods are also available for those versions only.
-   You can have only one test setup method per test class.
-   If a fatal error occurs during the execution of a test setup method, such as an exception that’s caused by a DML operation or an assertion failure, the entire test class fails, and no further tests in the class are executed.
-   If a test setup method calls a non-test method of another class, no code coverage is calculated for the non-test method.

## Code Examples

```
@testSetup static void methodName() {

}
```

```apex
@isTest
private class CommonTestSetup {

    @testSetup static void setup() {
        // Create common test accounts
        List<Account> testAccts = new List<Account>();
        for(Integer i=0;i<2;i++) {
            testAccts.add(new Account(Name = 'TestAcct'+i));
        }
        insert testAccts;        
    }
    
    @isTest static void testMethod1() {
        // Get the first test account by using a SOQL query
        Account acct = [SELECT Id FROM Account WHERE Name='TestAcct0' LIMIT 1];
        // Modify first account
        acct.Phone = '555-1212';
        // This update is local to this test method only.
        update acct;
        
        // Delete second account
        Account acct2 = [SELECT Id FROM Account WHERE Name='TestAcct1' LIMIT 1];
        // This deletion is local to this test method only.
        delete acct2;
        
        // Perform some testing
    }

    @isTest static void testMethod2() {
        // The changes made by testMethod1() are rolled back and 
        // are not visible to this test method.        
        // Get the first account by using a SOQL query
        Account acct = [SELECT Phone FROM Account WHERE Name='TestAcct0' LIMIT 1];
        // Verify that test account created by test setup method is unaltered.
        System.assertEquals(null, acct.Phone);
        
        // Get the second account by using a SOQL query
        Account acct2 = [SELECT Id FROM Account WHERE Name='TestAcct1' LIMIT 1];
        // Verify test account created by test setup method is unaltered.
        System.assertNotEquals(null, acct2);
        
        // Perform some testing
    }

}
```
