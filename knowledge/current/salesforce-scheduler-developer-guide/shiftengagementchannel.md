---
title: "ShiftEngagementChannel"
domain: salesforce-scheduler-developer-guide
topic: shiftengagementchannel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.831Z
estimatedTokens: 605
keywords: [ShiftEngagementChannel, relationship, Shift, Engagement, Channel, Salesforce, Scheduler, API, version, 56.0, later, Calls, Special, Access, Rules]
---

# ShiftEngagementChannel

> Represents the relationship between a Shift object and an Engagement Channel
         Type object for Salesforce Scheduler. This object is available in API version 56.0 and
      later.

# ShiftEngagementChannel

Represents the relationship between a Shift object and an Engagement Channel Type object for Salesforce Scheduler. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AreAllEngmtChnlSupported | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shift supports all engagement channels (true) or not (false). |
| EngagementChannelTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the engagement channel type that’s related to the shift indicated in the ShiftId field.This field is a relationship field.Relationship NameEngagementChannelTypeRelationship TypeLookupRefers ToEngagementChannelType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the current user last viewed a record related to this object. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this object. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of this shift-engagement channel type relationship. |
| ShiftId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the shift that’s related to the engagement channel type indicated in the EngagementChannelTypeId field.This field is a relationship field.Relationship NameShiftRelationship TypeLookupRefers ToShift |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ShiftEngagementChannelFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm "html (New Window)")

Feed tracking is available for the object.

[ShiftEngagementChannelHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm "html (New Window)")

History is available for tracked fields of the object.
