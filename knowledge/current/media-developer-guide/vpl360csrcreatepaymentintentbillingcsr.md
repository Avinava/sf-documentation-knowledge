---
title: "VPL360CSR_CreatePaymentIntentBillingCSR"
domain: media-developer-guide
topic: vpl360csrcreatepaymentintentbillingcsr
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.169Z
estimatedTokens: 174
keywords: [VPL360CSR_CreatePaymentIntentBillingCSR, Integration, Procedure, creates, payment, intent, billing, amount, debited, VPL360CSR, _CreatePaymentIntentBillingCSR, Sample, Input, Output, Calls]
---

# VPL360CSR_CreatePaymentIntentBillingCSR

> This Integration Procedure creates payment intent and
        billing with the amount to be debited from the payment method.

# VPL360CSR\_CreatePaymentIntentBillingCSR

This Integration Procedure creates payment intent and billing with the amount to be debited from the payment method.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| amount | Required |
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

-   HTTP Action: ListAllPaymentmethods

-   HTTP Action: CreatePaymentIntent

## Code Examples

```
{
    "ContextId": "a1S4W000006A1tyUAC",
    "amount": "56"
}
```

```
{
  "payment_method": "pm_1I0meAKOGFB3U5JQ451BqPxf",
  "on_behalf_of": null,
  "next_action": null,
  "metadata": {},
  "livemode": false,
  "last_payment_error": null,
  "invoice": null,
  "description": null,
  "customer": "cus_Ic0euqbWnFYOg3",
  "currency": "inr",
  "created": 1608614738,
  "confirmation_method": "automatic",
  "client_secret": "pi_1I13NOKOGFB3U5JQ9FQIrKw1_secret_MKw1Ro8jwOAueYz1ZUCXJt2aD",
  "charges": {
    "url": "/v1/charges?payment_intent=pi_1I13NOKOGFB3U5JQ9FQIrKw1",
    "total_count": 0,
    "has_more": false,
    "data": [],
    "object": "list"
  },
  "capture_method": "automatic",
  "cancellation_reason": null,
  "canceled_at": null,
  "application_fee_amount": null,
  "application": null,
  "amount_received": 0,
  "amount_capturable": 0,
  "amount": 5600,
  "object": "payment_intent",
  "id": "pi_1I13NOKOGFB3U5JQ9FQIrKw1"
}
```
