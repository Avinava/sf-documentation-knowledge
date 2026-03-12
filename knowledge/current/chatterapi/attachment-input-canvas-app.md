---
title: "Attachment Input: Canvas App"
domain: chatterapi
topic: attachment-input-canvas-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:10.984Z
estimatedTokens: 386
keywords: [Attachment, Input, Canvas, App]
---

# Attachment Input: Canvas App

> Canvas app attachment input.

# Attachment Input: Canvas App

Canvas app attachment input.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This request body isn’t available in version 32.0 and later. In version 32.0 and later, use [Canvas Capability Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_canvas_capability_input.htm "Create or update a canvas app associated with a feed element.").

XML

In XML request bodies, attachmentType is an attribute of the <attachment> element.

```

```

JSON

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attachmentType | String | The attachment type. Must contain the value Canvas. | 29.0–31.0 |
| description | String | Optional. The description of the canvas app. | 29.0–31.0 |
| developerName | String | The developer name (API name) of the canvas app | 29.0–31.0 |
| height | String | Optional. The height of the canvas app in pixels. Default height is 200 pixels. | 29.0–31.0 |
| namespacePrefix | String | Optional. The namespace prefix of the Developer Edition organization in which the canvas app was created. | 29.0–31.0 |
| parameters | String | Optional. Parameters passed to the canvas app in JSON format. The JSON must be escaped. | 29.0–31.0 |
| thumbnailUrl | String | Optional. The URL to a thumbnail image for the canvas app. Maximum dimensions are 120x120 pixels. | 29.0–31.0 |
| title | String | Optional. The title of the link used to call the canvas app. | 29.0–31.0 |

## Code Examples

```
<attachment attachmentType="Canvas">
   <developerName>TravelApp</developerName>
</attachment>
```

```
{"attachment" :
  {
    "attachmentType" : "Canvas",
    "developerName" : "TravelApp",
    "namespacePrefix" : "dev_org",
    "parameters" : "{&quot;itinerary&quot;:&quot;123&quot;}",
    "height" : "250px",
    "title" : "TravelItinerary",
  }
}
```

## Related Topics

- Canvas Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_canvas_capability_input.htm)
