---
title: "ConnectApi.RefundInstructionsHintInputRepresentation"
domain: apex-reference
topic: connectapirefundinstructionshintinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:25.664Z
estimatedTokens: 216
keywords: [payment, credit, sequence, refund, provide, optimal, processing]
---

# ConnectApi.RefundInstructionsHintInputRepresentation

> The payment credit sequence, credit types, and refund sequence that provide information
    for optimal refund processing.

# ConnectApi.RefundInstructionsHintInputRepresentation

The payment credit sequence, credit types, and refund sequence that provide information for optimal refund processing.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| paymentCreditSequenceItems | List< ConnectApi.PaymentCreditSequenceItemInputRepresentation> | The Order Payment Summary ID, credit amount, and credit type for individual payment credit items. Each item represents a specific payment method and the amount of credit to be applied to it. | Required | 65.0 |
| refundSequenceItems | List<ConnectApi.RefundSequenceItemInputRepresentation> | The Order Payment Summary ID and amount for the individual refund items in a sequence. Each item has a payment method and refund amount to be processed for that method. | Required | 65.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.PaymentCreditSequenceItemInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_payment_credit_sequence_item.htm)
- ConnectApi.RefundSequenceItemInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_refund_sequence_item.htm)
