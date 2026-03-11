---
title: "ConnectApi.AbstractManagedContentDeliveryDocument"
domain: apex-reference
topic: connectapiabstractmanagedcontentdeliverydocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.788Z
keywords: [ConnectApi.AbstractManagedContentDeliveryDocument, See]
---

# ConnectApi.AbstractManagedContentDeliveryDocument

# ConnectApi.AbstractManagedContentDeliveryDocument

Managed content delivery document.

This class is abstract.

Superclass of:

-   [ConnectApi.ManagedContentDeliveryDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document.htm "Managed content in delivery scope.")
-   [ConnectApi.ManagedContentDeliveryDocumentSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document_summary.htm "Managed content delivery document summary.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| contentKey | String | Globally unique identifier (GUID) for the managed content. | 55.0 |
| contentType | ConnectApi.​ManagedContent​TypeSummary | Type of managed content. | 55.0 |
| language | String | Language locale of the managed content. | 55.0 |
| managedContentId | String | ID of the managed content. | 55.0 |
| publishedDate | Datetime | Most recent publish date of the managed content. | 55.0 |
| resourceUrl | String | URL to the single content delivery resource. | 55.0 |
| title | String | Title of the managed content. | 55.0 |
| unauthenticatedUrl | String | Public URL for the managed content. | 55.0 |
| urlName | String | URL name of the managed content. | 55.0 |

#### See Also

-   [ConnectApi.ManagedContentDeliveryDocumentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document_collection.htm "Managed content delivery document collection.")