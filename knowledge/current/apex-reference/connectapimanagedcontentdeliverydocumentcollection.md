---
title: "ConnectApi.ManagedContentDeliveryDocumentCollection"
domain: apex-reference
topic: connectapimanagedcontentdeliverydocumentcollection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.784Z
estimatedTokens: 272
keywords: [ConnectApi.ManagedContentDeliveryDocumentCollection, Managed, content, delivery, document, collection.]
---

# ConnectApi.ManagedContentDeliveryDocumentCollection

> Managed content delivery document collection.

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

## Related Topics

- ConnectApi.​ManagedContent​ChannelSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel_summary.htm)
- ConnectApi.​ManagedContent​DeliveryChannel​SummaryRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_channel_summary.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​AbstractManaged​ContentDelivery​Document (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_managed_content_delivery_document.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- ConnectApi.​AbstractManaged​ContentReference (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_managed_content_reference.htm)
