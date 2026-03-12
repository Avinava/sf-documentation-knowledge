---
title: "VPL360_CreatePaymentIntent"
domain: media-developer-guide
topic: vpl360createpaymentintent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.128Z
estimatedTokens: 156
keywords: [VPL360_CreatePaymentIntent, Integration, Procedure, creates, payment, intent, made, VPL360, _CreatePaymentIntent, Sample, Input, Output, Calls]
---

# VPL360_CreatePaymentIntent

> This Integration Procedure creates a payment intent before
      a payment is made.

# VPL360\_CreatePaymentIntent

This Integration Procedure creates a payment intent before a payment is made.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| encryptedString | Required |
| UserId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Web shop: Create Payment Intent

-   Components:

    -   LWC: vplS360StripePaymentIntegration.js


## Calls

-   Data Mapper: VPL360-DRFetchStripeCustId

-   Data Mapper: DRVerifyOrderAcount

-   HTTP Action: CreatePaymentIntent

-   Remote Action: DecryptOrder

    -   Class: VPLUserDetails

    -   Method: decryptInput

## Code Examples

```
{
	"UserId": "0054W00000CRwmKQAT",
	"encryptedString": "FYdtYFOe6ybQXsN"
}
```

```
{
	"client_secret": "pi_dhdhgjdhdhlhhh"
}
```
