---
title: "ConnectApi.ManagedContentMediaNodeValue"
domain: apex-reference
topic: connectapimanagedcontentmedianodevalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.857Z
estimatedTokens: 364
keywords: [ConnectApi.ManagedContentMediaNodeValue, Managed, content, node, media]
---

# ConnectApi.ManagedContentMediaNodeValue

> Managed content node of media type.

# ConnectApi.ManagedContentMediaNodeValue

Managed content node of media type.

Subclass of [ConnectApi.ManagedContentNodeValue](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_node_value.htm "Managed content node.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| altText | String | Alternative text for the managed content node. | 47.0 |
| altUrl | String | Alternative URL to the managed content node.In version 49.0 and later, this information is returned in the thumbnailUrl property. | 47.0–48.0 |
| contentKey | String | Content key of the managed content. | 51.0 |
| fileName | String | File name of the managed content node. | 48.0 |
| mediaType | ConnectApi.​ManagedContent​MediaType | Type of managed content media. Value is Image. | 47.0 |
| mimeType | String | MIME type of the managed content node. | 47.0 |
| resourceUrl | String | Resource URL to the image.In version 48.0, the resource URL is available if referencing asset files and is null if referencing media. In version 49.0 and later, the resource URL is available if referencing asset files or media. | 48.0 |
| thumbnailUrl | String | URL to the thumbnail of the media. | 49.0 |
| title | String | Title of the managed content node. | 47.0 |
| unauthenticatedUrl | String | Unauthenticated URL to the image or null if the image isn’t visible to external users. | 48.0 |
| url | String | URL to the image. | 47.0 |

## Related Topics

- ConnectApi.ManagedContentNodeValue (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_node_value.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ManagedContent​MediaType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
