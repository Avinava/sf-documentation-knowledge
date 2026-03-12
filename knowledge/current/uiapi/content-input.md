---
title: "Content Input"
domain: uiapi
topic: content-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.173Z
estimatedTokens: 320
keywords: [Content, Input, Upload, file, new, version]
---

# Content Input

> Upload a file or a new file version.

# Content Input

Upload a file or a new file version.

To upload a file or a new file version, provide the binary file in a multipart/form-data body part where name="fileData". See [Upload Binary Files](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_binary_upload.htm "If a record has a Base64 field, you can upload binary data to the field when you create or update a record.") and [Upload Files](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_content_document.htm "Upload documents and images or update the file with a new version.").

Example for Uploading a File

```

```

```

```

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

#### See Also

-   [Upload a New File Version](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_contentdocument.htm "Upload a new document or image version.")

-   [Upload a File](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_contentversion.htm "Upload a file such as a document or image.")

## Code Examples

```
POST /ui-api/records/content-documents/content-versions
```

```
{
  "description": "A description of the product",
  "title": "product_image"
}
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
- Upload a New File Version (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_contentdocument.htm)
- Upload a File (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_contentversion.htm)
