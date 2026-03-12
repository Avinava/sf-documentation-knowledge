---
title: "Delivery Address Input"
domain: chatterapi
topic: delivery-address-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.496Z
estimatedTokens: 223
keywords: [Delivery, Address, Input]
---

# Delivery Address Input

> Delivery address.

# Delivery Address Input

Delivery address.

While each field is optional, at least one combination (latitude and longitude, country and postal code, or city, state, and country) must be included. The fields can't be left empty.

Root XML tag

deliveryAddress

JSON example

```

```

Properties

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| city | String | City in the state for the delivery address. | Optional | 63.0 |
| country | String | Country code for the delivery address. | Optional | 63.0 |
| latitude | Double | Latitude for the delivery address. | Optional | 63.0 |
| longitude | Double | Longitude for the delivery address. | Optional | 63.0 |
| postalCode | String | Postal code of the delivery address. | Optional | 63.0 |
| state | String | State in the country for the delivery address. | Optional | 63.0 |

## Code Examples

```
{
  "shippingCarrier": {
    "externalReference": "UPS001",
    "shippingCarrierMethods": [
      {
        "externalReference": "UPSGround001"
      },
      {
        "externalReference": "UPSAIR001"
      }
    ]
  },
  "locations": [
    "California"
  ],
  "products": [
    {
      "stockKeepingUnit": "SKU01",
      "quantity": 5
    }
  ],
  "deliveryAddress": {
    "country": "USA",
    "state": "CA",
    "city": "San Francisco",
    "postalCode": "00000",
    "latitude": 30.123,
    "longitude": 100.123
  }
}
```
