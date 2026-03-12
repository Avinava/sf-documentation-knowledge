---
title: "Shipping Carrier Input"
domain: chatterapi
topic: shipping-carrier-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.844Z
estimatedTokens: 125
keywords: [Shipping, Carrier, Input]
---

# Shipping Carrier Input

> Shipping carrier.

# Shipping Carrier Input

Shipping carrier.

Root XML tag

shippingCarrier

JSON example

```

```

Properties

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| externalReference | String | Unique code, reference, or identifier for the shipping carrier used by external systems. | Optional | 63.0 |
| shippingCarrierMethods | ListConnectApi.ShippingCarrierMethodInputRepresentation | List of shipping carrier methods. | Required | 63.0 |

## Code Examples

```
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
```
