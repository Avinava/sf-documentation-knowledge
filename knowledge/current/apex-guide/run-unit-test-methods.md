---
title: "Run Unit Test Methods"
domain: apex-guide
topic: run-unit-test-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.110Z
estimatedTokens: 2604
keywords: [Run, Unit, Test, verify, functionality, Apex, code, execute, tests, Developer, Console, Setup, Salesforce, extensions, Visual]
---

# Run Unit Test Methods

> To verify the functionality of your Apex code, execute unit tests. You can run Apex
        test methods in the Developer Console, in Setup, in the Salesforce extensions for Visual
        Studio Code, or using the API.

# Run Unit Test Methods

To verify the functionality of your Apex code, execute unit tests. You can run Apex test methods in the Developer Console, in Setup, in the Salesforce extensions for Visual Studio Code, or using the API.

You can run these groupings of unit tests.

-   Some or all methods in a specific class
-   Some or all methods in a set of classes
-   A predefined suite of classes, known as a test suite
-   All unit tests in your org

To run a test, use any of the following:

-   [Salesforce user interface](#UISectionTitle)
-   [Salesforce extensions for Visual Studio Code and Code Builder](https://developer.salesforce.com/tools/vscode)
-   [Developer Console](#DevConsoleTestsRunningSectionTitle)
-   [The API](#APISectionTitle)

All Apex tests that are started from the Salesforce user interface (including the Developer Console) run asynchronously and in parallel. Apex test classes are placed in the Apex job queue for execution. The maximum number of test classes that you can run per 24-hour period is the greater of 500 or 10 multiplied by the number of test classes in the org. For sandbox and Developer Edition organizations, this limit is higher and is the greater of 500 or 20 multiplied by the number of test classes in the org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Apex tests that run as part of a deployment always run synchronously and serially.

## Running Tests Through the Salesforce User Interface

You can run unit tests on the Application Test Execution page. Tests started on this page run asynchronously, that is, you don't have to wait for a test class execution to finish. The Application Test Execution page refreshes the status of a test and displays the results after the test completes.

![Apex Test Execution Page](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fapplication_test_execution.png&folder=apexcode)

1.  From Setup, enter Application Test Execution in the Quick Find box, then select **Application Test Execution**.
2.  Click **Select Tests...**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

    #### Note

    If you have Apex classes that are installed from a managed package, you must compile these classes first by clicking **Compile all classes** on the Apex Classes page so that they appear in the list.

3.  Select the tests to run. The list of tests includes only classes that contain test methods.

    -   To select tests from an installed managed package, select the managed package’s corresponding namespace from the dropdown list. Only the classes of the managed package with the selected namespace appear in the list.
    -   To select tests that exist locally in your organization, select **\[My Namespace\]** from the dropdown list. Only local classes that aren't from managed packages appear in the list.
    -   To select any test, select **\[All Namespaces\]** from the dropdown list. All the classes in the organization appear, even those in a managed package.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

    #### Note

    Classes with tests currently running don't appear in the list.

4.  To opt out of collecting code coverage information during test runs, select **Skip Code Coverage**.
5.  Click **Run**.

After you run tests using the Application Test Execution page, you can view code coverage details in the Developer Console.

From Setup, enter Application in the Quick Find box, select **Application Test Execution**, then click **View Test History** to view all test results for your organization, not just tests that you have run. Test results are retained for 30 days after they finish running, unless cleared.

## Running Tests Using the Salesforce Extensions for Visual Studio Code

You can execute tests with Visual Studio Code. See [Salesforce Extensions for Visual Studio Code and Code Builder](https://developer.salesforce.com/tools/vscode).

## Running Tests Using the Developer Console

In the Developer Console, you can execute some or all tests in specific test classes, set up and run test suites, or run all tests. The Developer Console runs tests asynchronously in the background, unless your test run includes only one class and you’ve not chosen **Always Run Asynchronously** in the Test menu. Running tests asynchronously lets you work in other areas of the Developer Console while tests are running. After the tests execute, you can inspect the test results in the Developer Console. Also, you can inspect the overall code coverage for classes covered by the tests.

For more information, see the Developer Console documentation in Salesforce Help.

## Running Tests Using the API

You can use the runTests() call from SOAP API to run tests synchronously.

```

```

This call allows you to run the following, as specified in the RunTestsRequest object:

-   All tests in all classes
-   All tests in a specific namespace
-   All tests in a subset of classes in a specific namespace

It returns the following:

-   Total number of tests that ran
-   Code coverage statistics
-   Error information for each failed test
-   Information for each test that succeeds
-   Time it took to run the test

For more information on runTests(), see [runTests()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_runtests.htm "HTML (New Window)") in the SOAP API Developer Guide.

You can also run tests using the Tooling REST API. Use the /runTestsAsynchronous/ and /runTestsSynchronous/ endpoints to run tests asynchronously or synchronously. For usage details, see [*Tooling API*: REST Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_rest_overview.htm "HTML (New Window)").

## Running Tests Using ApexTestQueueItem

You can run tests asynchronously using [ApexTestQueueItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apextestqueueitem.htm "HTML (New Window)") and [ApexTestResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apextestresult.htm "HTML (New Window)"). These objects let you add tests to the Apex job queue and check the results of the completed test runs. This process enables you to not only start tests asynchronously but also schedule your tests to execute at specific times by using the Apex scheduler. See [Apex Scheduler](atlas.en-us.apexcode.meta/apexcode/apex_scheduler.htm "Use the Apex Scheduler to delay execution so that you can run Apex classes at a specified time. This is ideal for daily or weekly maintenance tasks using Batch Apex.") for more information.

Insert an ApexTestQueueItem object to place its corresponding Apex class in the Apex job queue for execution. The Apex job executes the test methods in the class. After the job executes, ApexTestResult contains the result for each single test method executed as part of the test.

ApexTestResult rows are also generated for Apex tests run with the @testSetup annotation. The IsTestSetup field is set to true for these annotated tests to distinguish them from other test methods. The TestSetupTime field on ApexTestRunResult tracks the cumulative time of all setup methods for the given ApexTestRunResult.

To abort a class that is in the Apex job queue, perform an update operation on the ApexTestQueueItem object and set its Status field to Aborted.

If you insert multiple Apex test queue items in a single bulk operation, the queue items share a parent job and a test run can execute tests for several classes.

The maximum number of test queue items, and hence classes, that you can insert in the Apex job queue is the greater of 500 or 10 multiplied by the number of test classes in the org. For sandbox and Developer Edition organizations, this limit is higher and is the greater of 500 or 20 multiplied by the number of test classes in the org.

You may observe slower async test execution time when compilation is required, for example when tests are run after altering an Apex class. This is because parallel test execution is restricted to one job until compilation is completed. If you have Apex code in your org that is referenced by queued tests and fails to compile, you will be limited to the one concurrent job. You must ensure that Apex code in your org compiles successfully.

This example uses DML operations to insert and query the ApexTestQueueItem and ApexTestResult objects. The enqueueTests method inserts queue items for all classes that end with Test. It then returns the parent job ID of one queue item, which is the same for all queue items because they were inserted in bulk. The checkClassStatus method retrieves all queue items that correspond to the specified job ID. It then queries and outputs the name, job status, and pass rate for each class. The checkMethodStatus method gets information of each test method that was executed as part of the job.

```

```

1.  [Using the runAs Method Method](atlas.en-us.apexcode.meta/apexcode/apex_testing_tools_runas.htm)
    Generally, all Apex code runs in system mode, where the object-level and field-level permissions of the current user aren’t taken into account. With the System method runAs, you can write test methods that change the user context to an existing user or a new user. Then the user’s sharing rules and object-level and field-level permissions are enforced.
2.  [Using Limits, startTest , and , and stopTest](atlas.en-us.apexcode.meta/apexcode/apex_testing_tools_start_stop_test.htm)

3.  [Adding SOSL Queries to Unit Tests](atlas.en-us.apexcode.meta/apexcode/apex_testing_SOSL.htm)


#### See Also

-   [Testing and Code Coverage](atlas.en-us.apexcode.meta/apexcode/apex_code_coverage_intro.htm "The Apex testing framework generates code coverage numbers for your Apex classes and triggers every time you run one or more tests. Code coverage indicates how many executable lines of code in your classes and triggers have been exercised by test methods. Write test methods to test your triggers and classes, and then run those tests to generate code coverage information.")

-   [*Salesforce Help*: Open the Developer Console](https://help.salesforce.com/HTViewHelpDoc?id=code_dev_console_opening.htm&language=en_US)

## Code Examples

```
RunTestsResult[] runTests(RunTestsRequest ri)
```

```apex
public class TestUtil {

    // Enqueue all classes ending in "Test". 
    public static ID enqueueTests() {
        ApexClass[] testClasses = 
           [SELECT Id FROM ApexClass 
            WHERE Name LIKE '%Test'];
        if (testClasses.size() > 0) {
            ApexTestQueueItem[] queueItems = new List<ApexTestQueueItem>();
            for (ApexClass cls : testClasses) {
                queueItems.add(new ApexTestQueueItem(ApexClassId=cls.Id));
            }

            insert queueItems;

            // Get the job ID of the first queue item returned.
            ApexTestQueueItem item = 
               [SELECT ParentJobId FROM ApexTestQueueItem 
                WHERE Id=:queueItems[0].Id LIMIT 1];
            return item.parentjobid;
        }
        return null;
    }

    // Get the status and pass rate for each class
    // whose tests were run by the job.
    // that correspond to the specified job ID.
    public static void checkClassStatus(ID jobId) {
        ApexTestQueueItem[] items = 
           [SELECT ApexClass.Name, Status, ExtendedStatus 
            FROM ApexTestQueueItem 
            WHERE ParentJobId=:jobId];
        for (ApexTestQueueItem item : items) {
            String extStatus = item.extendedstatus == null ? '' : item.extendedStatus;
            System.debug(item.ApexClass.Name + ': ' + item.Status + extStatus);
        }
    }

    // Get the result for each test method that was executed.
    public static void checkMethodStatus(ID jobId) {
        ApexTestResult[] results = 
           [SELECT Outcome, ApexClass.Name, MethodName, Message, StackTrace 
            FROM ApexTestResult 
            WHERE AsyncApexJobId=:jobId];
        for (ApexTestResult atr : results) {
            System.debug(atr.ApexClass.Name + '.' + atr.MethodName + ': ' + atr.Outcome);
            if (atr.message != null) {
                System.debug(atr.Message + '
 at ' + atr.StackTrace);
            }
        }
    }
}
```

## Related Topics

- Apex Scheduler (atlas.en-us.apexcode.meta/apexcode/apex_scheduler.htm)
- Using the runAs Method Method (atlas.en-us.apexcode.meta/apexcode/apex_testing_tools_runas.htm)
- Using Limits, startTest , and , and stopTest (atlas.en-us.apexcode.meta/apexcode/apex_testing_tools_start_stop_test.htm)
- Adding SOSL Queries to Unit Tests (atlas.en-us.apexcode.meta/apexcode/apex_testing_SOSL.htm)
- Testing and Code Coverage (atlas.en-us.apexcode.meta/apexcode/apex_code_coverage_intro.htm)
