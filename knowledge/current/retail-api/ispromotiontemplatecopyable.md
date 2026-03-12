---
title: "IsPromotionTemplateCopyable"
domain: retail-api
topic: ispromotiontemplatecopyable
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.971Z
estimatedTokens: 72
keywords: [IsPromotionTemplateCopyable, validates, promotion, template, copied, Input, Sample]
---

# IsPromotionTemplateCopyable

> This method validates the given promotion has a promotion template that can be copied.

# IsPromotionTemplateCopyable

This method validates the given promotion has a promotion template that can be copied.

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
    "class": "CopyPromotionWizardCallable",
    "method": "isPromotionTemplateCopyable",
    "cache": true,
    "params": {
        "promotionId": "{! promotionId }"
    }
}
```
