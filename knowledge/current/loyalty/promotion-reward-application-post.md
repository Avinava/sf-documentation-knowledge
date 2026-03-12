---
title: "Promotion Reward Application (POST)"
domain: loyalty
topic: promotion-reward-application-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.168Z
estimatedTokens: 293
keywords: [Promotion, Reward, Application, POST, process, transaction, journals, customer, orders, apply, relevant, promotions]
---

# Promotion Reward Application (POST)

> Create and process transaction journals for customer orders, and apply the relevant
    promotions for the orders.

# Promotion Reward Application (POST)

Create and process transaction journals for customer orders, and apply the relevant promotions for the orders.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| journalCreationMode | String | Specifies whether to create a transaction journal record and, if so, where to store the data. | Optional | 66.0 |
| shouldCheck​CouponUsageLimit | Boolean | Indicates whether the API must execute the Coupon Usage Increase API to verify the coupon usage count and increase the redemption usage count of the specified coupon code (true) or not (false). | Optional | 65.0 |
| transaction​JournalList | List<Map<String, Object>> | The list of transaction journals to create. | Required | 65.0 |

Response body for POST

[Promotion Reward Application](atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_reward_application_output.htm "Output representation details of the transaction journals that are created and processed.")

## Code Examples

```apex
/global-promotions-management/promotion-reward
```

```apex
https://yourInstance.salesforce.com/services/data/v66.0/global-promotions-management/promotion-reward
```

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

## Related Topics

- Promotion Reward
              Application (atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_reward_application_output.htm)
