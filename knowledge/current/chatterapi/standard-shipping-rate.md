---
title: "Standard Shipping Rate"
domain: chatterapi
topic: standard-shipping-rate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.202Z
estimatedTokens: 395
keywords: [Standard, Shipping, Rate, Output, representation]
---

# Standard Shipping Rate

> Output representation of the standard shipping rate.

# Standard Shipping Rate

Output representation of the standard shipping rate.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| conditionFactor | String | Conditions factor for the shipping rate area. Possible values are:OrderPrice—Condition based on the order price value.OrderWeight—Condition based on the delivery weight. This value is available in API version 62.0 and later. | Small, 59.0 | 59.0 |
| conditionRangeMax | Double | Maximum value of the shipping rate condition. | Small, 59.0 | 59.0 |
| conditionRangeMin | Double | Minimum value of the shipping rate condition. This value can't be negative. | Small, 59.0 | 59.0 |
| currencyIsoCode | String | Currency ISO code of the cart. The default value is the org’s default currency. | Small, 60.0 | 60.0 |
| id | String | ID of the shipping rate. | Small, 59.0 | 59.0 |
| name | String | Name of the standard shipping rate. | Small, 59.0 | 59.0 |
| price | String | Price of standard shipping rate. | Small, 59.0 | 59.0 |
| transitTimeMax | Integer | Maximum value of the shipping transit time. | Small, 61.0 | 61.0 |
| transitTimeMin | Integer | Minimum value of the shipping transit time. This value can't be negative. | Small, 61.0 | 61.0 |
| transitTimeUnit | String | Transit time unit for shipping calculation. Possible values are:DaysHoursWeeks | Small, 61.0 | 61.0 |
| weightUnit | String | Unit of measurement for the weight of the cart items. Possible values are:GramsKilogramsOuncesPounds | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "conditionFactor": "ORDER_PRICE",
  "conditionRangeMax": 50,
  "conditionRangeMin": 0,
  "currencyIsoCode": "USD",
  "id": "5fy000000000001",
  "name": "ShippingRate1",
  "price": 10,
  "transitTimeMax": 5,
  "transitTimeMin": 2,
  "transitTimeUnit": "days",
  "weightUnit": "Pounds"
}
```
