---
title: "VPL360_OrderCancellationNonSignature"
domain: media-developer-guide
topic: vpl360ordercancellationnonsignature
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.896Z
estimatedTokens: 133
keywords: [VPL360_OrderCancellationNonSignature, Integration, Procedure, removes, non, assets, applied, promotions, VPL360, _OrderCancellationNonSignature, Sample, Input, Output, Calls]
---

# VPL360_OrderCancellationNonSignature

> This Integration Procedure removes non signature assets
      with applied promotions.

# VPL360\_OrderCancellationNonSignature

This Integration Procedure removes non signature assets with applied promotions.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| fromCancelAsset | Required |
| itemId | Required |
| orderId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Subscription Page Asset Cancellation


## Calls

-   Data Mapper: DRFetchPromoItem

-   Integration Procedure: VPL360\_CancelCartItem

-   Integration Procedure: VPL360\_DeleteCartItem

## Code Examples

```
{
    "fromCancelAsset": true,
    "itemId": "8024W000000iEuuQAE",
    "orderId": "8014W000000lIWEQA2"
}
```

```
{
  "code": "152",
  "severity": "INFO",
  "message": "Successfully deleted."
}
```
