---
title: "project deploy resume"
domain: cli-commands
topic: project-deploy-resume
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.385Z
keywords: [project, deploy, resume, Resume, watching, operation, update, source, tracking, completes., Description, Examples, Flags, Aliases]
---

# project deploy resume

> Resume watching a deploy operation and update source tracking when the deploy completes.

## project deploy resume

Resume watching a deploy operation and update source tracking when the deploy completes.

### Description for project deploy resume

Use this command to resume watching a deploy operation if the original command times out or you specified the --async flag. Deploy operations include standard deploys, quick deploys, deploy validations, and deploy cancellations. This command doesn't resume the original operation itself, because the operation always continues after you've started it, regardless of whether you're watching it or not. When the deploy completes, source tracking information is updated as needed.

Run this command by either passing it a job ID or specifying the --use-most-recent flag to use the job ID of the most recent deploy operation.

### Examples for project deploy resume

Resume watching a deploy operation using a job ID:

```

```

Resume watching the most recent deploy operation:

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

\--concise

Optional

Show concise output of the deploy operation result.

Type: boolean

\-i | \--job-id JOB-ID

Optional

Job ID of the deploy operation you want to resume.

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

\--verbose

Optional

Show verbose output of the deploy operation result.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to complete and display results.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you. To resume watching the deploy operation, run this command again. To check the status of the deploy operation, run "sf project deploy report".

Type: option

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

### Aliases for project deploy resume

```

```