---
title: "Batch Invoice Document Generation"
domain: revenue-cloud
topic: batch-invoice-document-generation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.100Z
estimatedTokens: 178
keywords: [Batch, Invoice, Document, Generation, Output, representation, generate, regenerate, PDF, documents, invoices, Draft, Posted, status]
---

# Batch Invoice Document Generation

> Output representation of the request to generate or regenerate the PDF documents for
      the invoices that are in the Draft or Posted status.

# Batch Invoice Document Generation

Output representation of the request to generate or regenerate the PDF documents for the invoices that are in the Draft or Posted status.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Batch Invoice Document Generation Error [] | Details of the error if the operation fails. | Big, 63.0 | 63.0 |
| requestIdentifier | String | Unique ID that’s associated with the specific error, and is used for tracking and referencing the request. | Big, 63.0 | 63.0 |
| success | Boolean | Indicates whether the operation is successful (true) or not (false). | Big, 63.0 | 63.0 |

## Code Examples

```
{
  "errors": [
    {
      "errorCode": "API_DISABLED_FOR_ORG",
      "errorMessage": "Document Generation is not enabled for this org!"
    },
    {
      "errorCode": "INVALID_API_INPUT",
      "errorMessage": "Invalid Invoice Batch Run Id"
    }
  ],
  "requestIdentifier": "5IRDU000000009i4AA",
  "success": false
}
```

## Related Topics

- Batch Invoice Document Generation Error [] (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_batch_invoice_doc_gen_error.htm)
