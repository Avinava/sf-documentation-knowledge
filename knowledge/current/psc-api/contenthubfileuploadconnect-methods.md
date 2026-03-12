---
title: "ContentHubFileUploadConnect Methods"
domain: psc-api
topic: contenthubfileuploadconnect-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.451Z
estimatedTokens: 388
keywords: [ContentHubFileUploadConnect, includes, multiple]
---

# ContentHubFileUploadConnect Methods

> ContentHubFileUploadConnect includes multiple methods.

# ContentHubFileUploadConnect Methods

ContentHubFileUploadConnect includes multiple methods.

The methods for ContentHubFileUploadConnect are:

-   **[ContentHubUploadItemInputRepresentation()](atlas.en-us.psc_api.meta/psc_api/apex_PublicSectrSltn_ContentHubFileUploadConnect_inptRepMethod.htm)**
    Used to create an contentHubUploadItemInputRepresentation instance with the following parameters.
-   **[initializeFileUpload(inputRep)](atlas.en-us.psc_api.meta/psc_api/apex_PublicSectrSltn_ContentHubFileUploadConnect_intilzeFileUploadMethod.htm)**
    Used to create an outputRep instance with the below parameters.
-   **[ContentHubCompleteUploadInputRepresentation()](atlas.en-us.psc_api.meta/psc_api/apex_PublicSectrSltn_ContentHubFileUploadConnect_cmpltUploadInptRepMethod.htm)**
    Used to create an inputRep instance with the below parameters.
-   **[completeFileUpload(repositoryId, inputRep)](atlas.en-us.psc_api.meta/psc_api/apex_PublicSectrSltn_ContentHubFileUploadConnect_cmpltFileUploadMethod.htm)**
    Once all parts are uploaded successfully, the process is finalized in Salesforce by invoking the completeFileUpload method. It returns an outputRep instance that indicates the completion status of the file.
-   **[abortFileUpload(repositoryId, fileId, uploadId)](atlas.en-us.psc_api.meta/psc_api/apex_PublicSectrSltn_ContentHubFileUploadConnect_abortFileUploadMethod.htm)**
    To cancel a file upload, the abortFileUpload method is invoked. This method is specifically used for aborting multi-part uploads to an external storage.

## Related Topics

- ContentHubUploadItemInputRepresentation() (atlas.en-us.psc_api.meta/psc_api/apex_PublicSectrSltn_ContentHubFileUploadConnect_inptRepMethod.htm)
- initializeFileUpload(inputRep) (atlas.en-us.psc_api.meta/psc_api/apex_PublicSectrSltn_ContentHubFileUploadConnect_intilzeFileUploadMethod.htm)
- ContentHubCompleteUploadInputRepresentation() (atlas.en-us.psc_api.meta/psc_api/apex_PublicSectrSltn_ContentHubFileUploadConnect_cmpltUploadInptRepMethod.htm)
- completeFileUpload(repositoryId, inputRep) (atlas.en-us.psc_api.meta/psc_api/apex_PublicSectrSltn_ContentHubFileUploadConnect_cmpltFileUploadMethod.htm)
- abortFileUpload(repositoryId, fileId, uploadId) (atlas.en-us.psc_api.meta/psc_api/apex_PublicSectrSltn_ContentHubFileUploadConnect_abortFileUploadMethod.htm)
