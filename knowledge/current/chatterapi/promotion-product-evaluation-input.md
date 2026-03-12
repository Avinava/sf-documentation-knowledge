---
title: "Promotion Product Evaluation Input"
domain: chatterapi
topic: promotion-product-evaluation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.608Z
estimatedTokens: 439
keywords: [Promotion, Product, Evaluation, Input, Finds, promotions, products, eligible, computes, discounts, Supports, domain, dependent, requests, webstoreId]
---

# Promotion Product Evaluation Input

> Finds promotions that products are eligible for and computes the discounts. Supports
    domain dependent requests based on webstoreId and effectiveAccountId, or domain independent requests using an
    external dataset based on SKUs or product categories.

# Promotion Product Evaluation Input

Finds promotions that products are eligible for and computes the discounts. Supports domain dependent requests based on webstoreId and effectiveAccountId, or domain independent requests using an external dataset based on SKUs or product categories.

JSON example (domain dependent evaluation)

```

```

JSON example (domain independent evaluation)

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment group record. | Required when multi-currency is enabled | 58.0 |
| effectiveAccountId | String | For domain dependent evaluation, this is the ID of the account for which the request is made. For domain independent evaluation, this is a buyer ID from another system. No validation will be performed on this value. | Optional | 58.0 |
| productCategories | Map<String, String> | For domain independent evaluation, this is the map of product IDs to their associated category IDs. | Optional | 58.0 |
| products | Promotion Product Input | List of product objects. | Required | 58.0 |
| segments | String[] | All promotions associated with promotion segments specified in this list are active and can be evaluated against the products. Additionally, any segments associated with a store or buyer group are also still evaluated against the products. If this field is not present, only the promotions associated with a store or buyer group are evaluated. | Required for domain independent evaluation | 58.0 |
| webStoreId | String | ID of the store for which the request is made. If unspecified, defined segments must be used instead. | Optional | 58.0 |

## Code Examples

```
{
    "products": [
            {
               "productId": "01txx000000001dAAA",
               "salesPrice": "60"
            },
            {
               "productId": "01txx000000001dABB",
               "salesPrice": "50"
            } 
        ],
    "effectiveAccountId": "3K0xx0000004CAeCAM",
    "webStoreId": "0ZExx000000001dGAA"
}
```

```
{
     "products": [
        {
           "sku": "sku_1",
           "salesPrice": "60"
        },
        {
           "sku": "sku_2",
           "salesPrice": "50"
        } 
     ],
     "productCategories": {
           "sku_1": ["category_1"],
           "sku_2": ["category_2"]
        },
     "segments": [ "segment1", "segment2" ]
}
```

## Related Topics

- Promotion Product Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_product_input.htm)
