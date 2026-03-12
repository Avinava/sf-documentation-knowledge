---
title: "blng__PaymentTerms__c"
domain: blng-dev
topic: blngpaymenttermsc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:08.555Z
estimatedTokens: 276
keywords: [blng__PaymentTerms__c, period, customers, pay, invoiced, order, product, blng, _PaymentTerms, Calls]
---

# blng__PaymentTerms__c

> Represents the
         period
         customers have to pay for an invoiced order product.

# blng\_\_PaymentTerms\_\_c

Represents the period customers have to pay for an invoiced order product.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the payment term when multiple currencies are enabled. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the payment term. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record owner. This is a polymorphic relationship field.Relationship NameSetupOwnerRelationship TypeLookupRefers ToOrganization, Profile, User |
| blng__NumberOfDays__c | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe number of days by which the payment term is due. |
