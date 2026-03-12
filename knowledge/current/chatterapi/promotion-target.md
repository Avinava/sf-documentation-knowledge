---
title: "Promotion Target"
domain: chatterapi
topic: promotion-target
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.704Z
estimatedTokens: 307
keywords: [Promotion, Target, cart, items]
---

# Promotion Target

> Target of a promotion (for example, cart items).

# Promotion Target

Target of a promotion (for example, cart items).

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| adjustment​Amount | String | Absolute adjustment amount. | Small, 53.0 | 53.0 |
| adjustment​Percent | String | Percentage adjustment amount. | Small, 53.0 | 53.0 |
| adjustmentType | String | Adjustment type (percentage or absolute). | Small, 53.0 | 53.0 |
| id | String | ID for the promotion target. | Small, 53.0 | 53.0 |
| priority | Integer | Priority of the promotion target. | Small, 53.0 | 53.0 |
| promotion​Target​Association​Status | String | Association status of the promotion target:VALID (the promotion target is valid and can be applied to the transaction)BLOCKEDEXCLUSIVE (the promotion target is valid, but is blocked from the transaction by another promotion)INVALID (the promotion target is not valid for the transaction) | Small, 53.0 | 53.0 |
| promotion​Target​Line​Items | Promotion Target Line Item[] | Line items which the promotion target maps to. | Small, 53.0 | 53.0 |
| targetId | String | ID of the target record. | Small, 53.0 | 53.0 |
| targetType | String | Promotion target type. | Small, 53.0 | 53.0 |

## Related Topics

- Promotion Target Line Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_target_line_item.htm)
