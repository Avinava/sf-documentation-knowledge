---
title: "ConnectApi.ChatterStreamPage"
domain: apex-reference
topic: connectapichatterstreampage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.842Z
keywords: [ConnectApi.ChatterStreamPage]
---

# ConnectApi.ChatterStreamPage

# ConnectApi.ChatterStreamPage

A collection of Chatter feed streams.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currentPageUrl | String | URL to the current page of streams. | 39.0 |
| items | List<ConnectApi.​ChatterStream> | List of streams. | 39.0 |
| nextPageUrl | String | URL to the next page of streams.In version 39.0, all streams are included in currentPageUrl and nextPageUrl is null. | 39.0 |
| total | Integer | Total number of streams in the collection. | 39.0 |