---
title: "ConnectApi.RefundInstructionsHintInputRepresentation"
domain: apex-reference
topic: connectapirefundinstructionshintinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.522Z
keywords: [ConnectApi.RefundInstructionsHintInputRepresentation]
---

# ConnectApi.RefundInstructionsHintInputRepresentation

# ConnectApi.RefundInstructionsHintInputRepresentation

The payment credit sequence, credit types, and refund sequence that provide information for optimal refund processing.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| paymentCreditSequenceItems | List< ConnectApi.PaymentCreditSequenceItemInputRepresentation> | The Order Payment Summary ID, credit amount, and credit type for individual payment credit items. Each item represents a specific payment method and the amount of credit to be applied to it. | Required | 65.0 |
| refundSequenceItems | List<ConnectApi.RefundSequenceItemInputRepresentation> | The Order Payment Summary ID and amount for the individual refund items in a sequence. Each item has a payment method and refund amount to be processed for that method. | Required | 65.0 |