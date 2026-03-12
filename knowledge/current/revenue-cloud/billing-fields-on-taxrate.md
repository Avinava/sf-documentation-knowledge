---
title: "Billing Fields on TaxRate"
domain: revenue-cloud
topic: billing-fields-on-taxrate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.489Z
estimatedTokens: 914
keywords: [Billing, TaxRate, Standard, extend, represent, tax, rate, transaction, that's, determined, applicable, code, country, API, version]
---

# Billing Fields on TaxRate

> Standard fields extend the TaxRate object for use in Billing. These fields
         represent information about the tax rate for a transaction that's determined by the
         applicable tax code and country. This object is available in API version 66.0 and
      later.

# Billing Fields on TaxRate

Standard fields extend the TaxRate object for use in Billing. These fields represent information about the tax rate for a transaction that's determined by the applicable tax code and country. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You need the Billing Admin permission set or Tax Admin permission set access to this object.

## Fields

| Field | Details |
| --- | --- |
| ApplicationBasis | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the tax rate is applied on the net or gross amount.Valid values are:GrossNetThe default value is Gross. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city to which the tax rate applies. |
| Country | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe country name that’s derived from the GeoCountry field value.This field is a calculated field. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency ISO code that’s applicable to the tax rate. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the tax rate is valid. |
| FlatTaxAmount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe flat tax amount that’s applied to the transaction. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a tax rate record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a tax rate record. If this value is null, it’s possible that the user only accessed the debit memo line tax record or a related list view (LastReferencedDate), but not viewed the debit memo line tax record itself. |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe legal entity to which the tax rate applies.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the invoice line. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the user who owns a TaxRate record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code of the product for which the tax rate applies. |
| RateUsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies whether the tax rate is created for Commerce or Revenue Cloud.Valid values are:CommerceRevCloudThe default value is Commerce. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the tax rate is valid. |
| State | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe state name that’s derived from the GeoState field value.This field is a calculated field. |
| ZipCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal or ZIP code to which the tax rate applies. |
