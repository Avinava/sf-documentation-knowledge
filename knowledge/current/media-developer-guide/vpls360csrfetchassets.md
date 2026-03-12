---
title: "vpls360csr_FetchAssets"
domain: media-developer-guide
topic: vpls360csrfetchassets
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.284Z
estimatedTokens: 123
keywords: [vpls360csr_FetchAssets, Integration, Procedure, assets, account, total, cost, subscription, vpls360csr, _FetchAssets, Sample, Input, Output, Calls]
---

# vpls360csr_FetchAssets

> This Integration Procedure gets all the assets of an account
    and the total cost of the subscription.

# vpls360csr\_FetchAssets

This Integration Procedure gets all the assets of an account and the total cost of the subscription.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| ContextId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Agent console: Page tab

-   Components:

    -   Omniscript: vpls360csr\_BuyAddonsV3\_English


## Calls

-   Data Mapper: vpls360Csr-FetchAccountFromInteraction

-   Data Mapper: GetAccountAssets

## Code Examples

```
{
    ""ContextId"": ""a1S4W000006A1eAUAS""
}
```

```
{
  "AccountId": "0014W00002BvqD1QAJ",
  "Asset": [
    {
      "BillCycleDate": "",
      "TotalCost": "$60.00/Mo",
      "Recurrence": "Monthly",
      "CommitmentEndDate": "N/A",
      "BaseCancellationInProgress": false,
      "Type": "CONTAINER",
      "Subtype": "BASE-BUNDLE",
      "ProductCode": "VPL-Platform",
      "Price": "$0 /Mo",
      "PossibleAction": "CANCEL-ADDON",
      "Name": "Platform",
      "LatestBaseRecord": false,
      "DisableAction": false,
      "CustomAssetStatus": "Active",
      "AssetId": "02i4W000005CDN7QAO"
    }
],
  "TotalCost": "$60.00/Mo",
  "DeviceCount": 2,
  "AddOnCount": 2
}
```
