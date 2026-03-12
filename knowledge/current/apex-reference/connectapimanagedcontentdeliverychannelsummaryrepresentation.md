---
title: "ConnectApi.ManagedContentDeliveryChannelSummaryRepresentation"
domain: apex-reference
topic: connectapimanagedcontentdeliverychannelsummaryrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.818Z
estimatedTokens: 408
keywords: [Summary, managed, content, delivery, channel]
---

# ConnectApi.ManagedContentDeliveryChannelSummaryRepresentation

> Summary information of a managed content delivery channel.

# ConnectApi.ManagedContentDeliveryChannelSummaryRepresentation

Summary information of a managed content delivery channel.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| domainUrl | String | Domain URL of the channel. | 62.0 |
| id | String | ID of the managed content delivery channel. | 62.0 |
| name | String | Name of the managed content channel. | 62.0 |
| resourceUrl | String | Resource URL to complete information of the channel. | 62.0 |
| target | ConnectApi.​ManagedContent​ChannelTarget​Summary | Target site associated with the channel. | 62.0 |
| type | ConnectApi.​ManagedContent​ChannelType | Type of managed content channel. Values are:CloudToCloud—Cloud-to-Cloud integrated channel.Community—Experience Cloud site channel.ConnectedApp—Channel served by a connected app.PublicUnauthenticated—Public channel. All published content is publicly available.UserPermission—Channel backed by a system permission. All published content is available only to users with the permission. | 62.0 |

#### See Also

-   [ConnectApi.ManagedContentDeliveryDocumentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document_collection.htm "Managed content delivery document collection.")

-   [ConnectApi.ManagedContentDeliveryDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document.htm "Managed content in delivery scope.")

-   [ConnectApi.ManagedContentCollectionItems](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_collection_items.htm "Managed content collection Items.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ManagedContent​ChannelTarget​Summary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel_target_entity_summary.htm)
- ConnectApi.​ManagedContent​ChannelType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.ManagedContentDeliveryDocumentCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document_collection.htm)
- ConnectApi.ManagedContentDeliveryDocument (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document.htm)
- ConnectApi.ManagedContentCollectionItems (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_collection_items.htm)
