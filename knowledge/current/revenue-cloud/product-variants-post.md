---
title: "Product Variants (POST)"
domain: revenue-cloud
topic: product-variants-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-07-26T01:59:42.205Z
estimatedTokens: 436
keywords: [Product, Variants, POST, Retrieve, variation, parent, variant, products]
---

> Retrieve the variation product associated with one or more parent
      variant products.

# Product Variants (POST)

Retrieve the variation product associated with one or more parent variant products.

A parent variant product is a non-purchasable product that groups related variations. Use this API to retrieve the mapping between parent variant product IDs and their associated variation product IDs.

Resource

```

```

Resource example

```

```

Available version

67.0

Requires Chatter

No

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
| correlation​Id | String | Unique ID to track and associate related events or transactions. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 67.0 |
| parent​Variants​Ids | String[] | List of product IDs for parent variant products whose variations you want to retrieve.If any product ID is blank, invalid, or not found, the API skips that ID and processes the remaining valid IDs. The skipped IDs appear in the inValidProductIds response property. If a product ID is valid but isn't a parent variant product, the API includes it in the nonVariantParentIds response property. | Required | 67.0 |

Response body for POST

[Product Variants](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_product_variants_output.htm "Output representation of the variation products associated with the specified parent variant products.")

## Code Examples

```
/connect/pcm/products/variants
```

```
https://yourInstance.salesforce.com/services/data/v67.0/connect/pcm/products/variants
```

```
{
  "correlationId": "9b6bc520-3c82-4d6c-a458-47590370681a",
  "parentVariantsIds": [
    "01tT1000000F0afIAC",
    "01tT1000000F0agIAC"
  ]
}
```

## Related Topics

- Product
              Variants (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_product_variants_output.htm)
