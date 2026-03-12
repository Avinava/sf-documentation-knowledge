---
title: "abortFileUpload(repositoryId, fileId, uploadId)"
domain: psc-api
topic: abortfileuploadrepositoryid-fileid-uploadid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.437Z
estimatedTokens: 110
keywords: [abortFileUpload, repositoryId, fileId, uploadId, cancel, file, upload, invoked, specifically, aborting, multi-part, uploads, external, storage]
---

# abortFileUpload(repositoryId, fileId, uploadId)

> To cancel a file upload, the abortFileUpload method is invoked. This method is
  specifically used for aborting multi-part uploads to an external storage.

# abortFileUpload(repositoryId, fileId, uploadId)

To cancel a file upload, the abortFileUpload method is invoked. This method is specifically used for aborting multi-part uploads to an external storage.

## Signature

```

```

## Parameters

repositoryId

Type: String

The ID of the repository.

fileId

Type: String

The ID of the file to be uploaded.

uploadId

Type: String

The ID of the upload task.

Sample Code Snippet

```

```

## Code Examples

```
ConnectApi.ContentHubFileUploadConnect.abortFileUpload(repositoryId, fileId, uploadId)
```

```apex
@AuraEnabled(cacheable=false)
    public static void abortFileUpload(String repositoryId, String fileId, String uploadId) {
        try{
            ConnectApi.ContentHubFileUploadConnect.abortFileUpload(repositoryId, fileId, uploadId);
            return;
        }
        catch(Exception ex) {
            throw new AuraHandledException('Error in abortFileUpload: ' + ex.getMessage());
        }
    }
```
