---
title: "CancelDeployResult"
domain: metadata-api
topic: canceldeployresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:50.993Z
keywords: [CancelDeployResult, Version]
---

# CancelDeployResult

# CancelDeployResult

Contains information about a deployment cancellation—whether the cancellation completed and the deployment ID.

The asynchronous metadata call [cancelDeploy()](atlas.en-us.api_meta.meta/api_meta/meta_canceldeploy.htm "Cancels a deployment that hasn’t completed yet.") returns a CancelDeployResult object.

## Version

Available in API version 30.0 and later.

CancelDeployResult has the following properties.

| Name | Type | Description |
| --- | --- | --- |
| done | boolean | Indicates whether the deployment cancellation, which is started through cancelDeploy(), has completed (true) or not (false).When a deployment hasn’t started yet and is still in the queue, the deployment is canceled immediately with the cancelDeploy() call and this field returns true. Otherwise, this field returns false when the cancellation is in progress. |
| id | ID | ID of the deployment being canceled. |