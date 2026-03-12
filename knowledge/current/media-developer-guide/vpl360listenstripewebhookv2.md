---
title: "VPL360_ListenStripeWebhookV2"
domain: media-developer-guide
topic: vpl360listenstripewebhookv2
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.885Z
estimatedTokens: 154
keywords: [VPL360_ListenStripeWebhookV2, Integration, Procedure, exposed, REST, service, listens, payment, gateway, VPL360, _ListenStripeWebhookV2, Sample, Input, Output, Calls]
---

# VPL360_ListenStripeWebhookV2

> This Integration Procedure is exposed as a REST service.
        It listens to the payment gateway.

# VPL360\_ListenStripeWebhookV2

This Integration Procedure is exposed as a REST service. It listens to the payment gateway.

## Sample Input

This Integration Procedure accepts sample input in the format received from the Stripe payment gateway.

## Sample Output

```

```

## Called By

-   Flows:

    -   Web shop: Webhook Integration Procedure that listens to Stripe


## Calls

-   Data Mapper: DRTransformFromStripe

-   Integration Procedure: VPL360\_UpsertPayMethodOrderPayment

-   Remote Action: ValidateStripeSignature

    -   Class: PaymentGtwWebHookListener

    -   Method: validateStripeSignature

## Code Examples

```
{
  "OrderId": "",
  "OrderPaymentId": "a5i4x0000000QIZAA2",
  "PaymentMethodId": "a4m4x0000000Yq1AAE",
  "Upsert": "Success"
}
```
