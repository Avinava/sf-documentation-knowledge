---
title: "Posted Invoice List Write-Off"
domain: revenue-cloud
topic: posted-invoice-list-write-off
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.102Z
estimatedTokens: 94
keywords: [Posted, Invoice, Write-Off, Output, representation, invoices, written, off]
---

# Posted Invoice List Write-Off

> Output representation of the list of invoices that are written off.

# Posted Invoice List Write-Off

Output representation of the list of invoices that are written off.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| result | Posted Invoice Write-Off [] | Details of the invoices for which the write-off process is initiated. | Big, 64.0 | 64.0 |

## Code Examples

```
{
  "result": [
    {
      "requestIdentifier": null,
      "invoiceId": "3t00000000CwAGI",
      "success": false,
      "errors": {
        "errorcode": "INVALID_API_INPUT",
        "errorMessage": "Reason is missing."
      }
    },
    {
      "requestIdentifier": 37612787,
      "invoiceId": "3t00000000CwAAI",
      "success": true,
      "errors": {
        "errorcode": null,
        "errorMessage": null
      }
    }
  ]
}
```

## Related Topics

- Posted Invoice Write-Off (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_write_off_posted_invoice_output.htm)
