---
title: "WriteOffInvoiceInput Class"
domain: revenue-cloud
topic: writeoffinvoiceinput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.275Z
estimatedTokens: 1018
namespace: InvoiceWriteOff
keywords: [WriteOffInvoiceInput, invoice, write, off, invoiceId, reasonCode, reason]
---

# WriteOffInvoiceInput Class

> Contains invoice details that are used for the request to write off an
    invoice.

**Namespace:** `InvoiceWriteOff`

# WriteOffInvoiceInput Class

Contains invoice details that are used for the request to write off an invoice.

## Namespace

[InvoiceWriteOff](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_InvoiceWriteOff.htm "Create credit memos with the total charge amount on the invoice as the write-off amount and close the invoice.")

-   **[WriteOffInvoiceInput Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm#apex_InvoiceWriteOff_WriteOffInvoiceInput_constructors)**
    Learn more about the constructors available with the WriteOffInvoiceInput class.
-   **[WriteOffInvoiceInput Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm#apex_InvoiceWriteOff_WriteOffInvoiceInput_properties)**
    Learn more about the properties available with the WriteOffInvoiceInput class.

## WriteOffInvoiceInput Constructors

Learn more about the constructors available with the WriteOffInvoiceInput class.

The WriteOffInvoiceInput class includes these constructors.

-   **[WriteOffInvoiceInput(invoiceId, reasonCode, reason)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm#apex_InvoiceWriteOff_WriteOffInvoiceInput_ctor)**
    Initializes the WriteOffInvoiceInput class that stores the invoice details and reason for writing off invoices.
-   **[WriteOffInvoiceInput()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm#apex_InvoiceWriteOff_WriteOffInvoiceInput_ctor_2)**
    Initializes the WriteOffInvoiceInput class.

### WriteOffInvoiceInput(invoiceId, reasonCode, reason)

Initializes the WriteOffInvoiceInput class that stores the invoice details and reason for writing off invoices.

#### Signature

public WriteOffInvoiceInput(String invoiceId, String reasonCode, String reason)

#### Parameters

invoiceId

Type: String

ID of the invoice record that you want to write off.

reasonCode

Type: String

Code that categorizes the write-off reason. For example, if the reason for the invoice write-off is a disputed amount, the reason code can be Disputed Amount (DA).

reason

Type: String

Reason for writing off invoices.

### WriteOffInvoiceInput()

Initializes the WriteOffInvoiceInput class.

#### Signature

public WriteOffInvoiceInput()

## WriteOffInvoiceInput Properties

Learn more about the properties available with the WriteOffInvoiceInput class.

The WriteOffInvoiceInput class includes these properties.

-   **[invoiceId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm#apex_InvoiceWriteOff_WriteOffInvoiceInput_invoiceId)**
    Sets the ID of the invoice record that must be written off.
-   **[reason](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm#apex_InvoiceWriteOff_WriteOffInvoiceInput_reason)**
    Sets the reason for writing off invoices.
-   **[reasonCode](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm#apex_InvoiceWriteOff_WriteOffInvoiceInput_reasonCode)**
    Sets the code that categorizes the write-off reason.

### invoiceId

Sets the ID of the invoice record that must be written off.

#### Signature

public String invoiceId {get; set;}

#### Property Value

Type: String

### reason

Sets the reason for writing off invoices.

#### Signature

public String reason {get; set;}

#### Property Value

Type: String

### reasonCode

Sets the code that categorizes the write-off reason.

#### Signature

public String reasonCode {get; set;}

#### Property Value

Type: String

## Related Topics

- InvoiceWriteOff (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_InvoiceWriteOff.htm)
- WriteOffInvoiceInput Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm)
- WriteOffInvoiceInput Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm)
- WriteOffInvoiceInput(invoiceId, reasonCode, reason) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm)
- WriteOffInvoiceInput() (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm)
- invoiceId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm)
- reason (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm)
- reasonCode (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm)
