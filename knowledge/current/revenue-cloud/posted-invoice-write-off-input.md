---
title: "Posted Invoice Write-Off Input"
domain: revenue-cloud
topic: posted-invoice-write-off-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.402Z
estimatedTokens: 184
keywords: [Posted, Invoice, Write-Off, Input, representation, write, off, includes, reason, writing, invoices]
---

# Posted Invoice Write-Off Input

> Input representation of the details of the request to write off a posted invoice. This
    representation includes invoice details such as invoice ID and reason for writing off
    invoices.

# Posted Invoice Write-Off Input

Input representation of the details of the request to write off a posted invoice. This representation includes invoice details such as invoice ID and reason for writing off invoices.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invoiceId | String | ID of the invoice record that you want to write off. | Required | 64.0 |
| reason | String | Reason for writing off invoices. | Optional | 64.0 |
| reason​Code | String | Code that categorizes the write-off reason. For example, if the reason for the invoice write-off is a disputed amount, the reason code can be Disputed Amount (DA). | Required | 64.0 |

## Code Examples

```
{
  "invoices": [
    {
      "invoiceId": "3ttxx00000000cjAAA",
      "reasonCode": "Bad Debt",
      "description": "Bad Debt"
    },
    {
      "invoiceId": "3ttxx00000000cjAAA",
      "reasonCode": "Concession",
      "description": "Concession"
    }
  ]
}
```
