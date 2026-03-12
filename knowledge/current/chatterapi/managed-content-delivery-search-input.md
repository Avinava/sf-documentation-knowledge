---
title: "Managed Content Delivery Search Input"
domain: chatterapi
topic: managed-content-delivery-search-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.019Z
estimatedTokens: 259
keywords: [Managed, Content, Delivery, Search, Input, channel]
---

# Managed Content Delivery Search Input

> Search managed content in a channel.

# Managed Content Delivery Search Input

Search managed content in a channel.

Root XML tag

<ManagedContentDeliverySearchInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filters | Managed Content Delivery Search Filters Input | Filters used to search managed content. | Optional | 64.0 |
| page | Integer | Number of the page you want returned. Starts at 0. If you don't specify a value or if you specify 0, the first page is returned. | Optional | 64.0 |
| pageSize | Integer | Number of items per page. Valid values are from 1 to 250. If you don't specify a value, the default is 25. | Optional | 64.0 |
| queryTerm | String | Query term used as key word to search managed content. | Required | 64.0 |

#### See Also

-   [CMS Delivery Channel Contents Search](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_delivery_contents_search.htm "Search for content in a channel or an Experience Cloud site.")

## Code Examples

```
{
"queryTerm": "BMW",
"filters":{
    "taxonomyQuery":{
        "expression": "'15dxx000001X8UzBBJ' OR '15dxx000001X8UzBBD'",
        "doesSearchInHierarchy": false
        },
    "language": "en_US",
    "contentTypeFQNs": ["sfdc_cms__news", "sfdc_cms__marketing"]
    },
"page": 1,
"pageSize": 10
}
```

## Related Topics

- Managed Content Delivery Search
                                                Filters Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_delivery_search_filters_re.htm)
- CMS Delivery Channel Contents Search (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_delivery_contents_search.htm)
