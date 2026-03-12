---
title: "Complete File Upload Input"
domain: psc-api
topic: complete-file-upload-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.894Z
estimatedTokens: 198
keywords: [File, Upload, Input, representation]
---

# Complete File Upload Input

> Input representation for Complete File Upload.

# Complete File Upload Input

Input representation for Complete File Upload.

JSON Example

```

```

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| uploadId | String | A unique identifier for the file being uploaded. | Optional | 65.0 |
| uploadParts | Array | An array of objects that holds partNumber and eTag. | Optional | 65.0 |
| fileId | String | The ID of the file. | Required | 65.0 |
| fileName | String | Name of the file | Required | 65.0 |
| contextId | String | This is the context ID from where the file upload has been triggered. For example, it can be an ID of Case, Contact, or Account. | Optional | 65.0 |
| contentType | String | This represents the file's content type. | Optional | 65.0 |

## Code Examples

```
{
  "uploadId": "7aa1a0f4-5e7e-4de5-a880-c4d90237ad1d",
  "fileId": "sfdc/case/abc.txt", 
  "fileName": "abc.txt",
  "contentType": "image/png", 
  "contextId": "500SG00000oPHkzYAG",
  "uploadParts": [
    {
      "partNumber": "1",
      "etag": "33a64df551425fcc55e4d42a148795d9f25f89d4"
    }
  ]
}
```
