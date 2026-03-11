---
title: "logic run test"
domain: cli-commands
topic: logic-run-test
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T09:49:04.750Z
keywords: [logic, run, test, Invoke, tests, Apex, Flows, org., Beta, Note, Description, Examples, Flags]
---

# logic run test

> Invoke tests for Apex and Flows in an org.

## logic run test (Beta)

Invoke tests for Apex and Flows in an org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for logic run test

This command provides a single and unified way to run tests for multiple Salesforce features, such as Apex classes and Flows. Running the tests together with a single command ensures seamless interoperability between the features.

By default, the command executes asynchronously and returns a test run ID. Then use the "sf logic get test" command to retrieve the results. If you want to wait for the test run to complete and see the results in the command output, use the --synchronous flag.

To run specific tests, use the --tests flag and pass it the names of Apex and Flow tests. For Apex, simply specify the name of the Apex test class. For Flows, use the format "FlowTesting.<name-of-flow-test>". To find the name of all the flow tests in your org, run this command and specify the Flow category, such as "sf logic run test --synchronous --test-category Flow --test-level RunAllTestsInOrg". The command displays a table of all the flow tests it ran; see the "TEST NAME" column for the full name of all available flow tests in your org.

You can also run specific test methods, although if you run the tests synchronously, the methods must belong to a single Apex class or Flow test. To run all tests of a certain category, use --test-category and --test-level together. If neither of these flags is specified, all local tests for all categories are run by default. You can also use the --class-names and --suite-names flags to run Apex test classes or suites.

To see code coverage results, use the --code-coverage flag with --result-format. The output displays a high-level summary of the test run and the code coverage values for the tested classes or flows. If you specify human-readable result format, use the --detailed-coverage flag to see detailed coverage results for each test method run.

You must have the "View All Data" org system permission to use this command. The permission is disabled by default and can be enabled only by a system administrator.

### Examples for logic run test

Run a mix of specific Apex and Flow tests asynchronously in your default org:

```

```

Run all local Apex and Flow tests and wait for the results to complete; run the tests in the org with alias "my-scratch":

```

```

Run two methods in an Apex test class and an Apex test suite:

```

```

Run all local tests for all categories (the default behavior), save the JUnit results to the "test-results" directory, and include code coverage results:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-c | \--code-coverage

Optional

Retrieve code coverage results.

Type: boolean

\-d | \--output-dir OUTPUT-DIR

Optional

Directory in which to store test run files.

Type: option

\-l | \--test-level TEST-LEVEL

Optional

Level of tests to run; default is RunLocalTests.

Here's what the levels mean:

\- RunSpecifiedTests — Only the tests that you specify in the runTests option are run. Code coverage requirements differ from the default coverage requirements when using this test level. The executed tests must cover each class and trigger in the deployment package for a minimum of 75% code coverage. This coverage is computed for each class and triggers individually, and is different than the overall coverage percentage.

\- RunLocalTests — All local tests in your org, including tests that originate from no-namespaced unlocked packages, are run. The tests that originate from installed managed packages and namespaced unlocked packages aren't run. This test level is the default for production deployments that include Apex classes or triggers.

\- RunAllTestsInOrg — All tests are run. The tests include all tests in your org.

Type: option

Permissible values are: RunLocalTests, RunAllTestsInOrg, RunSpecifiedTests

\-n | \--class-names CLASS-NAMES

Optional

Apex test class names to run; default is all classes.

If you select --class-names, you can't specify --suite-names or --tests.

For multiple classes, repeat the flag for each.

\--class-names Class1 --class-names Class2

Type: option

\-r | \--result-format RESULT-FORMAT

Optional

Format of the test results.

Type: option

Permissible values are: human, tap, junit, json

Default value: human

\-s | \--suite-names SUITE-NAMES

Optional

Apex test suite names to run.

If you select --suite-names, you can't specify --class-names or --tests.

For multiple suites, repeat the flag for each.

\--suite-names Suite1 --suite-names Suite2

Type: option

\-t | \--tests TESTS

Optional

Comma-separated list of test names to run. Can include Apex test classes and Flow tests.

If you specify --tests, you can't specify --class-names or --suite-names

For multiple tests, repeat the flag for each.

\--tests Test1 --tests Test2

Type: option

\-w | \--wait WAIT

Optional

Sets the streaming client socket timeout in minutes; specify a longer wait time if timeouts occur frequently.

Type: option

\-y | \--synchronous

Optional

Runs test methods from a single Apex class synchronously; if not specified, tests are run asynchronously.

Type: boolean

\-v | \--detailed-coverage

Optional

Display detailed code coverage per test.

Type: boolean

\--concise

Optional

Display only failed test results; works with human-readable output only.

Type: boolean

\--test-category TEST-CATEGORY

Optional

Category of tests to run, such as Apex or Flow.

Type: option

Permissible values are: Apex, Flow