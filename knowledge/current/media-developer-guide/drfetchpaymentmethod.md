---
title: "DRFetchPaymentMethod"
domain: media-developer-guide
topic: drfetchpaymentmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.013Z
estimatedTokens: 102
keywords: [DRFetchPaymentMethod, Omnistudio, Data, Mapper, fetches, payment, records, account, Sample, Input, Output]
---

# DRFetchPaymentMethod

> This Omnistudio Data Mapper fetches the payment method
    records for an account.

# DRFetchPaymentMethod

This Omnistudio Data Mapper fetches the payment method records for an account.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| PaymentMethodId | Required |

## Sample Output

```

```

## Called By

-   Workflow: Self care Billing Details page

    -   LWC: vplS360SelfCareBillingDetails.js

        -   Integration Procedure: VPL360\_UpdatePaymentmethod

## Code Examples

```
{
    "PaymentMethodId": "a3Q4W000000gYg6UAE"
}
```

```
{
  "PaymentMethod": {
    "Id": "a3Q4W000000gYg6UAE",
    "CardNumber": "4242424242424242",
    "CardHolderName": "Test Name",
    "AccountId": "0014W00002AGmzOQAT"
  }
}
```
