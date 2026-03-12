---
title: "InventoryCountProductItem"
domain: mfg-api-devguide
topic: inventorycountproductitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.788Z
estimatedTokens: 1184
keywords: [InventoryCountProductItem, inventory, count, product, location, Item, child, API, version, 63.0, later, Calls, Special, Access, Rules]
---

# InventoryCountProductItem

> Represents the inventory count of a product at a location. Inventory Count
         Product Item is a child object of Inventory Count. This object is available in API
      version 63.0 and later.

# InventoryCountProductItem

Represents the inventory count of a product at a location. Inventory Count Product Item is a child object of Inventory Count. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Inventory Count must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ActualEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe planned end date for counting the product's inventory. |
| ActualQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual quantity of the product's inventory. |
| ActualStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual start date for counting the product's inventory. |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe person who counts the product's inventory.This field is a polymorphic relationship field.Relationship NameAssigneeRefers ToUser |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA comment, note, or instruction that gives additional context for the count of the product's inventory. |
| DiscrepancyReasonType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of reason for the discrepancy in the actual quantity and the expected quantity. |
| ExpectedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected quantity of the product's inventory. |
| InventoryAccuracy | TypepercentPropertiesFilter, Nillable, SortDescriptionThe actual quantity, expressed as a percentage of the expected quantity.This field is a calculated field. |
| InventoryCountAssessmentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe inventory count assessment that's associated with the inventory count product item.This field is a relationship field.Relationship NameInventoryCountAssessmentRelationship TypeMaster-detailRefers ToInventoryCountAssessment (the master object) |
| InventoryCountPlanItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe inventory count plan item that's associated with the inventory count product item.This field is a relationship field.Relationship NameInventoryCountPlanItemRefers ToInventoryCountPlanItem |
| IsBlindCount | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the expected inventory quantity is hidden from the assignee when they count the inventory (true) or not (false).The default value is false. |
| IsSerializedProduct | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the product being counted is serialized (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the inventory count product item. |
| PlannedEndDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe planned end date for counting the product's inventory. |
| PlannedStartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe planned start date for counting the product's inventory. |
| Product | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe product that's associated with the inventory count product item. |
| ProductItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product item that's associated with the inventory count product item.This field is a relationship field.Relationship NameProductItemRefers ToProductItem |
| QuantityUnitOfMeasure | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe unit of measure of the expected and actual quantities of the inventory count product item. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the inventory count product item.Possible values are:AssignedCompleteIn_Progress—In ProgressInactiveThe default value is Assigned. |
