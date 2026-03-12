---
title: "DRExtractPromo"
domain: media-developer-guide
topic: drextractpromo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.003Z
estimatedTokens: 96
keywords: [DRExtractPromo, Omnistudio, Data, Mapper, extracts, promotions, product, codes, Sample, Input, Output]
---

# DRExtractPromo

> This Omnistudio Data Mapper extracts the promotions for
    specified product codes.

# DRExtractPromo

This Omnistudio Data Mapper extracts the promotions for specified product codes.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| Id | Required |
| ProductCode | Required |

## Sample Output

```

```

## Called By

-   Workflow: Recommendation
    -   LWC: vplS360Bundesliga.js
        -   Integration Procedure: VPL360\_IPExtractPromo

## Code Examples

```
{
    "Id": "a3z4W000000AsXfQAK",
    "ProductCode": "VPL-PlayBundesliga"
}
```

```
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
      "Id": "a3z4W000000AsXfQAK",
      "Active": true
    }
  ]
}
```
