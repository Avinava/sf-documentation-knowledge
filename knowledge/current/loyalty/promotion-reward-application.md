---
title: "Promotion Reward Application"
domain: loyalty
topic: promotion-reward-application
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.615Z
estimatedTokens: 112
keywords: [Promotion, Reward, Application, Output, representation, transaction, journals, created, processed]
---

# Promotion Reward Application

> Output representation details of the transaction journals that are created and
    processed.

# Promotion Reward Application

Output representation details of the transaction journals that are created and processed.

JSON example

This example shows a sample response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| transactionJournalList | Transaction Journal Details[] | List of the transaction journals that are processed and created. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "transactionJournalList": [
    {
      "discountsAppliedList": [
        {
          "discountAmount": 15
        }
      ],
      "gamesAssignedList": [
        {
          "gameDefinitionName": "SpintheWheelGame",
          "gameExpirationDate": "2025-10-10T00:00:00.000Z",
          "gameParticipantRewardId": "3PRSB0000004LFZ"
        }
      ],
      "id": "0lVSB00000E76ev",
      "voucherIssuedList": [
        {
          "effectiveDate": "2025-10-09T00:00:00.000Z",
          "expirationDate": "2025-10-10T00:00:00.000Z",
          "faceValue": 100,
          "promotionId": "0c8SB000000HASn",
          "voucherCode": "SALE-4F8G-RT2P",
          "voucherDefinitionName": "$100 off",
          "voucherId": "0kDSB0000000LNp"
        }
      ]
    }
  ]
}
```

## Related Topics

- Transaction Journal
                                    Details (atlas.en-us.loyalty.meta/loyalty/connect_responses_transaction_journal_details.htm)
