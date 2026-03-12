---
title: "InventoryCountPlan"
domain: mfg-api-devguide
topic: inventorycountplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.770Z
estimatedTokens: 827
keywords: [InventoryCountPlan, plan, count, inventory, location, API, version, 63.0, later, Calls, Special, Access, Rules]
---

# InventoryCountPlan

> Represents a plan to count inventory at a location. This object is
      available in API version 63.0 and later.

# InventoryCountPlan

Represents a plan to count inventory at a location. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Inventory Count must be enabled.

## Fields

| Field | Details |
| --- | --- |
| CountInterval | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe interval between the planned start dates of two consecutive assessments related to this plan. For example, if the Count Interval is 5 and the Count Interval Unit of Measure is Monthly, then the interval between the planned start dates of the assessments is five months. |
| CountIntervalUnitOfMeasure | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit of measure of the interval between two consecutive assessments related to this plan. If you select Once, only one assessment is created.Possible values are:DayMonthOnceQuarterWeekYearThe default value is Once. |
| CountWindowDays | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days between the planned start and end date of each assessment related to this plan. For example, if the count window days is 5, and the planned start date of an assessment in this plan is January 4, 2024 at 9:00 AM, then the planned end date of that assessment is January 9, 2024 at 9:00 AM. If you don't specify a value, then the count interval is considered as the count window. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the inventory count plan. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date when the inventory count is planned to end. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe location associated with the inventory count plan.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the inventory count plan. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date when the inventory count is planned to start. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the inventory count plan.Possible values are:ActiveDraftInactiveThe default value is Draft. |
