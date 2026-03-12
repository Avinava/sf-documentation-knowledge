---
title: "Posted Invoice List Write-Off (POST)"
domain: revenue-cloud
topic: posted-invoice-list-write-off-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:09.037Z
estimatedTokens: 283
keywords: [Posted, Invoice, Write-Off, POST, credit, memos, total, charge, amount, close, Special, Access, Rules]
---

# Posted Invoice List Write-Off (POST)

> Create credit memos with the total charge amount on the invoice as the
      write-off amount and close the invoice.

# Posted Invoice List Write-Off (POST)

Create credit memos with the total charge amount on the invoice as the write-off amount and close the invoice.

You can write off invoices to maintain accurate financial records and to prioritize invoices with a higher probability of payment, which is essential for compliance with accounting standards.

## Special Access Rules

To use this API, you need the Billing Operations User and Credit Memo Operations User permission sets.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invoices | Posted Invoice Write-Off Input[] | Details of the invoices that you want to write off. | Required | 64.0 |

Response body for POST

[Posted Invoice List Write-Off](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_write_off_posted_invoice_list_output.htm "Output representation of the list of invoices that are written off.")

## Code Examples

```
/commerce/invoicing/invoices/actions/write-off
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/invoices/actions/write-off
```

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
- Posted Invoice List
              Write-Off (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_write_off_posted_invoice_list_output.htm)
