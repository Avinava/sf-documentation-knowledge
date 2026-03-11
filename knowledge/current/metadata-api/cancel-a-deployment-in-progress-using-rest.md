---
title: "Cancel a Deployment in Progress Using REST"
domain: metadata-api
topic: cancel-a-deployment-in-progress-using-rest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:54.415Z
keywords: [Cancel, Deployment, Progress, REST, Request, Body, Cancellation, Response]
---

# Cancel a Deployment in Progress Using REST

# Cancel a Deployment in Progress Using REST

You can request a cancellation of a deployment that's already in progress. Make the cancellation request by patching the status of an ongoing deployRequest. The cancellation is processed asynchronously. For API versions 65.0 and higher, deployments with a status of Finalizing Deploy, can't be cancelled. For API versions below 65.0, attempts to cancel a deployment may fail if the deployment has started committing data. Alternatively, it's possible that the cancellation will succeed, but data from the deployment is also committed.

URI

https://host/services/data/vXX.0/metadata/deployRequest/deployRequestId

Formats

JSON

HTTP Method

PATCH

Authentication

Authorization: Bearer token

## Request Body: Request Deployment Cancellation

The JSON request body for a deployment cancellation includes a PATCH to the status of the original deployRequest.

```

```

## Response Body: Request Deployment Cancellation

Because the cancellation request is processed asynchronously, the status shown in the response body can be either Canceling or Canceled.

```

```

When an HTTP status code of 202 (Accepted) is returned, your cancellation request is in progress or successful.