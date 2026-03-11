---
title: "project deploy pipeline report"
domain: cli-commands
topic: project-deploy-pipeline-report
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.384Z
keywords: [project, deploy, pipeline, report, Check, status, operation., Beta, Note, Description, Examples, Flags]
---

# project deploy pipeline report

> Check the status of a pipeline deploy operation.

## project deploy pipeline report (Beta)

Check the status of a pipeline deploy operation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for project deploy pipeline report

The first time you run any "project deploy pipeline" command, be sure to authorize the org in which DevOps Center is installed. The easiest way to authorize an org is with the "org login web" command.

Run this command by either indicating a job ID or specifying the —use-most-recent flag to use the job ID of the most recent deploy operation.

### Examples for project deploy pipeline report

Check the status using a job ID:

```

```

Check the status of the most recent deploy operation:

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

Job ID of the pipeline deployment to check the status of.

The job ID is valid for 10 days from when you started the deploy operation.

Type: option

\-r | \--use-most-recent

Optional

Use the job ID of the most recent deploy operation.

For performance reasons, this flag uses job IDs for deploy operations that started in the past 3 days or fewer. If your most recent operation was longer than 3 days ago, this flag won't find the job ID.

Type: boolean