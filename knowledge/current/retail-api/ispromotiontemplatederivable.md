---
title: "isPromotionTemplateDerivable"
domain: retail-api
topic: ispromotiontemplatederivable
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.980Z
estimatedTokens: 71
keywords: [isPromotionTemplateDerivable, validates, promotion, derivable, template, Input, Sample]
---

# isPromotionTemplateDerivable

> This method validates if the given promotion has a derivable promotion template.

# isPromotionTemplateDerivable

This method validates if the given promotion has a derivable promotion template.

## Input Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| promotionId | String | YES | ID of the promotion. |

## Input Sample

```

```

## Code Examples

```
"source": {
    "class": "DerivePromotionWizardCallable",
    "method": "isPromotionTemplateDerivable",
    "cache": true,
    "params": {
        "promotionId": "{! promotionId }"
    }
}
```
