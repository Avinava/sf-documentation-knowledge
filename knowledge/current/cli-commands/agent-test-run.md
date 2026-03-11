---
title: "agent test run"
domain: cli-commands
topic: agent-test-run
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.528Z
keywords: [agent, test, run, Start, org., Description, Examples, Flags]
---

# agent test run

> Start an agent test in your org.

## agent test run

Start an agent test in your org.

### Description for agent test run

Use the --api-name flag to specify the name of the agent test you want to run. Use the output of the "agent test list" command to get the names of all the available agent tests in your org.

By default, this command starts the agent test in your org, but it doesn't wait for the test to finish. Instead, it displays the "agent test resume" command, with a job ID, that you execute to see the results of the test run, and then returns control of the terminal window to you. Use the --wait flag to specify the number of minutes for the command to wait for the agent test to complete; if the test completes by the end of the wait time, the command displays the test results. If not, run "agent test resume".

By default, this command outputs test results in human-readable tables for each test case, if the test completes in time. The tables show whether the test case passed, the expected and actual values, the test score, how long the test took, and more. Use the --result-format to display the test results in JSON or Junit format. Use the --output-dir flag to write the results to a file rather than to the terminal.

### Examples for agent test run

Start an agent test called Resort\_Manager\_Test for an agent in your default org, don't wait for the test to finish:

```

```

Start an agent test for an agent in an org with alias "my-org" and wait for 10 minutes for the test to finish:

```

```

Start an agent test and write the JSON-formatted results into a directory called "test-results":

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

\-n | \--api-name API-NAME

Optional

API name of the agent test to run; corresponds to the name of the AiEvaluationDefinition metadata component that implements the agent test.

Type: option

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