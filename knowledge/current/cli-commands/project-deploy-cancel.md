---
title: "project deploy cancel"
domain: cli-commands
topic: project-deploy-cancel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.983Z
keywords: [project, deploy, cancel, Cancel, operation., Description, Examples, Flags, Aliases]
---

# project deploy cancel

> Cancel a deploy operation.

## project deploy cancel

Cancel a deploy operation.

### Description for project deploy cancel

Use this command to cancel a deploy operation that hasn't yet completed in the org. Deploy operations include standard deploys, quick deploys, deploy validations, and deploy cancellations.

Run this command by either passing it a job ID or specifying the --use-most-recent flag to use the job ID of the most recent deploy operation.

### Examples for project deploy cancel

Cancel a deploy operation using a job ID:

```

```

Cancel the most recent deploy operation:

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

\--async

Optional

Run the command asynchronously.

The command immediately returns the control of the terminal to you. This way, you can continue to use the CLI. To resume watching the cancellation, run "sf project deploy resume". To check the status of the cancellation, run "sf project deploy report".

Type: boolean

\-i | \--job-id JOB-ID

Optional

Job ID of the deploy operation you want to cancel.

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

For performance reasons, this flag uses job IDs for deploy operations that started only in the past 3 days or less. If your most recent deploy operations was more than 3 days ago, this flag won't find a job ID.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to complete and display results.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you. To resume watching the cancellation, run "sf project deploy resume". To check the status of the cancellation, run "sf project deploy report".

Type: option

### Aliases for project deploy cancel

```

```