---
title: "apex Commands"
domain: cli-commands
topic: apex-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.004Z
estimatedTokens: 3694
keywords: [apex, Commands, Fetch, specified, log, given, number, most, recent, logs, org., get, Description, Examples, Flags, Aliases, test, list, run, tail]
---

# apex Commands

> Fetch the specified log or given number of most recent logs from the org.

# apex Commands

Use the apex commands to create Apex classes, execute anonymous blocks, view your logs, run Apex tests, and view Apex test results.

-   **[apex get log](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex_commands_unified.htm#cli_reference_apex_get_log_unified)**
    Fetch the specified log or given number of most recent logs from the org.
-   **[apex get test](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex_commands_unified.htm#cli_reference_apex_get_test_unified)**
    Display test results for a specific asynchronous test run.
-   **[apex list log](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex_commands_unified.htm#cli_reference_apex_list_log_unified)**
    Display a list of IDs and general information about debug logs.
-   **[apex run](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex_commands_unified.htm#cli_reference_apex_run_unified)**
    Execute anonymous Apex code entered on the command line or from a local file.
-   **[apex run test](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex_commands_unified.htm#cli_reference_apex_run_test_unified)**
    Invoke Apex tests in an org.
-   **[apex tail log](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex_commands_unified.htm#cli_reference_apex_tail_log_unified)**
    Activate debug logging and display logs in the terminal.

## apex get log

Fetch the specified log or given number of most recent logs from the org.

### Description for apex get log

To get the IDs for your debug logs, run "sf apex log list". Executing this command without flags returns the most recent log.

### Examples for apex get log

Fetch the log in your default org using an ID:

```

```

Fetch the log in the org with the specified username using an ID:

```

```

Fetch the two most recent logs in your default org:

```

```

Similar to previous example, but save the two log files in the specified directory:

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

\-i | \--log-id LOG-ID

Optional

ID of the specific log to display.

Type: option

\-n | \--number NUMBER

Optional

Number of the most recent logs to display.

Type: option

\-d | \--output-dir OUTPUT-DIR

Optional

Directory for saving the log files.

The location can be an absolute path or relative to the current working directory. The default is the current directory.

Type: option

### Aliases for apex get log

```

```

## apex get test

Display test results for a specific asynchronous test run.

### Description for apex get test

Provide a test run ID to display test results for an enqueued or completed asynchronous test run. The test run ID is displayed after running the "sf apex test run" command.

To see code coverage results, use the --code-coverage flag with --result-format. The output displays a high-level summary of the test run and the code coverage values for classes in your org. If you specify human-readable result format, use the --detailed-coverage flag to see detailed coverage results for each test method run.

### Examples for apex get test

Display test results for your default org using a test run ID:

```

```

Similar to previous example, but output the result in JUnit format:

```

```

Also retrieve code coverage results and output in JSON format:

```

```

Specify a directory in which to save the test results from the org with the specified username (rather than your default org):

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

\-i | \--test-run-id TEST-RUN-ID

Required

ID of the test run.

Type: option

\-c | \--code-coverage

Optional

Retrieve code coverage results.

Type: boolean

\--detailed-coverage

Optional

Display detailed code coverage per test.

Type: boolean

\-d | \--output-dir OUTPUT-DIR

Optional

Directory in which to store test result files.

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

### Aliases for apex get test

```

```

## apex list log

Display a list of IDs and general information about debug logs.

### Description for apex list log

Run this command in a project to list the IDs and general information for all debug logs in your default org.

To fetch a specific log from your org, obtain the ID from this command's output, then run the “sf apex log get” command.

### Examples for apex list log

List the IDs and information about the debug logs in your default org:

```

```

Similar to previous example, but use the org with the specified username:

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

### Aliases for apex list log

```

```

## apex run

Execute anonymous Apex code entered on the command line or from a local file.

### Description for apex run

If you don’t run this command from within a Salesforce DX project, you must specify the —-target-org flag.

To execute your code interactively, run this command with no flags. At the prompt, enter all your Apex code; press CTRL-D when you're finished. Your code is then executed in a single execute anonymous request.

For more information, see "Anonymous Blocks" in the Apex Developer Guide.

### Examples for apex run

Execute the Apex code that's in the ~/test.apex file in the org with the specified username:

```

```

Similar to previous example, but execute the code in your default org:

```

```

Run the command with no flags to start interactive mode; the code will execute in your default org when you exit. At the prompt, start type Apex code and press the Enter key after each line. Press CTRL+D when finished.

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

\-f | \--file FILE

Optional

Path to a local file that contains Apex code.

Type: option

### Aliases for apex run

```

```

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

## apex tail log

Activate debug logging and display logs in the terminal.

### Description for apex tail log

You can also pipe the logs to a file.

### Examples for apex tail log

Activate debug logging:

```

```

Specify a debug level:

```

```

Skip the trace flag setup and apply default colors:

```

```

### Flags

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

\-c | \--color

Optional

Apply default colors to noteworthy log lines.

Type: boolean

\-d | \--debug-level DEBUG-LEVEL

Optional

Debug level to set on the DEVELOPER\_LOG trace flag for your user.

Type: option

\-s | \--skip-trace-flag

Optional

Skip trace flag setup. Assumes that a trace flag and debug level are fully set up.

Type: boolean

### Aliases for apex tail log

```

```

## Code Examples

```
sf apex get log --log-id <log id>
```

```
sf apex get log --log-id <log id> --target-org me@my.org
```

```
sf apex get log --number 2
```

```
sf apex get log --output-dir /Users/sfdxUser/logs --number 2
```

```
force:apex:log:get
```

## Related Topics

- apex get log (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex_commands_unified.htm)
- apex get test (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex_commands_unified.htm)
- apex list log (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex_commands_unified.htm)
- apex run (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex_commands_unified.htm)
- apex run test (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex_commands_unified.htm)
- apex tail log (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex_commands_unified.htm)
