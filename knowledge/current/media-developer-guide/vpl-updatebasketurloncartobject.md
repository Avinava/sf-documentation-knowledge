---
title: "VPL-UpdateBasketUrlOnCartObject"
domain: media-developer-guide
topic: vpl-updatebasketurloncartobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.222Z
estimatedTokens: 189
keywords: [VPL-UpdateBasketUrlOnCartObject, Omnistudio, Data, Mapper, loads, updates, basket, key, cart, URL, objects, IDs, records, Sample, Input]
---

# VPL-UpdateBasketUrlOnCartObject

> This Omnistudio Data Mapper loads or updates the basket key
    or cart URL on cart objects, and returns the IDs of the updates records.

# VPL-UpdateBasketUrlOnCartObject

This Omnistudio Data Mapper loads or updates the basket key or cart URL on cart objects, and returns the IDs of the updates records.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AccountId | Required |
| BasketKey | Required |

## Sample Output

```

```

## Called By

-   Workflow: Self care Shopping; Shop Addon or Shop Basepack

    -   LWC: VPLS360SelfCareSelectedAddons.js

    -   LWC: VPLS360SelfCareShopAddonBundles.js

    -   LWC: VPLS360SelfCareShopAddonsChannels.js

    -   LWC: vplS360SelfCareSubscriptionBasePack.js

    -   LWC: vplS360SelfCareChangePackage.js

    -   LWC: vplS360SelfCareConfirmCheckOut.js

        -   Integration Procedure: VPL360\_UpdateBasketOnCart

## Code Examples

```
{
  "AccountId": "0014W00002BvqD1QAJ",
  "BasketKey": "basket4bc31f5a8d888b"
}
```

```
1- vlocity_cmt__Cart__c: a0s4W00000fzmzSQAQ
```
