---
title: "Check the Status of Your Deployment Using REST Resources"
domain: metadata-api
topic: check-the-status-of-your-deployment-using-rest-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:54.418Z
keywords: [Check, Status, Deployment, REST, Resources, Response, Body, Deploy, Metadata]
---

# Check the Status of Your Deployment Using REST Resources

# Check the Status of Your Deployment Using REST Resources

Check the status of your deployment by using passing the deployment request ID in the URL The response body is similar to that returned by the original deployment request, but it includes information about the deployment in progress.

URI

https://host/services/data/vXX.0/metadata/deployRequest/deployRequestId

To include more details in the response, use:

https://host/services/data/vXX.0/metadata/deployRequest/deployRequestId?includeDetails=true

Formats

JSON

HTTP Method

GET

Authentication

Authorization: Bearer token

## Response Body: Deploy Metadata

The following example shows the response when ?includeDetails=true is added as a query to the GET request.

```

```

Expect an HTTP status code of 200 (OK) to be returned.