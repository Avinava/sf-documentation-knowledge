---
title: "Order Item Summary Adjustment Aggregates"
domain: chatterapi
topic: order-item-summary-adjustment-aggregates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.064Z
estimatedTokens: 256
keywords: [Order, Item, Summary, Adjustment, Aggregates, associated, record]
---

# Order Item Summary Adjustment Aggregates

> Adjustment aggregates associated with an Order Item Summary
      record.

# Order Item Summary Adjustment Aggregates

Adjustment aggregates associated with an Order Item Summary record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| available | Boolean | Indicates whether adjustment aggregates are available (true) or not (false). | Small, 55.0 | 55.0 |
| status | String | Order summary adjustment aggregate job status.Failed—The adjustment aggregate data job for the order summary failed.InProgress—The adjustment aggregate data job for the order summary is in progress.NotInitiated—The adjustment aggregate data job for the order summary is not initiated.Submitted—The adjustment aggregate data job for the order summary is submitted. | Small, 55.0 | 55.0 |
| totalLine​PromotionAmount | String | Total of all line item promotions applied to this specific product. | Small, 55.0 | 55.0 |
| totalPromotion​DistAmount | String | Total of all order level promotions applied to this specific product. | Small, 55.0 | 55.0 |
