---
title: "VPL360_UpsertPayMethodOrderPayment"
domain: media-developer-guide
topic: vpl360upsertpaymethodorderpayment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.941Z
estimatedTokens: 185
keywords: [VPL360_UpsertPayMethodOrderPayment, Integration, Procedure, saves, Order, Payment, objects, VPL360, _UpsertPayMethodOrderPayment, Sample, Input, Output, Calls]
---

# VPL360_UpsertPayMethodOrderPayment

> This Integration Procedure saves the Order Payment and
		Payment Method objects.

# VPL360\_UpsertPayMethodOrderPayment

This Integration Procedure saves the Order Payment and Payment Method objects.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AccountId | Required |
| capture_method | Required |
| CreatedDate | Required |
| Customer | Required |
| EventId | Required |
| OrderId | Required |
| PaymentIntentId | Required |
| PaymentMethod | Required |
| PaymentReceived | Required |
| Type | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Web shop: Webhook Integration Procedure that listens to Stripe


## Calls

-   Data Mapper: DRLoadOrderPayment

-   Remote Action: UpdatePaymentMethod

    -   Class: VPLUserDetails

    -   Method: updatePaymentMethod

## Code Examples

```
{
	"Type": "payment_intent.succeeded",
	"CreatedDate": "2020-11-04T11:16:30.000Z",
	"EventId": "evt_1HjjycKOGFB3U5JQ2sIYz9nt",
	"capture_method": "automatic",
	"Customer": "cus_IPY1hRh7iVsOo5",
	"PaymentReceived": "2589",
	"PaymentIntentId": "pi_1HjjybKOGFB3U5JQK4m3Xw9V",
	"OrderId": "8014W000001ZG0DQAW",
	"AccountId": "0014W00002AWE4EQAX",
	"PaymentMethod": "card_1HifbFKOGFB3U5JQmq1KoLGS"
}
```

```
{
  "OrderId": "",
  "OrderPaymentId": "a5i4x0000000QIZAA2",
  "PaymentMethodId": "a4m4x0000000Yq1AAE",
  "Upsert": "Success"
}
```
