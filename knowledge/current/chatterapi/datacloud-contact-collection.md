---
title: "Datacloud Contact Collection"
domain: chatterapi
topic: datacloud-contact-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.219Z
estimatedTokens: 231
keywords: [Datacloud, Contact, Collection, Purchase, contacts, were, purchased, specific, order]
---

# Datacloud Contact Collection

> Purchase details for all contacts that were purchased for a specific
      order.

# Datacloud Contact Collection

Purchase details for all contacts that were purchased for a specific order.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contacts | Datacloud Contact[] | A list of all the contacts for a specificorderId. | Small, 32.0 | 32.0 |
| current​PageUrl | String | The current page of contacts. | Medium, 32.0 | 32.0 |
| nextPageUrl | String | The URL to the next page of contacts. If there’s only one page of contacts, the value is null. | Small, 32.0 | 32.0 |
| previous​PageUrl | String | The URL to the previous page of contacts. The value is null when there’s only one page of contacts. | Medium, 32.0 | 32.0 |
| total | Integer | Number of contacts that are associated with this order. The total number of contacts can be greater than the number of contacts that are displayed on a single page. | Small, 32.0 | 32.0 |

## Related Topics

- Datacloud Contact (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_contact.htm)
