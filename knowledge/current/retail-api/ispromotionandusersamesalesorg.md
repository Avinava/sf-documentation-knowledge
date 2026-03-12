---
title: "isPromotionAndUserSameSalesOrg"
domain: retail-api
topic: ispromotionandusersamesalesorg
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.969Z
estimatedTokens: 75
keywords: [isPromotionAndUserSameSalesOrg, validates, promotion, belongs, Salesorg, user, exists, Input, Sample]
---

# isPromotionAndUserSameSalesOrg

> This method validates if the given promotion belongs to the same Salesorg where the user
  exists.

# isPromotionAndUserSameSalesOrg

This method validates if the given promotion belongs to the same Salesorg where the user exists.

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
    "method": "isPromotionAndUserSameSalesOrg",
    "cache": true,
    "params": {
        "promotionId": "{! promotionId }"
    }
}
```
