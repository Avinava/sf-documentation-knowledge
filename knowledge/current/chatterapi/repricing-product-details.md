---
title: "Repricing, Product Details"
domain: chatterapi
topic: repricing-product-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.596Z
estimatedTokens: 388
keywords: [Repricing, Product, web, store]
---

# Repricing, Product Details

> Get details of a product in a web store.

# Repricing, Product Details

Get details of a product in a web store.

Resource

```

```

Available version

55.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyCode | String | ISO currency code. If you pass null, the default store value is used. | Optional | 55.0 |
| effectiveAccountId | String | Effective Account ID. Required for B2B stores. For other stores, pass null. | Required for B2B stores | 55.0 |
| excludeAttributeSetInfo | Boolean | Specifies whether the attribute set information for the product is returned. | Optional |  |
| excludeBundleChildrenInfo | Boolean | Specifies whether the child product information for the product bundle is returned. | Optional | 64.0 |
| excludeMedia | Boolean | Specifies whether the media groups and default images of the product are returned. | Optional |  |
| excludeQuantityRule | Boolean | Specifies whether the quantity rule information for the product is returned. | Optional |  |
| excludeVariationInfo | Boolean | Specifies whether the variation information for the product is returned. | Optional |  |
| excludePrices | Boolean | Specifies whether the prices for the product is returned. | Optional |  |
| locale | String | Locale. If you pass null, the default store value is used. | Optional | 55.0 |

Response body for POST

[Product Details Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_details_output.htm "Details about a product.")

## Code Examples

```
/commerce/order-management/webstores/webstoreId/products/skuOrProductId
```

## Related Topics

- Product Details Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_details_output.htm)
