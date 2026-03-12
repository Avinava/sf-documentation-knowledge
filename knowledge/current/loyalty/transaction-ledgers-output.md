---
title: "Transaction Ledgers Output"
domain: loyalty
topic: transaction-ledgers-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.707Z
estimatedTokens: 182
keywords: [Transaction, Ledgers, Output, representation, journals, associated, loyalty, program, member]
---

# Transaction Ledgers Output

> Output representation of the transaction journals and the ledgers
      associated with the specified loyalty program member.

# Transaction Ledgers Output

Output representation of the transaction journals and the ledgers associated with the specified loyalty program member.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | The request response message. | Small, 58.0 | 58.0 |
| status | Boolean | Indicates whether the request was successful (true) or not (false). | Small, 58.0 | 58.0 |
| transactionJournalCount | Integer | The number of transaction journal records created for the member. | Small, 58.0 | 58.0 |
| transactionJournals | Transaction Details Output | The details of the transaction journals. | Small, 58.0 | 58.0 |

## Code Examples

```
{
    "message": null,
    "status": true,
    "transactionJournalCount": 2,
    "externalTransactionNumber" : "123123"
    "transactionJournals": [
        {
            "activityDate": "2023-03-01T08:00:00.000Z",
            "additionalAttributes": [
                {
                    "fieldName": "additionalInfo__c",
                    "value": "null"
                },
                {
                    "fieldName": "Destination",
                    "value": "null"
                }
            ],
            "journalSubTypeName": "Product Buy",
            "journalTypeName": "Accrual",
            "pointsChange": [],
            "transactionJournalId": "0lVxx00000002rREAQ"
        },
        {
            "activityDate": "2023-02-01T20:00:00.000Z",
            "additionalAttributes": [
                {
                    "fieldName": "additionalInfo__c",
                    "value": "test123"
                },
                {
                    "fieldName": "Destination",
                    "value": "Jaipur"
                }
            ],
            "journalSubTypeName": "Member Enrollment",
            "journalTypeName": "Accrual",
            "pointsChange": [
                {
                    "changeInPoints": "-100.0",
                    "loyaltyMemberCurrency": "Tier Points"
                },
                {
                    "changeInPoints": "90.0",
                    "loyaltyMemberCurrency": "Reward Points"
                }
            ],
            "productCategoryName": "Gift",
            "productName": "New Member Gift Package",
            "transactionAmount": "1000.0",
            "transactionJournalId": "0lVxx00000000HlEAI"
        }
    ]
}
```

## Related Topics

- Transaction Details Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_transaction_details_output.htm)
