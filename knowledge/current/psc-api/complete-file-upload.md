---
title: "Complete File Upload"
domain: psc-api
topic: complete-file-upload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.345Z
estimatedTokens: 299
keywords: [File, Upload, API, files]
---

# Complete File Upload

> This API sends a request to upload the files.

# Complete File Upload

This API sends a request to upload the files.

Resource

/services/data/v65.0/connectcontent-hub-upload/repositories/{repositoryId}/files/complete-upload

-   repositoryId: It refers to the external repository.

Available Version

65.0 and later

HTTP Method

POST

Format

JSON

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

Response

[Content Hub File Upload Output](atlas.en-us.psc_api.meta/psc_api/connect_responses_content_hub_file_upload.htm "Output representation for Content Hub File Upload.")

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

## Related Topics

- Content Hub File Upload Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_content_hub_file_upload.htm)
