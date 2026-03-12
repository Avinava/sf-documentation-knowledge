---
title: "VPL360_CreatePaymentIntentBilling"
domain: media-developer-guide
topic: vpl360createpaymentintentbilling
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.132Z
estimatedTokens: 168
keywords: [VPL360_CreatePaymentIntentBilling, Integration, Procedure, creates, payment, intent, Pay, Now, billing, Self, care, VPL360, _CreatePaymentIntentBilling, Sample, Input]
---

# VPL360_CreatePaymentIntentBilling

> This Integration Procedure creates payment intent for the
        Pay Now billing section in Self care.

# VPL360\_CreatePaymentIntentBilling

This Integration Procedure creates payment intent for the Pay Now billing section in Self care.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| amount | Required |
| UserId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Payment Integration

-   Components:

    -   LWC: vplS360StripePaymentIntegration.js


## Calls

-   Data Mapper: VPL360-DRFetchStripeCustId

-   Data Mapper: DRVerifyOrderAcount

-   HTTP Action: Stripe/payment\_intents

-   HTTP Action: Stripe/payment\_methods

-   Remote Action:

    -   Class: VPLUserDetails

    -   Method: decryptInput

## Code Examples

```
{
    "UserId": "0054W00000DUQ68",
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
