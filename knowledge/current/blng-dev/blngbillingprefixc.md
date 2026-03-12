---
title: "blng__BillingPrefix__c"
domain: blng-dev
topic: blngbillingprefixc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:08.253Z
estimatedTokens: 340
keywords: [blng__BillingPrefix__c, prefix, appended, billing-related, records, storage, purposes, blng, _BillingPrefix, Calls]
---

# blng__BillingPrefix__c

> Represents a prefix that can be appended to billing-related records for
         storage purposes.

# blng\_\_BillingPrefix\_\_c

Represents a prefix that can be appended to billing-related records for storage purposes.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the billing prefix record when multiple currencies are enabled. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the billing prefix. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameSetupOwnerRefers ToOrganization, Profile, User |
| blng__BarPrefix__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA prefix value of barcodes. |
| blng__DotPrefix__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA prefix value of dots. |
| blng__RawPrefix__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA raw prefix value. |
