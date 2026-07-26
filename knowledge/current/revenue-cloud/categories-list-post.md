---
title: "Categories List (POST)"
domain: revenue-cloud
topic: categories-list-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-07-26T01:59:41.412Z
estimatedTokens: 165
keywords: [Categories, POST, subcategories, catalog, API, composite, Product, Discovery]
---

> Get a list of categories and subcategories of a specified catalog.
      This API is a composite API for Product Discovery.

# Categories List (POST)

Get a list of categories and subcategories of a specified catalog. This API is a composite API for Product Discovery.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

```

```

This example shows a sample request to get a list of categories with eligible promotions.

```

```

Response body for POST

[CPQ Base List](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_cpq_base_list_output.htm "Output representation of the list of catalogs, categories, or products based on the request.")

## Code Examples

```
/connect/cpq/categories
```

```
https://yourInstance.salesforce.com/services/data/v67.0/connect/cpq/categories
```

```
{
  "correlationId": "9cbb9650-48c5-11ed-96d1-0afcf185843b",
  "catalogId": "0ZSxx000000009hGAA",
  "userContext": {
      "accountId": "001xx0000000001AAA",
      "contactId": "003xx00000000D7AAI"
    }
}
```

```
{
  "correlationId": "9cbb9650-48c5-11ed-96d1-0afcf185843b",
  "catalogId": "0ZSxx000000009hGAA",
  "userContext": {
    "accountId": "001xx0000000001AAA",
    "contactId": "003xx00000000D7AAI"
  },
  "usePromotions": true
}
```

## Related Topics

- CPQ Base List (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_cpq_base_list_output.htm)
