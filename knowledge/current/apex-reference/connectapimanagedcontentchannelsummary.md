---
title: "ConnectApi.ManagedContentChannelSummary"
domain: apex-reference
topic: connectapimanagedcontentchannelsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.778Z
estimatedTokens: 463
keywords: [ConnectApi.ManagedContentChannelSummary, Managed, content, channel]
---

# ConnectApi.ManagedContentChannelSummary

> Managed content channel.

# ConnectApi.ManagedContentChannelSummary

Managed content channel.

Subclass of [ConnectApi.AbstractManagedContentChannelRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_managed_content_channel.htm "Managed content channel.") in version 62.0 and later

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| domainUrl | String | Domain URL of the channel. | 55.0–61.0 |
| id | String | ID of the managed content channel. | 62.0 |
| name | String | Name of the managed content channel. | 54.0 |
| resourceUrl | String | Resource URL to complete information of the channel. | 54.0–61.0 |
| target | ConnectApi.​ManagedContent​ChannelTarget​Summary | Target site associated with the channel. | 54.0–61.0 |
| type | ConnectApi.​ManagedContent​ChannelType | Type of managed content channel. Values are:CloudToCloud—Cloud-to-Cloud integrated channel.Community—Experience Cloud site channel.ConnectedApp—Channel served by a connected app.PublicUnauthenticated—Public channel. All published content is publicly available.UserPermission—Channel backed by a system permission. All published content is available only to users with the permission. | 62.0 |
| url | String | URL to the channel resource. | 62.0 |

#### See Also

-   [ConnectApi.ManagedContentDeliveryDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document.htm "Managed content in delivery scope.")

-   [ConnectApi.ManagedContentCollectionItems](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_collection_items.htm "Managed content collection Items.")

-   [ConnectApi.ManagedContentDeliveryDocumentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document_collection.htm "Managed content delivery document collection.")

## Related Topics

- ConnectApi.AbstractManagedContentChannelRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_managed_content_channel.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ManagedContent​ChannelTarget​Summary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel_target_entity_summary.htm)
- ConnectApi.​ManagedContent​ChannelType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.ManagedContentDeliveryDocument (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document.htm)
- ConnectApi.ManagedContentCollectionItems (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_collection_items.htm)
- ConnectApi.ManagedContentDeliveryDocumentCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document_collection.htm)
