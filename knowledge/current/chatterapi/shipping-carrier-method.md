---
title: "Shipping Carrier Method"
domain: chatterapi
topic: shipping-carrier-method
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.847Z
estimatedTokens: 101
keywords: [Shipping, Carrier, external, references]
---

# Shipping Carrier Method

> Shipping carrier method external references.

# Shipping Carrier Method

Shipping carrier method external references.

Root XML tag

shippingCarrierMethod

JSON example

```

```

Properties

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| externalReference | String | Unique code, reference, or identifier for the shipping carrier method used by external systems. | Required | 63.0 |

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
