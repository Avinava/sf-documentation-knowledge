---
title: "Transaction Journal Details"
domain: loyalty
topic: transaction-journal-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.692Z
estimatedTokens: 171
keywords: [Transaction, Journal, that's, created]
---

# Transaction Journal Details

> The details of the transaction journal that's created.

# Transaction Journal Details

The details of the transaction journal that's created.

JSON example

This example shows a sample response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| discountsAppliedList | Discount Details[] | List of discounts applied to the cart for customers. | Big, 65.0 | 65.0 |
| gamesAssignedList | Game Details[] | List of games assigned to the customers. | Big, 65.0 | 65.0 |
| id | String | The ID of the transaction journal that is created. | Big, 65.0 | 65.0 |
| voucherIssuedList | Voucher Details[] | List of vouchers issued to the customers. | Big, 65.0 | 65.0 |

## Code Examples

```
{
      "discountsAppliedList": [
        {
          "discountType": "ProvideDiscount",
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
          "discountPercent":10,
          "effectiveDate": "2025-10-09T00:00:00.000Z",
          "expirationDate": "2025-10-10T00:00:00.000Z",
          "faceValue": 100,
          "productId":"01txx0000006iTsAAI",
          "promotionId": "0c8SB000000HASn",
          "voucherCode": "SALE-4F8G-RT2P",
          "voucherDefinitionName": "$100 off",
          "voucherId": "0kDSB0000000LNp"
        }
      ]
    }
```

## Related Topics

- Discount Details (atlas.en-us.loyalty.meta/loyalty/connect_responses_discount_details.htm)
- Game
                                    Details (atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_game_details.htm)
- Voucher Details (atlas.en-us.loyalty.meta/loyalty/connect_responses_voucher_details.htm)
