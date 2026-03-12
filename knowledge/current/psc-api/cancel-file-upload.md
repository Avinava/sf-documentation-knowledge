---
title: "Cancel File Upload"
domain: psc-api
topic: cancel-file-upload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.340Z
estimatedTokens: 121
keywords: [Cancel, File, Upload, API, process]
---

# Cancel File Upload

> This API sends a request to cancel the file upload process.

# Cancel File Upload

This API sends a request to cancel the file upload process.

Resource

/services/data/vXX.X/connect/content-hub-upload/repositories/{repositoryId}/files/{fileId}/uploads/{uploadId}

-   repositoryId: It refers to the external repository.
-   fileId: The ID of the file.
-   uploadId: A unique identifier for the file being uploaded.

Available Version

65.0 and later

HTTP Method

DELETE

Response

Staus Code: 200 is displayed if the API request is successful.
