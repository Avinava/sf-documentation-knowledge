---
title: "Managed Content Media Node Value"
domain: chatterapi
topic: managed-content-media-node-value
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.506Z
estimatedTokens: 423
keywords: [Managed, Content, Media, Node]
---

# Managed Content Media Node Value

> Managed content node of media type.

# Managed Content Media Node Value

Managed content node of media type.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| altText | String | Alternative text for the managed content node. | Small, 47.0 | 47.0 |
| altUrl | String | Alternative URL to the managed content node.In version 49.0 and later, this information is returned in the thumbnailUrl property. | Small, 47.0 | 47.0–48.0 |
| contentKey | String | Content key of the managed content. | Small, 51.0 | 51.0 |
| fileName | String | File name of the managed content node. | Small, 48.0 | 48.0 |
| mediaType | String | Type of managed content media. Value is Image. | Small, 47.0 | 47.0 |
| mimeType | String | MIME type of the managed content node. | Small, 47.0 | 47.0 |
| nodeType | String | Type of managed content node. Value is Media. | Small, 47.0 | 47.0 |
| resourceUrl | String | Resource URL to the image.In version 48.0, the resource URL is available if referencing asset files and is null if referencing media. In version 49.0 and later, the resource URL is available if referencing asset files or media. | Small, 48.0 | 48.0 |
| thumbnailUrl | String | URL to the thumbnail of the media. | Small, 49.0 | 49.0 |
| title | String | Title of the managed content node. | Small, 47.0 | 47.0 |
| unauthenticated​Url | String | Unauthenticated URL to the image or null if the image isn’t visible to external users. | Small, 48.0 | 48.0 |
| url | String | URL to the image. | Small, 47.0 | 47.0 |

#### See Also

-   [Managed Content Version](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_version.htm "Managed content version.")

## Related Topics

- Managed Content Version (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_version.htm)
