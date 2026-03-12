---
title: "VPL-GetCartContextKey"
domain: media-developer-guide
topic: vpl-getcartcontextkey
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.214Z
estimatedTokens: 135
keywords: [VPL-GetCartContextKey, Omnistudio, Data, Mapper, latest, cart, context, key, user, Sample, Input, Output]
---

# VPL-GetCartContextKey

> This Omnistudio Data Mapper gets the latest cart context key
    for a user.

# VPL-GetCartContextKey

This Omnistudio Data Mapper gets the latest cart context key for a user.

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

-   Workflow: Self care Omnichannel Cart

    -   LWC: vplS360SelfCareOverviewHeadCard.js

        -   Integration Procedure: VPL360\_DeleteCartContextKey

-   Workflow: Self care Overview page

    -   LWC: vplS360SelfCareOverview.js

        -   Integration Procedure: VPL360\_FetchCartContextKey

## Code Examples

```
{
    "AccountId": "0014W00002BuGOEQA3"
}
```

```
{
  "Id": "a0s4W00000fzj5GQAQ",
  "CartContextKey": "10d34ccfd487a6496c298ccd6235f57a"
}
```
