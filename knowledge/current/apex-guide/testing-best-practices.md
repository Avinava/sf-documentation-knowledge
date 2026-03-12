---
title: "Testing Best Practices"
domain: apex-guide
topic: testing-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:34.036Z
estimatedTokens: 1353
keywords: [Testing, Best, Practices, Note, Parallel, Test, Execution]
---

# Testing Best Practices

# Testing Best Practices

Good tests do the following:

-   Cover as many lines of code as possible. Before you can deploy Apex or package it for AppExchange, the following must be true.

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

    #### Important

    -   Unit tests must cover at least 75% of your Apex code, and all of those tests must complete successfully.

        Note the following.

        -   When deploying Apex to a production organization, each unit test in your organization namespace is executed by default.
        -   Calls to System.debug aren’t counted as part of Apex code coverage.
        -   Test methods and test classes aren’t counted as part of Apex code coverage.
        -   While only 75% of your Apex code must be covered by tests, don’t focus on the percentage of code that is covered. Instead, make sure that every use case of your application is covered, including positive and negative cases, as well as bulk and single records. This approach ensures that 75% or more of your code is covered by unit tests.
        -   Tests don’t run in parallel in metadata deployments, package installations, or change set deployments.

    -   Every trigger must have some test coverage.
    -   All classes and triggers must compile successfully.

-   If code uses conditional logic (including ternary operators), execute each branch.
-   Make calls to methods using both valid and invalid inputs.
-   Complete successfully without throwing any exceptions, unless those errors are expected and caught in a try…catch block.
-   Always handle all exceptions that are caught, instead of merely catching the exceptions.
-   Use the methods of the [Assert class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Assert.htm) to prove that the code behaves properly.
-   Use the runAs method to test your application in different user contexts.
-   Exercise bulk trigger functionality—use at least 20 records in your tests.
-   Use the ORDER BY keywords to ensure that the records are returned in the expected order.
-   Not assume that record IDs are in sequential order.

    Record IDs aren’t created in ascending order unless you insert multiple records with the same request. For example, if you create an account A, and receive the ID 001D000000IEEmT, then create account B, the ID of account B need not be sequentially higher.

-   Set up test data:
    -   Create the necessary data in test classes, so the tests don’t have to rely on data in a particular organization.
    -   Create all test data before calling the Test.startTest method.
    -   Since tests don't commit, you don't have to delete any data.
-   Write comments stating not only what must be tested, but the assumptions the tester made about the data, the expected outcome, and so on.
-   Test the classes in your application individually. Never test your entire application in a single test.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

To protect the privacy of your data, make sure that test error messages and exception details don’t contain any personal data. The Apex exception handler and testing framework can’t determine if sensitive data is contained in user-defined messages and details. To include personal data in custom Apex exceptions, we recommend that you create an Exception subclass with new properties that holds the personal data. Then, don’t include subclass property information in the exception's message string.

If you’re running many tests, test the classes in your organization individually in the Salesforce user interface instead of using the **Run All Tests** button to run them all together.

## Best Practices for Parallel Test Execution

Tests that are started from the Salesforce user interface (including the Developer Console) run in parallel. Parallel test execution can speed up test run time. Sometimes, parallel test execution results in data contention issues, and you can turn off parallel execution in those cases. In particular, data contention issues and UNABLE\_TO\_LOCK\_ROW errors can occur in the following cases:

-   When tests update the same records at the same time. Updating the same records typically occurs when tests don’t create their own data and turn off data isolation to access the organization’s data.
-   When a deadlock occurs in tests that are running in parallel and that try to create records with duplicate index field values. A deadlock occurs when two running tests are waiting for each other to roll back data. Such a wait can happen if two tests insert records with the same unique index field values.

You can prevent receiving those errors by turning off parallel test execution in the Salesforce user interface:

1.  From Setup, enter Apex Test.
2.  Click **Options...**.
3.  In the Apex Test Execution Options dialog, select **Disable Parallel Apex Testing** and then click **OK**.

Test classes annotated with IsTest(IsParallel=true) indicate that the test class can run concurrently with more than the default number of concurrent test classes. This annotation overrides default settings.

#### See Also

-   [Code Coverage Best Practices](atlas.en-us.apexcode.meta/apexcode/apex_code_coverage_best_pract.htm "Consider the following code coverage tips and best practices.")

## Related Topics

- Code Coverage Best Practices (atlas.en-us.apexcode.meta/apexcode/apex_code_coverage_best_pract.htm)
