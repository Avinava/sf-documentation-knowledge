---
title: "WarrantyTerm"
domain: field-service
topic: warrantyterm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:54.958Z
estimatedTokens: 1134
keywords: [WarrantyTerm, warranty, terms, defining, labor, parts, expenses, covered, along, any, exchange, options, provided, rectify, issues]
---

# WarrantyTerm

> Represents warranty terms defining the labor, parts, and expenses covered,
      along with any exchange options, provided to rectify issues with products. This object is
    available in API version 50.0 and later.

# WarrantyTerm

Represents warranty terms defining the labor, parts, and expenses covered, along with any exchange options, provided to rectify issues with products. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Code | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code or other identifier associated with this warranty term. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the warranty term. |
| EffectiveStartDate | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionDate on which the warranty term became available for use.Possible values are:InstallDateManufactureDatePurchaseDate |
| ExchangeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of exchange offered.Possible values are:AdvanceExchangeLoanerReturnExchange |
| Exclusions | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of any exclusions. |
| ExpensesCovered | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of expenses covered. |
| ExpensesCoveredDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration for which expenses are covered. |
| ExpensesCoveredUnitOfTime | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit in which expenses covered duration is measured.Possible values are:DaysMonthsWeeksYears |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the warranty term is active. |
| IsTransferable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the warranty can be transferred to a new owner. |
| LaborCovered | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of labor covered. |
| LaborCoveredDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration for which labor is covered. |
| LaborCoveredUnitOfTime | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit in which labor covered duration is measured.Possible values are:DaysMonthsWeeksYears |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the warranty term was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the warranty term was last viewed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe warranty term’s assigned owner. |
| PartsCovered | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of parts covered. |
| PartsCoveredDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration for which parts are covered. |
| PartsCoveredUnitOfTime | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit in which parts covered duration is measured.Possible values are:DaysMonthsWeeksYears |
| Pricebook2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the price book item associated with this warranty term. |
| WarrantyDuration | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe duration of the warranty offered by this term. |
| WarrantyTermName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the warranty term. |
| WarrantyType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of warranty.Possible values are:RepairStandardSupplier |
| WarrantyUnitOfTime | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit in which the warranty duration is measured.Possible values are:DaysMonthsWeeksYears |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

WarrantyTermChangeEvent

Change events are available for the object.
