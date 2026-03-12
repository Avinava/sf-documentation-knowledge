---
title: "Managed Content Delivery Search Taxonomy Query
    Input"
domain: chatterapi
topic: managed-content-delivery-search-taxonomy-query-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.023Z
estimatedTokens: 153
keywords: [Managed, Content, Delivery, Search, Taxonomy, Query, Input, filter]
---

# Managed Content Delivery Search Taxonomy Query
    Input

> Taxonomy query to filter managed content.

# Managed Content Delivery Search Taxonomy Query Input

Taxonomy query to filter managed content.

Root XML tag

<ManagedContentDeliverySearchTaxonomyQueryRep>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| expression | String | Taxonomy term ID expression to filter managed content. | Required if doesSearch​InHierarchy is true. Otherwise, optional | 64.0 |
| doesSearch​InHierarchy | Boolean | Specifies whether to search in the taxonomy term hierarchy (true) or not (false). Default is false. | Optional | 64.0 |

## Code Examples

```
{
"expression": "'15dxx000001X8UzBBJ' OR '15dxx000001X8UzBBD'",
"doesSearchInHierarchy": false
}
```
