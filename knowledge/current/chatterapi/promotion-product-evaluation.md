---
title: "Promotion Product Evaluation"
domain: chatterapi
topic: promotion-product-evaluation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.692Z
estimatedTokens: 246
keywords: [Promotion, Product, Evaluation, Results]
---

# Promotion Product Evaluation

> Results of a promotion product evaluation.

# Promotion Product Evaluation

Results of a promotion product evaluation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment group record. | Small, 58.0 | 58.0 |
| errorMessage | String | Promotion product evaluation error message. | Small, 58.0 | 58.0 |
| isSuccess | Boolean | Specifies whether the promotion product evaluation is a success (true) or not (false) | Small, 58.0 | 58.0 |
| productId | String | ID of the product. | Small, 58.0 | 58.0 |
| promotionPriceAdjustmentList | Promotion Price Adjustment | Represents the list of Promotion Discounts | Small, 58.0 | 58.0 |
| promotionalPrice | String | Promotional price of the product | Small, 58.0 | 58.0 |
| salesPrice | String | Sales price of the product. | Small, 58.0 | 58.0 |
| sku | String | Stock keeping unit (SKU) of the product. | Small, 58.0 | 58.0 |

## Related Topics

- Promotion Price Adjustment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_price_adjustment.htm)
