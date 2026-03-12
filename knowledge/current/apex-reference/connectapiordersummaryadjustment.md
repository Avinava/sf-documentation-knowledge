---
title: "ConnectApi.OrderSummaryAdjustment"
domain: apex-reference
topic: connectapiordersummaryadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.272Z
estimatedTokens: 340
keywords: [ConnectApi.OrderSummaryAdjustment, Adjustment, associated, order, summary.]
---

# ConnectApi.OrderSummaryAdjustment

> Adjustment associated with an order summary.

# ConnectApi.OrderSummaryAdjustment

Adjustment associated with an order summary.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| amount | String | Amount associated with the adjustment. | 53.0 |
| basisReferenceDisplayName | String | Display name for secondary cause of the adjustment (for example, Null or the CouponCode that’s associated with a Coupon) | 54.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the adjustment. | 53.0 |
| displayName | String | Display name for the primary cause of the adjustment (for example, Display name of the Promotion) | 53.0 |
| targetType | ConnectApi.​OrderSummary​AdjustmentTarget​Type | Type of price adjustment in promotions. Values are:SplitLine—Price adjustment on an order item.Header—Price adjustment on the entire order. | 56.0 |
| type | String | Type of adjustment (for example, Promotion, Other). | 53.0 |

#### See Also

-   [ConnectApi.OrderSummaryAdjustmentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_adjustment_collection.htm "Collection of adjustments for an order summary.")

-   [ConnectApi.OrderItemSummaryAdjustmentList](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_adjustment_list.htm "Representation for list of adjustments for an Order Item Summary.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​OrderSummary​AdjustmentTarget​Type (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.OrderSummaryAdjustmentCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_adjustment_collection.htm)
- ConnectApi.OrderItemSummaryAdjustmentList (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_adjustment_list.htm)
