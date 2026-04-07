---
title: "Points Change"
domain: loyalty
topic: points-change
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:17.868Z
estimatedTokens: 145
keywords: [Points, Change, Output, representation, debited, credited, member's, balance, transaction, journal]
---

# Points Change

> Output representation of the points debited from or credited to the
      member's points balance by the transaction journal.

# Points Change

Output representation of the points debited from or credited to the member's points balance by the transaction journal.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| changeInPoints | Double | Specifies the number of points that have been debited from or credited to the member by the transaction journal. | Small, 58.0 | 58.0 |
| loyaltyMemberCurrency | String | Name of the loyalty member currency for which the transaction journal has debited or credited points. | Small, 58.0 | 58.0 |
