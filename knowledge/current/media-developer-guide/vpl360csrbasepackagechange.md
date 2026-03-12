---
title: "VPL360_CSRBasePackageChange"
domain: media-developer-guide
topic: vpl360csrbasepackagechange
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.143Z
estimatedTokens: 184
keywords: [VPL360_CSRBasePackageChange, Integration, Procedure, adds, assets, order, disconnects, base, asset, user, changes, package, VPL360, _CSRBasePackageChange, Sample]
---

# VPL360_CSRBasePackageChange

> This Integration Procedure adds assets to an order or
        disconnects a base asset when the user changes the base package.

# VPL360\_CSRBasePackageChange

This Integration Procedure adds assets to an order or disconnects a base asset when the user changes the base package.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| assetId | Required |
| ContextId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Agent console: Change Base Package

-   Components:

    -   Omniscript: vpls360csrChangeBasePackage


## Calls

-   Data Mapper: DRFetchAssetInfo

-   Data Mapper: DRFetchOrderItem

-   Data Mapper: vpls360Csr-FetchAccountFromInteraction

-   Data Mapper: vpls360Csr-FetchAccountFromInteraction

-   Integration Procedure: VPL360\_AssetToOrder

-   Integration Procedure: VPL360\_DeleteCartItem

## Code Examples

```
{
    "ContextId": "a1S4W000006A1hiUAC",
    "assetId": "02i4W00000GC1GeQAL"
}
```

```
{
    "AccountId": "0014W000029kBVyQAM",
    "cartId": "8014W000000lIYFQA2"
}
```
