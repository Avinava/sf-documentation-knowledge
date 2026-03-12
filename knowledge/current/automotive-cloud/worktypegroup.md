---
title: "WorkTypeGroup"
domain: automotive-cloud
topic: worktypegroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.760Z
estimatedTokens: 922
keywords: [WorkTypeGroup, grouping, work, categorize, appointments, API, version, 58.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# WorkTypeGroup

> Represents a grouping of work types used to categorize types of available
         appointments. This object is available in API version 58.0 and later.

# WorkTypeGroup

Represents a grouping of work types used to categorize types of available appointments. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Automotive Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the additional information for the work type group. |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe category of work type group that determines the type of appointment you create. You must create only one work type group record with the Test Drive category. You can create multiple work type group records with the Vehicle Service category.Possible values are:Test DriveVehicle Service |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the work type group. |
| GroupType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the group type of the work type group.Possible values are:CapacityDefaultThe default value is Default. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this work type group can be used for appointment scheduling (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the current user last viewed a record related to this object. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this object. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this work type group. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentTopicId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent work type group that's associated with the work type group. Available in API 56.0 and later.This field is a relationship field.Relationship NameParentTopicRefers ToWorkTypeGroup |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WorkTypeGroupFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[WorkTypeGroupHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[WorkTypeGroupOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[WorkTypeGroupShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
