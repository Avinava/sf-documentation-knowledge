---
title: "GetAccountAssets"
domain: media-developer-guide
topic: getaccountassets
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.068Z
estimatedTokens: 195
keywords: [GetAccountAssets, Omnistudio, Data, Mapper, assets, account, along, total, subscription, costs, Sample, Input, Output]
---

# GetAccountAssets

> This Omnistudio Data Mapper gets the assets for an account
    along with the total subscription costs.

# GetAccountAssets

This Omnistudio Data Mapper gets the assets for an account along with the total subscription costs.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AccountId | Required |
| status | Required |
| statusList | Required |

## Sample Output

```

```

## Called By

-   Workflow: Self care Subscription Page

    -   LWC: VplS360SelfCareLanding.js

        -   Integration Procedure: VPL360\_AssetFetch

-   Workflow: Agent console Subscription Page, Tab

    -   Omniscript: vpls360csr\_BuyAddonsV3\_English

        -   Integration Procedure: vpls360Csr\_FetchAssets

-   Workflow: Agent console Change Base Package

    -   Omniscript: vpls360csrChangeBasePackage

        -   Integration Procedure: VPL360\_CsrBasePackPosttocart

## Code Examples

```
{
    "AccountId": "0014W000029kBVyQAM",
    "statusList": [
        {
            "status": "Active"
        },
        {
            "status": "Cancellation In Progress"
        }
    ]
}
```

```
{
  "Asset": [
    {
      "TotalCost": "$22.50/Mo",
      "Recurrence": "Monthly",
      "CommitmentEndDate": "N/A",
      "BaseCancellationInProgress": false,
      "Type": "PACKAGE",
      "Subtype": "BASE",
      "ProductCode": "VPL-Play",
      "Price": "$15.00 /Mo",
      "PossibleAction": "CANCEL-ADDON",
      "Name": "Play",
      "LatestBaseRecord": true,
      "DisableAction": false,
      "CustomAssetStatus": "Active",
      "BillCycleDate": "31-December-2020",
      "AssetId": "02i4W000005CDNdQAO"
    },
    {
      "TotalCost": "$22.50/Mo",
      "Recurrence": "Monthly",
      "CommitmentEndDate": "N/A",
      "BaseCancellationInProgress": false,
      "Type": "GENERAL",
      "Subtype": "ADD-ON",
      "ProductCode": "VPL-NetflixPremium",
      "Price": "$7.50 /Mo",
      "PossibleAction": "CANCEL-ADDON",
      "Name": "Netflix Premium",
      "LatestBaseRecord": false,
      "DisableAction": false,
      "CustomAssetStatus": "Active",
      "BillCycleDate": "31-December-2020",
      "AssetId": "02i4W00000GC1GdQAL"
    }
  ],
  "TotalCost": "$22.50/Mo",
  "DeviceCount": 1,
  "AddOnCount": 1
}
```
