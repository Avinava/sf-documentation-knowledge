---
title: "Managed Content Delivery Search, Experience Cloud Site"
domain: chatterapi
topic: managed-content-delivery-search-experience-cloud-site
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.675Z
estimatedTokens: 279
keywords: [Managed, Content, Delivery, Search, Experience, Cloud, Site]
---

# Managed Content Delivery Search, Experience Cloud Site

> Search managed content in an Experience Cloud site.

# Managed Content Delivery Search, Experience Cloud Site

Search managed content in an Experience Cloud site.

Resource

```

```

Available version

48.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned. | Optional | 48.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 250. If you don’t specify a value, the default size is 25. | Optional | 48.0 |
| queryTerm | String | SOSL query. | Required | 48.0 |
| scope | String | Scope of the content search. Values are:All—Search all text.TitleOnly—Search only title text.If you don’t specify a value, the default is All. | Optional | 48.0 |

Response body for GET

[Managed Content Search Result Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_search_result_collection.htm "Collection of managed content search results.")

## Code Examples

```
/connect/communities/communityId/managed-content/delivery/contents/search
```

## Related Topics

- Managed Content Search Result Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_search_result_collection.htm)
