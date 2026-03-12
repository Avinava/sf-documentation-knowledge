---
title: "InvoiceLineRelationship"
domain: revenue-cloud
topic: invoicelinerelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.677Z
estimatedTokens: 1167
keywords: [InvoiceLineRelationship, relationship, invoice, line, items, support, bundles, parent, multiple, child, lines, API, version, 62.0, later]
---

# InvoiceLineRelationship

> Represents a relationship between invoice line items to support
         bundles where one parent invoice line has multiple child invoice lines. This object is
      available in API version 62.0 and later.

# InvoiceLineRelationship

Represents a relationship between invoice line items to support bundles where one parent invoice line has multiple child invoice lines. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

You need the Billing Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| AssociatedInvoiceLineId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the related invoice line record. In a bundle relationship, this invoice line is the child.This field is a relationship field.Relationship NameAssociatedInvoiceLineRefers ToInvoiceLine |
| AssociatedInvoiceLinePricing | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. This field describes how the related invoice line is priced relative to the primary invoice line.Valid values are:IncludedInBundlePriceNotIncludedInBundlePrice |
| AssociatedInvoiceLineRole | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. This field describes the role of the related invoice line in the relationship. The value is derived from the AssociatedProductRoleCat field of the ProductRelationshipType object.Valid values are:AddOnComponentBundleComponentClassificationComponentSetComponent |
| InvoiceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related invoice record.This field is a relationship field.Relationship NameInvoiceRefers ToInvoice |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed an invoice line relationship record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed an invoice line relationship record. If this value is null, it’s possible that the user only accessed the invoice line relationship record or a related list view (LastReferencedDate), but not viewed the invoice line relationship record itself. |
| MainInvoiceLineId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the primary invoice line record. In a bundle relationship, this invoice line is the parent.This field is a relationship field.Relationship NameMainInvoiceLineRelationship TypeMaster-detailRefers ToInvoiceLine (the master object) |
| MainInvoiceLineRole | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. This field describes the role of the primary invoice line in the relationship. The value is derived from the MainProductRoleCat field of the ProductRelationshipType object.Valid values are:AddOnBundleSet |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. An auto-generated number identifying the invoice line relationship. |
| ProductRelationshipTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the product relationship type record between the main and associated invoice lines.This field is a relationship field.Relationship NameProductRelationshipTypeRefers ToProductRelationshipType |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InvoiceLineRelationshipFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InvoiceLineRelationshipHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InvoiceLineRelationshipFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- InvoiceLineRelationshipHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
