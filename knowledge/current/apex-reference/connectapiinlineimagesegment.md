---
title: "ConnectApi.InlineImageSegment"
domain: apex-reference
topic: connectapiinlineimagesegment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.598Z
estimatedTokens: 167
keywords: [ConnectApi.InlineImageSegment, inline, image, feed, body.]
---

# ConnectApi.InlineImageSegment

> An inline image in the feed body.

# ConnectApi.InlineImageSegment

An inline image in the feed body.

Subclass of [ConnectApi.MessageSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_seg.htm "Message segment.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| altText | String | Alt text for the inline image. | 35.0 |
| contentSize | Integer | Size of the file in bytes. | 35.0 |
| fileExtension | String | Extension of the file, such as gif. | 37.0 |
| thumbnails | ConnectApi.File​PreviewCollection | Information about the available thumbnails for the image. | 35.0 |
| url | String | URL to the latest version of the inline image. | 35.0 |

## Related Topics

- ConnectApi.MessageSegment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_seg.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.File​PreviewCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview_collection.htm)
