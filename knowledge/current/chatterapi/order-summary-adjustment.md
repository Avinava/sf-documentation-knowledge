---
title: "Order Summary Adjustment"
domain: chatterapi
topic: order-summary-adjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.128Z
estimatedTokens: 349
keywords: [Order, Summary, Adjustment, associated]
---

# Order Summary Adjustment

> Adjustment associated with an order summary.

# Order Summary Adjustment

Adjustment associated with an order summary.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| amount | String | Amount associated with the adjustment. | Small, 53.0 | 53.0 |
| basisReferenceDisplayName | String | Display name for secondary cause of the adjustment (for example, Null or the CouponCode that’s associated with a Coupon) | Small, 54.0 | 53.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the adjustment. | Small, 53.0 | 53.0 |
| displayName | String | Display name for the primary cause of the adjustment (for example, Display name of the Promotion) | Small, 53.0 | 53.0 |
| targetType | String | Type of price adjustment in promotions. Values are:SplitLine—Price adjustment on an order item.Header—Price adjustment on the entire order. | Small, 56.0 | 56.0 |
| type | String | Type of adjustment (for example, Promotion, Other). | Small, 53.0 | 53.0 |

#### See Also

-   [Order Summary Adjustment Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_adjustment_collection.htm "Collection of adjustments for an order summary.")

-   [Order Item Summary Adjustment List](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_item_summary_adjustment_list.htm "List of adjustments for an order item summary.")

## Related Topics

- Order Summary Adjustment Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_adjustment_collection.htm)
- Order Item Summary Adjustment List (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_item_summary_adjustment_list.htm)
