---
title: "DRFetchPromoItem"
domain: media-developer-guide
topic: drfetchpromoitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:11.282Z
estimatedTokens: 94
keywords: [DRFetchPromoItem, Omnistudio, Mapper, fetches, promotion, order, item, Sample]
---

> This Omnistudio Data Mapper fetches the promotion ID
    associated with an order item.

# DRFetchPromoItem

This Omnistudio Data Mapper fetches the promotion ID associated with an order item.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| itemId | Required |

## Sample Output

```

```

## Called By

-   Workflow: Self care Subscription page; Asset Cancellation

    -   Integration Procedure: VPL360\_OrderCancellationNonSignature

## Code Examples

```
{
    "itemId": "8024W000004N8yMQAS"
}
```

```
{
  "PromoId": "a344W000001K8VVQA0",
  "Id": "a334W000001AeEuQAK"
}
```
