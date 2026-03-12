---
title: "VPL360_ShopAddOnPreProcess"
domain: media-developer-guide
topic: vpl360shopaddonpreprocess
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.916Z
estimatedTokens: 138
keywords: [VPL360_ShopAddOnPreProcess, Integration, Procedure, fetches, assets, promotions, associated, account, VPL360, _ShopAddOnPreProcess, Sample, Input, Output, Calls]
---

# VPL360_ShopAddOnPreProcess

> This Integration Procedure fetches the assets with
    promotions which are associated with an account.

# VPL360\_ShopAddOnPreProcess

This Integration Procedure fetches the assets with promotions which are associated with an account.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AccountId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Subscription page

-   Components:

    -   LWC: vplS360SelfCareSubscriptionAddOnsList.js

    -   Omniscript: vpls360csr\_BuyAddonsV3\_English


## Calls

-   Remote Action:

    -   Class: VPLS360ShopAddOn

    -   Method: fetchAssetsWithPromo

## Code Examples

```
{
    "AccountId": "0014W00002C0J1u"
}
```

```
{
  "assetIdSet": [
    "02i4W00000EQbIuQAL",
    "02i4W00000EQbIyQAL",
    "02i4W00000EQbUMQA1",
    "02i4W00000EQbUIQA1"
  ],
  "totalRecurringCost": 15,
  "productCodeList": "VPL-Platform,VPL-PlaySports,VPL-PlaySports,VPL-Platform",
  "assetIdList": "02i4W00000EQbIuQAL,02i4W00000EQbIyQAL,02i4W00000EQbUMQA1,02i4W00000EQbUIQA1",
  "promoSet": [
    "VPLS360-Promo",
    "VPLSports-Promo"
  ],
  "errorCode": "INVOKE-200",
  "error": "OK"
}
```
