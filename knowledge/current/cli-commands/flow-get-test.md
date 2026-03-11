---
title: "flow get test"
domain: cli-commands
topic: flow-get-test
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T10:26:31.159Z
keywords: [flow, get, test, Display, results, specific, asynchronous, run., Description, Examples, Flags]
---

# flow get test

> Display test results for a specific asynchronous test run.

## flow get test

Display test results for a specific asynchronous test run.

### Description for flow get test

Provide a flow test run ID to display test results for an enqueued or completed asynchronous test run. The test run ID is displayed after running the "sf flow run test" command.

To see code coverage results, use the --code-coverage flag with --result-format. The output displays a high-level summary of the test run and the code coverage values for flow tests in your org. If you specify human-readable result format, use the --detailed-coverage flag to see detailed coverage results for each test method run.

### Examples for flow get test

Display flow test results for your default org using a test run ID:

```

```

Similar to previous example, but output the result in JUnit format:

```

```

Also retrieve code coverage results and output in JSON format:

```

```

Specify a directory in which to save the test results from the org with the “me@my.org” username (rather than your default org):

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

Not available for flow tests.

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