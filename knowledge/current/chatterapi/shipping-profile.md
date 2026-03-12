---
title: "Shipping Profile"
domain: chatterapi
topic: shipping-profile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.134Z
estimatedTokens: 201
keywords: [Shipping, Profile, Output, representation]
---

# Shipping Profile

> Output representation of the shipping profile.

# Shipping Profile

Output representation of the shipping profile.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the shipping profile. | Small, 59.0 | 59.0 |
| isDefault | Boolean | Indicates whether the shipping profile is set as default (true) or not (false). | Small, 59.0 | 59.0 |
| name | String | Name of the shipping profile. | Small, 59.0 | 59.0 |
| processTime | Integer | Time required to process the shipping order. | Small, 61.0 | 61.0 |
| processTimeUnit | String | Unit of time for processing the shipping order. Possible values are:DaysHoursWeeks | Small, 61.0 | 61.0 |
| shippingRateGroups | Shipping Rate Group[] | List of shipping rate groups. | Small, 59.0 | 59.0 |

## Code Examples

```
[
  {
    "id": "7LAxxxxxxxxxx1",
    "name": "General Shipping Profile",
    "isDefault": true,
    "ShippingRateGroups": [
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
            "StandardShippingRates": [
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
    ]
  }
]
```

## Related Topics

- Shipping Rate
                  Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_shipping_rate_group.htm)
