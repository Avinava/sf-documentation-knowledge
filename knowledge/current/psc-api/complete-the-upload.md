---
title: "Complete the Upload"
domain: psc-api
topic: complete-the-upload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:32.501Z
estimatedTokens: 153
keywords: [Upload, Once, content, transferred, LWC, invokes, API, Salesforce]
---

# Complete the Upload

> Once all content is transferred to S3, the LWC invokes the complete upload API in
  Salesforce.

# Complete the Upload

Once all content is transferred to S3, the LWC invokes the complete upload API in Salesforce.

In this step, the ContentDocument reference is created in your org. See [completeFileUpload(repositoryId, inputRep)](atlas.en-us.psc_api.meta/psc_api/apex_PublicSectrSltn_ContentHubFileUploadConnect_cmpltFileUploadMethod.htm "Once all parts are uploaded successfully, the process is finalized in Salesforce by invoking the completeFileUpload method. It returns an outputRep instance that indicates the completion status of the file.") to learn about the signature and parameters of the method.

## Related Topics

- completeFileUpload(repositoryId, inputRep) (atlas.en-us.psc_api.meta/psc_api/apex_PublicSectrSltn_ContentHubFileUploadConnect_cmpltFileUploadMethod.htm)
