---
title: "Upload a File"
domain: uiapi
topic: upload-a-file
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.629Z
estimatedTokens: 375
keywords: [Upload, File, document, image]
---

# Upload a File

> Upload a file such as a document or image.

# Upload a File

Upload a file such as a document or image.

Resource

```

```

Available Version

56.0

HTTP Method

POST

To upload a file or a new file version, provide the binary file in a multipart/form-data body part where name="fileData". See [Upload Binary Files](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_binary_upload.htm "If a record has a Base64 field, you can upload binary data to the field when you create or update a record.") and [Upload Files](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_content_document.htm "Upload documents and images or update the file with a new version.").

Request Parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | A description of the document or image to be uploaded. | Optional | 56.0 |
| title | String | The title of the document or image to be uploaded. | Optional | 56.0 |

Request Body for POST

Example for Uploading a File

```

```

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | A description of the document or image to be uploaded. | Optional | 56.0 |
| title | String | The title of the document or image to be uploaded. | Optional | 56.0 |

Response Body

[Content Document Composite](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_contentdocumentcomposite.htm "The file and its relationship to a record.")

## Code Examples

```
/ui-api/records/content-documents/content-versions
```

```
POST /ui-api/records/content-documents/content-versions
```

```
{
  "description": "A description of the product",
  "title": "product_image"
}
```

## Related Topics

- Upload Binary Files (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_binary_upload.htm)
- Upload Files (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_content_document.htm)
- Content Document Composite (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_contentdocumentcomposite.htm)
