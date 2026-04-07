---
title: "Update Cumulative Usage Action"
domain: loyalty
topic: update-cumulative-usage-action
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:08.363Z
estimatedTokens: 212
keywords: [Cumulative, Action]
---

> Output representation of the update cumulative usage action
    type.

# Update Cumulative Usage Action

Output representation of the update cumulative usage action type.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionType | String | The type of action in the loyalty program process rule. | Small, 55.0 | 55.0 |
| promotion | String | The name of promotion for which the member's cumulative usage is updated or reset. | Small, 55.0 | 55.0 |
| promotionId | String | The ID of the promotion for which the member's cumulative usage is updated or reset. | Small, 55.0 | 55.0 |
| stepName | String | The name of the step in the loyalty program process rule. | Small, 55.0 | 55.0 |
| updatedCumulative​PromotionUsage | Integer | The updated value of the loyalty program member's usage towards the cumulative promotion. | Small, 55.0 | 55.0 |
