---
title: "DRUpdatePaymentMethod"
domain: media-developer-guide
topic: drupdatepaymentmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.054Z
estimatedTokens: 135
keywords: [DRUpdatePaymentMethod, Omnistudio, Data, Mapper, updates, payment, account, Sample, Input, Output]
---

# DRUpdatePaymentMethod

> This Omnistudio Data Mapper updates the payment method
    details for an account.

# DRUpdatePaymentMethod

This Omnistudio Data Mapper updates the payment method details for an account.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| cardExpMonth | Required |
| cardExpYear | Required |
| cardHolderName | Required |
| cardNumber | Required |
| PaymentMethodId | Required |
| Type | Required |

## Sample Output

```

```

## Called By

-   Workflow: Self care Billing Details page

    -   LWC: VplS360SelfCareBillingDetails.js

        -   Integration Procedure: VPL360\_UpdatePaymentmethod

## Code Examples

```
{
  "PaymentMethodId": "a3Q4W000000gYg6UAE",
  "Type": "Credit Card",
  "cardExpMonth": "08",
  "cardExpYear": "2022",
  "cardHolderName": "Raina Warner",
  "cardNumber": "553535353535353"
}
```

```
1- vlocity_cmt__PaymentMethod__c: a3Q4W000000gYg6UAE
```
