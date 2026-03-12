---
title: "Member Points Balance Change"
domain: loyalty
topic: member-points-balance-change
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.531Z
estimatedTokens: 143
keywords: [Member, Points, Balance, Change, Output, representation]
---

# Member Points Balance Change

> Output representation of the points balance change for a
    member.

# Member Points Balance Change

Output representation of the points balance change for a member.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| changeInMemberCurrencies | Member Currency Change[] | List of points balance changes for the member's currencies based on the transaction journal and promotions. | Small, 54.0 | 54.0 |
| memberShipNumber | String | The membership number of the loyalty program member who is associated with the transaction journal that's created. | Small, 54.0 | 54.0 |

## Related Topics

- Member Currency Change (atlas.en-us.loyalty.meta/loyalty/connect_responses_member_currency_change.htm)
