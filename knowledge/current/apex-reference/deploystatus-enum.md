---
title: "DeployStatus Enum"
domain: apex-reference
topic: deploystatus-enum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:29.467Z
estimatedTokens: 239
keywords: [DeployStatus, result, status, deployment., Usage, Values]
---

# DeployStatus Enum

> The result status of a deployment.

# DeployStatus Enum

The result status of a deployment.

## Usage

Metadata.DeployResult.status uses this enum to describe the results of the deployment.

## Enum Values

The following are the values of the Metadata.DeployStatus enum.

| Value | Description |
| --- | --- |
| Canceled | The queued deployment was canceled. |
| Canceling | The queued deployment is being canceled. |
| Failed | The deployment failed. |
| FinalizingDeploy | The deployment has started, and is in the finalizing state. Deployments in the state can't be canceled. |
| FinalizingDeployFailed | The deployment failed during the finalizing state. |
| InProgress | The deployment has been started and is in progress. |
| Pending | The deployment has been queued but not started. |
| Succeeded | The deployment succeeded. |
| SucceededPartial | The deployment succeeded, but some components might not have been successfully deployed. Check Metadata.DeployResult for more details. |
