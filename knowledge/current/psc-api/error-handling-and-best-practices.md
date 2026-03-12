---
title: "Error Handling and Best Practices"
domain: psc-api
topic: error-handling-and-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:32.502Z
estimatedTokens: 214
keywords: [Error, Handling, Best, Practices, user, cancels, upload, occurs, process, LWC, call, abort, file, API, clean]
---

# Error Handling and Best Practices

> If a user cancels the upload or an error occurs during the process, the LWC should call
  the abort file upload API to clean up any partially uploaded data in S3.

# Error Handling and Best Practices

If a user cancels the upload or an error occurs during the process, the LWC should call the abort file upload API to clean up any partially uploaded data in S3.

See [abortFileUpload(repositoryId, fileId, uploadId)](atlas.en-us.psc_api.meta/psc_api/apex_PublicSectrSltn_ContentHubFileUploadConnect_abortFileUploadMethod.htm "To cancel a file upload, the abortFileUpload method is invoked. This method is specifically used for aborting multi-part uploads to an external storage.") to learn about the signature and parameters of the method.

## Best Practices

-   Parallel Uploads: For multi-part uploads, use Promise.all() in JavaScript to upload multiple chunks in parallel to improve performance.
-   E-tags: Ensure the ETag list is correctly stored and ordered by partNumber before sending it to the completion API.

## Related Topics

- abortFileUpload(repositoryId, fileId, uploadId) (atlas.en-us.psc_api.meta/psc_api/apex_PublicSectrSltn_ContentHubFileUploadConnect_abortFileUploadMethod.htm)
