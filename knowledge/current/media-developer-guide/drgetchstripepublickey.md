---
title: "DRGetchStripePublicKey"
domain: media-developer-guide
topic: drgetchstripepublickey
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.020Z
estimatedTokens: 99
keywords: [DRGetchStripePublicKey, Omnistudio, Data, Mapper, fetches, Stripe, key, payment, flow, Sample, Input, Output]
---

# DRGetchStripePublicKey

> This Omnistudio Data Mapper fetches the Stripe public key
    value for the payment flow.

# DRGetchStripePublicKey

This Omnistudio Data Mapper fetches the Stripe public key value for the payment flow.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| type | Required |

## Sample Output

```

```

## Called By

-   Workflow: Payment LWC

    -   Omniscript: vpls360csr\_BuyAddonsV3\_English

        -   Integration Procedure: VPL360\_getStripePublicKey

## Code Examples

```
{
    "type": "Stripe_Public_Key"
}
```

```
{
  "isActive": true,
  "Value": "sk_test_XXXXXXXXX123456",
  "Label": "Stripe Public Key"
}
```
