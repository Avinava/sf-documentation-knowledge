---
title: "File Previews"
domain: chatterapi
topic: file-previews
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.389Z
estimatedTokens: 197
keywords: [File, Previews, file's, generate, pages, preview]
---

# File Previews

> Get information about a file's supported previews and generate up to
      500 pages in a file preview.

# File Previews

Get information about a file's supported previews and generate up to 500 pages in a file preview.

Resource

```

```

```

```

Available version

36.0

In version 35.0, use /chatter/files/fileId/previews and /connect/communities/communityId/chatter/files/fileId/previews, which require Chatter.

HTTP methods

GET, HEAD, PATCH

Request parameters for GET and PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| versionNumber | Integer | Version number of the file. Default value is latest version. | Optional | 40.0 |

Response body for GET and PATCH

[File Preview Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_preview_collection.htm "A collection of file previews.")

## Code Examples

```
/connect/files/fileId/previews
```

```
/connect/communities/communityId/files/fileId/previews
```

## Related Topics

- File Preview Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_preview_collection.htm)
