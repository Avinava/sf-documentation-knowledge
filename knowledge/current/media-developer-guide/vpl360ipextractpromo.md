---
title: "VPL360_IPExtractPromo"
domain: media-developer-guide
topic: vpl360ipextractpromo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.883Z
estimatedTokens: 129
keywords: [VPL360_IPExtractPromo, Integration, Procedure, accepts, array, product, codes, promotions, corresponding, any, VPL360, _IPExtractPromo, Sample, Input, Output]
---

# VPL360_IPExtractPromo

> This Integration Procedure accepts an array of product codes
    and returns an array of promotions corresponding to the product codes, if any.

# VPL360\_IPExtractPromo

This Integration Procedure accepts an array of product codes and returns an array of promotions corresponding to the product codes, if any.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| ProdCode | Required |
| Promo | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Web shop: Recommendation

-   Components:

    -   LWC: vplS360Bundesliga.js


## Calls

-   Data Mapper: DRExtractfirstPromoItemTest

-   Data Mapper: DRExtractPromo

## Code Examples

```
{
    "Promo": [
        {
            "ProdCode": "VPL-PlayBundesliga"
        },
        {
            "ProdCode": "VPL-PlayMarvel"
        }
    ]
}
```

```
[
  {
    "promoId": [
      {
        "Promoitem": {
          "SubType": "ADD-ON",
          "Productcode": "VPL-PlayMarvel",
          "ProdName": "PromotionItem__ca3x3h000000LkRm",
          "ProdDescription": "Marvel Universe Movies",
          "Name": "Play Marvel"
        },
        "promocode": "VPLMovie-Promo",
        "promoDescription": "This promotion is for Movies Channels.",
        "Startdate": "2020-07-31T18:30:00.000Z",
        "PromoitemName": "VPLMoviePromo",
        "Id": "a3z4W000000gnY2QAI",
        "Active": true
      }
    ]
  },
  {
    "promoId": [
      {
        "Promoitem": {
          "SubType": "ADD-ON",
          "Productcode": "VPL-PlayBundesliga",
          "ProdName": "PromotionItem__ca3x3h000000LkS6",
          "ProdDescription": "Watch German football League Bundesliga",
          "Name": "Play Bundesliga"
        },
        "promocode": "VPLSports-Promo",
        "promoDescription": "This Promotion is for Sports events.",
        "Startdate": "2020-07-31T18:30:00.000Z",
        "PromoitemName": "VPLSportsPromo",
        "Id": "a3z4W000000gnY3QAI",
        "Active": true
      }
    ]
  }
]
```
