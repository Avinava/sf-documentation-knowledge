---
title: "Order Summary Adjustment Aggregates"
domain: chatterapi
topic: order-summary-adjustment-aggregates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.132Z
estimatedTokens: 410
keywords: [Order, Summary, Adjustment, Aggregates, Output, representation, associated]
---

# Order Summary Adjustment Aggregates

> Output
      representation of the adjustment aggregates associated with an order
      summary.

# Order Summary Adjustment Aggregates

Output representation of the adjustment aggregates associated with an order summary.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| available | Boolean | Indicates if adjustment aggregate values are available (true) or not (false). | Small, 55.0 | 55.0 |
| status | String | Order summary adjustment aggregate job status. Values are:Failed—The adjustment aggregate data job for the order summary failed.InProgress—The adjustment aggregate data job for the order summary is in progress.NotInitiated—The adjustment aggregate data job for the order summary is not initiated.Submitted—The adjustment aggregate data job for the order summary is submitted. | Small, 55.0 | 55.0 |
| totalDelivery​PromotionDistAmount | String | Total distributed delivery promotion amounts associated with an order summary. | Small, 55.0 | 55.0 |
| totalDelivery​PromotionLineAmount | String | Total delivery promotion line amounts associated with an order summary. | Small, 55.0 | 55.0 |
| totalDelivery​Promotion​TotalAmount | String | Total delivery promotion amount associated with an order summary. | Small, 55.0 | 55.0 |
| totalProduct​PromotionDistAmount | String | Total distributed product promotion amounts associated with an order summary. | Small, 55.0 | 55.0 |
| totalProduct​PromotionLineAmount | String | Total product promotion line amount associated with an order summary. | Small, 55.0 | 55.0 |
| totalProduct​Promotion​TotalAmount | String | Total product promotion amount associated with an order summary. | Small, 55.0 | 55.0 |
