---
title: "VPLS360_getStripePublicKey"
domain: media-developer-guide
topic: vpls360getstripepublickey
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:11.678Z
estimatedTokens: 101
keywords: [VPLS360_getStripePublicKey, Integration, Procedure, Stripe, key, Lightning, Web, LWC, VPLS360, _getStripePublicKey, Sample]
---

> This Integration Procedure gets the Stripe public key to
        be used in the Lightning Web Components (LWC).

# VPLS360\_getStripePublicKey

This Integration Procedure gets the Stripe public key to be used in the Lightning Web Components (LWC).

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

-   Flows:

    -   Web shop : Payment LWC

    -   Self care : Payment LWC


## Calls

-   Data Mapper: DRGetchStripePublicKey

## Code Examples

```
{
    "type": "Stripe_Public_Key"
}
```

```
{
    "Label": "Stripe Public Key",
    "Value": "pk_test_*****",
    "isActive": true
}
```
