---
title: "ConnectApi.CanvasTemplateAttachment"
domain: apex-reference
topic: connectapicanvastemplateattachment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:26.436Z
estimatedTokens: 405
keywords: [ConnectApi.CanvasTemplateAttachment, Attachments, feed, items, CanvasPost]
---

# ConnectApi.CanvasTemplateAttachment

> Attachments in feed items with type CanvasPost.

# ConnectApi.CanvasTemplateAttachment

Attachments in feed items with type CanvasPost.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This class isn’t available in version 32.0 and later. In version 32.0 and later, [ConnectApi.CanvasCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_canvas_capability.htm "If a feed element has this capability, it renders a canvas app.") is used.

Subclass of [ConnectApi.FeedItemAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm "Feed item attachment.").

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| description | String | Optional. Description of the canvas app. The maximum length of this field is 500 characters. | 29.0–31.0 |
| developerName | String | Specifies the developer name (API name) of the canvas app. | 29.0–31.0 |
| height | String | Optional. The height of the canvas app in pixels. Default height is 200 pixels. | 29.0–31.0 |
| icon | ConnectApi.Icon | The canvas app icon. | 29.0–31.0 |
| namespacePrefix | String | Optional. The namespace prefix of the Developer Edition organization in which the canvas app was created. | 29.0–31.0 |
| parameters | String | Optional. Parameters passed to the canvas app in JSON format. Example:{'isUpdated'='true'} | 29.0–31.0 |
| thumbnailUrl | String | Optional. A URL to a thumbnail image for the canvas app. Maximum dimensions are 120x120 pixels. | 29.0–31.0 |
| title | String | Specifies the title of the link used to call the canvas app. | 29.0–31.0 |

## Related Topics

- ConnectApi.CanvasCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_canvas_capability.htm)
- ConnectApi.FeedItemAttachment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.Icon (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_icon.htm)
