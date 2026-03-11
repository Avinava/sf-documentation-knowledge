---
title: "project deploy report"
domain: cli-commands
topic: project-deploy-report
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.385Z
keywords: [project, deploy, report, Check, poll, status, operation., Description, Examples, Flags, Aliases]
---

# project deploy report

> Check or poll for the status of a deploy operation.

## project deploy report

Check or poll for the status of a deploy operation.

### Description for project deploy report

Deploy operations include standard deploys, quick deploys, deploy validations, and deploy cancellations.

Run this command by either passing it a job ID or specifying the --use-most-recent flag to use the job ID of the most recent deploy operation. If you specify the --wait flag, the command polls for the status every second until the timeout of --wait minutes. If you don't specify the --wait flag, the command simply checks and displays the status of the deploy; the command doesn't poll for the status.

You typically don't specify the --target-org flag because the cached job already references the org to which you deployed. But if you run this command on a computer different than the one from which you deployed, then you must specify the --target-org and it must point to the same org.

This command doesn't update source tracking information.

### Examples for project deploy report

Check the status using a job ID:

```

```

Check the status of the most recent deploy operation:

```

```

Poll for the status using a job ID and target org:

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

Optional

Username or alias of the target org.

Type: option

\-i | \--job-id JOB-ID

Optional

Job ID of the deploy operation you want to check the status of.

These commands return a job ID if they time out or you specified the --async flag:

\- sf project deploy start

\- sf project deploy validate

\- sf project deploy quick

\- sf project deploy cancel

The job ID is valid for 10 days from when you started the deploy operation.

Type: option

\-r | \--use-most-recent

Optional

Use the job ID of the most recent deploy operation.

For performance reasons, this flag uses job IDs for deploy operations that started only in the past 3 days or less. If your most recent operation was more than 3 days ago, this flag won't find a job ID.

Type: boolean

\--coverage-formatters COVERAGE-FORMATTERS

Optional

Format of the code coverage results.

For multiple formatters, repeat the flag for each formatter.

\--coverage-formatters lcov --coverage-formatters clover

Type: option

Permissible values are: clover, cobertura, html-spa, html, json, json-summary, lcovonly, none, teamcity, text, text-summary

\--junit

Optional

Output JUnit test results.

Type: boolean

\--results-dir RESULTS-DIR

Optional

Output directory for code coverage and JUnit results; defaults to the deploy ID.

Type: option

\-w | \--wait WAIT

Optional

Number of minutes to wait for command to complete and display results.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you and returns the job ID. To resume the deployment, run "sf project deploy resume". To check the status of the deployment, run "sf project deploy report".

Type: option

### Aliases for project deploy report

```

```