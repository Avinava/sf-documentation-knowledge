---
title: "WorkTypeGroup"
domain: field-service
topic: worktypegroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:55.133Z
estimatedTokens: 619
keywords: [WorkTypeGroup, grouping, work, categorize, appointments, Lightning, Scheduler, define, scheduling, limits, Service, API, version, 45.0, later]
---

# WorkTypeGroup

> Represents a grouping of work types used to categorize types of
			appointments available in Lightning Scheduler, or to define scheduling limits in Field
			Service. This object is available in API version 45.0 and later.

# WorkTypeGroup

Represents a grouping of work types used to categorize types of appointments available in Lightning Scheduler, or to define scheduling limits in Field Service. This object is available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionAdditional information about the types of appointments this work type group represents. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of this work type group. |
| GroupType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe category of this work type group. Possible values are:Capacity—A group of work types used to define a work capacity limit in Field Service.Default—A non-capacity group of work types used in Lightning Scheduler. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this work type group can be used for appointment scheduling or work capacity limits. A work type can belong to only one active work type group of type Capacity. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the current user last viewed a record related to this object. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this object. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this work type group. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

WorkTypeGroupFeed

Feed tracking is available for the object.

WorkTypeGroupHistory

History is available for tracked fields of the object.

WorkTypeGroupOwnerSharingRule

Sharing rules are available for the object.

WorkTypeGroupShare

Sharing is available for the object.
