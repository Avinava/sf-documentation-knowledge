---
title: "flow run test"
domain: cli-commands
topic: flow-run-test
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T09:49:04.715Z
keywords: [flow, run, test, Invoke, tests, org., Description, Examples, Flags]
---

# flow run test

> Invoke flow tests in an org.

## flow run test

Invoke flow tests in an org.

### Description for flow run test

Specify which tests to run by using the --class-names flag followed by the names of the flows you want to test. For example, if you save a flow with the name Flow1, then use: --class-names Flow1.

To see code coverage results, use the --code-coverage flag with --result-format. The output displays a high-level summary of the test run and the code coverage values for classes in your org. If you specify human-readable result format, use the --detailed-coverage flag to see detailed coverage results for each test method run.

By default, "flow run test" runs asynchronously and immediately returns a test run ID. If you use the -–synchronous flag, you can use the --wait flag to specify the number of minutes to wait; if the tests finish in that timeframe, the command displays the results. If the tests haven't finished by the end of the wait time, the command displays a test run ID. Use the "flow get test --test-run-id" command to get the results.

To run both Flow and Apex tests together, run the "sf logic run test" CLI command, which has similar flags as this command, but expands the --tests flag to also include Apex tests.

You must have the "View All Data" org system permission to use this command. The permission is disabled by default and can be enabled only by a system administrator.

### Examples for flow run test

Run all local tests in your default org:

```

```

Run all the Flow1 and Flow2 flow tests in the org with alias “scratchOrg”:

```

```

Run specific Flow1 and Flow2 flow tests in your default org:

```

```

Run all tests synchronously in your default org; the command waits to display the test results until all tests finish:

```

```

Run all local tests in the org with the username “me@my.org”; save the output to the specified directory:

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

\-r | \--result-format RESULT-FORMAT

Optional

Format of the test results.

Type: option

Permissible values are: human, tap, junit, json

Default value: human

\--concise

Optional

Display only failed test results; works with human-readable output only.

Type: boolean

\-d | \--output-dir OUTPUT-DIR

Optional

Directory in which to store test result files.

Type: option

\-c | \--code-coverage

Optional

Retrieve code coverage results.

Type: boolean

\-y | \--synchronous

Optional

Run flow tests for one flow synchronously; if not specified, tests are run asynchronously.

Type: boolean

\-l | \--test-level TEST-LEVEL

Optional

Level of tests to run; default is RunLocalTests.

Here's what the levels mean:

\- RunLocalTests — All tests in your org are run, except the ones that originate from installed managed and unlocked packages.

\- RunAllTestsInOrg — All tests are run. The tests include all tests in your org, including tests of managed packages.

\- RunSpecifiedTests - Only the tests that you specify with the --tests flag are run.

Type: option

Permissible values are: RunLocalTests, RunAllTestsInOrg, RunSpecifiedTests

\-n | \--class-names CLASS-NAMES

Optional

Flow names that contain flow tests to run.

Default is all flow tests. If you select --class-names, you can't specify --tests.

Type: option

\-s | \--suite-names SUITE-NAMES

Optional

Not available for flow tests.

Not available for flow tests.

Type: option

\-t | \--tests TESTS

Optional

Flow test names to run.

Default is all flow tests. If you specify --tests, you can't specify --class-names.

Type: option