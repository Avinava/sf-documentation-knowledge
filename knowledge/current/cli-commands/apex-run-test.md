---
title: "apex run test"
domain: cli-commands
topic: apex-run-test
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T10:26:31.029Z
keywords: [apex, run, test, Invoke, Apex, tests, org., Description, Examples, Flags, Aliases]
---

# apex run test

> Invoke Apex tests in an org.

## apex run test

Invoke Apex tests in an org.

### Description for apex run test

Specify which tests to run by using the --class-names, --suite-names, or --tests flags. Alternatively, use the --test-level flag to run all the tests in your org, local tests, or specified tests.

To see code coverage results, use the --code-coverage flag with --result-format. The output displays a high-level summary of the test run and the code coverage values for classes in your org. If you specify human-readable result format, use the --detailed-coverage flag to see detailed coverage results for each test method run.

By default, Apex tests run asynchronously and immediately return a test run ID. You can use the --wait flag to specify the number of minutes to wait; if the tests finish in that timeframe, the command displays the results. If the tests haven't finished by the end of the wait time, the command displays a test run ID. Use the "sf apex get test --test-run-id" command to get the results.

To run both Apex and Flow tests together, run the "sf logic run test" CLI command, which has similar flags as this command, but expands the --tests flag to also include Flow tests.

You must have the "View All Data" system permission to use this command. The permission is disabled by default and can be enabled only by a system administrator.

NOTE: The testRunCoverage value (JSON and JUnit result formats) is a percentage of the covered lines and total lines from all the Apex classes evaluated by the tests in this run.

### Examples for apex run test

Run all Apex tests and suites in your default org:

```

```

Run the specified Apex test classes in your default org and display results in human-readable form:

```

```

Run the specified Apex test suites in your default org and include code coverage results and additional details:

```

```

Run the specified Apex tests in your default org and display results in human-readable output:

```

```

Run all tests in the org with the specified username with the specified test level; save the output to the specified directory:

```

```

Run all tests in the org asynchronously:

```

```

Run all tests synchronously; the command waits to display the test results until all tests finish:

```

```

Run specific tests using the --test-level flag:

```

```

Run Apex tests on all the methods in the specified class; output results in Test Anything Protocol (TAP) format and request code coverage results:

```

```

Run Apex tests on methods specified using the standard Class.method notation; if you specify a test class without a method, the command runs all methods in the class:

```

```

Run Apex tests on methods specified using the standard Class.method notation with a namespace:

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

Apex test class names or IDs and, if applicable, test methods to run; default is all tests.

If you specify --tests, you can't specify --class-names or --suite-names

For multiple tests, repeat the flag for each.

\--tests Test1 --tests Test2

Type: option

\-i | \--poll-interval POLL-INTERVAL

Optional

Number of seconds to wait between retries.

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

### Aliases for apex run test

```

```