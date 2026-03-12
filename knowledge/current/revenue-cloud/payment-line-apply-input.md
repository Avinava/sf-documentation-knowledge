---
title: "Payment Line Apply Input"
domain: revenue-cloud
topic: payment-line-apply-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.222Z
estimatedTokens: 249
keywords: [Payment, Line, Apply, Input, representation, payment, line, details., covers, details, allocation, specific, invoice, line., provides, additional, context, through, optional, fields]
---

# Payment Line Apply Input

> Input representation of the payment line details. This representation
      covers details on allocation of a payment to a specific invoice line. It also provides
      additional context through optional fields such as associated account and effective
    date.

# Payment Line Apply Input

Input representation of the payment line details. This representation covers details on allocation of a payment to a specific invoice line. It also provides additional context through optional fields such as associated account and effective date.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Amount that's applied. The amount must be less than the invoice line and payment balance. | Required | 64.0 |
| applied​ToId | String | ID of the invoice line that this payment is applied to. Specify the IDs for these records.InvoiceInvoice Line | Required | 64.0 |
| associated​AccountId | String | ID of the associated account. | Optional | 64.0 |
| comments | String | Comments that you can add to the payment line application. | Optional | 64.0 |
| effective​Date | String | Date from which the payment line application takes effect. | Optional | 64.0 |

## Code Examples

```
{
  "appliedToId": "3ttR000000001IkIAI",
  "amount": 10,
  "effectiveDate": "2020-08-11T07:53:15.000Z",
  "comments": "Apply payment",
  "associatedAccountId": "001R00000060AyuIAE"
}
```
