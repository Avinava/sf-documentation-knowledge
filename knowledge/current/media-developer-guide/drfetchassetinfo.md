---
title: "DRFetchAssetInfo"
domain: media-developer-guide
topic: drfetchassetinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:11.267Z
estimatedTokens: 151
keywords: [DRFetchAssetInfo, Omnistudio, Mapper, fetches, asset, account, IDs, Sample]
---

> This Omnistudio Data Mapper fetches the asset information
    for the account associated with the specified asset and account IDs.

# DRFetchAssetInfo

This Omnistudio Data Mapper fetches the asset information for the account associated with the specified asset and account IDs.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| accountId | Required |
| assetId | Required |

## Sample Output

```

```

## Called By

-   Workflow: Self care Subscription page; Active Asset Cancellation

    -   Integration Procedure: VPL360\_CancelAssetItem

-   Workflow: Agent console Change Base Package

    -   OmniScript: vpls360csrChangeBasePackage

        -   Integration Procedure: VPL360\_CSRBasePackageChange

## Code Examples

```
{
    "accountId": "0014W00002BvIXk",
    "assetId": "02i4W000005CDKPQA4"
}
```

```
{
  "isSignature": false,
  "isPromoPresent": false,
  "NextBillDate": "2021-01-16",
  "RootAssetId": "02i4W000005CDKPQA4",
  "Id": "02i4W000005CDKPQA4",
  "BillCycleDate": 18
}
```
