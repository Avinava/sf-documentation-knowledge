---
title: "agent test resume"
domain: cli-commands
topic: agent-test-resume
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:30.986Z
keywords: [agent, test, resume, Resume, previously, started, org, view, results., Description, Examples, Flags]
---

# agent test resume

> Resume an agent test that you previously started in your org so you can view the test results.

## agent test resume

Resume an agent test that you previously started in your org so you can view the test results.

### Description for agent test resume

This command requires a job ID, which the original "agent test run" command displays when it completes. You can also use the --use-most-recent flag to see results for the most recently run agent test.

Use the --wait flag to specify the number of minutes for this command to wait for the agent test to complete; if the test completes by the end of the wait time, the command displays the test results. If not, the CLI returns control of the terminal to you, and you must run "agent test resume" again.

By default, this command outputs test results in human-readable tables for each test case. The tables show whether the test case passed, the expected and actual values, the test score, how long the test took, and more. Use the --result-format to display the test results in JSON or Junit format. Use the --output-dir flag to write the results to a file rather than to the terminal.

### Examples for agent test resume

Resume an agent test in your default org using a job ID:

```

```

Resume the most recently-run agent test in an org with alias "my-org" org; wait 10 minutes for the tests to finish:

```

```

Resume the most recent agent test in your default org, and write the JSON-formatted results into a directory called "test-results":

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

\-i | \--job-id JOB-ID

Optional

Job ID of the original agent test run.

Type: option

\-r | \--use-most-recent

Optional

Use the job ID of the most recent agent test run.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to complete and display results to the terminal window.

Type: option

\--result-format RESULT-FORMAT

Optional

Format of the agent test run results.

Type: option

Permissible values are: json, human, junit, tap

Default value: human

\-d | \--output-dir OUTPUT-DIR

Optional

Directory to write the agent test results into.

If the agent test run completes, write the results to the specified directory. If the test is still running, the test results aren't written.

Type: option

\--verbose

Optional

Show generated data in the test results output.

When enabled, includes detailed generated data (such as invoked actions) in the human-readable test results output. This is useful for debugging test failures and understanding what actions were actually invoked during the test run.

The generated data is in JSON format and includes the Apex classes or Flows that were invoked, the Salesforce objects that were touched, and so on. Use the JSON structure of this information to build the test case JSONPath expression when using custom evaluations.

Type: boolean