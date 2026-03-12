---
title: "blng__TaxRate__c"
domain: blng-dev
topic: blngtaxratec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.787Z
estimatedTokens: 843
keywords: [blng__TaxRate__c, tax, rate, code, country, blng, _TaxRate, Calls]
---

# blng__TaxRate__c

> Represents a tax rate for a tax code and country.

# blng\_\_TaxRate\_\_c

Represents a tax rate for a tax code and country.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the tax rate record when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a tax rate record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a tax rate record. If this value is null, it’s possible that the user only accessed the tax rate record or a related list view (LastReferencedDate), but not viewed the tax rate record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the tax rate. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__AddressComparison__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionCompares the address details provided in the tax rate record to ensure accurate tax calculations. |
| blng__City__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the company that this tax rate record represents. |
| blng__Country__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe country of the company that this tax rate record represents. |
| blng__LegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity associated with the tax rate.This field is a relationship field.Relationship Nameblng__LegalEntity__rRefers Toblng__LegalEntity__c |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the tax rate. |
| blng__PriorityAddressComparison__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of tax rates based on address comparisons. |
| blng__Priority__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The tax rate to apply when multiple tax rates are available for a given transaction.Valid values are:0123456 |
| blng__Rate__c | TypepercentPropertiesCreate, Filter, Sort, UpdateDescriptionStores the rate of a tax. |
| blng__State__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the company that this tax rate record represents. |
| blng__TaxCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated to a tax rate. |
| blng__ZipCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe zip code of the company that this tax rate record represents. |
