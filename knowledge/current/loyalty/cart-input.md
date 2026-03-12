---
title: "Cart Input"
domain: loyalty
topic: cart-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.844Z
estimatedTokens: 247
keywords: [Cart, Input, line, items, that's, evaluate, execute, promotions]
---

# Cart Input

> The details of a cart and its line items that's used to evaluate and execute
    promotions.

# Cart Input

The details of a cart and its line items that's used to evaluate and execute promotions.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cart | Map<String, Object> | Details of a cart and its line items used to evaluate and execute promotions.The payload must include cartHeaderId__std, which uniquely identifies the cart and is required for promotion evaluation and execution.Specify the applicable currencyISOCode for the transaction.To evaluate or execute coupon-based promotions, include the couponCode, which must match an active coupon or promotion configured in the system.Along with the required parameters, provide cart-level details such as the total transaction amount, and cart line item details such as line item quantity and amount, cartLineNetUnitPrice__std (required for evaluation of line-level and cross-line promotions), and product ID. | Required | 65.0 |

## Code Examples

```
{
  "cart": {
    "cartDetails": [
      {
        "cartHeaderId__std": "01ddf0000003kfMAAW",
        "activityStartDate": "2023-06-14T12:45:19Z",
        "contactId/contactEmail/contactLastName/loyaltyProgramMemberId/membershipNumber/accountId": "003xx000004WjzAAAS",
        "transactionAmount": 110,
        "currencyISOCode": "USD",
        "engagementChannelId": "0eFxx0000000008EAA",
        "sourceLocationId/sourceLocation": "0YQxx0000000001GAA",
        "cartPromotionAdditionalInformation__std": [
          {
            "cartCouponCode__std": "CART5"
          }
        ],
        "cartLineDetails": [
          {
            "cartLineProductId": "01txx0000006kfMAAQ",
            "cartLineItemQuantity": 2,
            "cartLineItemAmount": 100,
            "cartLineItemId": "abcd1",
            "cartLineNetUnitPrice__std": 50,
            "cartLinePromotionAdditionalInformation__std": [
              {
                "cartLineCouponCode__std": "PIZZA5"
              }
            ]
          },
          {
            "cartLineProductId": "01txx0000006kfNAAQ",
            "cartLineItemQuantity": 2,
            "cartLineItemAmount": 10,
            "cartLineItemId": "abcd2",
            "cartLineNetUnitPrice__std": 5
          }
        ]
      }
    ]
  }
}
```
