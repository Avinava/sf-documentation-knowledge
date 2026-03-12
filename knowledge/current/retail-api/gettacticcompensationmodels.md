---
title: "getTacticCompensationModels"
domain: retail-api
topic: gettacticcompensationmodels
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.008Z
estimatedTokens: 140
keywords: [getTacticCompensationModels, compensation, model, tactic, template, defined, record, Input, Sample]
---

# getTacticCompensationModels

> This method returns the list of valid compensation model values for
      a tactic template based on the tactic template defined tactic record type.

# getTacticCompensationModels

This method returns the list of valid compensation model values for a tactic template based on the tactic template defined tactic record type.

## Input Parameters

| Name | Description |
| --- | --- |
| tacticTemplate | SFDC ID of the tactic template. |

## Input Sample

```

```

## Response Sample

```

```

## Response Properties

This method returns the list of items with the following properties:

| Name | Description |
| --- | --- |
| Id | Value for the compensation model |
| Name | Label for the compensation model |

## Code Examples

```
{
    "class": "NewPromotionWizardCallable",
    "method": "getTacticCompensationModels",
    "params": {
        "tacticTemplate": "{! tacticTemplate.Id }"
    },
    "cache": true
}
```

```
[
    {
        "Name": "Per Case",
        "Id": "PerCase"
    },
    {
        "Name": "Percentage",
        "Id": "Percentage"
    }
]
```
