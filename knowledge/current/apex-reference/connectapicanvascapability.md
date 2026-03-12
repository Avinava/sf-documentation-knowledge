---
title: "ConnectApi.CanvasCapability"
domain: apex-reference
topic: connectapicanvascapability
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:26.264Z
estimatedTokens: 321
keywords: [ConnectApi.CanvasCapability, feed, element, capability, renders, canvas, app.]
---

# ConnectApi.CanvasCapability

> If a feed element has this capability, it renders a canvas
    app.

# ConnectApi.CanvasCapability

If a feed element has this capability, it renders a canvas app.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| description | String | A description of the canvas app. The maximum size is 255 characters. | 32.0 |
| developerName | String | The API name (developer name) of the client app. | 32.0 |
| height | String | The height of the canvas app in pixels. | 32.0 |
| icon | ConnectApi.Icon | The icon for the canvas app. | 32.0 |
| namespacePrefix | String | A unique namespace prefix for the canvas app. | 32.0 |
| parameters | String | JSON parameters passed to the canvas app. | 32.0 |
| thumbnailUrl | String | A thumbnail URL to a preview image. The maximum thumbnail size is 120 pixels by 120 pixels. | 32.0 |
| title | String | A title for the canvas link. | 32.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- ConnectApi.FeedElementCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.Icon (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_icon.htm)
- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
