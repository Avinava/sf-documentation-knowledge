---
title: "Cancel a Metadata Deployment"
domain: sfdx-dev
topic: cancel-a-metadata-deployment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.093Z
estimatedTokens: 206
keywords: [Cancel, Metadata, Deployment, Salesforce, CLI, specify, wait, time, command]
---

# Cancel a Metadata Deployment

> You can cancel a metadata deployment from Salesforce CLI and specify a wait time for the
    command to complete.

# Cancel a Metadata Deployment

You can cancel a metadata deployment from Salesforce CLI and specify a wait time for the command to complete.

To cancel your most recent deployment, run project deploy cancel --use-most-recent. You can cancel earlier deployments by using the \--job-id <JOBID> flag to specify the deployment that you want to cancel.

```

```

The default wait time for the cancel command to complete and display its results in the terminal window is 33 minutes. If the command isn’t completed by the end of the wait period, the CLI returns control of the terminal window to you. You can adjust the wait time as needed by specifying the number of minutes in the \--wait flag, as shown in the following example:

```

```

Curious about the status of a canceled deployment? Run a deployment report.

```

```

## Code Examples

```
sf project deploy cancel --job-id <jobid>
```

```
sf project deploy cancel --wait 20 --use-most-recent
```

```
sf project deploy report --use-most-recent
```
