---
title: "VPL360_DeleteCartContextKey"
domain: media-developer-guide
topic: vpl360deletecartcontextkey
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.154Z
estimatedTokens: 117
keywords: [VPL360_DeleteCartContextKey, Integration, Procedure, self, care, portal, cart, context, key, checkout, flow, completed, VPL360, _DeleteCartContextKey, Sample]
---

# VPL360_DeleteCartContextKey

> This Integration Procedure is used in the self care portal to delete the cart context key after the checkout flow is completed.

# VPL360\_DeleteCartContextKey

This Integration Procedure is used in the self care portal to delete the cart context key after the checkout flow is completed.

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

    -   Self care: Omnichannel Cart

-   Components:

    -   LWC: vplS360SelfCareOverviewHeadCard.js


## Calls

-   Data Mapper: VPL-GetCartContextKey

## Code Examples

```
{
    "AccountId": "0014W00002BuGOEQA3"
}
```

```
[
  {
    "errors": [],
    "success": true,
    "id": "a4V4x000000DInXEAW"
  }
]
```
