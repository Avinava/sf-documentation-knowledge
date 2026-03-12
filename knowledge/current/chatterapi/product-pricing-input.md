---
title: "Product Pricing Input"
domain: chatterapi
topic: product-pricing-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.526Z
estimatedTokens: 181
keywords: [Product, Pricing, Input, representation]
---

# Product Pricing Input

> Input representation of product pricing details.

# Product Pricing Input

Input representation of product pricing details.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyISOCode | String | The three-letter ISO 4217 currency code associated with the product price.Products are priced using the currency for the buyer account or guest buyer profile. If your store doesn’t support the currency for the buyer account or guest buyer profile, products are priced using the default currency for your store. | Optional | 61.0 |
| listPrice | String | The list price of the product. | Optional | 61.0 |
| unitPrice | String | The unit price of the product | Optional | 61.0 |

## Code Examples

```
{
  "currencyIsoCode": "USD",
  "listPrice": 49.99,
  "salePrice": 59.99
}
```
