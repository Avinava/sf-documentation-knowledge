---
title: "Transaction Journal Process Result"
domain: loyalty
topic: transaction-journal-process-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.702Z
estimatedTokens: 220
keywords: [Transaction, Journal, Process, Result, Output, representation]
---

# Transaction Journal Process Result

> Output representation of the Transaction Journal
    result.

# Transaction Journal Process Result

Output representation of the Transaction Journal result.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| badgesAssigned | Badge Output[] | List of badges that are assigned to the member. | Small, 60.0 | 60.0 |
| changeInMemberPoints | Member Points Balance Change[] | Details of points that are credited to or debited from the member's points balance and escrow points balance for all the currencies associated with the member. | Small, 54.0 | 54.0 |
| gamesAssigned | Game Assignment Output[] | List of games that are assigned to the member. | Small, 60.0 | 60.0 |
| id | String | Details of the Transaction Journal records that are created. | Small, 54.0 | 54.0 |
| voucherResult | Voucher Result | List of vouchers that are issued or redeemed. | Small, 54.0 | 54.0 |

## Related Topics

- Badge
                Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_badge_output.htm)
- Member Points Balance Change (atlas.en-us.loyalty.meta/loyalty/connect_responses_member_points_balance_change.htm)
- Game Assignment Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_game_assignment_output.htm)
- Voucher Result (atlas.en-us.loyalty.meta/loyalty/connect_responses_voucher_result.htm)
