---
title: "TerritoryProdtQtyAllocation"
domain: life-sciences-dev-guide
topic: territoryprodtqtyallocation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.503Z
estimatedTokens: 726
keywords: [TerritoryProdtQtyAllocation, quantity, allocation, product, territory, system, validates, against, remaining, maximum, disbursement, limit, API, version, 65.0]
---

# TerritoryProdtQtyAllocation

> Represents the quantity allocation of a product to a given territory so that
         the system validates against the remaining quantity or maximum disbursement limit.
      This object is available in API version 65.0 and later.

# TerritoryProdtQtyAllocation

Represents the quantity allocation of a product to a given territory so that the system validates against the remaining quantity or maximum disbursement limit. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustmentQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdjustment quantity to the allocated quantity. |
| AllocatedQuantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. Allocated quantity to the territory. |
| AllocationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Type of allocation.Possible values are:OrdersProviderVisitThe default value is ProviderVisit. |
| DebitedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDebited quantity for the territory. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MaxDisbursementLimitQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMaximum disbursement quantity for a given transaction. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. Name of territory product quantity allocation record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner or creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Product allocated to a territory.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| RemainingQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionRemaining quantity for the territory.This field is a calculated field. |
| TerritoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Territory to which the product quantity is allocated.This field is a relationship field.Relationship NameTerritoryRefers ToTerritory2 |
| TimePeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionEffective period for the allocation.This field is a relationship field.Relationship NameTimePeriodRefers ToTimePeriod |
