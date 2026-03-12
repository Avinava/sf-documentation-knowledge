---
title: "Initiate File Upload Input"
domain: psc-api
topic: initiate-file-upload-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.146Z
estimatedTokens: 159
keywords: [Initiate, File, Upload, Input, representation]
---

# Initiate File Upload Input

> Input representation for Initiate File Upload.

# Initiate File Upload Input

Input representation for Initiate File Upload.

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

## Code Examples

```
{
  "contextId": "500xx000000bncfAAA",
  "fileName": "abc.json",
  "contentSize": 1048576000,
  "contentType": "application/json"
}
```
