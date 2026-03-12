---
title: "Ensure Payment Credit Input"
domain: chatterapi
topic: ensure-payment-credit-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.583Z
estimatedTokens: 186
keywords: [Ensure, Payment, Credit, Input, memo, optionally, sequence, issuing, credits, amount, distributed, until, fully, applied, don’t]
---

# Ensure Payment Credit Input

> The credit memo information and, optionally, the payment sequence details for issuing
    credits. The credit memo amount is distributed to the payment methods specified in the payment
    sequence until the amount is fully applied. If you don’t specify a payment sequence, the default
    payment sequence for Ensure Payment is used.

# Ensure Payment Credit Input

The credit memo information and, optionally, the payment sequence details for issuing credits. The credit memo amount is distributed to the payment methods specified in the payment sequence until the amount is fully applied. If you don’t specify a payment sequence, the default payment sequence for Ensure Payment is used.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| creditMemo | CreditMemoInputRepresentation | The credit memo that’s being credited. |  | 65.0 |
| paymentCreditSequence | ConnectApi.PaymentCreditSequenceInputRepresentation[] | The ordering sequence of payments being used for the payment credit application. |  | 65.0 |
