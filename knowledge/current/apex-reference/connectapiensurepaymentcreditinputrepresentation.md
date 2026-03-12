---
title: "ConnectApi.EnsurePaymentCreditInputRepresentation"
domain: apex-reference
topic: connectapiensurepaymentcreditinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.829Z
estimatedTokens: 195
keywords: [ConnectApi.EnsurePaymentCreditInputRepresentation, credit, memo, information, optionally, payment, sequence, details, issuing, credits., amount, distributed, specified, until, fully, applied., don’t, specify, default, Ensure]
---

# ConnectApi.EnsurePaymentCreditInputRepresentation

> The credit memo information and, optionally, the payment sequence details for issuing
    credits. The credit memo amount is distributed to the payment methods specified in the payment
    sequence until the amount is fully applied. If you don’t specify a payment sequence, the default
    payment sequence for Ensure Payment is used.

# ConnectApi.EnsurePaymentCreditInputRepresentation

The credit memo information and, optionally, the payment sequence details for issuing credits. The credit memo amount is distributed to the payment methods specified in the payment sequence until the amount is fully applied. If you don’t specify a payment sequence, the default payment sequence for Ensure Payment is used.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| creditMemo | CreditMemoInputRepresentation | The credit memo that’s being credited. | Required | 65.0 |
| paymentCreditSequence | List<ConnectApi.PaymentCreditSequenceInputRepresentation> | The ordering sequence of payments being used for the payment credit application. | Optional | 65.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
