---
title: "getTacticKPIs"
domain: retail-api
topic: gettactickpis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.011Z
estimatedTokens: 218
keywords: [getTacticKPIs, editable, calculated, KPI's, tactic, level, input, ppromotion, template, possible, part, defined, KPI, subset, order]
---

# getTacticKPIs

> This method returns the list of editable and editable calculated
      KPI's on tactic level for the input ppromotion template and tactic template. It returns all
      the possible KPI's that are part of the tactic template defined KPI subset in the order
      defined by the sort field.

# getTacticKPIs

This method returns the list of editable and editable calculated KPI's on tactic level for the input ppromotion template and tactic template. It returns all the possible KPI's that are part of the tactic template defined KPI subset in the order defined by the sort field.

## Input Parameters

| Name | Description |
| --- | --- |
| promoTemplate | SFDC ID of the promotion template. |
| tacticTemplate | SFDC ID of the tactic template. |

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
| ValueDedimalPlaces | Maximum amount of decimal places expected for a value of the KPI based on the KPI type:Possible Values:Money: 2Percentage: 2,Price: 2Volume: 0None: 10 |

## Code Examples

```
{
    "class": "NewPromotionWizardCallable",
    "method": "getTacticKPIs",
    "params": {
        "promoTemplate": "{! promoTemplate.Id }",
        "tacticTemplate": "{! tacticTemplate.Id }"
    },
    "cache": true
}
```

```
[
    {
        "ValueDecimalPlaces": 10,
        "Name": "Variable Amount",
        "Id": "ProVarAmountPriceCut"
    },
    {
        "ValueDecimalPlaces": 2,
        "Name": "Fixed Amount",
        "Id": "ProFixedAmountLumpSum"
    }
]
```
