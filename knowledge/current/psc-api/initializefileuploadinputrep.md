---
title: "initializeFileUpload(inputRep)"
domain: psc-api
topic: initializefileuploadinputrep
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.447Z
estimatedTokens: 93
keywords: [initializeFileUpload, inputRep, outputRep, instance, below]
---

# initializeFileUpload(inputRep)

> Used to create an outputRep instance with the below parameters.

# initializeFileUpload(inputRep)

Used to create an outputRep instance with the below parameters.

## Signature

ConnectApi.ContentHubFileUploadConnect.initializeFileUpload(inputRep)

## Parameters

inputRep

Type: Map<String,ANY>

Enter the input Representation instance created with ConnectApi.ContentHubUploadItemInputRepresentation();

Sample Code Snippet

```

```

## Code Examples

```apex
public with sharing class ConnectApiHelper {
    @AuraEnabled(cacheable=false)

    public static ConnectApi.ContentHubUploadItemRepresentation getS3UploadUrl(String contextId, String fileName, String contentType, Long contentSize) {
        try{
            ConnectApi.ContentHubUploadItemInputRepresentation inputRep = new ConnectApi.ContentHubUploadItemInputRepresentation();
            inputRep.contentSize = contentSize;
            inputRep.contentType = contentType;
            inputRep.contextId = contextId;
            inputRep.fileName = fileName;
            final ConnectApi.ContentHubUploadItemRepresentation outputRep = ConnectApi.ContentHubFileUploadConnect.initializeFileUpload(inputRep);
            System.debug('File Upload URL:' + outputRep.fileUploadUrl);

            return outputRep;
        }
        catch(Exception ex) {
            throw new AuraHandledException('Error in getUploadUrl: ' + ex.getMessage());
        }
    }
}
```
