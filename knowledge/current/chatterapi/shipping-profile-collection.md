---
title: "Shipping Profile Collection"
domain: chatterapi
topic: shipping-profile-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.138Z
estimatedTokens: 129
keywords: [Shipping, Profile, Collection, Output, representation]
---

# Shipping Profile Collection

> Output representation of the shipping profile collection.

# Shipping Profile Collection

Output representation of the shipping profile collection.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | Number of shipping profiles returned on the current page. | Small, 59.0 | 59.0 |
| items | Shipping Profile[] | List of shipping profiles. | Small, 59.0 | 59.0 |
| total | Integer | Total number of shipping profiles available for a webstore. | Small, 59.0 | 59.0 |

## Code Examples

```
{
  "count": 1,
  "total": 1,
  "items": [
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
}
```

## Related Topics

- Shipping
                  Profile (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_shipping_profile.htm)
