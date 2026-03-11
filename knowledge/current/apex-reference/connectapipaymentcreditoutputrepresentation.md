---
title: "ConnectApi.PaymentCreditOutputRepresentation"
domain: apex-reference
topic: connectapipaymentcreditoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:39.550Z
keywords: [ConnectApi.PaymentCreditOutputRepresentation]
---

# ConnectApi.PaymentCreditOutputRepresentation

# ConnectApi.PaymentCreditOutputRepresentation

The payment credit ID, amount, and order payment summary ID for a newly created payment credit. Represents a single credit transaction that was applied to a specific payment method with the generated credit ID for tracking.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| amount | Double | The amount in the payment credit. | 65.0 |
| orderPaymentSummaryId | String | The order payment summary’s ID. | 65.0 |
| paymentCreditId | String | The created payment credit’s ID. | 65.0 |