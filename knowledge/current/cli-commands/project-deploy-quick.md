---
title: "project deploy quick"
domain: cli-commands
topic: project-deploy-quick
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.983Z
keywords: [project, deploy, quick, Quickly, validated, deployment, org., Description, Examples, Flags, Aliases]
---

# project deploy quick

> Quickly deploy a validated deployment to an org.

## project deploy quick

Quickly deploy a validated deployment to an org.

### Description for project deploy quick

Before you run this command, first create a validated deployment with the "sf project deploy validate" command, which returns a job ID. Validated deployments haven't been deployed to the org yet; you deploy them with this command. Either pass the job ID to this command or use the --use-most-recent flag to use the job ID of the most recently validated deployment. For the quick deploy to succeed, the associated validated deployment must also have succeeded.

Executing this quick deploy command takes less time than a standard deploy because it skips running Apex tests. These tests were previously run as part of the validation. Validating first and then running a quick deploy is useful if the deployment to your production org take several hours and you don’t want to risk a failed deploy.

This command doesn't support source-tracking. The source you deploy overwrites the corresponding metadata in your org. This command doesn’t attempt to merge your source with the versions in your org.

Note: Don't use this command on sandboxes; the command is intended to be used on production orgs. By default, sandboxes don't run tests during a deploy. Use "sf project deploy start" instead.

### Examples for project deploy quick

Run a quick deploy to your default org using a job ID:

```

```

Asynchronously run a quick deploy of the most recently validated deployment to an org with alias "my-prod-org":

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

\--async

Optional

Run the command asynchronously.

The command immediately returns the control of the terminal to you. This way, you can continue to use the CLI. To resume watching the deploy, run "sf project deploy resume". To check the status of the deploy, run "sf project deploy report".

Type: boolean

\--concise

Optional

Show concise output of the deploy result.

Type: boolean

\-i | \--job-id JOB-ID

Optional

Job ID of the deployment you want to quick deploy.

The job ID is valid for 10 days from when you started the validation.

Type: option

\-o | \--target-org TARGET-ORG

Optional

Username or alias of the target org.

Type: option

\-r | \--use-most-recent

Optional

Use the job ID of the most recently validated deployment.

For performance reasons, this flag uses only job IDs that were validated in the past 3 days or less. If your most recent deployment validation was more than 3 days ago, this flag won't find a job ID.

Type: boolean

\--verbose

Optional

Show verbose output of the deploy result.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to complete and display results.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you. To resume watching the deploy, run "sf project deploy resume". To check the status of the deploy, run "sf project deploy report".

Type: option

Default value: 33 minutes

\-a | \--api-version API-VERSION

Optional

Target API version for the deploy.

Use this flag to override the default API version with the API version of your package.xml file. The default API version is the latest version supported by the CLI.

Type: option

### Aliases for project deploy quick

```

```