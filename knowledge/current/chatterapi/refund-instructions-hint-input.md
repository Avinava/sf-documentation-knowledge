---
title: "Refund Instructions Hint Input"
domain: chatterapi
topic: refund-instructions-hint-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.686Z
estimatedTokens: 213
keywords: [Refund, Instructions, Hint, Input, payment, credit, sequence, provide, optimal, processing]
---

# Refund Instructions Hint Input

> The payment credit sequence, credit types, and refund sequence that provide information
    for optimal refund processing.

# Refund Instructions Hint Input

The payment credit sequence, credit types, and refund sequence that provide information for optimal refund processing.

Root XML tag

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| paymentCreditSequenceItems | ConnectApi.PaymentCreditSequenceItemInputRepresentation[] | The Order Payment Summary ID, credit amount, and credit type for individual payment credit items. Each item represents a specific payment method and the amount of credit to be applied to it. | Required | 65.0 |
| refundSequenceItems | ConnectApi.RefundSequenceItemInputRepresentation[] | The Order Payment Summary ID and amount for the individual refund items in a sequence. Each item has a payment method and refund amount to be processed for that method. | Required | 65.0 |
