---
title: "TimePeriod"
domain: omnistudio
topic: timeperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:52.879Z
estimatedTokens: 686
keywords: [TimePeriod, Represents, time, period, that's, used, calculate, indicator, performance, result., API, version, 59.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# TimePeriod

> Represents the time period that's used to calculate the indicator
         performance and result. This object is available in API version 59.0 and
      later.

# TimePeriod

Represents the time period that's used to calculate the indicator performance and result. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   This object is available in products that include the Outcome Management license where Outcome Management is enabled and the Manage Outcomes system permission is assigned to users.
-   This object is available in Net Zero Cloud with a Growth license where the Manage Environmental, Social, and Governance Programs system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| EndDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe end date and time of the time period. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when a user last referenced this time period. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when a user last viewed this time period. |
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
