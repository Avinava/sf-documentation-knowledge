---
title: "Process Result"
domain: loyalty
topic: process-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.564Z
estimatedTokens: 139
keywords: [Process, Result, Output, representation, results, processed, Transaction, Journals, records]
---

# Process Result

> Output representation of results of the processed Transaction Journals
      records.

# Process Result

Output representation of results of the processed Transaction Journals records.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| memberPointsBalance | Member Points Balance[] | List of member currencies for which points balance has changed based on the Transaction Journal records that are created. | Small, 54.0 | 54.0 |
| transactionJournalResult | Transaction Journal Result[] | Details of the Transaction Journal records that are created. | Small, 54.0 | 54.0 |

## Related Topics

- Member Points Balance (atlas.en-us.loyalty.meta/loyalty/connect_responses_member_points_balance.htm)
- Transaction Journal Result (atlas.en-us.loyalty.meta/loyalty/connect_responses_transaction_journal_result.htm)
