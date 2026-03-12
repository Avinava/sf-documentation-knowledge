---
title: "InventoryCountPlanItem"
domain: mfg-api-devguide
topic: inventorycountplanitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.776Z
estimatedTokens: 580
keywords: [InventoryCountPlanItem, product, inventory, plan, Count, Item, child, API, version, 63.0, later, Calls, Special, Access, Rules]
---

# InventoryCountPlanItem

> Represents a product in an inventory plan. Inventory Count Plan Item is the
         child object of Inventory Count Plan. This object is available in API version 63.0 and
      later.

# InventoryCountPlanItem

Represents a product in an inventory plan. Inventory Count Plan Item is the child object of Inventory Count Plan. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Inventory Count must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe assignee who's scheduled to count the product's inventory.This field is a relationship field.Relationship NameAssigneeRefers ToUser |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA comment, note, or instruction that gives additional context for the plan to count the product's inventory. |
| InventoryCountPlanId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe inventory count plan associated with the inventory count plan item.This field is a relationship field.Relationship NameInventoryCountPlanRelationship TypeMaster-detailRefers ToInventoryCountPlan (the master object) |
| IsBlindCount | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the expected inventory quantity is hidden from the assignee when they count the inventory (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the inventory count plan item. |
| ProductReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product associated with the inventory count plan item.This field is a polymorphic relationship field.Relationship NameProductReferenceRecordRefers ToProduct2 |
