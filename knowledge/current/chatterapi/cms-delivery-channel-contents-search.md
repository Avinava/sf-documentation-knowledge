---
title: "CMS Delivery Channel Contents Search"
domain: chatterapi
topic: cms-delivery-channel-contents-search
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.834Z
estimatedTokens: 300
keywords: [CMS, Delivery, Channel, Contents, Search, content, Experience, Cloud, site]
---

# CMS Delivery Channel Contents Search

> Search for content in a channel or an Experience Cloud site.

# CMS Delivery Channel Contents Search

Search for content in a channel or an Experience Cloud site.

Resource

```

```

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

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

Response body for POST

[Managed Content Delivery Search Result Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_delivery_search_result_collection.htm "Collection of paginated managed content delivery search results.")

## Code Examples

```
/connect/cms/delivery/channels/channelId/contents/enhanced-search
```

```
/connect/sites/siteId/cms/delivery/contents/enhanced-search
```

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
- Managed Content Delivery Search Result Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_delivery_search_result_collection.htm)
