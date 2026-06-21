---
title: "Product Classification List (POST)"
domain: revenue-cloud
topic: product-classification-list-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-06-21T00:39:51.454Z
estimatedTokens: 587
keywords: [Product, Classification, POST, Retrieve, records, search, filter, sort, classifications]
---

> Retrieve a list of product classification records. You can also
    search, filter, or sort the product classifications.

# Product Classification List (POST)

Retrieve a list of product classification records. You can also search, filter, or sort the product classifications.

This API retrieves a paginated list of product classification records from the Product Catalog Management (PCM) or Enterprise Product Catalog (EPC) catalog system. You can search for product classifications by name, apply filters, and sort the results.

Resource

```

```

Resource example

```

```

Available version

67.0

HTTP methods

POST

![Note](/docs/resources/img/en-us/262.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

POST methods typically create an item, but for this resource POST is used to retrieve information.

Request body for POST

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

Response body for POST

[Product Classification List Collection](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_product_classification_list_collection_output.htm "Output representation that contains a collection of product classification records along with any processing errors.")

## Code Examples

```
/revenue/product-catalog-management/product-classifications/list
```

```
https://yourInstance.salesforce.com/services/data/v67.0/revenue/product-catalog-management/product-classifications/list
```

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
- Product Classification List
              Collection (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_product_classification_list_collection_output.htm)
