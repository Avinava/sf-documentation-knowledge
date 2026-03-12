---
title: "EngagementChannelWorkType"
domain: salesforce-scheduler-developer-guide
topic: engagementchannelworktype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.699Z
estimatedTokens: 614
keywords: [EngagementChannelWorkType, relationship, Engagement, Channel, Work, Salesforce, Scheduler, API, version, 56.0, later, Calls, Special, Access, Rules]
---

# EngagementChannelWorkType

> Represents the relationship between an Engagement Channel Type object and a
         Work Type object for Salesforce Scheduler. This object is available in API version
      56.0 and
      later.

# EngagementChannelWorkType

Represents the relationship between an Engagement Channel Type object and a Work Type object for Salesforce Scheduler. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AreAllEngmtChnlSupported | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the work type supports all engagement channels (true) or not (false). |
| EngagementChannelTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the engagement channel type that’s related to the work type indicated in the WorkTypeId field.This field is a relationship field.Relationship NameEngagementChannelTypeRelationship TypeLookupRefers ToEngagementChannelType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the current user last viewed a record related to this object. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this object. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of this engagement channel-work type relationship. |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the work type that’s related to the engagement channel type indicated in the EngagementChannelTypeId field.This field is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EngagementChannelWorkTypeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[EngagementChannelWorkTypeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.
