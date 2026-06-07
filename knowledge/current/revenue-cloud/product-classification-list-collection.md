---
title: "Product Classification List Collection"
domain: revenue-cloud
topic: product-classification-list-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-07T00:37:40.400Z
estimatedTokens: 178
keywords: [Product, Classification, Collection, records, along, any, processing, errors]
---

> Output representation that contains a collection of product classification records
    along with any processing errors.

# Product Classification List Collection

Output representation that contains a collection of product classification records along with any processing errors.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Product Catalog Management Error[] | List of errors encountered during the processing of the API request. | Small, 67.0 | 67.0 |
| productClassifications | Product Classification[] | List of product classification records that match the request query. | Small, 67.0 | 67.0 |
| success | Boolean | Indicates whether the API request is successful (true) or has failed (false). | Small, 67.0 | 67.0 |

## Code Examples

```
{
  "success": true,
  "errors": [],
  "productClassifications": [
    {
      "id": "11BT10000004C9SMAU",
      "name": "Mobile Devices",
      "code": "MOB_DEV",
      "parentProductClassificationId": "11BDU0000004JXq2AM",
      "status": "Active"
    },
    {
      "id": "11BT10000004C9TMAU",
      "name": "Mobile Accessories",
      "code": "MOB_ACC",
      "status": "Active"
    }
  ]
}
```

## Related Topics

- Product Catalog Management Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_p_c_m_error_output.htm)
- Product Classification (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_product_classification_output.htm)
