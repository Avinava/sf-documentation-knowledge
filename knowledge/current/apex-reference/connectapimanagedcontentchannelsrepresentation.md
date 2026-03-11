---
title: "ConnectApi.ManagedContentChannelsRepresentation"
domain: apex-reference
topic: connectapimanagedcontentchannelsrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:39.104Z
keywords: [ConnectApi.ManagedContentChannelsRepresentation, See]
---

# ConnectApi.ManagedContentChannelsRepresentation

# ConnectApi.ManagedContentChannelsRepresentation

Collection of managed content channels.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| channels | List<ConnectApi.​AbstractManaged​ContentChannel​Representation> | List of managed content channels. | 62.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | 62.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 62.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | 62.0 |
| totalChannels | Integer | Total number of managed content channels. | 62.0 |

#### See Also

-   [getManagedContentChannels(pageParam, pageSize, showDetails)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm#apex_ConnectAPI_ManagedContentChannels_getManagedContentChannels_1 "Get managed content channels.")