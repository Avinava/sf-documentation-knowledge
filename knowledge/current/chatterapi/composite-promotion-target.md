---
title: "Composite Promotion Target"
domain: chatterapi
topic: composite-promotion-target
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.934Z
estimatedTokens: 332
keywords: [Composite, Promotion, Target, Output, representation, processed]
---

# Composite Promotion Target

> Output representation of the processed promotion target.

# Composite Promotion Target

Output representation of the processed promotion target.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| adjustmentType | String | Adjustment type for the promotion target. Possible values are:FixedAmountOffLineItemTotal—Fixed amount off line item total.FixedAmountOffTransaction—Fixed amount off transaction.FixedAmountOffUnitPrice—Fixed amount off unit price.FixedPrice—Fixed price.PercentageDiscount—Percentage discount.TotalFixedPrice—Total fixed price. | Small, 62.0 | 62.0 |
| adjustmentValue | String | Discount value. | Small, 62.0 | 62.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the promotion target. | Small, 62.0 | 62.0 |
| isMinItem​CountRequired | Boolean | Indicates whether discount apply only when a cart reaches the quantity limit (true) or not (false). | Small, 62.0 | 62.0 |
| restrictionQuantity | String | The maximum number of items that can receive the discount. | Small, 62.0 | 62.0 |
| targetReferenceType | String | Reference type of the promotion target. Possible values are:ShippingTransaction | Small, 62.0 | 62.0 |
| targetReferences | Item Reference[] | Collection of products or categories associated with the promotion target. | Small, 62.0 | 62.0 |

## Related Topics

- Item
                Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_item_reference.htm)
