---
title: "Guided Selection (POST)"
domain: revenue-cloud
topic: guided-selection-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.738Z
estimatedTokens: 378
keywords: [Guided, Selection, POST, Retrieve, products, identifier, search, terms, captures, user, requirements, show, suitable]
---

# Guided Selection (POST)

> Retrieve a list of products based on the response identifier or search
      terms of a guided selection. Guided selection captures user requirements to show suitable
      products.

# Guided Selection (POST)

Retrieve a list of products based on the response identifier or search terms of a guided selection. Guided selection captures user requirements to show suitable products.

Resource

```

```

Resource example

```

```

Available version

62.0

HTTP methods

POST

Request body for POST

JSON example

This input request includes properties from the Products List API. To learn about the other input properties, see [Products List (POST)](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_products_list.htm "HTML (New Window)").

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| guided​Selection​ResponseId | String | Response identifier of the guided selection. | Required if the searchTerms property isn’t specified. | 62.0 |
| searchTerms | Guided Selection Search Term Input[] | Search terms of the guided selection. | Required if the guided​Selection​ResponseId property isn’t specified. | 62.0 |

If both the guided​Selection​ResponseId and searchTerms properties are specified, then the searchTerms property is considered in the input request.

Response body for POST

[Guided Selection](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_guided_selection_output.htm "Output representation of the details of a guided selection.")

## Code Examples

```
/connect/cpq/products/guided-selection
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/cpq/products/guided-selection
```

```
{
  "correlationId": "corrId",
  "catalogId": "0ZSxx0000000001GAA",
  "priceBookId": "pricebookId",
  "limit": 10,
  "cursor": "MTAwMDAwMDAwNg==",
  "userContext": {
    "accountId": "accId"
  },
  "guidedSelectionResponseId": "ABCxx0000000001GAA",
  "searchTerms": [
    {
      "term": "IPhone"
    },
    {
      "term": "4GB"
    },
    {
      "term": "64GB"
    }
  ],
  "enableQualification": true,
  "enablePricing": true,
  "includeCatalogDetails": false
}
```

## Related Topics

- Guided Selection Search Term Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_guided_selection_search_term_input.htm)
- Guided
              Selection (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_guided_selection_output.htm)
