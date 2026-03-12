---
title: "VPL360CSR_CreatePaymentIntentCSR"
domain: media-developer-guide
topic: vpl360csrcreatepaymentintentcsr
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.173Z
estimatedTokens: 173
keywords: [VPL360CSR_CreatePaymentIntentCSR, Integration, Procedure, creates, payment, intent, customer, Stripe, fetches, client, secret, key, VPL360CSR, _CreatePaymentIntentCSR, Sample]
---

# VPL360CSR_CreatePaymentIntentCSR

> This Integration Procedure creates the payment intent for
    the customer in Stripe and fetches the client secret key to complete the payment.

# VPL360CSR\_CreatePaymentIntentCSR

This Integration Procedure creates the payment intent for the customer in Stripe and fetches the client secret key to complete the payment.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AccountId | Required |
| cartId | Required |

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

-   Data Mapper: DRVerifyOrderAccount

-   Data Mapper: VPL360csr-DRFetchStripeCustId

-   HTTP Action: ListAllPaymentmethods

-   HTTP Action: CreatePaymentIntent

## Code Examples

```
{
    "AccountId": "0014W00002BvqD1QAJ",
    "cartId": "8014W000000lIZNQA2"
}
```

```
{
  "client_secret": "pi_1I134AKOGFB3U5JQFT9JDyzo_secret_PtqY6ZAHekxGt1wkV5MnYmvO2"
}
```
