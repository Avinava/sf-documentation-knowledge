---
title: "project deploy pipeline quick"
domain: cli-commands
topic: project-deploy-pipeline-quick
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.983Z
keywords: [project, deploy, pipeline, quick, Quickly, validated, deployment, org., Beta, Note, Description, Examples, Flags]
---

# project deploy pipeline quick

> Quickly deploy a validated deployment to an org.

## project deploy pipeline quick (Beta)

Quickly deploy a validated deployment to an org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for project deploy pipeline quick

The first time you run any "project deploy pipeline" command, be sure to authorize the org in which DevOps Center is installed. The easiest way to authorize an org is with the "org login web" command.

Before you run this command, create a validated deployment with the "project deploy pipeline validate" command, which returns a job ID. Validated deployments haven't been deployed to the org yet; you deploy them with this command. Either pass the job ID to this command or use the --use-most-recent flag to use the job ID of the most recently validated deployment. For the quick deploy to succeed, the associated validated deployment must also have succeeded.

Executing this quick deploy command takes less time than a standard deploy because it skips running Apex tests. These tests were previously run as part of the validation. Validating first and then running a quick deploy is useful if the deployment to your production org take several hours and you don’t want to risk a failed deploy.

This command doesn't support source-tracking. The source you deploy overwrites the corresponding metadata in your org. This command doesn’t attempt to merge your source with the versions in your org.

### Examples for project deploy pipeline quick

Run a quick deploy using your default Devops Center org and a job ID:

```

```

Asynchronously run a quick deploy of the most recently validated deployment using an org with alias "my-prod-org":

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--async

Optional

Run the command asynchronously.

The command immediately returns the job ID and control of the terminal to you. This way, you can continue to use the CLI. To resume the deployment, run "sf project deploy pipeline resume". To check the status of the deployment, run "sf project deploy pipeline report".

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

\-c | \--devops-center-username DEVOPS-CENTER-USERNAME

Required

Username or alias of the DevOps Center org.

Type: option

\-i | \--job-id JOB-ID

Optional

Job ID of the validated deployment to quick deploy.

The job ID is valid for 10 days from when you started the validation.

Type: option

\-r | \--use-most-recent

Optional

Use the job ID of the most recently validated deployment.

For performance reasons, this flag uses only job IDs that were validated in the past 3 days or less. If your most recent deployment validation was more than 3 days ago, this flag won't find the job ID.

Type: boolean