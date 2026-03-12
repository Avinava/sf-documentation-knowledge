---
title: "WriteOffInvoiceInputList Class"
domain: revenue-cloud
topic: writeoffinvoiceinputlist-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.279Z
estimatedTokens: 973
namespace: InvoiceWriteOff
keywords: [WriteOffInvoiceInputList, invoice, write, off, posted, invoices]
---

# WriteOffInvoiceInputList Class

> Contains invoice details to write off a list of posted invoices.

**Namespace:** `InvoiceWriteOff`

# WriteOffInvoiceInputList Class

Contains invoice details to write off a list of posted invoices.

## Namespace

[InvoiceWriteOff](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_InvoiceWriteOff.htm "Create credit memos with the total charge amount on the invoice as the write-off amount and close the invoice.")

-   **[WriteOffInvoiceInputList Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInputList.htm#apex_InvoiceWriteOff_WriteOffInvoiceInputList_constructors)**
    Learn more about the constructors available with the WriteOffInvoiceInputList class.
-   **[WriteOffInvoiceInputList Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInputList.htm#apex_InvoiceWriteOff_WriteOffInvoiceInputList_properties)**
    Learn more about the properties available with the WriteOffInvoiceInputList class.

## WriteOffInvoiceInputList Constructors

Learn more about the constructors available with the WriteOffInvoiceInputList class.

The WriteOffInvoiceInputList class includes these constructors.

-   **[WriteOffInvoiceInputList(writeOffInvoiceInputList)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInputList.htm#apex_InvoiceWriteOff_WriteOffInvoiceInputList_ctor)**
    Initializes the WriteOffInvoiceInputList class that stores the details of invoices that you want to write off.
-   **[WriteOffInvoiceInputList()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInputList.htm#apex_InvoiceWriteOff_WriteOffInvoiceInputList_ctor_2)**
    Initializes the WriteOffInvoiceInputList class.

### WriteOffInvoiceInputList(writeOffInvoiceInputList)

Initializes the WriteOffInvoiceInputList class that stores the details of invoices that you want to write off.

#### Signature

public WriteOffInvoiceInputList(List<InvoiceWriteOff.WriteOffInvoiceInput> writeOffInvoiceInputList)

#### Parameters

writeOffInvoiceInputList

Type: List<I[nvoiceWriteOff.WriteOffInvoiceInput](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm#apex_class_InvoiceWriteOff_WriteOffInvoiceInput "Contains invoice details that are used for the request to write off an invoice.")\>

Input representation of the request to write off a list of posted invoices.

### WriteOffInvoiceInputList()

Initializes the WriteOffInvoiceInputList class.

#### Signature

public WriteOffInvoiceInputList()

## WriteOffInvoiceInputList Properties

Learn more about the properties available with the WriteOffInvoiceInputList class.

The WriteOffInvoiceInputList class includes these properties.

-   **[writeOffInvoiceInputList](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInputList.htm#apex_InvoiceWriteOff_WriteOffInvoiceInputList_writeOffInvoiceInputList)**
    Input representation of the request to write off a list of posted invoices.

### writeOffInvoiceInputList

Input representation of the request to write off a list of posted invoices.

#### Signature

public List<InvoiceWriteOff.WriteOffInvoiceInput> writeOffInvoiceInputList {get; set;}

#### Property Value

Type: List<[nvoiceWriteOff.WriteOffInvoiceInput](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm#apex_class_InvoiceWriteOff_WriteOffInvoiceInput "Contains invoice details that are used for the request to write off an invoice.")\>

## Related Topics

- InvoiceWriteOff (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_InvoiceWriteOff.htm)
- WriteOffInvoiceInputList Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInputList.htm)
- WriteOffInvoiceInputList Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInputList.htm)
- WriteOffInvoiceInputList(writeOffInvoiceInputList) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInputList.htm)
- WriteOffInvoiceInputList() (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInputList.htm)
- nvoiceWriteOff.WriteOffInvoiceInput (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInput.htm)
- writeOffInvoiceInputList (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_InvoiceWriteOff_WriteOffInvoiceInputList.htm)
