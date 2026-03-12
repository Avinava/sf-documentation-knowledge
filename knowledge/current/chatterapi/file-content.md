---
title: "File Content"
domain: chatterapi
topic: file-content
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.362Z
estimatedTokens: 205
keywords: [File, Content, including, references, external, files, streamed]
---

# File Content

> Returns the content of the file, including references to
   external files. The content is streamed as the body of the response.

# File Content

Returns the content of the file, including references to external files. The content is streamed as the body of the response.

Resource

```

```

```

```

Available since version

36.0

In versions 24.0–35.0, use /chatter/files/fileId/content and /connect/communities/communityId/chatter/files/fileId/content, which require Chatter.

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isDataSync | Boolean | Indicates whether an automated client generates the request. | Optional | 31.0 |
| versionNumber | Integer | Specify an existing version number for the file. If not specified, the latest version is returned. | Optional | 24.0 |

Response body

Binary stream of the file content.

## Code Examples

```
/connect/files/fileId/content
```

```
/connect/communities/communityId/files/fileId/content
```
