---
title: "ConnectApi.ManagedContentDeliveryDocumentCollection"
domain: apex-reference
topic: connectapimanagedcontentdeliverydocumentcollection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.142Z
keywords: [ConnectApi.ManagedContentDeliveryDocumentCollection]
---

# ConnectApi.ManagedContentDeliveryDocumentCollection

# ConnectApi.ManagedContentDeliveryDocumentCollection

Managed content delivery document collection.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| channelInfo | ConnectApi.​ManagedContent​ChannelSummary | Information about the managed content channel. | 55.0–61.0 |
| channelSummary | ConnectApi.​ManagedContent​DeliveryChannel​SummaryRepresentation | Summary information about the managed content delivery channel. | 62.0 |
| contents | List<ConnectApi.​AbstractManaged​ContentDelivery​Document> | List of managed content delivery documents. | 55.0 |
| currentPageUrl | String | URL to the current page of managed content records. | 55.0 |
| nextPageUrl | String | URL to the next page of managed content records. | 55.0 |
| previousPageUrl | String | URL to the previous page of managed content records. | 55.0 |
| references | Map<String, ConnectApi.​AbstractManaged​ContentReference> | Map of references with contentKey as the key. | 55.0 |
| referencesList | List<ConnectApi.​AbstractManaged​ContentReference> | List of references. | 55.0 |