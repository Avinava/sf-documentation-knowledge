---
title: "BatchInvoiceApplication Class"
domain: revenue-cloud
topic: batchinvoiceapplication-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.113Z
estimatedTokens: 410
namespace: ConnectApi
keywords: [BatchInvoiceApplication, Update, batch, invoices, Draft, Posted, status, credit, memo, application., class., triggerInvoiceBatchDraftToPosted, invoiceBatchRunId, API, Version, Requires, Chatter, Usage]
---

# BatchInvoiceApplication Class

> Update a batch of invoices from Draft to Posted status for a credit memo application. by
  using the BatchInvoiceApplication class.

**Namespace:** `ConnectApi`

# BatchInvoiceApplication Class

Update a batch of invoices from Draft to Posted status for a credit memo application. by using the BatchInvoiceApplication class.

## Namespace

ConnectApi

## BatchInvoiceApplication Methods

These methods are for BatchInvoiceApplication. All methods are static.

-   **[triggerInvoiceBatchDraftToPosted(invoiceBatchRunId)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_ConnectAPI_BatchInvoiceApplication_static_methods.htm#apex_ConnectAPI_BatchInvoiceApplication_triggerInvoiceBatchDraftToPosted_1)**
    Update a batch of invoices from Draft to Posted status for a credit memo application.

### triggerInvoiceBatchDraftToPosted(invoiceBatchRunId)

Update a batch of invoices from Draft to Posted status for a credit memo application.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.InvoiceBatchDraftToPostedResult triggerInvoiceBatchDraftToPosted(String invoiceBatchRunId)

#### Parameters

invoiceBatchRunId

Type: String

ID of the invoice batch run record that creates the draft invoices.

#### Return Value

Type: [ConnectApi.InvoiceBatchDraftToPostedResult](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_invoice_batch_draft_to_posted_output.htm "Output representation of the batch update details of the invoices from Draft to Posted status.")

#### Usage

You need the Billing Operations User permission set to use this method.

This method posts the draft invoices and changes the status of the invoices from Draft to Posted.

## Related Topics

- triggerInvoiceBatchDraftToPosted(invoiceBatchRunId) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_ConnectAPI_BatchInvoiceApplication_static_methods.htm)
- ConnectApi.InvoiceBatchDraftToPostedResult (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_invoice_batch_draft_to_posted_output.htm)
