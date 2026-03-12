---
title: "VPL360_CsrBasePackPosttocart"
domain: media-developer-guide
topic: vpl360csrbasepackposttocart
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.147Z
estimatedTokens: 197
keywords: [VPL360_CsrBasePackPosttocart, Integration, Procedure, base, packages, cart, items, display, agent, console, changing, package, subscriber, VPL360, _CsrBasePackPosttocart]
---

# VPL360_CsrBasePackPosttocart

> This Integration Procedure gets the available base packages and also gets
                      cart items to display in the agent console while changing a base package for a
                      subscriber.

# VPL360\_CsrBasePackPosttocart

This Integration Procedure gets the available base packages and also gets cart items to display in the agent console while changing a base package for a subscriber.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| cartId | Required |
| itemId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Agent console: Change Base Package

-   Components:

    -   Omniscript: vpls360csrChangeBasePackage


## Calls

-   Data Mapper: DRPreparePayload

-   Data Mapper: CsrBaseItemFormat

-   Data Mapper: GetAccountAssets

-   Remote Action:

    -   Class: vlocity\_cmt.CpqAppHandler

    -   Method: getCartsItems

-   Remote Action:

    -   Class: vlocity\_cmt.CpqAppHandler

    -   Method: postCartItems

## Code Examples

```
{
    "cartId": "8014W000000lIYFQA2",
    "itemId": "01u4W00000B994jQAB"
}
```

```
{
  "PreviousTotal": "$52.00/Mo",
  "review": {
    "CartItems": [
      {
        "Price": 15,
        "ItemName": "Play",
        "Action": "Add",
        "AccountId": "0014W000029kBVyQAM",
        "cartId": "8014W000000lIYFQA2",
        "Description": "An extensive amount of the most popular channels that people love."
      },
      {
        "Price": 30,
        "ItemName": "Play Plus",
        "Action": "Disconnect",
        "AccountId": "0014W000029kBVyQAM",
        "cartId": "8014W000000lIYFQA2",
        "Description": "An extensive amount of the most popular channels, plus HBO, Showtime and other premium channels."
      }
    ]
  }
}
```
