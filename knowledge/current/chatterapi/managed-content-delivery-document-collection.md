---
title: "Managed Content Delivery Document Collection"
domain: chatterapi
topic: managed-content-delivery-document-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.462Z
estimatedTokens: 313
keywords: [Managed, Content, Delivery, Document, Collection]
---

# Managed Content Delivery Document Collection

> Managed content delivery document collection.

# Managed Content Delivery Document Collection

Managed content delivery document collection.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| channelInfo | Managed Content Channel Summary | Information about the managed content channel. | Small, 55.0 | 55.0–61.0 |
| channelSummary | Managed Content Delivery Channel Summary | Summary information about the managed content delivery channel. | Small, 62.0 | 62.0 |
| contents | Managed Content Delivery Document[]ORManaged Content Delivery Document Summary[] | List of managed content delivery documents. | Big, 55.0 | 55.0 |
| currentPageUrl | String | URL to the current page of managed content records. | Small, 55.0 | 55.0 |
| nextPageUrl | String | URL to the next page of managed content records. | Small, 55.0 | 55.0 |
| previousPageUrl | String | URL to the previous page of managed content records. | Small, 55.0 | 55.0 |
| references | Map<String, Managed Content Reference>ORMap<String, Managed Content Reference Summary> | Map of references with contentKey as the key. | Big, 55.0 | 55.0 |
| referencesList | Managed Content Reference[]ORManaged Content Reference Summary[] | List of references. | Big, 55.0 | 55.0 |

## Related Topics

- Managed Content Channel Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_channel_summary.htm)
- Managed Content Delivery Channel Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_delivery_channel_summary.htm)
- Managed Content Delivery Document (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_delivery_document.htm)
- Managed Content Delivery Document Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_delivery_document_summary.htm)
- Managed Content Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_reference.htm)
- Managed Content Reference Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_reference_summary.htm)
