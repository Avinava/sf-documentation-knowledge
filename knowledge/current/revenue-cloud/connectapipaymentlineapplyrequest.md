---
title: "ConnectApi.PaymentLineApplyRequest"
domain: revenue-cloud
topic: connectapipaymentlineapplyrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.069Z
estimatedTokens: 244
keywords: [ConnectApi.PaymentLineApplyRequest, Input, representation, payment, line, details., covers, details, allocation, specific, invoice, line., provides, additional, context, through, optional, fields, such, associated]
---

# ConnectApi.PaymentLineApplyRequest

> Input representation of the payment line details. This representation covers details on
    allocation of a payment to a specific invoice line. It also provides additional context through
    optional fields, such as associated account and effective date.

# ConnectApi.PaymentLineApplyRequest

Input representation of the payment line details. This representation covers details on allocation of a payment to a specific invoice line. It also provides additional context through optional fields, such as associated account and effective date.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Amount that's applied. The amount must be less than the invoice line and payment balance. | Required | 64.0 |
| applied​ToId | String | ID of the invoice line that this payment is applied to. Specify the IDs for these records.InvoiceInvoice Line | Required | 64.0 |
| associated​AccountId | String | ID of the associated account. | Optional | 64.0 |
| comments | String | Comments that you can add to the payment line application. | Optional | 64.0 |
| effective​Date | Datetime | Date from which the payment line application takes effect. | Optional | 64.0 |
