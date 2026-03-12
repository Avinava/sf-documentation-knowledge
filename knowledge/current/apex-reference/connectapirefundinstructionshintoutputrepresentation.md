---
title: "ConnectApi.RefundInstructionsHintOutputRepresentation"
domain: apex-reference
topic: connectapirefundinstructionshintoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:28.849Z
estimatedTokens: 160
keywords: [ConnectApi.RefundInstructionsHintOutputRepresentation, Instructions, showing, sequence, which, credits, refunds, were, issued, customer.]
---

# ConnectApi.RefundInstructionsHintOutputRepresentation

> Instructions showing the sequence in which credits and refunds were issued to the
    customer.

# ConnectApi.RefundInstructionsHintOutputRepresentation

Instructions showing the sequence in which credits and refunds were issued to the customer.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| paymentCreditSequence | List<ConnectApi.PaymentCreditSequenceItemOutputRepresentation > | The representation of individual payment credit items. Each item represents a specific payment method and the amount of credit to be applied to it. | 65.0 |
| refundSequence | List<ConnectApi.RefundSequenceItemOutputRepresentation> | The order payment summary ID and value of the processed refund items. | 65.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.PaymentCreditSequenceItemOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_credit_sequence_item_output.htm)
- ConnectApi.RefundSequenceItemOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_refund_sequence_item_output.htm)
