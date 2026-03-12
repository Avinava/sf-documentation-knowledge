---
title: "Batch Invoices Document Generation Retry (POST)"
domain: revenue-cloud
topic: batch-invoices-document-generation-retry-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.754Z
estimatedTokens: 327
keywords: [Batch, Invoices, Document, Generation, Retry, POST, Asynchronously, regenerate, PDF, documents, Draft, Posted, status, failed, earlier]
---

# Batch Invoices Document Generation Retry (POST)

> Asynchronously regenerate PDF documents for the invoices that are in
      the Draft or Posted
      status and failed in an earlier invoice batch run.

# Batch Invoices Document Generation Retry (POST)

Asynchronously regenerate PDF documents for the invoices that are in the Draft or Posted status and failed in an earlier invoice batch run.

Special Access Rules

This API is available with Revenue Cloud Billing. To use this API, enable Document Generation for Billing. Additionally, you need either the Billing Operations User permission set or the Billing Admin permission set, along with the Docgen Designer permission set and Docgen Designer Standard User permission set.

Resource

```

```

-   The invoiceBatchRunId parameter is the ID of the invoice batch run record that created the Draft or Posted invoices.
-   The actionName parameter is the name of the action you want to perform on the specified invoice batch run record. In this case, the action is to retry generating the Draft or Posted invoices that failed earlier.

Resource example

```

```

Available version

63.0

HTTP methods

POST

Response body for POST

[Batch Invoice Document Generation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_batch_invoice_doc_gen_output.htm "Output representation of the request to generate or regenerate the PDF documents for the invoices that are in the Draft or Posted status.")

## Code Examples

```
/commerce/billing/invoices/invoice-batch-docgen/invoiceBatchRunId/actions/actionName
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/billing/invoices/invoice-batch-docgen/5IRxx0000004GSmGAM/actions/retry
```

## Related Topics

- Batch Invoice
              Document Generation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_batch_invoice_doc_gen_output.htm)
