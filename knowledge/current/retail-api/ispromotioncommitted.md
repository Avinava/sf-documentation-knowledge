---
title: "isPromotionCommitted"
domain: retail-api
topic: ispromotioncommitted
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.982Z
estimatedTokens: 66
keywords: [isPromotionCommitted, validates, promotion, Committed, phase, Input, Sample]
---

# isPromotionCommitted

> This method validates if the given promotion is on Committed phase.

# isPromotionCommitted

This method validates if the given promotion is on Committed phase.

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
    "method": "isPromotionCommitted",
    "cache": false,
    "params": {
        "promotionId": "{! promotionId }"
    }
}
```
