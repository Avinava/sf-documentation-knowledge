---
title: "Update Cumulative Usage Action Output"
domain: loyalty
topic: update-cumulative-usage-action-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.723Z
estimatedTokens: 214
keywords: [Cumulative, Usage, Action, Output, representation]
---

# Update Cumulative Usage Action Output

> Output representation of the update cumulative usage action
    type.

# Update Cumulative Usage Action Output

Output representation of the update cumulative usage action type.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionType | String | The type of action in the loyalty program process rule. | Small, 55.0 | 55.0 |
| promotion | String | The name of promotion for which the member's cumulative usage is updated or reset. | Small, 55.0 | 55.0 |
| promotionId | String | The ID of the promotion for which the member's cumulative usage is updated or reset. | Small, 55.0 | 55.0 |
| stepName | String | The name of the step in the loyalty program process rule. | Small, 55.0 | 55.0 |
| updatedCumulative​PromotionUsage | Integer | The updated value of the loyalty program member's usage towards the cumulative promotion. | Small, 55.0 | 55.0 |
