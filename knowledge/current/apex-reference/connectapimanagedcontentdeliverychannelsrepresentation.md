---
title: "ConnectApi.ManagedContentDeliveryChannelsRepresentation"
domain: apex-reference
topic: connectapimanagedcontentdeliverychannelsrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:39.134Z
keywords: [ConnectApi.ManagedContentDeliveryChannelsRepresentation, See]
---

# ConnectApi.ManagedContentDeliveryChannelsRepresentation

# ConnectApi.ManagedContentDeliveryChannelsRepresentation

Collection of managed content delivery channels.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| channels | List<ConnectApi.​ManagedContent​DeliveryChannel​SummaryRepresentation> | List of managed content delivery channels. | 62.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | 62.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 62.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | 62.0 |
| totalChannels | Integer | Total number of managed content delivery channels. | 62.0 |

#### See Also

-   [getAllDeliveryChannels(pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#unique_1286680801 "Get managed content delivery channels for the context user.")