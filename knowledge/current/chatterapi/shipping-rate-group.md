---
title: "Shipping Rate Group"
domain: chatterapi
topic: shipping-rate-group
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.141Z
estimatedTokens: 111
keywords: [Shipping, Rate, Group, Output, representation]
---

# Shipping Rate Group

> Output representation of the shipping rate group.

# Shipping Rate Group

Output representation of the shipping rate group.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the shipping rate group. | Small, 59.0 | 59.0 |
| name | String | Name of the shipping rate group. | Small, 59.0 | 59.0 |
| shippingZones | Shipping Zone[] | List of shipping zones. | Small, 59.0 | 59.0 |

## Code Examples

```
{
  "id": "8Ni000000000001",
  "name": "Shipping rate group 1",
  "shippingZones": [
    {
      "Id": "12h000000000100",
      "countries": [
        {
          "isoCode": "US",
          "label": "United States"
        },
        {
          "isoCode": "CA",
          "label": "Canada"
        }
      ],
      "standardShippingRates": [
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
        },
        {
          "conditionFactor": "ORDER_PRICE",
          "conditionRangeMax": 50,
          "conditionRangeMin": 10,
          "currencyIsoCode": "USD",
          "id": "5fy000000000002",
          "name": "ShippingRate2",
          "price": 5,
          "transitTimeMax": 5,
          "transitTimeMin": 2,
          "transitTimeUnit": "days",
          "weightUnit": "Pounds"
        }
      ]
    }
  ]
}
```

## Related Topics

- Shipping
                Zone (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_shipping_zone.htm)
