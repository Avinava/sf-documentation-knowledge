---
title: "Managed Content Delivery Search Filters
    Input"
domain: chatterapi
topic: managed-content-delivery-search-filters-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.014Z
estimatedTokens: 218
keywords: [Managed, Content, Delivery, Search, Filters, Input]
---

# Managed Content Delivery Search Filters
    Input

> Filters used to search managed content.

# Managed Content Delivery Search Filters Input

Filters used to search managed content.

Root XML tag

<ManagedContentDeliverySearchFiltersRep>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentTypeFQNs | String[] | Standard content type fully qualified names to filter managed content. Filtering by custom content type isn't supported. | Optional | 64.0 |
| language | String | Language to filter managed content. | Optional | 64.0 |
| taxonomyQuery | Managed Content Delivery Search Taxonomy Query Input | Taxonomy query to filter managed content. | Optional | 64.0 |

#### See Also

-   [Managed Content Delivery Search Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_delivery_search_input.htm "Search managed content in a channel.")

## Code Examples

```
{
"taxonomyQuery":{
    "expression": "'15dxx000001X8UzBBJ' OR '15dxx000001X8UzBBD'",
    "doesSearchInHierarchy": false
    },
"language": "en_US",
"contentTypeFQNs": ["sfdc_cms__news", "sfdc_cms__marketing"]
}
```

## Related Topics

- Managed Content Delivery Search
                                                Taxonomy Query Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_delivery_search_taxonomy_query_re.htm)
- Managed Content Delivery Search Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_delivery_search_input.htm)
