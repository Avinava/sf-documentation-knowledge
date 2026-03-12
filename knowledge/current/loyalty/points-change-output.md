---
title: "Points Change Output"
domain: loyalty
topic: points-change-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.556Z
estimatedTokens: 147
keywords: [Points, Change, Output, representation, debited, credited, member's, balance, transaction, journal]
---

# Points Change Output

> Output representation of the points debited from or credited to the
      member's points balance by the transaction journal.

# Points Change Output

Output representation of the points debited from or credited to the member's points balance by the transaction journal.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| changeInPoints | Double | Specifies the number of points that have been debited from or credited to the member by the transaction journal. | Small, 58.0 | 58.0 |
| loyaltyMemberCurrency | String | Name of the loyalty member currency for which the transaction journal has debited or credited points. | Small, 58.0 | 58.0 |
