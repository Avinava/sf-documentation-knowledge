---
title: "HarmonizeBilling Class"
domain: revenue-cloud
topic: harmonizebilling-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.257Z
estimatedTokens: 437
namespace: ConnectApi
keywords: [HarmonizeBilling, status, invoice, Draft, Posted, postDraftInvoices, inputRequest, API, Version, Requires, Chatter, Usage]
---

# HarmonizeBilling Class

> Update the status of the invoice from Draft to Posted by using the HarmonizeBilling
  class.

**Namespace:** `ConnectApi`

# HarmonizeBilling Class

Update the status of the invoice from Draft to Posted by using the HarmonizeBilling class.

## Namespace

ConnectApi

## HarmonizeBilling Methods

These methods are for HarmonizeBilling. All methods are static.

-   **[postDraftInvoices(inputRequest)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_ConnectAPI_HarmonizeBilling_static_methods.htm#apex_ConnectAPI_HarmonizeBilling_postDraftInvoices_1)**
    Update the status of the invoice from Draft to Posted.

### postDraftInvoices(inputRequest)

Update the status of the invoice from Draft to Posted.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RevenueAsyncRepresentation postDraftInvoices(ConnectApi.InvoiceDraftToPostedInputRequest inputRequest)

#### Parameters

inputRequest

Type: [ConnectApi.InvoiceDraftToPostedInputRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_invoice_draft_to_posted.htm "Input representation of the details of the draft invoice that’s posted.")

Input representation of the details of the draft invoice that’s posted.

#### Return Value

Type: [ConnectApi.RevenueAsyncRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_revenue_async.htm "Output representation of the result of the API request with the request identifier.")

#### Usage

You need the Billing Operations User permission set to use this method.

This method calls an external tax engine to calculate taxes for the draft invoice, posts the invoice, and updates the related billing schedules and billing periods.

## Related Topics

- postDraftInvoices(inputRequest) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_ConnectAPI_HarmonizeBilling_static_methods.htm)
- ConnectApi.InvoiceDraftToPostedInputRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_invoice_draft_to_posted.htm)
- ConnectApi.RevenueAsyncRepresentation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_revenue_async.htm)
