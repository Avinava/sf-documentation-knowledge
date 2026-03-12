---
title: "Points Summary"
domain: loyalty
topic: points-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.561Z
estimatedTokens: 223
keywords: [Points, Summary, Output, representation, point]
---

# Points Summary

> Output representation of the point summary.

# Points Summary

Output representation of the point summary.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| changeInEscrowPoints​Balance | Double | The change in the escrow points balance of the loyalty program member associated with the transaction journal. | Small, 55.0 | 55.0 |
| changeInPointsBalance | Double | The change in the points balance of the loyalty program member associated with the transaction journal. | Small, 55.0 | 55.0 |
| loyaltyProgramCurrency​Name | String | The name of the loyalty program currency for which points are debited from or credited to the loyalty program member associated with the transaction journal. | Small, 55.0 | 55.0 |
| loyaltyProgramCurrency​Type | CurrencyType | The type of the loyalty program currency.Valid values are:NonQualifyingQualifying | Small, 55.0 | 55.0 |
