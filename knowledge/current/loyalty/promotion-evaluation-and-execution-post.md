---
title: "Promotion Evaluation and Execution (POST)"
domain: loyalty
topic: promotion-evaluation-and-execution-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.164Z
estimatedTokens: 488
keywords: [Promotion, Evaluation, Execution, POST, Evaluate, cart, adjusted, price, line, items, applying, eligible, promotions, selected]
---

# Promotion Evaluation and Execution (POST)

> Evaluate cart details and return the adjusted price of cart and line items after
    applying eligible promotions based on the selected promotion evaluation and execution
    method.

# Promotion Evaluation and Execution (POST)

Evaluate cart details and return the adjusted price of cart and line items after applying eligible promotions based on the selected promotion evaluation and execution method.

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

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| rule​LibraryApiName | String | API Name of an active Rule Library with the usage type as Global Promotion Management. This parameter allows the API to check the eligibility of the cart against the promotions associated with the specified rule library.This parameter is required if there are multiple active rule libraries configured with the Usage Type as Global Promotion Management. | Optional | 65.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cart | Map<String, Object> | Details of a cart and its line items used to evaluate and execute promotions.The payload must include cartHeaderId__std, which uniquely identifies the cart and is required for promotion evaluation and execution.Specify the applicable currencyISOCode for the transaction.To evaluate or execute coupon-based promotions, include the couponCode, which must match an active coupon or promotion configured in the system.Along with the required parameters, provide cart-level details such as the total transaction amount, and cart line item details such as line item quantity and amount, cartLineNetUnitPrice__std (required for evaluation of line-level and cross-line promotions), and product ID. | Required | 65.0 |

Response body for POST

[Cart](atlas.en-us.loyalty.meta/loyalty/connect_responses_cart.htm "The details of a cart and its line items for which to evaluate and execute promotions.")

## Code Examples

```apex
/global-promotions-management/promotion-execution
```

```apex
https://yourInstance.salesforce.com/services/data/v66.0/global-promotions-management/promotion-execution
```

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

## Related Topics

- Cart (atlas.en-us.loyalty.meta/loyalty/connect_responses_cart.htm)
