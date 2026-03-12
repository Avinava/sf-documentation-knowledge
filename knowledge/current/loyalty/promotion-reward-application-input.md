---
title: "Promotion Reward Application Input"
domain: loyalty
topic: promotion-reward-application-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.987Z
estimatedTokens: 251
keywords: [Promotion, Reward, Application, Input, transaction, journals, includes, created, promotions, applied, along, rewards, any, aren't, everything]
---

# Promotion Reward Application Input

> The details required to create transaction journals. The request includes a list of
    transaction journals, which are to be created. It includes the list of promotions applied along
    with the rewards. If any of the rewards aren't applied, then everything is rolled back. No
    partial rewards are applied.

# Promotion Reward Application Input

The details required to create transaction journals. The request includes a list of transaction journals, which are to be created. It includes the list of promotions applied along with the rewards. If any of the rewards aren't applied, then everything is rolled back. No partial rewards are applied.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| journalCreationMode | String | Specifies whether to create a transaction journal record and, if so, where to store the data. | Optional | 66.0 |
| shouldCheck​CouponUsageLimit | Boolean | Indicates whether the API must execute the Coupon Usage Increase API to verify the coupon usage count and increase the redemption usage count of the specified coupon code (true) or not (false). | Optional | 65.0 |
| transaction​JournalList | List<Map<String, Object>> | The list of transaction journals to create. | Required | 65.0 |

## Code Examples

```
{
  "shouldCheckCouponUsageLimit": true,
  "journalCreationMode": "CreateTransactionJournal",
  "transactionJournalList": [
    {
      "ActivityDate": "2025-10-08T12:45:19Z",
      "JournalTypeId": "0lET10000004CQp",
      "ReferredPartyId": "003SB00000U84F0YAJ",
      "Quantity": "1",
      "TransactionAmount": "5000",
      "CurrencyIsoCode": "USD",
      "Status": "Processed",
      "appliedPromotions": [
        {
          "promotionId": "0c8SB000000HASnYAO",
          "promotionCode": "GET10OFF",
          "couponCode": "COUPON100",
          "rewards": [
            {
              "rewardType": "ProvideDiscount",
              "discountAmount": 15
            },
            {
              "rewardType": "IssueVoucher",
              "voucherDefinitionName": "$100 off",
              "voucherCode": "SALE-4F8G-RT2P",
              "voucherEffectiveDate": "2025-10-09",
              "voucherExpirationDate": "2025-10-10",
              "notes": "discount voucher"
            },
            {
              "rewardType": "AssignGame",
              "gameDefinitionName": "SpintheWheelGame",
              "gameExpirationDate": "2025-10-10"
            }
          ]
        }
      ]
    }
  ]
}
```
