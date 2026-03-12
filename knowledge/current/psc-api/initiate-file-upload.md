---
title: "Initiate File Upload"
domain: psc-api
topic: initiate-file-upload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.546Z
estimatedTokens: 291
keywords: [Initiate, File, Upload, API, multi-part, unique, identifier, part]
---

# Initiate File Upload

> This API sends a request to initiate a multi-part upload. It returns a response with an
  upload ID, which is a unique identifier for the multi-part upload. This identifier is optional for
  single part upload.

# Initiate File Upload

This API sends a request to initiate a multi-part upload. It returns a response with an upload ID, which is a unique identifier for the multi-part upload. This identifier is optional for single part upload.

Resource

/services/data/v65.0/connect/content-hub-upload/repositories/files/initiate-upload

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
| contentType | String | This represents the file's content type. | Required | 65.0 |
| contentSize | Long | The size of the file being uploaded in bytes. | Required | 65.0 |
| fileName | String | Name of the file | Required | 65.0 |
| contextId | String | This is the context ID from where the file upload has been triggered. For example, it can be an ID of Case, Contact, or Account. | Optional | 65.0 |

Response

[Content Hub External Upload Request Output](atlas.en-us.psc_api.meta/psc_api/connect_responses_content_hub_external_upload_request.htm "Output representation for Content Hub External Upload Request.")

## Code Examples

```
{
  "contextId": "500xx000000bncfAAA",
  "fileName": "abc.json",
  "contentSize": 1048576000,
  "contentType": "application/json"
}
```

## Related Topics

- Content Hub External Upload Request Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_content_hub_external_upload_request.htm)
