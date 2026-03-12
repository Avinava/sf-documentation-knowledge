---
title: "InvoiceDocument"
domain: object-reference
topic: invoicedocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.347Z
estimatedTokens: 543
keywords: [InvoiceDocument, Tracks, displays, status, documents, generated, invoices, Invoice, entity, records, API, version, 61.0, later, Calls]
---

# InvoiceDocument

> Tracks and displays the status of documents generated for invoices. Invoice
         documents are available in the related lists of invoice entity records. This object is
      available in API version 61.0 and later.

# InvoiceDocument

Tracks and displays the status of documents generated for invoices. Invoice documents are available in the related lists of invoice entity records. This object is available in API version 61.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Special Access Rules

This object is available with Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_invoicedocument.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the generated PDF document.This field is a relationship field.Relationship NameContentDocumentRefers ToContentDocument |
| DateGenerated | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date on which the PDF is generated. |
| DocumentGenerationProcessId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the entity that contains the information used to create the PDF invoice.This field is a relationship field.Relationship NameDocumentGenerationProcessRefers ToDocumentGenerationProcess |
| DocumentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the generated document. |
| ErrorMessage | TypestringPropertiesFilter, Group, Nillable, SortDescriptionErrors that occur during PDF generation. |
| InvoiceId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the invoice entity to which the invoice document is attached.This field is a relationship field.Relationship NameInvoiceRelationship TypeMaster-detailRefers ToInvoice (the master object) |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the PDF generation process.Possible values are:BlockedCancelledFailurePendingSuccess |
