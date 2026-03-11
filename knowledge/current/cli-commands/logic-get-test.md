---
title: "logic get test"
domain: cli-commands
topic: logic-get-test
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T10:26:31.186Z
keywords: [logic, get, test, Get, results, run., Beta, Note, Description, Examples, Flags]
---

# logic get test

> Get the results of a test run.

## logic get test (Beta)

Get the results of a test run.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for logic get test

When you run 'sf logic run test' to test Apex classes and Flows asynchronously, it returns a test run ID. Use that ID with this command to see the results.

To see code coverage results, use the --code-coverage flag with --result-format. The output displays a high-level summary of the test run and the code coverage values for classes in your org. If you specify human-readable result format, use the --detailed-coverage flag to see detailed coverage results for each test method run.

### Examples for logic get test

Get the results for a specific test run ID in the default human-readable format; uses your default org:

```

```

Get the results for a specific test run ID, format them as JUnit, and save them to the "test-results/junit" directory; uses the org with alias "my-scratch":

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