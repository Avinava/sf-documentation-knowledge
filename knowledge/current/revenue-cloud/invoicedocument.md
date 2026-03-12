---
title: "InvoiceDocument"
domain: revenue-cloud
topic: invoicedocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.633Z
estimatedTokens: 802
keywords: [InvoiceDocument, PDF, document, generated, invoice, API, version, 63.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# InvoiceDocument

> Represents the PDF document generated for an invoice. This object is
      available in API version 63.0 and later.

# InvoiceDocument

Represents the PDF document generated for an invoice. This object is available in API version 63.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Special Access Rules

You need Revenue Cloud Billing license, and the Billing Admin permission set or the Billing Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the generated PDF document.This field is a relationship field.Relationship NameContentDocumentRefers ToContentDocument |
| DateGenerated | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date on which the PDF is generated. |
| DocumentGenerationProcessId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the document generation process that contains the information used to create the PDF invoice.This field is a relationship field.Relationship NameDocumentGenerationProcessRefers ToDocumentGenerationProcess |
| DocumentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. A unique number assigned to the PDF invoice document. |
| ErrorMessage | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAny errors that occur during PDF generation. |
| InvoiceId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the Invoice to which the Invoice Doc is attached.This field is a relationship field.Relationship NameInvoiceRelationship TypeMaster-detailRefers ToInvoice (the master object) |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the PDF generation process.Valid values are:BlockedCancelledFailurePendingSuccess |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InvoiceDocumentFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InvoiceDocumentHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InvoiceDocumentFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- InvoiceDocumentHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
