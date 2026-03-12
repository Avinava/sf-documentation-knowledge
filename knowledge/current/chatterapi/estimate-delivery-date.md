---
title: "Estimate Delivery Date"
domain: chatterapi
topic: estimate-delivery-date
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.464Z
estimatedTokens: 324
keywords: [Estimate, Delivery, Date, Forecast, expected, time, estimation, settings, selected, shipping, carrier, Provide, package, shipped, delivered, Estimated, dates]
---

# Estimate Delivery Date

> Forecast an expected delivery date and time based on delivery estimation
    settings and the selected shipping carrier method. Provide information on when a package is
    expected to be shipped and delivered.

# Estimate Delivery Date

Forecast an expected delivery date and time based on delivery estimation settings and the selected shipping carrier method. Provide information on when a package is expected to be shipped and delivered.

Resource

```

```

Available version

63.0

HTTP methods

POST

Request body for POST

[Estimate Delivery Date Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_estimate_delivery_date_input.htm "Delivery date estimation information.")

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

Response body for POST

[Estimate Delivery Date](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_estimate_delivery_date_output.htm "Estimated delivery dates.")

## Code Examples

```
/commerce/delivery/estimation-setup/externalReference/estimate/estimate-date
```

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

## Related Topics

- Estimate Delivery Date Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_estimate_delivery_date_input.htm)
- Estimate Delivery Date (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_estimate_delivery_date_output.htm)
