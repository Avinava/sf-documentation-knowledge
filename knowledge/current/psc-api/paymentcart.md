---
title: "PaymentCart"
domain: psc-api
topic: paymentcart
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.159Z
estimatedTokens: 947
keywords: [PaymentCart, payment, cart, collects, items, processing, group, multiple, invoices, together, batch, tracks, total, amount, status]
---

# PaymentCart

> Represents a payment cart that collects payment items before processing. Use
         this object to group multiple payment items (such as invoices) together for batch payment
         processing. The cart tracks the total amount and processing status of the payment.
      This object is available in API version 66.0 and later.

# PaymentCart

Represents a payment cart that collects payment items before processing. Use this object to group multiple payment items (such as invoices) together for batch payment processing. The cart tracks the total amount and processing status of the payment. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account associated with the payment cart.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the contact associated with the payment cart.This field is a relationship field.Relationship NameContactRefers ToContact |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the payment cart. Maximum length is 5,000 characters. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferencedDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated name of the payment cart. Uses the format PC-{000000000}. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user or queue that owns the payment cart.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe processing status of the payment cart. Default value is Draft.Possible values are:DraftFailedProcessingSucceededThe default value is Draft. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of all items in the payment cart. This is a roll-up summary field that calculates the SUM of PaymentCartItem.Amount.This field is a calculated field. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PaymentCartHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PaymentCartOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PaymentCartShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PaymentCartHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- PaymentCartOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- PaymentCartShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
