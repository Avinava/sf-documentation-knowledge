---
title: "Invoice Ingestion"
domain: revenue-cloud
topic: invoice-ingestion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.875Z
estimatedTokens: 87
keywords: [Invoice, Ingestion, Output, representation, details, generated, invoices.]
---

# Invoice Ingestion

> Output representation of the details of the generated invoices.

# Invoice Ingestion

Output representation of the details of the generated invoices.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| invoices | Invoice Ingestion [] | Result that contains the details for each generated invoice. | Big, 63.0 | 63.0 |

## Code Examples

```
{
  "invoices": [
    {
      "errors": null,
      "invoiceId": "3ttxx0000000GRNAA2",
      "requestIdentifier": "16e80fbc-e7b3-4462-9439-745647fcf0a8",
      "statusURL": "/services/data/v63.0/sobjects/AsyncOperationTracker/16Pxx0000004Gz2EAE",
      "success": true
    }
  ]
}
```

## Related Topics

- Invoice Ingestion (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_invoice_ingestion_output.htm)
