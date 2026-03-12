---
title: "getPromotionKPIs"
domain: retail-api
topic: getpromotionkpis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.001Z
estimatedTokens: 167
keywords: [getPromotionKPIs, editable, calculated, KPIs, promotion, level, input, template, Sample]
---

# getPromotionKPIs

> This method returns the list of editable and editable calculated
      KPIs on promotion level for the input promotion template

# getPromotionKPIs

This method returns the list of editable and editable calculated KPIs on promotion level for the input promotion template

## Input Parameters

| Name | Description |
| --- | --- |
| promoTemplate | SFDC ID of the promotion template. |

## Input Sample

```

```

## Response Sample

```

```

## Response Properties

This method returns a list of items with the following properties:

| Name | Description |
| --- | --- |
| Id | KPI name |
| Name | KPI description label. |
| ValueDedimalPlaces | Maximum number of decimal places expected for a value of the KPI based on the KPI TypePossible Values:Money: 2Percentage: 2Price: 2Volume: 0None: 10 |

## Code Examples

```
{
    "class": "NewPromotionWizardCallable",
    "method": "getPromotionKPIs",
    "params": {
        "promoTemplate": "{! promoTemplate.Id }"
    },
    "cache": true
}
```

```
[
    {
        "ValueDecimalPlaces": 0,
        "Name": "Promotion Volume",
        "Id": "PromoPlanSellOutVol"
    },
    {
        "ValueDecimalPlaces": 2,
        "Name": "Promoted Price",
        "Id": "PromoPlanPromotedPrice"
    }
]
```
