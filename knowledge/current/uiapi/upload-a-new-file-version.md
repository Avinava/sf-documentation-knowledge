---
title: "Upload a New File Version"
domain: uiapi
topic: upload-a-new-file-version
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.625Z
estimatedTokens: 396
keywords: [Upload, New, File, Version, document, image]
---

# Upload a New File Version

> Upload a new document or image version.

# Upload a New File Version

Upload a new document or image version.

Resource

```

```

contentDocumentId—The ID of a previously uploaded file.

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

Request body for POST

Example for Uploading a New Version of a File

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
/ui-api/records/content-documents/${contentDocumentId}/content-versions
```

```
POST /ui-api/records/content-documents/0692L00000BDVevQAH/content-versions
```

```
{
  "description": "Version 2 of the product image",
  "title": "product_image"
}
```

## Related Topics

- Upload Binary Files (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_binary_upload.htm)
- Upload Files (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_content_document.htm)
- Content Document Composite (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_contentdocumentcomposite.htm)
