---
title: "Canvas Capability Input"
domain: chatterapi
topic: canvas-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.159Z
estimatedTokens: 291
keywords: [Canvas, Capability, Input, app, associated, feed, element]
---

# Canvas Capability Input

> Create or update a canvas app associated with a feed
    element.

# Canvas Capability Input

Create or update a canvas app associated with a feed element.

Root XML tag

```

```

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | A description of the canvas app. The maximum size is 255 characters. | Optional | 32.0 |
| developerName | String | The API name (developer name) of the client app. | Required | 32.0 |
| height | String | The height of the canvas app in pixels. | Optional | 32.0 |
| namespacePrefix | String | A unique namespace prefix for the canvas app. | Optional | 32.0 |
| parameters | String | JSON parameters passed to the canvas app. | Optional | 32.0 |
| thumbnailUrl | String | A thumbnail URL to a preview image. The maximum thumbnail size is 120 pixels by 120 pixels. | Optional | 32.0 |
| title | String | A title for the canvas link. | Required | 32.0 |

#### See Also

-   [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.")

## Code Examples

```
<canvasCapability>
   <developerName>true</developerName>
   <title>true</title>
</canvasCapability>
```

```
{
   "developerName": "myNewApp",
   "title": "My New App"
}
```

## Related Topics

- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
