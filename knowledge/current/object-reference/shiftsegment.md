---
title: "ShiftSegment"
domain: object-reference
topic: shiftsegment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.059Z
estimatedTokens: 400
keywords: [ShiftSegment, scheduled, activity, shift, API, version, 55.0, later, Calls, Special, Access, Rules]
---

# ShiftSegment

> Represents a scheduled activity within a shift. This object is available
      in API version 55.0 and later.

# ShiftSegment

Represents a scheduled activity within a shift. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The org must have the Workforce Engagement license and Workforce Engagement must be enabled. The user requires the Workforce Engagement Planner or Workforce Engagement Admin permission set.

## Fields

| Field | Details |
| --- | --- |
| EndTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the shift segment ends. |
| IsInAdherence | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the agent is in adherence (true) or not (false) for the scheduled segment activity.The default value is true. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the shift segment. |
| SegmentTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique ID of the associated shift segment type.This is a relationship field.Relationship NameSegmentTypeRelationship TypeLookupRefers ToShiftSegmentType |
| ShiftId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique ID of the shift in which the segment is scheduled.This is a relationship field.Relationship NameShiftRelationship TypeLookupRefers ToShift |
| StartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the shift segment starts. |
