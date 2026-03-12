---
title: "Shipping Zone"
domain: chatterapi
topic: shipping-zone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.145Z
estimatedTokens: 136
keywords: [Shipping, Zone, Output, representation, rate, area]
---

# Shipping Zone

> Output representation of the shipping rate area.

# Shipping Zone

Output representation of the shipping rate area.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| countries | Country[] | List of supported countries. | Small, 59.0 | 59.0 |
| id | String | ID of the shipping rate area. | Small, 59.0 | 59.0 |
| name | String | Name of the shipping rate area. | Small, 59.0 | 59.0 |
| standardShippingRates | Standard Shipping Rate[] | List of the standard shipping rates. | Small, 59.0 | 59.0 |

## Code Examples

```
{
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
```

## Related Topics

- Country (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_country.htm)
- Standard
                  Shipping Rate (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_standard_shipping_rate.htm)
