---
title: "VPL360_UpdateBasketOnCart"
domain: media-developer-guide
topic: vpl360updatebasketoncart
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.932Z
estimatedTokens: 158
keywords: [VPL360_UpdateBasketOnCart, Integration, Procedure, updates, basket, key, omnichannel, cart, self, care, portal, case, new, shopping, journey]
---

# VPL360_UpdateBasketOnCart

> This Integration Procedure updates the basket key for the
      omnichannel cart in the self care portal in case of a new shopping journey.

# VPL360\_UpdateBasketOnCart

This Integration Procedure updates the basket key for the omnichannel cart in the self care portal in case of a new shopping journey.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AccountId | Required |
| BasketUrl | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Shopping flow ShopAddon/ShopBasepack

-   Components:

    -   LWC: VPLS360SelfCareSelectedAddons.js

    -   LWC: VPLS360SelfCareShopAddonBundles.js

    -   LWC: VPLS360SelfCareShopAddonsChannels.js


## Calls

-   Data Mapper: Post: VPL-UpdateBasketUrlOnCartObject

## Code Examples

```
{
    "AccountId": "0014W00002BgGWBQA3",
    "BasketUrl": "https://qe-tso-cmt-16cf8f92698-16e825a30e7.force.com/services/apexrest/vlocity_cmt/v3/catalogs/DEVICES/basket/61a47e9985fcfbc4c092068be11cc3c8"
}
```

```
{
  "UpdateBasketKeyResponse": true
}
```
