---
title: "DRExtractfirstPromoItem"
domain: media-developer-guide
topic: drextractfirstpromoitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:11.257Z
estimatedTokens: 107
keywords: [DRExtractfirstPromoItem, Omnistudio, Mapper, extracts, promotional, item, promotion, product, codes, Sample]
---

> This Omnistudio Data Mapper extracts the promotional item
    with the promotion ID, for the specified product codes.

# DRExtractfirstPromoItem

This Omnistudio Data Mapper extracts the promotional item with the promotion ID, for the specified product codes.

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

-   Workflow: Recommendation
    -   LWC: vplS360Bundesliga.js
        -   Integration Procedure: VPL360\_IPExtractPromo

## Code Examples

```
{
  "Promo": [
    {
      "ProdCode": "VPL-PlayBundesliga"
    },
    {
      "ProdCode": "VPL-PlayMarvel"
    },
    {
      "ProdCode": "VPL-PlayDisney"
    }
  ]
}
```

```
{
  "Promo": [
    {
      "Promoitem": {
        "Name": "PromotionItem__ca3x3h000000LkS6",
        "vlocity_cmt__ProductId__c": "01t4W00000CYET4QAP"
      },
      "ProductCode": "VPL-PlayBundesliga",
      "Id": "a3z4W000000gnY3QAI"
    },
    {
      "Promoitem": {
        "Name": "PromotionItem__ca3x3h000000LkNZ",
        "vlocity_cmt__ProductId__c": "01t4W00000CYESuQAP"
      },
      "ProductCode": "VPL-PlayDisney",
      "Id": "a3z4W000000gnY2QAI"
    },
    {
      "Promoitem": {
        "Name": "PromotionItem__ca3x3h000000LkRm",
        "vlocity_cmt__ProductId__c": "01t4W00000CYESnQAP"
      },
      "ProductCode": "VPL-PlayMarvel",
      "Id": "a3z4W000000gnY2QAI"
    }
  ]
}
```
