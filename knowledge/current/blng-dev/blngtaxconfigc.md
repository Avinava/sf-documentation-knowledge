---
title: "blng__TaxConfig__c"
domain: blng-dev
topic: blngtaxconfigc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:08.766Z
estimatedTokens: 279
keywords: [blng__TaxConfig__c, tax, configuration, associated, billing, schedule, blng, _TaxConfig, Calls]
---

# blng__TaxConfig__c

> Represents the tax configuration associated with a billing
         schedule.

# blng\_\_TaxConfig\_\_c

Represents the tax configuration associated with a billing schedule.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the tax configuration record when multiple currencies are enabled. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the tax configuration. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameSetupOwnerRefers ToOrganization, Profile, User |
| blng__ClassName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Apex class that handles the tax calculations. |
