---
title: "Estimate Delivery Date Input"
domain: chatterapi
topic: estimate-delivery-date-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.602Z
estimatedTokens: 179
keywords: [Estimate, Delivery, Date, Input, estimation]
---

# Estimate Delivery Date Input

> Delivery date estimation information.

# Estimate Delivery Date Input

Delivery date estimation information.

Root XML tag

estimateDeliveryDateInput

JSON example

```

```

Properties

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| deliveryAddress | ConnectApi.DeliveryAddressInputRepresentation | Delivery address. | Optional | 63.0 |
| locations | String | List of location external references. | Optional | 63.0 |
| products | ConnectApi.DeliveryEstimationProductInputRepresentation | List of products included in delivery estimation. | Required | 63.0 |
| shippingCarrier | ConnectApi.ShippingCarrierInputRepresentation | Shipping carrier used to deliver the order. | Required | 63.0 |

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
