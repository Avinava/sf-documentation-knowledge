---
title: "TimePeriod"
domain: life-sciences-dev-guide
topic: timeperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:02.016Z
estimatedTokens: 651
keywords: [TimePeriod, time, period, that's, calculate, indicator, performance, result]
---

> Represents the time period that's used to calculate the indicator
         performance and result.

# TimePeriod

Represents the time period that's used to calculate the indicator performance and result.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EndDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe end date and time of the time period. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when a user last referenced this time period.Timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when a user last viewed this time period.Timestamp when the current user last viewed the record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the time period. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns the time period.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe start date and time of the time period. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TimePeriodFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[TimePeriodHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[TimePeriodOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[TimePeriodShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
