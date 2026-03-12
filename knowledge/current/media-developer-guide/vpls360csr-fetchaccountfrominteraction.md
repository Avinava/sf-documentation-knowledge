---
title: "vpls360Csr-FetchAccountFromInteraction"
domain: media-developer-guide
topic: vpls360csr-fetchaccountfrominteraction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.281Z
estimatedTokens: 308
keywords: [vpls360Csr-FetchAccountFromInteraction, Omnistudio, Data, Mapper, agent, console, fetch, account, customer, interaction, Sample, Input, Output]
---

# vpls360Csr-FetchAccountFromInteraction

> This Omnistudio Data Mapper is used in the agent console
        to fetch the account ID from the customer interaction.

# vpls360Csr-FetchAccountFromInteraction

This Omnistudio Data Mapper is used in the agent console to fetch the account ID from the customer interaction.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| ContextId | Required |

## Sample Output

```

```

## Called By

-   Workflow: Agent console; Subscription Page, tab

    -   Omniscript: vpls360csr\_BuyAddonsV3\_English

        -   Integration Procedure: vpls360Csr\_FetchAssets

-   Workflow: Agent console Change Base Package

    -   Omniscript: vpls360csrChangeBasePackage

        -   Integration Procedure: VPL360\_CSRBasePackageChange

-   Workflow: Agent Console Payment

    -   Omniscript: vpls360csr\_BuyAddonsV3\_English

    -   Omniscript: vpls360csr\_ChangeBasePackage\_English

        -   Integration Procedure: VPL360CSR\_CreateSetupIntentCSR

        -   Integration Procedure: VPL360CSR\_getPaymentMethodsCSR

        -   Integration Procedure:

            VPL360CSR\_CreatePaymentIntentBillingCSR

-   Workflow: Agent console, Billing

    -   Integration Procedure: VPL360CSR\_VIP\_DetachcardFromCustomerCSR

-   Workflow: Agent console, Subscription page

    -   Integration Procedure: vpls360Csr\_AssetFetchForCustomer

## Code Examples

```
{
    "ContextId": "a1S4W000006A1ZyUAK"
}
```

```
{
  "AccountId": "0014W00002BvqD1QAJ"
}
```
