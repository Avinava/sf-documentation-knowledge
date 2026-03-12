---
title: "getTacticTemplates"
domain: retail-api
topic: gettactictemplates
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.014Z
estimatedTokens: 127
keywords: [getTacticTemplates, tactic, templates, input, promotion, template, Sample]
---

# getTacticTemplates

> This method returns the list of tactic templates related to the
      input promotion template.

# getTacticTemplates

This method returns the list of tactic templates related to the input promotion template.

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
| Id | SFDC ID of the Tactic template |
| Name | Description value of the Tactic template. |

## Code Examples

```
{
    "class": "NewPromotionWizardCallable",
    "method": "getTacticTemplates",
    "params": {
        "promoTemplate": "{! promoTemplate.Id }"
    },
    "cache": true
}
```

```
[
    {
        "Id": "a3B2X00000167f3UAA",
        "Name": "Price Cut"
    },
    {
        "Id": "a3B2X00000167f4UAA",
        "Name": "Promo Advertising"
    }
]
```
