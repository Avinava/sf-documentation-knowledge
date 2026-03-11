---
title: "ShiftPattern"
domain: field-service
topic: shiftpattern
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:13.005Z
keywords: [ShiftPattern, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# ShiftPattern

# ShiftPattern

Represents a pattern of templates for creating shifts. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled. Users must have Field Service permission.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA short description of the shift pattern to help users identify the pattern. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the shift pattern can be used to create shifts.The default value is ‘false’. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the shift pattern was last used. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the shift pattern was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA short, descriptive name of the shift pattern. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the shift pattern. Default is the user who creates the shift pattern.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PatternLength | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe duration in days of the shift pattern. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ShiftPatternChangeEvent (API version 54.0)

Change events are available for the object.

ShiftPatternFeed

Feed tracking is available for the object.

ShiftPatternHistory

History is available for tracked fields of the object.

ShiftPatternShare

Sharing is available for the object.