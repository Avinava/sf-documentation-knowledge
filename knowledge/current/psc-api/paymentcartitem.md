---
title: "PaymentCartItem"
domain: psc-api
topic: paymentcartitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.166Z
estimatedTokens: 629
keywords: [PaymentCartItem, line, item, payment, cart, associated, parent, PaymentCart, record, typically, references, invoice, Amount, contributes, TotalAmount]
---

# PaymentCartItem

> Represents a line item in a payment cart. Each payment cart item is
         associated with a parent PaymentCart record and typically references an invoice. The Amount
         field on each item contributes to the TotalAmount roll-up summary on the parent
         PaymentCart. This object is available in API version 66.0 and later.

# PaymentCartItem

Represents a line item in a payment cart. Each payment cart item is associated with a parent PaymentCart record and typically references an invoice. The Amount field on each item contributes to the TotalAmount roll-up summary on the parent PaymentCart. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe monetary amount for this cart item. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the payment cart item. Maximum length is 5,000 characters. |
| InvoiceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the invoice associated with this cart item.This field is a relationship field.Relationship NameInvoiceRefers ToInvoice |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferencedDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated name of the payment cart item. Uses the format PCI-{000000000}. |
| PaymentCartId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the parent payment cart.This field is a relationship field.Relationship NamePaymentCartRelationship TypePrimary-detailRefers ToPaymentCart (the primary object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PaymentCartItemHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PaymentCartItemHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
