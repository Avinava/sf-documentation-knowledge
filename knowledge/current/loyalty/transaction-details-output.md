---
title: "Transaction Details Output"
domain: loyalty
topic: transaction-details-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.682Z
estimatedTokens: 359
keywords: [Transaction, Output, representation, journal, ledger, records]
---

# Transaction Details Output

> Output representation of the transaction journal ledger
    records.

# Transaction Details Output

Output representation of the transaction journal ledger records.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| activityDate | String | The activity date of the transaction journal. | Small, 58.0 | 58.0 |
| externalTransactionNumber | String | The unique transaction number from an external system. | Small, 58.0 | 58.0 |
| journalSubTypeName | String | The name of the journal subtype associated with the transaction journal record. | Small, 58.0 | 58.0 |
| journalTypeName | String | The name of the journal type associated with the transaction journal record. | Small, 58.0 | 58.0 |
| pointsChange | Points Change Output | The details of the points debited from or credited to the member's points balance by the transaction journal. | Small, 58.0 | 58.0 |
| productCategoryName | String | The name of the product category associated with the transaction journal. | Small, 58.0 | 58.0 |
| productName | String | The name of the product associated with the transaction journal. | Small, 58.0 | 58.0 |
| transactionAmount | String | The amount that the member spent on the transaction journal. | Small, 58.0 | 58.0 |
| transactionJournalId | String | The ID of the transaction journal record. | Small, 58.0 | 58.0 |
| transactionJournalNumber | String | The unique number of the transaction journal record. | Small, 58.0 | 58.0 |

## Related Topics

- Points Change
                  Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_points_change_output.htm)
