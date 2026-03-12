---
title: "Promotion Rules List"
domain: loyalty
topic: promotion-rules-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.629Z
estimatedTokens: 125
keywords: [Promotion, Rules, Output, representation, eligible, rule]
---

# Promotion Rules List

> Output representation of an eligible promotion rule.

# Promotion Rules List

Output representation of an eligible promotion rule.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| ruleName | String | Name of the eligible promotion rule. | Small, 60.0 | 60.0 |
| rulePriority | Integer | Rule priority in the promotion which is eligible for rewards. | Big, 59.0 | 59.0 |
| ruleRewards | Promotion Reward Details [] | Rewards associated with the eligible rule. | Small, 60.0 | 60.0 |

## Related Topics

- Promotion
                  Reward Details (atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_reward_details.htm)
