---
title: "project deploy pipeline resume"
domain: cli-commands
topic: project-deploy-pipeline-resume
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.384Z
keywords: [project, deploy, pipeline, resume, Resume, watching, operation., Beta, Note, Description, Examples, Flags]
---

# project deploy pipeline resume

> Resume watching a pipeline deploy operation.

## project deploy pipeline resume (Beta)

Resume watching a pipeline deploy operation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for project deploy pipeline resume

The first time you run any "project deploy pipeline" command, be sure to authorize the org in which DevOps Center is installed. The easiest way to authorize an org is with the "org login web" command.

Use this command to resume watching a pipeline deploy operation if the original command times out or you specified the --async flag.

Run this command by either indicating a job ID or specifying the --use-most-recent flag to use the job ID of the most recent deploy operation.

### Examples for project deploy pipeline resume

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

\-c | \--devops-center-username DEVOPS-CENTER-USERNAME

Required

Username or alias of the DevOps Center org.

Type: option

\-i | \--job-id JOB-ID

Optional

Job ID of the pipeline deploy operation you want to resume.

These commands return a job ID if they time out or you specified the --async flag:

\- sf project deploy pipeline start

\- sf project deploy pipeline validate

\- sf project deploy pipeline quick

The job ID is valid for 10 days from when you started the deploy operation.

Type: option

\-r | \--use-most-recent

Optional

Use the job ID of the most recent deploy operation.

For performance reasons, this flag uses job IDs for operations that started in the past 3 days or fewer. If your most recent operation was longer than 3 days ago, this flag won't find a job ID.

Type: boolean

\--concise

Optional

Show concise output of the command result.

Type: boolean

\--verbose

Optional

Show verbose output of the command result.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for command to complete and display results.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you and returns the job ID. To check the status of the operation, run "sf project deploy pipeline report".

Type: option

Default value: 33 minutes