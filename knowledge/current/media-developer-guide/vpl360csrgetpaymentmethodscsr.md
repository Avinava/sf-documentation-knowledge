---
title: "VPL360CSR_getPaymentMethodsCSR"
domain: media-developer-guide
topic: vpl360csrgetpaymentmethodscsr
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.184Z
estimatedTokens: 143
keywords: [VPL360CSR_getPaymentMethodsCSR, Integration, Procedure, card, payment, VPL360CSR, _getPaymentMethodsCSR, Sample, Input, Output, Calls]
---

# VPL360CSR_getPaymentMethodsCSR

> This Integration Procedure gets card or payment
        details.

# VPL360CSR\_getPaymentMethodsCSR

This Integration Procedure gets card or payment details.

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

-   Flows

    -   Agent console: Payment

-   Components:

    -   Omniscript: vpls360csr\_BuyAddonsV3\_English

    -   Omniscript: vpls360csr\_ChangeBasePackage\_English


## Calls

-   Data Mapper: vpls360Csr-FetchAccountFromInteraction

-   Data Mapper: VPL360csr-DRFetchStripeCustId

-   HTTP Action: GetPaymentMethodFromStripe

## Code Examples

```
{
    "ContextId": "a1S4W000006A1ZyUAK"
}
```

```
{
  "brand": "visa",
  "card": "4242",
  "country": "US",
  "exp_month": 4,
  "exp_year": 2024
}
```
