---
title: "Managed Content Delivery Document"
domain: chatterapi
topic: managed-content-delivery-document
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.457Z
estimatedTokens: 481
keywords: [Managed, Content, Delivery, Document, scope]
---

# Managed Content Delivery Document

> Managed content in delivery scope.

# Managed Content Delivery Document

Managed content in delivery scope.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| channelInfo | Managed Content Channel Summary | Information about the managed content channel. | Small, 54.0 | 54.0–61.0 |
| channelSummary | Managed Content Delivery Channel Summary | Summary information about the managed content delivery channel. | Small, 62.0 | 62.0 |
| contentBody | Map<String, Object> | Map of properties of the managed content with their values. | Big, 54.0 | 54.0 |
| contentKey | String | Globally unique identifier (GUID) for the managed content. | Small, 54.0 | 54.0 |
| contentType | Managed Content Type Summary | Type of managed content. | Small, 54.0 | 54.0 |
| language | String | Language locale of the managed content. | Small, 54.0 | 54.0 |
| managedContentId | String | ID of the managed content. | Small, 54.0 | 54.0 |
| publishedDate | String | Most recent publish date of the managed content. | Small, 54.0 | 54.0 |
| references | Map<String, Managed Content Reference>ORMap<String, Managed Content Reference Summary> | Map of references with contentKey as the key. | Small, 54.0Big, 55.0 | 54.0 |
| referencesList | Managed Content Reference[]ORManaged Content Reference Summary[] | List of references. | Small, 54.0Big, 55.0 | 54.0 |
| resourceUrl | String | URL to the single content delivery resource. | Small, 55.0 | 55.0 |
| title | String | Title of the managed content. | Small, 54.0 | 54.0 |
| unauthenticatedUrl | String | Public URL for the managed content. | Small, 54.0 | 54.0 |
| urlName | String | URL name of the managed content. | Small, 54.0 | 54.0 |

#### See Also

-   [Managed Content Delivery Document Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_delivery_document_collection.htm "Managed content delivery document collection.")

## Related Topics

- Managed Content Channel Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_channel_summary.htm)
- Managed Content Delivery Channel Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_delivery_channel_summary.htm)
- Managed Content Type Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_type_summary.htm)
- Managed Content Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_reference.htm)
- Managed Content Reference Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_reference_summary.htm)
- Managed Content Delivery Document Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_delivery_document_collection.htm)
