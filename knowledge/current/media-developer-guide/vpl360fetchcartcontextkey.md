---
title: "VPL360_FetchCartContextKey"
domain: media-developer-guide
topic: vpl360fetchcartcontextkey
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.869Z
estimatedTokens: 110
keywords: [VPL360_FetchCartContextKey, Integration, Procedure, fetches, Abandoned, cart, context, key, previously, created, shopping, VPL360, _FetchCartContextKey, Sample, Input]
---

# VPL360_FetchCartContextKey

> This Integration Procedure fetches the Abandoned cart
    context key previously created while shopping

# VPL360\_FetchCartContextKey

This Integration Procedure fetches the Abandoned cart context key previously created while shopping

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

    -   Self care: Overview page component

-   Components:

    -   LWC: VplS360SelfCareOverview.js


## Calls

-   Data Mapper: VPL-GetCartContextKey

## Code Examples

```
{
    "AccountId": "0014W00002BuGOEQA3"
}
```

```
{
  "rootAssetIds": "02rjdjj792kdh1892",
  "Id": "a4V4x000000DInXEAW",
  "CartContextKey": "c2bhdoj38393jskll24k"
}
```
