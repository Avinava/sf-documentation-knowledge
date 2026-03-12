---
title: "PaymentTerm"
domain: revenue-cloud
topic: paymentterm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.870Z
estimatedTokens: 440
keywords: [PaymentTerm, agreement, buyer, seller, payment, due, invoice, API, version, 62.0, later, Calls, Special, Access, Rules]
---

# PaymentTerm

> Represents an agreement between a buyer and a seller about when
         payment is due for an invoice. This object is available in API version 62.0 and
      later.

# PaymentTerm

Represents an agreement between a buyer and a seller about when payment is due for an invoice. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You need the Billing Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional details about the payment term. |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the payment term is the default term for your Salesforce org (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate field is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the payment term. This name appears on the invoice. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies whether the payment term is available for use on invoices.Possible values are:ActiveDraftInactiveThe default value is Draft. |
