---
title: "Feed Item Attachment: Canvas Template"
domain: chatterapi
topic: feed-item-attachment-canvas-template
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:18.738Z
estimatedTokens: 407
keywords: [Feed, Item, Attachment, Canvas, Template]
---

# Feed Item Attachment: Canvas Template

> Canvas template feed item attachment.

# Feed Item Attachment: Canvas Template

Canvas template feed item attachment.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This response body isn’t available in version 32.0 and later. In version 32.0 and later, [Canvas Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_canvas_capability.htm "If a feed element has this capability, it renders a canvas app.") is used.

| Property | Type | Description | Filter Type and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Optional. Description of the canvas app. The maximum length of this field is 500 characters. | Small, 29.0 | 29.0–31.0 |
| developerName | String | The developer name (API name) of the canvas app | Small, 29.0 | 29.0–31.0 |
| height | String | Optional. The height of the canvas app in pixels. Default height is 200 pixels. | Small, 29.0 | 29.0–31.0 |
| icon | Icon | The canvas app icon | Small, 29.0 | 29.0–31.0 |
| namespacePrefix | String | Optional. The namespace prefix of the Developer Edition organization in which the canvas app was created. | Small, 29.0 | 29.0–31.0 |
| parameters | String | Optional. Parameters passed to the canvas app in JSON format. Example:{'isUpdated'='true'} | Small, 29.0 | 29.0–31.0 |
| thumbnailUrl | String | Optional. The URL to a thumbnail image for the canvas app. Maximum dimensions are 120x120 pixels. | Small, 29.0 | 29.0–31.0 |
| title | String | The title of the link used to call the canvas app | Small, 29.0 | 29.0–31.0 |
| type | String | Canvas | Small, 29.0 | 29.0–31.0 |

## Related Topics

- Canvas Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_canvas_capability.htm)
- Icon (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_icon.htm)
