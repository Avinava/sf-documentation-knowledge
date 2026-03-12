---
title: "Product Search Input"
domain: chatterapi
topic: product-search-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:12.538Z
estimatedTokens: 633
keywords: [Product, Search, Input]
---

# Product Search Input

> Product search.

# Product Search Input

Product search.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| categoryId | String | Category ID returns results for products in this category or its subcategories. If you omit categoryId from the request, all categories are searched. If you specify categoryId and searchTerm, only products in the specified category are searched. | Required if searchTerm isn’t specified | 49.0 |
| fields | String[] | Product fields to return in search results. Search results include fields you have access to. If unspecified, returns the Name, Description, StockKeepingUnit, ProductCode, and Family fields. | Optional | 49.0 |
| grouping | Product Search Grouping Input | Specifies whether to group products in search results and how to group them. If unspecified, the default is the value specified in Search \| Results Display Settings \| Results Grouping. | Optional | 51.0 |
| includePrices | Boolean | Specifies whether to include prices for products in search results (true) or not (false). If unspecified, defaults to false. | Optional | 49.0 |
| includeQuantity​Rule | Boolean | Specifies whether to include purchase quantity rule information for products in search results (true) or not (false). If unspecified, defaults to false. | Optional | 52.0 |
| page | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned.When multiplying the page and pageSize property values together, they can’t exceed 5000. For example, for a pageSize of 20, you can specify a page value up to 250. | Optional | 49.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 200. If unspecified, the default is the value specified in Results per Page in Search \| Results Display Settings.When multiplying the page and pageSize property values together, they can’t exceed 5000. For example, for a pageSize of 20, you can specify a page value up to 250. | Optional | 49.0 |
| refinements | Distinct Value Refinement Input[] | List up to nine refinements (facets) for search results. Buyers or shoppers can select up to 20 values for each refinement. | Optional | 49.0 |
| searchTerm | String | List of up to 32 space-separated search terms. | Required if categoryId isn’t specified | 49.0 |
| sortRuleId | String | ID of the sort rule that specifies the order of products in the search results. | Optional | 52.0 |

## Code Examples

```
{
  "searchTerm": "lightweight",
  "categoryId": "0ZGxx000000006TGAQ", //categoryId for women’s running shoes
  "refinements": [
   {  
      "attributeType": "Custom",
      "nameOrId": "Color__c",
      "values": ["red", "blue"],
      "type": "DistinctValue"
   },
   {  

      "attributeType": "Custom",
      "nameOrId": "Size__c",
      "values": ["5"],
      "type": "DistinctValue"
   }
  ],
  "fields": ["Name", "Description", "StockKeepingUnit", "Size__c", "Arch__c"],
  "grouping": {
     "groupingOption": "VariationParent"
  },
  "page" : 0,
  "pageSize" : 25}
```

## Related Topics

- Product Search Grouping Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_product_search_grouping_input.htm)
- Distinct Value Refinement Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_distinct_value_refinement_input.htm)
