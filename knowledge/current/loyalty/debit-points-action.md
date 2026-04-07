---
title: "Debit Points Action"
domain: loyalty
topic: debit-points-action
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:17.625Z
estimatedTokens: 219
keywords: [Debit, Points, Action, Output, representation]
---

# Debit Points Action

> Output representation of the debit points action
    type.

# Debit Points Action

Output representation of the debit points action type.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionType | String | The type of action in the loyalty program process rule. | Small, 55.0 | 55.0 |
| changeInPoints​Balance | Double | The change in the points balance of the loyalty program member associated with the transaction journal. | Small, 55.0 | 55.0 |
| loyaltyProgram​CurrencyName | String | The name of the loyalty program currency for which points have been debited from the loyalty program member associated with the transaction journal. | Small, 55.0 | 55.0 |
| promotionId | String | The ID of the promotion associated with the rule. | Small, 55.0 | 55.0 |
| stepName | String | The name of the step in the loyalty program process rule. | Small, 55.0 | 55.0 |
