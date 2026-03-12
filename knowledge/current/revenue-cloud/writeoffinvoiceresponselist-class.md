---
title: "WriteOffInvoiceResponseList Class"
domain: revenue-cloud
topic: writeoffinvoiceresponselist-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.294Z
estimatedTokens: 1039
namespace: InvoiceWriteOff
keywords: [WriteOffInvoiceResponseList, store, invoices, written, off]
---

# WriteOffInvoiceResponseList Class

> Contains properties to store the response details of the list of invoices that are
    written off.

**Namespace:** `InvoiceWriteOff`

# WriteOffInvoiceResponseList Class

Contains properties to store the response details of the list of invoices that are written off.

## Namespace

[InvoiceWriteOff](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_InvoiceWriteOff.htm "Create credit memos with the total charge amount on the invoice as the write-off amount and close the invoice.")

-   **[WriteOffInvoiceResponseList Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseList.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponseList_constructors)**
    Learn more about the constructors available with the WriteOffInvoiceResponseList class.
-   **[WriteOffInvoiceResponseList Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseList.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponseList_properties)**
    Learn more about the properties available with the WriteOffInvoiceResponseList class.

## WriteOffInvoiceResponseList Constructors

Learn more about the constructors available with the WriteOffInvoiceResponseList class.

The WriteOffInvoiceResponseList class includes these constructors.

-   **[WriteOffInvoiceResponseList(writeOffInvoiceResponseList)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseList.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponseList_ctor)**
    Initializes the WriteOffInvoiceResponseList class that stores the response details of the list of invoices that are written off.
-   **[WriteOffInvoiceResponseList()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseList.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponseList_ctor_2)**
    Initializes the WriteOffInvoiceResponseList class.

### WriteOffInvoiceResponseList(writeOffInvoiceResponseList)

Initializes the WriteOffInvoiceResponseList class that stores the response details of the list of invoices that are written off.

#### Signature

public WriteOffInvoiceResponseList(List<InvoiceWriteOff.WriteOffInvoiceResponse> writeOffInvoiceResponseList)

#### Parameters

writeOffInvoiceResponseList

Type: List<[InvoiceWriteOff.WriteOffInvoiceResponse](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm#apex_class_InvoiceWriteOff_WriteOffInvoiceResponse "Contains properties to store the response details to the request to write off a posted invoice.")\>

Details of the invoices for which the write-off process is initiated.

### WriteOffInvoiceResponseList()

Initializes the WriteOffInvoiceResponseList class.

#### Signature

public WriteOffInvoiceResponseList()

## WriteOffInvoiceResponseList Properties

Learn more about the properties available with the WriteOffInvoiceResponseList class.

The WriteOffInvoiceResponseList class includes these properties.

-   **[writeOffInvoiceResponseList](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseList.htm#apex_InvoiceWriteOff_WriteOffInvoiceResponseList_writeOffInvoiceResponseList)**
    Get the details of the invoices for which the write-off posted invoice process is initiated.

### writeOffInvoiceResponseList

Get the details of the invoices for which the write-off posted invoice process is initiated.

#### Signature

public List<InvoiceWriteOff.WriteOffInvoiceResponse> writeOffInvoiceResponseList {get; set;}

#### Property Value

Type: List<[InvoiceWriteOff.WriteOffInvoiceResponse](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm#apex_class_InvoiceWriteOff_WriteOffInvoiceResponse "Contains properties to store the response details to the request to write off a posted invoice.")\>

## Related Topics

- InvoiceWriteOff (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_InvoiceWriteOff.htm)
- WriteOffInvoiceResponseList Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseList.htm)
- WriteOffInvoiceResponseList Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseList.htm)
- WriteOffInvoiceResponseList(writeOffInvoiceResponseList) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseList.htm)
- WriteOffInvoiceResponseList() (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseList.htm)
- InvoiceWriteOff.WriteOffInvoiceResponse (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponse.htm)
- writeOffInvoiceResponseList (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceResponseList.htm)
