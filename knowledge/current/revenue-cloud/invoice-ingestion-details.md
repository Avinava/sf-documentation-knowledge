---
title: "Invoice Ingestion Details"
domain: revenue-cloud
topic: invoice-ingestion-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.840Z
estimatedTokens: 202
keywords: [Invoice, Ingestion, Details, Output, representation, details, generated, invoice.]
---

# Invoice Ingestion Details

> Output representation of the details of a generated invoice.

# Invoice Ingestion Details

Output representation of the details of a generated invoice.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Invoice Ingestion Output Error[] | Details of the errors if the request was unsuccessful. | Small, 63.0 | 63.0 |
| invoice​Id | String | ID of the Invoice record that’s created in Salesforce. | Small, 63.0 | 63.0 |
| request​Identifier | String | Unique request identifier that can be used to poll the async request. | Small, 63.0 | 63.0 |
| status​URL | String | Status URL for tracking the estimated tax callout operation. | Big, 63.0 | 63.0 |
| success | Boolean | Indicates whether the API request was successful (true) or not (false). | Small, 63.0 | 63.0 |

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

- Invoice Ingestion Output Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_invoice_ingestion_output_error.htm)
