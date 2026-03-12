---
title: "File Rendition"
domain: chatterapi
topic: file-rendition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.398Z
estimatedTokens: 320
keywords: [File, Rendition, binary, preview, depends]
---

# File Rendition

> A rendition of the file.
A rendition is a binary preview of the file. The format of the binary
depends on the format specified in the request.

# File Rendition

A rendition of the file. A rendition is a binary preview of the file. The format of the binary depends on the format specified in the request.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded.

Resource

```

```

```

```

Available since version

36.0

In versions 24.0–35.0, use /chatter/files/fileId/rendition and /connect/communities/communityId/chatter/files/fileId/rendition, which require Chatter.

HTTP methods

GET

Request parameters

| Name | Type | Description |
| --- | --- | --- |
| page | Integer | Specify a rendition of a specific page. The first page is 0. If you don’t specify a specific page, a rendition of the first page is returned.For a PDF file rendition, the rendition is for the entire document. The only valid value is 0: you can’t get the rendition of a single page. |
| type | String | Specify the type of rendition to be returned. Default value is THUMB120BY90. Valid values are:PDFTHUMB120BY90THUMB240BY180THUMB720BY480 |

Response body

Binary stream of the rendition.

## Code Examples

```
/connect/files/fileId/rendition
```

```
/connect/communities/communityId/files/fileId/rendition
```
