---
title: "Eligible Promotions List"
domain: loyalty
topic: eligible-promotions-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.357Z
estimatedTokens: 110
keywords: [Eligible, Promotions, Output, representation]
---

# Eligible Promotions List

> Output representation of a list of eligible promotions.

# Eligible Promotions List

Output representation of a list of eligible promotions.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| Promotions | Promotion Details[] | List of promotions that are eligible for a customer's cart. The list also contains the details of the rewards that each promotion offers to the customer. | Small, 60.0 | 60.0 |

## Code Examples

```
{
    "promotions": [
        {
            "id": "0c85i0000009c6D",
            "promotionCode": "10OFF",
            "displayName": "10% off on all electronics",
            "priority": 1,
            "currencyCode": "USD",
            "coupon": {
                "couponDetails": {
                    "couponCode": "COUPON-123",
                    "status": "Active",
                    "startDateTime": "2024-01-01",
                    "endDateTime": null
                },
                "message": "SingleActive"
            },
            "isAutomatic" : false,
            "additionalFields": {
                "startDate": "2023-09-10",
                "endDate": "2023-09-20",
                "promotionLocation__c": "HYD"
            },
            "limits": [
                {
                    "type": "PerLineItem",
                    "limit": 1
                }
            ],
            "rules": [
                {
                    "ruleName": "10PercentElectronics",
                    "benefits": [
                        {
                            "type": "Discount",
                            "discountLevel": "Cart",
                            "discountType": "Amount",
                            "discountValue": 10
                        },
                        {
                            "type": "Discount",
                            "discountLevel": "CartLineItem",
                            "lines": [
                                {
                                    "id": "6c139faa-b749-11ed-afa1-0242ac120002",
                                    "quantity": 3
                                },
                                {
                                    "id": "346bded6-b74a-11ed-afa1-0242ac120002",
                                    "quantity": 2
                                }
                            ],
                            "discountType": "Amount",
                            "discountValue": 10
                        },
                        {
                            "type": "Voucher",
                            "voucherDefinition": "ELEC10",
                            "voucherExpiryDate": "2023-12-31"
                        }
                    ]
                },
                {
                    "ruleName": "5PercentAppliances",
                    "benefits": [
                        {
                            "type": "Discount",
                            "discountLevel": "Cart",
                            "discountType": "Percent",
                            "discountValue": 5
                        },
                        {
                            "type": "FreeProduct",
                            "lineItemid": "b749-11ed-afa1",
                            "lines": [
                                {
                                    "id": "6c139faa-b749-11ed-afa1-0242ac120002",
                                    "quantity": 1
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "0c85i0000009c6D",
            "promotionCode": "20OFF",
            "displayName": "Get 100 points on all clothing",
            "priority": 2,
            "currencyCode": "USD",
            "additionalFields": {
                "startDate": "2023-09-10"
            },
            "rules": [
                {
                    "ruleName": "100PointsClothing",
                    "benefits": [
                        {
                            "type": "Points",
                            "points": "10",
                            "loyaltyProgramCurrencyName": "NQP"
                        },
                        {
                            "type": "Badge",
                            "loyaltyProgramBadgeName": "Ranger"
                        }
                    ]
                }
            ]
        }
    ]
}
```

## Related Topics

- Promotion
                  Details (atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_details.htm)
