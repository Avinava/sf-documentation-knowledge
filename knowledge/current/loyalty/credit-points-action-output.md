---
title: "Credit Points Action Output"
domain: loyalty
topic: credit-points-action-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.341Z
estimatedTokens: 329
keywords: [Credit, Points, Action, Output, representation]
---

# Credit Points Action Output

> Output representation of the credit points action
    type.

# Credit Points Action Output

Output representation of the credit points action type.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionType | String | The type of action in the loyalty program process rule. | Small, 55.0 | 55.0 |
| changeInEscrow​PointsBalance | Double | The change in the escrow points balance of the loyalty program member associated with the transaction journal. | Small, 55.0 | 55.0 |
| changeInPointsBalance | Double | The change in the points balance of the loyalty program member associated with the transaction journal. | Small, 55.0 | 55.0 |
| escrowPointsCredit​Date | String | The date on which points that are added to the escrow points balance of the loyalty program member associated with the transaction journal must be rolled over to the points balance of the member. | Small, 55.0 | 55.0 |
| loyaltyProgram​CurrencyName | String | The name of the loyalty program currency for which points have been credited to the loyalty program member associated with the transaction journal. | Small, 55.0 | 55.0 |
| promotionId | String | The ID of the promotion associated with the rule. | Small, 55.0 | 55.0 |
| stepName | String | The name of the step in the loyalty program process rule. | Small, 55.0 | 55.0 |
