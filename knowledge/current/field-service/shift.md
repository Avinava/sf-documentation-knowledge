---
title: "Shift"
domain: field-service
topic: shift
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:12.997Z
keywords: [Shift, Supported, Calls, Special, Access, Rules, Fields, Usage, Associated, Objects]
---

# Shift

# Shift

Represents a shift for service resource scheduling. Available in API versions 46.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), upsert()

## Special Access Rules

Field Service, Service Engagement, or Workforce Engagement must be enabled. For Field Service, users must have Field Service permissions. For Service Engagement, users must have the Service Engagement Planner permission set. For Workforce Engagement, users must have the Workforce Engagement Admin or Planner permission set.

## Fields

| Field | Details |
| --- | --- |
| BackgroundColor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSets a background color when shifts are displayed in the UI. Use a 3- or 6-digit hexadecimal format, for example #FF00FF. Available in API version 54.0 and later. |
| EndTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time that the shift ends. |
| IsHolidayShift | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates a shift that overlaps with holiday hours. The default value is false. Available in API version 55.0 and later. |
| IsNonStandard | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shift is nonstandard, such as overtime or on-call shifts.The default value is false. Available in API version 54.0 and later. |
| JobProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe job profile associated with the shift. Available in API versions 47.0 and later. |
| Label | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe label that a shift is given. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the current user last viewed a related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the current user last viewed this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the shift.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordsetFilterCriteriaId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the recordset filter criteria selected for the shift. Available in API version 49.0 and later.This is a relationship field.Relationship NameRecordsetFilterCriteriaRelationship TypeLookupRefers ToRecordsetFilterCriteria |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the service resource the shift belongs to. Available in API versions 47.0 and later.This is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the service territory the shift belongs to. Available in API versions 47.0 and later.This is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| ShiftNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe number automatically given to the shift upon creation. |
| ShiftTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe shift template ID, if the shift was created from a shift template. Available in API version 53.0 and later.This is a relationship field.Relationship NameShiftTemplateRelationship TypeLookupRefers ToShiftTemplate |
| StartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time that the shift starts. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionDescribes the status of the shift. Users can create custom values. Default values are:TentativePublishedConfirmed |
| StatusCategory | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDescribes the status of the shift using static values. This field is derived from Status using the mapping defined in setup.Possible values are:TentativePublishedConfirmed |
| TimeSlotType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of time slot for the shift. The same setup values as the TimeSlot field in the OperatingHours object.Possible values are:Normal (default value)Extended |

## Usage

Scheduling and dispatching service resources using shift data is not supported in API version 46.0, and is a pilot feature in API version 47.0.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

ShiftChangeEvent (API version 54.0)

Change events are available for the object.

ShiftFeed

Feed tracking is available for the object.

ShiftHistory

History is available for tracked fields of the object.

ShiftOwnerSharingRule

Sharing rules are available for the object.

ShiftShare

Sharing is available for the object.