---
title: "WorkTypeGroup"
domain: salesforce-scheduler-developer-guide
topic: worktypegroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.919Z
estimatedTokens: 711
keywords: [WorkTypeGroup, grouping, work, categorize, appointments, Salesforce, Scheduler, API, version, 45.0, later, Calls, Special, Access, Rules]
---

# WorkTypeGroup

> Represents a grouping of work types used to categorize types of
			appointments available in Salesforce Scheduler. This object is available in API
		version 45.0 and later.

# WorkTypeGroup

Represents a grouping of work types used to categorize types of appointments available in Salesforce Scheduler. This object is available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionAdditional information about the types of appointments this work type group represents. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of this work type group. |
| GroupType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe category of this work type group. Possible values are:Default—A non-capacity group of work types used in Salesforce Scheduler. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this work type group can be used for appointment scheduling. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the current user last viewed a record related to this object. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this object. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this work type group. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[WorkTypeGroupFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[WorkTypeGroupHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[WorkTypeGroupOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[WorkTypeGroupShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
