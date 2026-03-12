---
title: "ConnectApi.ManagedContentDeliveryDocument"
domain: apex-reference
topic: connectapimanagedcontentdeliverydocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.827Z
estimatedTokens: 544
keywords: [Managed, content, delivery, scope]
---

# ConnectApi.ManagedContentDeliveryDocument

> Managed content in delivery scope.

# ConnectApi.ManagedContentDeliveryDocument

Managed content in delivery scope.

Subclass of [ConnectApi.AbstractManagedContentDeliveryDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_managed_content_delivery_document.htm "Managed content delivery document.") in version 55.0 and later. Properties with an available version of 54.0 only are included in [ConnectApi.AbstractManagedContentDeliveryDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_managed_content_delivery_document.htm "Managed content delivery document.") in version 55.0 and later.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| channelInfo | ConnectApi.​ManagedContent​ChannelSummary | Information about the managed content channel. | 54.0–61.0 |
| channelSummary | ConnectApi.​ManagedContent​DeliveryChannel​SummaryRepresentation | Summary information about the managed content delivery channel. | 62.0 |
| contentBody | Map<String, Object> | Map of properties of the managed content with their values. | 54.0 |
| contentKey | String | Globally unique identifier (GUID) for the managed content. | 54.0 only |
| contentType | ConnectApi.​ManagedContent​TypeSummary | Type of managed content. | 54.0 only |
| language | String | Language locale of the managed content. | 54.0 only |
| managedContentId | String | ID of the managed content. | 54.0 only |
| publishedDate | Datetime | Most recent publish date of the managed content. | 54.0 only |
| references | Map<String, ConnectApi.​AbstractManaged​ContentReference> | Map of references with contentKey as the key. | 54.0 |
| referencesList | List<ConnectApi.​AbstractManaged​ContentReference> | List of references. | 54.0 |
| title | String | Title of the managed content. | 54.0 only |
| unauthenticatedUrl | String | Public URL for the managed content. | 54.0 only |
| urlName | String | URL name of the managed content. | 54.0 only |

#### See Also

-   [ConnectApi.ManagedContentDeliveryDocumentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document_collection.htm "Managed content delivery document collection.")

## Related Topics

- ConnectApi.AbstractManagedContentDeliveryDocument (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_managed_content_delivery_document.htm)
- ConnectApi.​ManagedContent​ChannelSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel_summary.htm)
- ConnectApi.​ManagedContent​DeliveryChannel​SummaryRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_channel_summary.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ManagedContent​TypeSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_type_summary.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​AbstractManaged​ContentReference (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_managed_content_reference.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.ManagedContentDeliveryDocumentCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document_collection.htm)
