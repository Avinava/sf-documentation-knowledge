---
title: "Product Classification Details (POST)"
domain: revenue-cloud
topic: product-classification-details-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.871Z
estimatedTokens: 299
keywords: [Product, Classification, POST, Retrieve, records]
---

# Product Classification Details (POST)

> Retrieve the details for a list of product classification records.

# Product Classification Details (POST)

Retrieve the details for a list of product classification records.

This API fetches metadata, attributes, and attribute categories associated with product classifications across supported catalog systems.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| catalogSystems | String[] | Name of the catalog system. Valid value is:epc—Enterprise Product Catalog | Optional | 66.0 |
| product​ClassificationIds | String[] | List of product classification IDs for which you want to retrieve product details. In the epc catalog system, these values are the Product2 record IDs. | Required | 66.0 |

Response body for POST

[Product Classification Details Collection](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_product_classification_details_collection_output.htm "Output representation that contains a collection of product classification details along with any processing errors.")

## Code Examples

```
/revenue/product-catalog-management/product-classifications/details
```

```
https://yourInstance.salesforce.com/services/data/v66.0/revenue/product-catalog-management/product-classifications/details
```

```
{
  "productClassificationIds": [
    "01txx0000006iFMAAY",
    "01txx0000006iGxAAY"
  ],
  "catalogSystems": [
    "epc"
  ]
}
```

## Related Topics

- Product Classification Details
              Collection (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_product_classification_details_collection_output.htm)
