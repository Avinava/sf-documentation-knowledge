---
title: "Common Test Utility Classes for Test Data
Creation"
domain: apex-guide
topic: common-test-utility-classes-for-test-data-creation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.114Z
estimatedTokens: 339
keywords: [Common, Test, Utility, Classes, Data, Creation, test, utility, classes, contain, reusable, code, data, creation.]
---

# Common Test Utility Classes for Test Data
Creation

> Common test utility classes are public test classes that
contain reusable code for test data creation.

# Common Test Utility Classes for Test Data Creation

Common test utility classes are public test classes that contain reusable code for test data creation.

Public test utility classes are defined with the IsTest annotation, and as such, are excluded from the organization code size limit and execute in test context. They can be called by test methods but not by non-test code.

The methods in the public test utility class are defined the same way methods are in non-test classes. They can take parameters and can return a value. The methods must be declared as public or global to be visible to other test classes. These common methods can be called by any test method in your Apex classes to set up test data before running the test. While you can create public methods for test data creation in a regular Apex class, without the IsTest annotation, you don’t get the benefit of excluding this code from the organization code size limit.

This is an example of a test utility class. It contains one method, createTestRecords, which accepts the number of accounts to create and the number of contacts per account. The next example shows a test method that calls this method to create some data.

```

```

The test method in this class calls the test utility method, createTestRecords, to create five test accounts with three contacts each.

```

```

## Code Examples

```apex
@IsTest
public class TestDataFactory {
    public static void createTestRecords(Integer numAccts, Integer numContactsPerAcct) {
        List<Account> accts = new List<Account>();
        
        for(Integer i=0;i<numAccts;i++) {
            Account a = new Account(Name='TestAccount' + i);
            accts.add(a);
        }
        insert accts;
        
        List<Contact> cons = new List<Contact>();
        for (Integer j=0;j<numAccts;j++) {
            Account acct = accts[j];            
            // For each account just inserted, add contacts
            for (Integer k=numContactsPerAcct*j;k<numContactsPerAcct*(j+1);k++) {
                cons.add(new Contact(firstname='Test'+k,
                                     lastname='Test'+k,
                                     AccountId=acct.Id));
            }
        }
        // Insert all contacts for all accounts
        insert cons;
    }
}
```

```apex
@IsTest
private class MyTestClass {
    static testmethod void test1() {
        TestDataFactory.createTestRecords(5,3);
        // Run some tests
    }
}
```
