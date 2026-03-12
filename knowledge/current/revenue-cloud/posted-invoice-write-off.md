---
title: "Posted Invoice Write-Off"
domain: revenue-cloud
topic: posted-invoice-write-off
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.655Z
estimatedTokens: 191
keywords: [Posted, Invoice, Write-Off, Output, representation, details, posted, invoice, that's, written, off.]
---

# Posted Invoice Write-Off

> Output representation of the details of a posted invoice that's written off.

# Posted Invoice Write-Off

Output representation of the details of a posted invoice that's written off.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Posted Invoice Write-Off Error[] | If the request fails, this property contains a list of errors. | Small, 64.0 | 64.0 |
| invoiceId | String | ID of the invoice record that's written off. | Big, 64.0 | 64.0 |
| request​Identifier | String | If the request is successful, this property contains an asynchronous API request identifier for an invoice ID. | Big, 64.0 | 64.0 |
| success | Boolean | Indicates whether the invoice write-off request was successful (true) or not (false). | Big, 64.0 | 64.0 |

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
        "errorMessage": "Reason is missing"
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

- Posted Invoice Write-Off Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_write_off_posted_invoice_output_error.htm)
