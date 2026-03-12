---
title: "File Upload Config"
domain: chatterapi
topic: file-upload-config
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.333Z
estimatedTokens: 66
keywords: [File, Upload, Config]
---

# File Upload Config

> File upload config.

# File Upload Config

File upload config.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| allowedFile​Extensions | String[] | File extensions that are allowed for upload. | Small, 64.0 | 64.0 |
| hasCustom​RecordTypes | Boolean | Specifies whether the ContentVersion has custom record types (true) or not (false). | Small, 62.0 | 62.0 |
| maxFile​AttachmentsOnFeed | Integer | Maximum number of file attachments on the feed. | Small, 62.0 | 62.0 |
| maxFile​Size | Integer | Maximum file size for upload. | Small, 64.0 | 64.0 |
| token | String | CSRF token that authenticates the file upload. | Small, 62.0 | 62.0 |
| uploadUrl | String | URL to the file upload. | Small, 62.0 | 62.0 |

#### See Also

-   [File Upload Config](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_file_upload_config.htm "Get the file upload config.")

## Code Examples

```
/connect/file/upload/config
```

## Related Topics

- File Upload Config (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_upload_config.htm)
- File Upload Config (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_file_upload_config.htm)
