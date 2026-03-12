---
title: "Payment Credit Output"
domain: chatterapi
topic: payment-credit-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:20.224Z
estimatedTokens: 154
keywords: [Payment, Credit, Output, amount, order, summary, newly, created, transaction, applied, specific, generated, tracking]
---

# Payment Credit Output

> The payment credit ID, amount, and order payment summary ID for a newly created payment
    credit. Represents a single credit transaction that was applied to a specific payment method
    with the generated credit ID for tracking.

# Payment Credit Output

The payment credit ID, amount, and order payment summary ID for a newly created payment credit. Represents a single credit transaction that was applied to a specific payment method with the generated credit ID for tracking.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | The amount in the payment credit. | Big, 65.0 | 65.0 |
| orderPaymentSummaryId | String | The order payment summary’s ID. | Big, 65.0 | 65.0 |
| paymentCreditId | String | The created payment credit’s ID. | Big, 65.0 | 65.0 |
