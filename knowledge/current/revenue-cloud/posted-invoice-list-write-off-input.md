---
title: "Posted Invoice List Write-Off Input"
domain: revenue-cloud
topic: posted-invoice-list-write-off-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.405Z
estimatedTokens: 115
keywords: [Posted, Invoice, Write-Off, Input, representation, write, off, invoices, includes, want]
---

# Posted Invoice List Write-Off Input

> Input representation of the request to write off a list of posted invoices. This
    representation includes the details of invoices that you want to write off.

# Posted Invoice List Write-Off Input

Input representation of the request to write off a list of posted invoices. This representation includes the details of invoices that you want to write off.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invoices | Posted Invoice Write-Off Input[] | Details of the invoices that you want to write off. | Required | 64.0 |

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

## Related Topics

- Posted Invoice Write-Off Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_write_off_posted_invoice_input.htm)
