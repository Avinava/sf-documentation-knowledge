---
title: "WriteOffInvoiceResponseError Class"
domain: revenue-cloud
topic: writeoffinvoiceresponseerror-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.183Z
estimatedTokens: 809
namespace: InvoiceWriteOff
keywords: [WriteOffInvoiceResponseError, Contains, store, error, response, that's, associated, request, write, off, posted, invoice., errorCode, errorMessage]
---

# WriteOffInvoiceResponseError Class

> Contains properties to store the error response that's associated with a request to write
    off a posted invoice.

**Namespace:** `InvoiceWriteOff`

# WriteOffInvoiceResponseError Class

Contains properties to store the error response that's associated with a request to write off a posted invoice.

## Namespace

[InvoiceWriteOff](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_InvoiceWriteOff.htm "Create credit memos with the total charge amount on the invoice as the write-off amount and close the invoice.")

-   **[WriteOffInvoiceResponseError Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponseError_constructors)**
    Learn more about the constructors available with the WriteOffInvoiceResponseError class.
-   **[WriteOffInvoiceResponseError Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponseError_properties)**
    Learn more about the properties available with the WriteOffInvoiceResponseError class.

## WriteOffInvoiceResponseError Constructors

Learn more about the constructors available with the WriteOffInvoiceResponseError class.

The WriteOffInvoiceResponseError class includes these constructors.

-   **[WriteOffInvoiceResponseError(errorCode, errorMessage)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponseError_ctor)**
    Initializes the WriteOffInvoiceResponseError class that stores the error response that's associated with a request to write off a posted invoice.

### WriteOffInvoiceResponseError(errorCode, errorMessage)

Initializes the WriteOffInvoiceResponseError class that stores the error response that's associated with a request to write off a posted invoice.

#### Signature

public WriteOffInvoiceResponseError(String errorCode, String errorMessage)

#### Parameters

errorCode

Type: String

Code that represents the error.

errorMessage

Type: String

Message that describes the error.

## WriteOffInvoiceResponseError Properties

Learn more about the properties available with the WriteOffInvoiceResponseError class.

The WriteOffInvoiceResponseError class includes these properties.

-   **[errorCode](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponseError_errorCode)**
    Get the error code details.
-   **[errorMessage](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponseError_errorMessage)**
    Get the error message details.

### errorCode

Get the error code details.

#### Signature

public String errorCode {get; set;}

#### Property Value

Type: String

### errorMessage

Get the error message details.

#### Signature

public String errorMessage {get; set;}

#### Property Value

Type: String

## Related Topics

- InvoiceWriteOff (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_InvoiceWriteOff.htm)
- WriteOffInvoiceResponseError Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError.htm)
- WriteOffInvoiceResponseError Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError.htm)
- WriteOffInvoiceResponseError(errorCode, errorMessage) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError.htm)
- errorCode (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError.htm)
- errorMessage (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError.htm)
