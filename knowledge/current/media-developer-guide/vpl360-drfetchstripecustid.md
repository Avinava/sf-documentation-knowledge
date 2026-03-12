---
title: "VPL360-DRFetchStripeCustId"
domain: media-developer-guide
topic: vpl360-drfetchstripecustid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.859Z
estimatedTokens: 345
keywords: [VPL360-DRFetchStripeCustId, Omnistudio, Data, Mapper, fetch, payment, customer, user, input, Sample, Output]
---

# VPL360-DRFetchStripeCustId

> This
    Omnistudio Data Mapper is used to fetch the payment customer ID using the user ID as
    input.

# VPL360-DRFetchStripeCustId

This Omnistudio Data Mapper is used to fetch the payment customer ID using the user ID as input.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| UserId | Required |

## Sample Output

```

```

## Called By

-   Workflow: Selfcare Billing Card on Oveview Page

    -   LWC: VplS360SelfCareOverviewBillingCard.js

        -   LWC: VplS360SelfCareBillingDetails.js

            -   Integration Procedure: VPL360\_getPaymentMethods

-   Workflow: Agent Console Payment

    -   OmniScript: vpls360csr\_BuyAddonsV3\_English

        -   OmniScript: vpls360csr\_ChangeBasePackage\_English

            -   Integration Procedure: VPL360CSR\_CreatePaymentIntentCSR

-   Workflow: Agent Console Payment

    -   OmniScript: vpls360csr\_BuyAddonsV3\_English

        -   OmniScript: vpls360csr\_ChangeBasePackage\_English

            -   Integration Procedure: VPL360CSR\_CreateSetupIntentCSR

-   Workflow: Agent Console Payment

    -   OmniScript: vpls360csr\_BuyAddonsV3\_English

        -   OmniScript: vpls360csr\_ChangeBasePackage\_English

            -   Integration Procedure: VPL360CSR\_getPaymentMethodsCSR

                -   Integration Procedure: VPL360CSR\_CreatePaymentIntentBillingCSR

-   Workflow: Agent Console Payment and Billing

    -   Integration Procedure: VPL360CSR\_VIP\_DetachcardFromCustomerCSR

## Code Examples

```
{
    "UserId": "0054W00000CSOYUQA5"
}
```

```
{
  "PaymentCustomerId": "cus_IXlzqDEBvtmuq4",
  "Email": "abc@test.com",
  "AccountId": "0014W00002AGmzOQAT"
}
```
