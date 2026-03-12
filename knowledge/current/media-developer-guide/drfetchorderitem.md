---
title: "DRFetchOrderItem"
domain: media-developer-guide
topic: drfetchorderitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.010Z
estimatedTokens: 144
keywords: [DRFetchOrderItem, Omnistudio, Data, Mapper, fetches, item, order, Asset, workflow, Sample, Input, Output]
---

# DRFetchOrderItem

> This Omnistudio Data Mapper fetches the details of item in
    an order during the Asset to Order workflow.

# DRFetchOrderItem

This Omnistudio Data Mapper fetches the details of item in an order during the Asset to Order workflow.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| assetId | Required |
| orderId | Required |

## Sample Output

```

```

## Called By

-   Workflow: Self care Subscription Page Active Asset Cancellation

    -   Integration Procedure: VPL360\_CancelAssetItem

-   Workflow: Agent console Change Base Package

    -   Omniscript: vpls360csrChangeBasePackage

        -   Integration Procedure: VPL360\_CSRBasePackageChange

## Code Examples

```
{
    "assetId": "02i4W000005CDNd",
    "orderId": "8014W000000lIcgQAE"
}
```

```
{
  "Item": [
    {
      "Id": "8024W000000iF41QAE"
    }
  ],
  "ItemList": "8024W000000iF41QAE"
}
```
