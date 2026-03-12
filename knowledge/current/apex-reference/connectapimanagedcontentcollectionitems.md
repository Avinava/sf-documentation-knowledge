---
title: "ConnectApi.ManagedContentCollectionItems"
domain: apex-reference
topic: connectapimanagedcontentcollectionitems
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:27.753Z
estimatedTokens: 463
keywords: [ConnectApi.ManagedContentCollectionItems, Managed, content, collection, Items.]
---

# ConnectApi.ManagedContentCollectionItems

> Managed content collection Items.

# ConnectApi.ManagedContentCollectionItems

Managed content collection Items.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| channelInfo | ConnectApi.​ManagedContent​ChannelSummary | Information about the managed content channel. | 56.0–61.0 |
| channelSummary | ConnectApi.​ManagedContent​DeliveryChannel​SummaryRepresentation | Summary information about the managed content delivery channel. | 62.0 |
| collectionKey | String | Unique identifier for the collection. | 56.0 |
| collectionType | ConnectApi.​ManagedContent​TypeSummary | Type of collection. | 56.0 |
| currentPageUrl | String | URL to the current page. | 63.0 |
| id | String | ID of the collection. | 56.0 |
| items | List<ConnectApi.​ManagedContent​CollectionItem> | List of collection Items. | 56.0 |
| language | String | Language locale of the collection. | 56.0 |
| nextPageUrl | String | URL to the next page. | 63.0 |
| previousPageUrl | String | URL to the previous page. | 63.0 |
| publishedDate | Datetime | Most recent publish date of the collection. | 56.0 |
| title | String | Title of the collection. | 56.0 |
| total | Integer | Total number of items in the current collection detail page. | 56.0 |
| urlName | String | URL name of the collection. | 56.0 |

#### See Also

-   [getCollectionItemsForChannel(channelId, collectionKeyOrId, language)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getCollectionItemsForChannel_1 "Get collection items for a channel.")

-   [getCollectionItemsForSite(siteId, collectionKeyOrId, language)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getCollectionItemsForSite_2 "Get collection items for an Experience Cloud site.")

## Related Topics

- ConnectApi.​ManagedContent​ChannelSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel_summary.htm)
- ConnectApi.​ManagedContent​DeliveryChannel​SummaryRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_channel_summary.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ManagedContent​TypeSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_type_summary.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ManagedContent​CollectionItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_collection_item.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- getCollectionItemsForChannel(channelId, collectionKeyOrId, language) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm)
- getCollectionItemsForSite(siteId, collectionKeyOrId, language) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm)
