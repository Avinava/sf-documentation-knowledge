---
title: "ConnectApi.OrderItemSummaryAdjustmentAggregates"
domain: apex-reference
topic: connectapiorderitemsummaryadjustmentaggregates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.270Z
estimatedTokens: 245
keywords: [Adjustment, aggregates, associated, order, item, summary]
---

# ConnectApi.OrderItemSummaryAdjustmentAggregates

> Adjustment aggregates associated with an order item
    summary.

# ConnectApi.OrderItemSummaryAdjustmentAggregates

Adjustment aggregates associated with an order item summary.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| available | Boolean | Indicates whether adjustment aggregates are available (true) or not (false). | 55.0 |
| status | ConnectApi.​OrderSummaryAdjustment​AggregatesStatus | Order summary adjustment aggregate job status.Failed—The adjustment aggregate data job for the order summary failed.InProgress—The adjustment aggregate data job for the order summary is in progress.NotInitiated—The adjustment aggregate data job for the order summary is not initiated.Submitted—The adjustment aggregate data job for the order summary is submitted. | 55.0 |
| totalLine​PromotionAmount | String | Total of all line item promotions applied to this specific product. | 55.0 |
| totalPromotion​DistAmount | String | Total of all order level promotions applied to this specific product. | 55.0 |

## Related Topics

- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​OrderSummaryAdjustment​AggregatesStatus (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
