---
title: "WarrantyTerm"
domain: mfg-api-devguide
topic: warrantyterm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.331Z
estimatedTokens: 1234
keywords: [WarrantyTerm, warranty, terms, defining, labor, parts, expenses, covered, along, any, exchange, options, provided, rectify, issues]
---

# WarrantyTerm

> Represents warranty terms defining the labor, parts, and expenses
         covered, along with any exchange options, provided to rectify issues with products.
      This object is available in Manufacturing Cloud in API version 55.0 and later.

# WarrantyTerm

Represents warranty terms defining the labor, parts, and expenses covered, along with any exchange options, provided to rectify issues with products. This object is available in Manufacturing Cloud in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Code | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code or other identifier associated with this warranty term. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the warranty term. |
| EffectiveStartDate | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date on which the warranty term became available for use.Possible values are:Install DateManufacture DatePurchase Date |
| ExchangeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of exchange offered.Possible values are:Advance ExchangeLoanerReturn Exchange |
| Exclusions | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of any exclusions. |
| ExpensesCovered | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of expenses covered. |
| ExpensesCoveredDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration for which expenses are covered. |
| ExpensesCoveredUnitOfTime | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit in which expenses covered duration is measured.Possible values are:DaysMonthsWeeksYears |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the warranty term is active (true) or not (false).The default value is false. |
| IsTransferable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the warranty can be transferred to a new owner (true) or not (false).The default value is false. |
| LaborCovered | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of labor covered. |
| LaborCoveredDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration for which labor is covered. |
| LaborCoveredUnitOfTime | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit in which labor covered duration is measured.Possible values are:DaysMonthsWeeksYears |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the warranty term was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the warranty term was last viewed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe warranty term’s assigned owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartsCovered | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of parts covered. |
| PartsCoveredDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration for which parts are covered. |
| PartsCoveredUnitOfTime | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit in which parts covered duration is measured.Possible values are:DaysMonthsWeeksYears |
| Pricebook2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the price book item associated with this warranty term.This field is a relationship field.Relationship NamePricebook2Relationship TypeLookupRefers ToPricebook2 |
| UsageCovered | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product usage that's covered in the warranty term. |
| UsageCoveredUomId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the product usage.This field is a relationship field.Relationship NameUsageCoveredUomRelationship TypeLookupRefers ToUnitOfMeasure |
| WarrantyDuration | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe duration of the warranty offered by this term. |
| WarrantyTermName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the warranty term. |
| WarrantyType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of warranty.Possible values are:RepairStandardSupplier |
| WarrantyUnitOfTime | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit in which the warranty duration is measured.Possible values are:DaysMonthsWeeksYears |
