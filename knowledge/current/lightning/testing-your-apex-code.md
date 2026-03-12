---
title: "Testing Your Apex Code"
domain: lightning
topic: testing-your-apex-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.013Z
estimatedTokens: 500
keywords: [Testing, Apex, Code, upload, managed, package, write, execute, tests, meet, minimum, coverage, requirements, run, errors]
---

# Testing Your Apex Code

> Before you can upload a managed package, you must write and execute tests for your Apex
    code to meet minimum code coverage requirements. Also, all tests must run without errors when
    you upload your package to AppExchange.

# Testing Your Apex Code

Before you can upload a managed package, you must write and execute tests for your Apex code to meet minimum code coverage requirements. Also, all tests must run without errors when you upload your package to AppExchange.

To package your application and components that depend on Apex code, the following must be true.

-   Unit tests must cover at least 75% of your Apex code, and all of those tests must complete successfully.

    Note the following.

    -   When deploying Apex to a production organization, each unit test in your organization namespace is executed by default.
    -   Calls to System.debug aren’t counted as part of Apex code coverage.
    -   Test methods and test classes aren’t counted as part of Apex code coverage.
    -   While only 75% of your Apex code must be covered by tests, don’t focus on the percentage of code that is covered. Instead, make sure that every use case of your application is covered, including positive and negative cases, as well as bulk and single records. This approach ensures that 75% or more of your code is covered by unit tests.
-   Every trigger must have some test coverage.
-   All classes and triggers must compile successfully.

This sample shows an Apex test class for a custom object that’s wired up to a component.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Apex classes must be manually added to your package.

For more information on distributing Apex code, see [Debugging, Testing, and Deploying Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_debug_test_deploy.htm) in the Apex Developer Guide.

#### See Also

-   [Distributing Applications and Components](atlas.en-us.lightning.meta/lightning/apps_packaging.htm "As an ISV or Salesforce partner, you can package and distribute applications and components to other Salesforce users and organizations, including those outside your company.")

## Code Examples

```apex
@isTest
class TestExpenseController {
    static testMethod void test() {
        //Create new expense and insert it into the database        
        Expense__c exp = new Expense__c(name='My New Expense',
                             amount__c=20, client__c='ABC',
                             reimbursed__c=false, date__c=null);
         ExpenseController.saveExpense(exp);

        //Assert the name field and saved expense
        System.assertEquals('My New Expense',
                           ExpenseController.getExpenses()[0].Name,
                          'Name does not match');
        System.assertEquals(exp, ExpenseController.saveExpense(exp));
    }
}
```

## Related Topics

- Distributing Applications and Components (atlas.en-us.lightning.meta/lightning/apps_packaging.htm)
