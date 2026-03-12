---
title: "ShiftWorkTopic"
domain: salesforce-scheduler-developer-guide
topic: shiftworktopic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.839Z
estimatedTokens: 1065
keywords: [ShiftWorkTopic, relationship, Shift, Work, Group, Salesforce, Scheduler, API, version, 56.0, later, Calls, Special, Access, Rules]
---

# ShiftWorkTopic

> Represents the relationship between a Shift object and a Work Type or
         Work Type Group object for Salesforce Scheduler. This object is available in API
      version 56.0 and later.

# ShiftWorkTopic

Represents the relationship between a Shift object and a Work Type or Work Type Group object for Salesforce Scheduler. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AreAllTopicsSupported | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shift supports all work type or work type groups (true) or not (false).The default value is false. |
| AttendeeLimit | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe maximum number of attendees for a group service appointment in a shift. This field is considered when the appointment mode is Group. Available in API version 61.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the current user last viewed a record related to this object. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this object. |
| MaxAppointments | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of appointments allowed for each time slot for a shift. This field is considered when WorkTypeId or WorkTypeGroupId is provided. This field is available in API version 60.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of this shift-work topic relationship. |
| ShiftId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the shift that’s related to the work type indicated in the WorkTypeId field or the work type group indicated in the WorkTypeGroupId field.This field is a relationship field.Relationship NameShiftRelationship TypeLookupRefers ToShift |
| WorkTypeGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the work type group that’s related to the shift indicated in the ShiftId field.This field is a relationship field.Relationship NameWorkTypeGroupRelationship TypeLookupRefers ToWorkTypeGroup |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the work type that’s related to the shift indicated in the ShiftId field.This field is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |

## Usage

For a ShiftWorkTopic record, you must specify either a work type or a work type group (based on the Salesforce Scheduler for Health Cloud option), or set AreAllTopicsSupported as true. Use WorkTypeGroupId for Salesforce Scheduler and use WorkTypeId only when the Salesforce Scheduler for Health Cloud option is enabled.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ShiftWorkTopicChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_change_event.htm "HTML (New Window)")

Change events are available for the object.

[ShiftWorkTopicFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[ShiftWorkTopicHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[ShiftWorkTopicOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[ShiftWorkTopicShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
