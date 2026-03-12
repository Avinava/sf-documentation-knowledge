---
title: "Content Hub External Upload Request Output"
domain: psc-api
topic: content-hub-external-upload-request-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.782Z
estimatedTokens: 281
keywords: [Content, Hub, External, Upload, Output, representation]
---

# Content Hub External Upload Request Output

> Output representation for Content Hub External Upload Request.

# Content Hub External Upload Request Output

Output representation for Content Hub External Upload Request.

JSON Example for Multi-part Response (Content Size > 100 MB)

```

```

JSON Example for Single part Response

```

```

Properties

| Property Name | Description |
| --- | --- |
| contentHubUploadUrlRepresentations | This represents an array of parts information which has presigned URL and part number. |
| fileName | The name of the file associated with the upload, including its extension. |
| partSize | Size of each part being uploaded. |
| fileId | The ID of the file in external repository. |
| uploadId | This attribute holds the uploadId if the file being uploaded in multi parts. |
| isMultiPartUpload | Indicates if this request is the candidate for the multi part upload or not. |
| fileUploadUrl | The URL for the file upload in case of single part upload. |
| repositoryId | The ID of the repository to which the file needs to be uploaded. |
| code | The status code that represents the status of the request. |
| message | The message that explains why the request failed or a related message. |

## Code Examples

```
{
  "code":200,
  "contentHubUploadUrlRepresentations": [
    {
      "partNumber": 1,
      "partUrl": "abc.com"
    },
    {
      "partNumber": 2,
      "partUrl": "xyz.com"
    }
  ],
  "fileId": "__sfdcroot__/Case/500xx000000bnZwAAI/1",
  "fileName": "1",
  "partSize": 1024,
  "uploadId": "abc",
  "repositoryId": "0XCxx0000000001",
  "isMultiPartUpload": true,
  "fileUploadUrl": null,
  "message":"Initiate request for External file upload has been successfully completed for fileName: 1"
}
```

```
{
    "code":200,
    "contentHubUploadUrlRepresentations": [],
    "fileId": "__sfdcroot__/users/005xx000001X7vV/sf_agent_1744636900341.png",
    "fileName": "sf_agent.png",
    "fileUploadUrl": "<upload url>",
    "isMultiPartUpload": false,
    "message": "Initiate request for External file upload has been successfully completed for fileName: sf_agent.png",
    "partSize": 0,
    "repositoryId": "0XCxx0000000001",
    "uploadId":null
}
```
