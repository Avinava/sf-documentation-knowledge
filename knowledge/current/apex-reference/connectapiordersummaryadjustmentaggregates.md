---
title: "ConnectApi.OrderSummaryAdjustmentAggregates"
domain: apex-reference
topic: connectapiordersummaryadjustmentaggregates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.327Z
estimatedTokens: 379
keywords: [Adjustment, aggregates, associated, order, summary]
---

# ConnectApi.OrderSummaryAdjustmentAggregates

> Adjustment aggregates associated with an order
    summary.

# ConnectApi.OrderSummaryAdjustmentAggregates

Adjustment aggregates associated with an order summary.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| available | Boolean | Indicates if adjustment aggregate values are available (true) or not (false). | 55.0 |
| status | ConnectApi.​OrderSummaryAdjustment​AggregatesStatus | Order summary adjustment aggregate job status. Values are:Failed—The adjustment aggregate data job for the order summary failed.InProgress—The adjustment aggregate data job for the order summary is in progress.NotInitiated—The adjustment aggregate data job for the order summary is not initiated.Submitted—The adjustment aggregate data job for the order summary is submitted. | 55.0 |
| totalDelivery​PromotionDistAmount | String | Total distributed delivery promotion amounts associated with an order summary. | 55.0 |
| totalDelivery​PromotionLineAmount | String | Total delivery promotion line amounts associated with an order summary. | 55.0 |
| totalDelivery​Promotion​TotalAmount | String | Total delivery promotion amount associated with an order summary. | 55.0 |
| totalProduct​PromotionDistAmount | String | Total distributed product promotion amounts associated with an order summary. | 55.0 |
| totalProduct​PromotionLineAmount | String | Total product promotion line amount associated with an order summary. | 55.0 |
| totalProduct​Promotion​TotalAmount | String | Total product promotion amount associated with an order summary. | 55.0 |

## Related Topics

- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​OrderSummaryAdjustment​AggregatesStatus (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
