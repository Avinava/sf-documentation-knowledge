---
title: "Refund Instructions Hint Output"
domain: chatterapi
topic: refund-instructions-hint-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:20.887Z
estimatedTokens: 167
keywords: [Refund, Instructions, Hint, Output, showing, sequence, credits, refunds, were, issued, customer]
---

# Refund Instructions Hint Output

> Instructions showing the sequence in which credits and refunds were issued to the
    customer.

# Refund Instructions Hint Output

Instructions showing the sequence in which credits and refunds were issued to the customer.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| paymentCreditSequence | ConnectApi.PaymentCreditSequenceItemOutputRepresentation[] | The representation of individual payment credit items. Each item represents a specific payment method and the amount of credit to be applied to it. | Big, 65.0 | 65.0 |
| refundSequence | ConnectApi.RefundSequenceItemOutputRepresentation[] | The order payment summary ID and value of the processed refund items. | Big, 65.0 | 65.0 |
