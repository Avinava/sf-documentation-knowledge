---
title: "ConnectApi.CanvasAttachmentInput"
domain: apex-reference
topic: connectapicanvasattachmentinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.857Z
keywords: [ConnectApi.CanvasAttachmentInput, Important]
---

# ConnectApi.CanvasAttachmentInput

# ConnectApi.CanvasAttachmentInput

Used to attach a canvas app to a feed item.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This class isn’t available in version 32.0 and later. In version 32.0 and later, use [ConnectApi.CanvasCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_canvas_capability.htm "Create or update a canvas app associated with a feed element.").

Subclass of [Connectapi.FeedItemAttachmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_FeedItemAtt.htm "Used to attach a file to a feed item.").

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| description | String | Optional. The description of the canvas app. | 29.0–31.0 |
| developerName | String | The developer name (API name) of the canvas app | 29.0–31.0 |
| height | String | Optional. The height of the canvas app in pixels. Default height is 200 pixels. | 29.0–31.0 |
| namespacePrefix | String | Optional. The namespace prefix of the Developer Edition organization in which the canvas app was created. | 29.0–31.0 |
| parameters | String | Optional. Parameters passed to the canvas app in JSON format. Example:{'isUpdated'='true'} | 29.0–31.0 |
| thumbnailUrl | String | Optional. A URL to a thumbnail image for the canvas app. Maximum dimensions are 120x120 pixels. | 29.0–31.0 |
| title | String | The title of the link used to call the canvas app. | 29.0–31.0 |