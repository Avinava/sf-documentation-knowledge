---
title: "ConnectApi.ManagedContentMediaSourceNodeValue"
domain: apex-reference
topic: connectapimanagedcontentmediasourcenodevalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.167Z
keywords: [ConnectApi.ManagedContentMediaSourceNodeValue]
---

# ConnectApi.ManagedContentMediaSourceNodeValue

# ConnectApi.ManagedContentMediaSourceNodeValue

Source of managed content media.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| fileName | String | File name of the media source. | 49.0 |
| isExternal | Boolean | Specifies whether the media source is referenced via an external URL (true) or uploaded (false). | 49.0 |
| mediaType | ConnectApi.​ManagedContent​MediaType | Type of managed content media. Values are:DocumentImage | 49.0 |
| mimeType | String | MIME type of the media source. | 49.0 |
| referenceId | String | Reference ID of the uploaded media source. | 49.0 |
| resourceUrl | String | Resource URL of the media source. | 49.0 |
| unauthenticatedUrl | String | URL to the media source for unauthenticated users, or null if the media source isn’t available to external users. | 49.0 |
| url | String | URL to the media source for authenticated users. | 49.0 |