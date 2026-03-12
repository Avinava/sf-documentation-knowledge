---
title: "DROrderFetch"
domain: media-developer-guide
topic: drorderfetch
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.029Z
estimatedTokens: 95
keywords: [DROrderFetch, Omnistudio, Data, Mapper, fetch, order, line, items, account, Sample, Input, Output]
---

# DROrderFetch

> This Omnistudio Data Mapper is used to fetch the order line
    items for an account.

# DROrderFetch

This Omnistudio Data Mapper is used to fetch the order line items for an account.

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

-   Workflow: Self care Subscription page

    -   LWC: VplS360SelfCareLanding.js

        -   Integration Procedure: VPL360\_AssetFetch

## Code Examples

```
{
    "AccountId": "0014W000029kBVyQAM"
}
```

```
{
  "Item": [
    {
      "orderId": "8014W000000lIcRQAU",
      "itemId": "8024W000000iF3cQAE",
      "Subtype": "ADD-ON",
      "ProductCode": "VPL-NetflixPremium",
      "Price": "$7.50 /Mo",
      "PossibleAction": "REMOVE-PRODUCT",
      "Name": "Netflix Premium",
      "CustomAssetStatus": "In Progress"
    },
    {
      "orderId": "8014W000000lIcRQAU",
      "itemId": "8024W000000iF3XQAU",
      "Subtype": "SERVICE",
      "ProductCode": "VPL-ScreenPlus",
      "Price": "$10.00 /Mo",
      "PossibleAction": "REMOVE-PRODUCT",
      "Name": "Screen Plus",
      "CustomAssetStatus": "In Progress"
    }
]
}
```
