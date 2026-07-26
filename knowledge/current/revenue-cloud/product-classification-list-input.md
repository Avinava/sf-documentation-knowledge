---
title: "Product Classification List Input"
domain: revenue-cloud
topic: product-classification-list-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-07-26T01:59:41.008Z
estimatedTokens: 343
keywords: [Product, Classification, retrieve, records]
---

> Input representation of the request to retrieve a list of product classification
    records.

# Product Classification List Input

Input representation of the request to retrieve a list of product classification records.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| catalogSystem | String | Name of the catalog system. Valid values are:pcm—Product Catalog Managementepc—Enterprise Product CatalogIf unspecified, the default catalog system is pcm. | Optional | 67.0 |
| filter | Criteria Input | Criteria to filter the product classification records. The supported property is name. The supported operators are:eqincontainsIf multiple criteria are specified, they're combined by using the and operator.Each criterion supports only the property, operator, and value fields. | Optional | 67.0 |
| offset | Integer | Number of records to skip. The default value is 0. | Optional | 67.0 |
| pageSize | Integer | Specifies the number of records per page. Valid values are 5, 10, 25, 50, and 100. If unspecified, the default value is 100. | Optional | 67.0 |
| searchTerm | String | String used to search for product classifications with the product classification name containing the search term. | Optional | 67.0 |
| sort | Order Input | Sort order for the product classifications.If unspecified, the default sort order is by name in ascending order. | Optional | 67.0 |

## Code Examples

```
{
  "catalogSystem": "pcm",
  "searchTerm": "Mobile",
  "filter": {
    "criteria": [
      {
        "property": "name",
        "operator": "contains",
        "value": "Mobile"
      }
    ]
  },
  "sort": {
    "orders": [
      {
        "property": "name",
        "direction": "asc"
      }
    ]
  },
  "pageSize": 25,
  "offset": 0
}
```

## Related Topics

- Criteria Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_criteria.htm)
- Order
                        Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_order.htm)
