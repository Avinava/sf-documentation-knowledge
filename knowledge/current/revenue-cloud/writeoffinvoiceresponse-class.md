---
title: "WriteOffInvoiceResponse Class"
domain: revenue-cloud
topic: writeoffinvoiceresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.178Z
estimatedTokens: 1339
namespace: InvoiceWriteOff
keywords: [WriteOffInvoiceResponse, Contains, store, response, details, request, write, off, posted, invoice., errors, invoiceId, requestIdentifier, success]
---

# WriteOffInvoiceResponse Class

> Contains properties to store the response details to the request to write off a posted
    invoice.

**Namespace:** `InvoiceWriteOff`

# WriteOffInvoiceResponse Class

Contains properties to store the response details to the request to write off a posted invoice.

## Namespace

[InvoiceWriteOff](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_InvoiceWriteOff.htm "Create credit memos with the total charge amount on the invoice as the write-off amount and close the invoice.")

-   **[WriteOffInvoiceResponse Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponse_constructors)**
    Learn more about the constructors available with the WriteOffInvoiceResponse class.
-   **[WriteOffInvoiceResponse Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponse_properties)**
    Learn more about the properties available with the WriteOffInvoiceResponse class.

## WriteOffInvoiceResponse Constructors

Learn more about the constructors available with the WriteOffInvoiceResponse class.

The WriteOffInvoiceResponse class includes these constructors.

-   **[WriteOffInvoiceResponse(errors, invoiceId, requestIdentifier, success)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponse_ctor)**
    Initializes the WriteOffInvoiceResponse class that stores the response details to the request to write off a posted invoice.

### WriteOffInvoiceResponse(errors, invoiceId, requestIdentifier, success)

Initializes the WriteOffInvoiceResponse class that stores the response details to the request to write off a posted invoice.

#### Signature

public WriteOffInvoiceResponse(InvoiceWriteOff.WriteOffInvoiceResponseError errors, String invoiceId, String requestIdentifier, Boolean success)

#### Parameters

errors

Type: [InvoiceWriteOff.WriteOffInvoiceResponseError](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError.htm#apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError "Contains properties to store the error response that's associated with a request to write off a posted invoice.")

If the request fails, this property contains a list of errors.

invoiceId

Type: String

ID of the invoice record that's written off.

requestIdentifier

Type: String

If the request is successful, this property contains an asynchronous API request identifier for an invoice ID.

success

Type: Boolean

Indicates whether the invoice write-off request was successful (true) or not (false).

## WriteOffInvoiceResponse Properties

Learn more about the properties available with the WriteOffInvoiceResponse class.

The WriteOffInvoiceResponse class includes these properties.

-   **[errors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponse_errors)**
    Get the list of errors if the request to write off posted invoices fails.
-   **[invoiceId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponse_invoiceId)**
    Get the ID of the invoice record that's written off.
-   **[requestIdentifier](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponse_requestIdentifier)**
    Get the identifier of the asynchronous API request for an invoice ID if the request is successful.
-   **[success](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponse_success)**
    Get the request status of the invoice write-off request.

### errors

Get the list of errors if the request to write off posted invoices fails.

#### Signature

public InvoiceWriteOff.WriteOffInvoiceResponseError errors {get; set;}

#### Property Value

Type: [InvoiceWriteOff.WriteOffInvoiceResponseError](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError.htm#apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError "Contains properties to store the error response that's associated with a request to write off a posted invoice.")

### invoiceId

Get the ID of the invoice record that's written off.

#### Signature

public String invoiceId {get; set;}

#### Property Value

Type: String

### requestIdentifier

Get the identifier of the asynchronous API request for an invoice ID if the request is successful.

#### Signature

public String requestIdentifier {get; set;}

#### Property Value

Type: String

### success

Get the request status of the invoice write-off request.

#### Signature

public Boolean success {get; set;}

#### Property Value

Type: Boolean

## Related Topics

- InvoiceWriteOff (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_InvoiceWriteOff.htm)
- WriteOffInvoiceResponse Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm)
- WriteOffInvoiceResponse Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm)
- WriteOffInvoiceResponse(errors, invoiceId, requestIdentifier, success) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm)
- InvoiceWriteOff.WriteOffInvoiceResponseError (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseError.htm)
- errors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm)
- invoiceId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm)
- requestIdentifier (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm)
- success (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm)
