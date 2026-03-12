---
title: "InvoiceWriteOff Namespace"
domain: revenue-cloud
topic: invoicewriteoff-namespace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.296Z
estimatedTokens: 505
namespace: InvoiceWriteOff
keywords: [InvoiceWriteOff, Create, credit, memos, total, charge, amount, invoice, write-off, close, invoice., Usage]
---

# InvoiceWriteOff Namespace

> Create credit memos with the total charge amount on the invoice as the write-off amount
    and close the invoice.

**Namespace:** `InvoiceWriteOff`

# InvoiceWriteOff Namespace

Create credit memos with the total charge amount on the invoice as the write-off amount and close the invoice.

The InvoiceWriteOff namespace includes these classes.

## Usage

You need the Billing Operations User and Credit Memo Operations User permission sets to access this namespace.

-   **[WriteOffInvoiceInput Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm#apex_class_InvoiceWriteOff_WriteOffInvoiceInput)**
    Contains invoice details that are used for the request to write off an invoice.
-   **[WriteOffInvoiceInputList Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInputList.htm#apex_class_InvoiceWriteOff_WriteOffInvoiceInputList)**
    Contains invoice details to write off a list of posted invoices.
-   **[WriteOffInvoiceResponse Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm#apex_class_InvoiceWriteOff_WriteOffInvoiceResponse)**
    Contains properties to store the response details to the request to write off a posted invoice.
-   **[WriteOffInvoiceResponseError Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError.htm#apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError)**
    Contains properties to store the error response that's associated with a request to write off a posted invoice.
-   **[WriteOffInvoiceResponseList Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseList.htm#apex_class_InvoiceWriteOff_WriteOffInvoiceResponseList)**
    Contains properties to store the response details of the list of invoices that are written off.

## Related Topics

- WriteOffInvoiceInput Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm)
- WriteOffInvoiceInputList Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInputList.htm)
- WriteOffInvoiceResponse Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm)
- WriteOffInvoiceResponseError Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError.htm)
- WriteOffInvoiceResponseList Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseList.htm)
