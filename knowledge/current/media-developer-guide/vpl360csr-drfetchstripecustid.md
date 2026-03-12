---
title: "VPL360csr-DRFetchStripeCustId"
domain: media-developer-guide
topic: vpl360csr-drfetchstripecustid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.180Z
estimatedTokens: 343
keywords: [VPL360csr-DRFetchStripeCustId, Omnistudio, Data, Mapper, agent, console, fetch, payment, customer, email, address, account, Sample, Input, Output]
---

# VPL360csr-DRFetchStripeCustId

> This Omnistudio Data Mapper is used in the agent console to
    fetch the payment customer ID and email address for an account.

# VPL360csr-DRFetchStripeCustId

This Omnistudio Data Mapper is used in the agent console to fetch the payment customer ID and email address for an account.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AccountId | Required |

## Sample Output

```

```

## Called By

-   Workflow: Self care Billing Card on Overview page

    -   LWC: VplS360SelfCareOverviewBillingCard.js

    -   LWC: VplS360SelfCareBillingDetails.js

        -   Integration Procedure: VPL360\_getPaymentMethods

-   Workflow: Agent console Payment

    -   Omniscript: vpls360csr\_BuyAddonsV3\_English

    -   Omniscript: vpls360csr\_ChangeBasePackage\_English

        -   Integration Procedure: VPL360CSR\_CreatePaymentIntentCSR

-   Workflow: Agent console Payment

    -   Omniscript: vpls360csr\_BuyAddonsV3\_English

    -   Omniscript: vpls360csr\_ChangeBasePackage\_English

        -   Integration Procedure: VPL360CSR\_CreateSetupIntentCSR

-   Workflow: Agent console Payment

    -   Omniscript: vpls360csr\_BuyAddonsV3\_English

    -   Omniscript: vpls360csr\_ChangeBasePackage\_English

        -   Integration Procedure: VPL360CSR\_getPaymentMethodsCSR

        -   Integration Procedure: VPL360CSR\_CreatePaymentIntentBillingCSR

-   Workflow: Agent console Payment, Billing

    -   Integration Procedure: VPL360CSR\_VIP\_DetachcardFromCustomerCSR

## Code Examples

```
{
    "AccountId": "0014W00002BvJ4FQAV"
}
```

```
{
  "AccountEmail": "demo@foxthree.com",
  "PaymentCustomerId": "cus_Iau7ATwaurvGum"
}
```
