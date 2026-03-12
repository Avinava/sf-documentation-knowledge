---
title: "DRLoadPaymentMethod"
domain: media-developer-guide
topic: drloadpaymentmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.026Z
estimatedTokens: 99
keywords: [DRLoadPaymentMethod, Omnistudio, Data, Mapper, loads, payment, record, Sample, Input, Output]
---

# DRLoadPaymentMethod

> This Omnistudio Data Mapper loads the payment method details
    in the record.

# DRLoadPaymentMethod

This Omnistudio Data Mapper loads the payment method details in the record.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| itemId | Required |

## Sample Output

```

```

## Called By

-   Workflow: Self care Billing Details page

    -   LWC: vplS360SelfCareBillingDetails.js

        -   Integration Procedure: VPL360\_CreatePaymentmethod

## Code Examples

```
{
  "AccountId": "0014W00002AGmzOQAT",
  "Type": "Credit Card",
  "cardExpMonth": "08",
  "cardExpYear": "2022",
  "cardHolderName": "Test Name",
  "cardNumber": "4242424242424242"
}
```

```
1- vlocity_cmt__PaymentMethod__c: a3Q4W000000gYg6UAE
```
