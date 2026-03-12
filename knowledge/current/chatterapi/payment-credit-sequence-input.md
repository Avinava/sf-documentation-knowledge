---
title: "Payment Credit Sequence Input"
domain: chatterapi
topic: payment-credit-sequence-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.338Z
estimatedTokens: 210
keywords: [Payment, Credit, Sequence, Input, order, amount, applied, determines, processing, credited, determined, summary]
---

# Payment Credit Sequence Input

> The order in which the credit amount is applied to specified payment methods. The
    sequence determines the order that the credit is applied to each payment during processing. The
    amount credited to each payment method is determined in each order payment summary.

# Payment Credit Sequence Input

The order in which the credit amount is applied to specified payment methods. The sequence determines the order that the credit is applied to each payment during processing. The amount credited to each payment method is determined in each order payment summary.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | The amount of the payment credit. | Required | 65.0 |
| creditType | String | The type of credit to be used. This value is based on the Credit Type field of the Payment Credit Transaction, which is customizable. | Required | 65.0 |
| orderPaymentSummaryId | String | An ordered list of payment summaries that determines what payment methods the amount is credited to and in what order. | Required | 65.0 |
