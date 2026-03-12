---
title: "DRVerifyOrderAcount"
domain: media-developer-guide
topic: drverifyorderacount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.057Z
estimatedTokens: 159
keywords: [DRVerifyOrderAcount, Omnistudio, Data, Mapper, total, amount, order, Sample, Input, Output]
---

# DRVerifyOrderAcount

> This Omnistudio Data Mapper gets the total amount for an
    order.

# DRVerifyOrderAcount

This Omnistudio Data Mapper gets the total amount for an order.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AccountId | Required |
| OrderId | Required |

## Sample Output

```

```

## Called By

-   Workflow: Create Payment Intent

    -   LWC: vplS360StripePaymentIntegration.js

        -   Integration Procedure: VPL360\_CreatePaymentIntent

-   Workflow: Agent Console Payment Flow

    -   Omniscript: vpls360csr\_BuyAddonsV3\_English

        -   Omniscript: vpls360csr\_ChangeBasePackage\_English

            -   Integration Procedure: VPL360CSR\_CreatePaymentIntentCSR

## Code Examples

```
{
    "AccountId": "0014W000029kBVyQAM",
    "OrderId": "8014W000002MbVjQAK"
}
```

```
{
  "TotalAmount": 7.5,
  "OrderId": "8014W000002MbVjQAK",
  "OneTimeTotal": 0
}
```
