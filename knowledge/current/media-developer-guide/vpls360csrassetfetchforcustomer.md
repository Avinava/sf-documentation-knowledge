---
title: "vpls360csr_AssetFetchForCustomer"
domain: media-developer-guide
topic: vpls360csrassetfetchforcustomer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.271Z
estimatedTokens: 112
keywords: [vpls360csr_AssetFetchForCustomer, Integration, Procedure, agent, console, fetch, assets, order, items, total, subscription, amount, account, vpls360csr, _AssetFetchForCustomer]
---

# vpls360csr_AssetFetchForCustomer

> This Integration Procedure is used in the agent console, to
    fetch all the assets and order items, and the total subscription amount for an
    account.

# vpls360csr\_AssetFetchForCustomer

This Integration Procedure is used in the agent console, to fetch all the assets and order items, and the total subscription amount for an account.

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

    -   Agent console: Subscription page


## Calls

-   Integration Procedure Action: VPL360\_AssetFetch

## Code Examples

```
{
    ""ContextId"": ""a1S4W000006A1eAUAS""
}
```

```
{
  "AccountId": "0014W00002BvqD1QAJ",
  "AssetInfo": {
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
  },
  "OrderItemInfo": [
    {
      "CustomAssetStatus": "Sample",
      "Price": "$ /Mo"
    }
  ]
}
```
