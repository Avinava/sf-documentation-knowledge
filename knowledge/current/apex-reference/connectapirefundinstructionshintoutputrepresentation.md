---
title: "ConnectApi.RefundInstructionsHintOutputRepresentation"
domain: apex-reference
topic: connectapirefundinstructionshintoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:39.909Z
keywords: [ConnectApi.RefundInstructionsHintOutputRepresentation]
---

# ConnectApi.RefundInstructionsHintOutputRepresentation

# ConnectApi.RefundInstructionsHintOutputRepresentation

Instructions showing the sequence in which credits and refunds were issued to the customer.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| paymentCreditSequence | List<ConnectApi.PaymentCreditSequenceItemOutputRepresentation > | The representation of individual payment credit items. Each item represents a specific payment method and the amount of credit to be applied to it. | 65.0 |
| refundSequence | List<ConnectApi.RefundSequenceItemOutputRepresentation> | The order payment summary ID and value of the processed refund items. | 65.0 |