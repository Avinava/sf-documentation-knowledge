---
title: "ConnectApi.ManagedContentDeliveryDocument"
domain: apex-reference
topic: connectapimanagedcontentdeliverydocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.139Z
keywords: [ConnectApi.ManagedContentDeliveryDocument, See]
---

# ConnectApi.ManagedContentDeliveryDocument

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