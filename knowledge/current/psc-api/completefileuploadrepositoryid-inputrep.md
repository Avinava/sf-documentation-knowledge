---
title: "completeFileUpload(repositoryId, inputRep)"
domain: psc-api
topic: completefileuploadrepositoryid-inputrep
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.440Z
estimatedTokens: 130
keywords: [completeFileUpload, repositoryId, inputRep, Once, parts, uploaded, successfully, process, finalized, Salesforce, invoking, outputRep, instance, completion, status]
---

# completeFileUpload(repositoryId, inputRep)

> Once all parts are uploaded successfully, the process is finalized in Salesforce by
  invoking the completeFileUpload method. It returns an outputRep instance that indicates the
  completion status of the file.

# completeFileUpload(repositoryId, inputRep)

Once all parts are uploaded successfully, the process is finalized in Salesforce by invoking the completeFileUpload method. It returns an outputRep instance that indicates the completion status of the file.

## Signature

```

```

## Parameters

repositoryId

Type: String

The ID of the repository.

inputRep

Type: Map<String,ANY>

Enter the input Representation instance created with ConnectApi.ContentHubUploadItemInputRepresentation();

Sample Code Snippet

```

```

## Code Examples

```
ConnectApi.ContentHubFileUploadConnect.completeFileUpload(repositoryId,
      inputRep)
```

```apex
@AuraEnabled(cacheable=false)
    public static ConnectApi.ContentHubCompleteUploadRepresentation completeFileUpload(String fileId, String fileName, String contextId, String contentType, String uploadId, List<ConnectApi.ContentHubUploadPartsInputRepresentation> uploadParts, String repositoryId) {
        try{
            ConnectApi.ContentHubCompleteUploadInputRepresentation inputRep = new ConnectApi.ContentHubCompleteUploadInputRepresentation();
            inputRep.fileId = fileId;
            inputRep.fileName = fileName;
            inputRep.contextId = contextId;
            inputRep.contentType = contentType;
            inputRep.uploadParts = uploadParts;
            inputRep.uploadId = uploadId;
            final ConnectApi.ContentHubCompleteUploadRepresentation outputRep = ConnectApi.ContentHubFileUploadConnect.completeFileUpload(repositoryId, inputRep);
            System.debug('Content Version Id: ' + outputRep.contentVersionId);
            
            return outputRep;
        }
        catch(Exception ex) {
            throw new AuraHandledException('Error in completeFileUpload: ' + ex.getMessage());
        }
    }
```
