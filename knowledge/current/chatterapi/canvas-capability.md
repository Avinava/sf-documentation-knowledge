---
title: "Canvas Capability"
domain: chatterapi
topic: canvas-capability
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.470Z
estimatedTokens: 296
keywords: [Canvas, Capability, feed, element, renders, app]
---

# Canvas Capability

> If a feed element has this capability, it renders a canvas app.

# Canvas Capability

If a feed element has this capability, it renders a canvas app.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | A description of the canvas app. The maximum size is 255 characters. | Small, 32.0 | 32.0 |
| developerName | String | The API name (developer name) of the client app. | Small, 32.0 | 32.0 |
| height | String | The height of the canvas app in pixels. | Small, 32.0 | 32.0 |
| icon | Icon | The icon for the canvas app. | Small, 32.0 | 32.0 |
| namespacePrefix | String | A unique namespace prefix for the canvas app. | Small, 32.0 | 32.0 |
| parameters | String | JSON parameters passed to the canvas app. | Small, 32.0 | 32.0 |
| thumbnailUrl | String | A thumbnail URL to a preview image. The maximum thumbnail size is 120 pixels by 120 pixels. | Small, 32.0 | 32.0 |
| title | String | A title for the canvas link. | Small, 32.0 | 32.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Icon (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_icon.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
