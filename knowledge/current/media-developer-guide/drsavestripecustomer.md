---
title: "DRsaveStripeCustomer"
domain: media-developer-guide
topic: drsavestripecustomer
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.036Z
estimatedTokens: 102
keywords: [DRsaveStripeCustomer, Omnistudio, Data, Mapper, saves, payment, Salesforce, org, Sample, Input, Output]
---

# DRsaveStripeCustomer

> This Omnistudio Data Mapper saves a payment method in the Salesforce org.

# DRsaveStripeCustomer

This Omnistudio Data Mapper saves a payment method in the Salesforce org.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AccountId | Required |
| PaymentCustomerId | Required |

## Sample Output

```

```

## Called By

-   Workflow: New User Onboarding

    -   LWC: VplS360AccountSignup

        -   Integration Procedure: VPL360\_CreateStripeCustomer

## Code Examples

```
{
  "AccountId": "0014W00002AGmzOQAT",
  "PaymentCustomerId": "cus_IXlzqDEBvtmuq4"
}
```

```
1- vlocity_cmt__PaymentMethod__c: a3Q4W000000gYFMUA2
```
