---
title: "Datacloud Company Collection"
domain: chatterapi
topic: datacloud-company-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.210Z
estimatedTokens: 217
keywords: [Datacloud, Company, Collection, Purchase, companies, were, purchased, specific, order]
---

# Datacloud Company Collection

> Purchase details for all companies that were purchased for a specific
      order.

# Datacloud Company Collection

Purchase details for all companies that were purchased for a specific order.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| companies | Datacloud Company[] | A list of all companies for a specific order. | Small, 32.0 | 32.0 |
| current​PageUrl | String | The URL to the current page of companies. | Medium, 32.0 | 32.0 |
| nextPageUrl | String | The URL to the next page of companies. If there isn’t a next page, value is null. | Small, 32.0 | 32.0 |
| previous​PageUrl | String | The URL to the previous page of companies. The value is null if there isn’t a previous page. | Medium, 32.0 | 32.0 |
| total | Integer | Number of companies in the order. Users can set how many companies are displayed on a page. The default page size is 25. | Small, 32.0 | 32.0 |

## Related Topics

- Datacloud Company (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_company.htm)
