---
title: "InventoryCountAssessment"
domain: mfg-api-devguide
topic: inventorycountassessment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.761Z
estimatedTokens: 728
keywords: [InventoryCountAssessment, inventory, count, performed, location, API, version, 63.0, later, Calls, Special, Access, Rules]
---

# InventoryCountAssessment

> Represents an inventory count performed at a location. This object is
      available in API version 63.0 and later.

# InventoryCountAssessment

Represents an inventory count performed at a location. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Inventory Count must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPerson who counts the inventory.This field is a polymorphic relationship field.Relationship NameAssigneeRefers ToContact, User |
| InventoryCountPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInventory count plan associated with the inventory count.This field is a relationship field.Relationship NameInventoryCountPlanRefers ToInventoryCountPlan |
| IsBlindCount | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the expected inventory quantity is hidden from the assignee when they count the inventory (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionLocation associated with the inventory count.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the inventory count assessment. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PlannedEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPlanned end date and time for the inventory count. |
| PlannedStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPlanned start date and time for the inventory count. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus of inventory count.Possible values are:AssignedAuditorApproved—Auditor ApprovedComplete—CompletedInProgress—In Progress |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of inventory count.Possible values are:AdhocAuditedInitialPeriodic |
