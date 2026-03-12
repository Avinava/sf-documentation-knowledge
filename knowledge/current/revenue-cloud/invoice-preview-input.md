---
title: "Invoice Preview Input"
domain: revenue-cloud
topic: invoice-preview-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.181Z
estimatedTokens: 228
keywords: [Invoice, Preview, Input, representation, details, billing, transaction, preview, invoices, generated, for.]
---

# Invoice Preview Input

> Input representation of the details of the billing transaction that the preview invoices
    are generated for.

# Invoice Preview Input

Input representation of the details of the billing transaction that the preview invoices are generated for.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| billing​TransactionId | String | ID of the record to generate the preview invoices for. | Required | 63.0 |
| numberOf​BillingPeriods | Integer | Number of billing periods that the invoice preview is generated for. If unspecified, the default value is 2. | Optional | 64.0 |
| preview​Date | String | The date on which the preview invoice is generated. For the first invoice, the preview date is the target date for generating the invoice. For the second invoice, the target date is calculated based on the preview date and the minimum billing frequency of the transactions.The default value is the current date. | Optional | 63.0 |

## Code Examples

```
{
    "billingTransactionId": "801Z600000004LoIAI",
    "numberOfBillingPeriods": 2,
    "previewDate": "2024-12-04"
}
```
