---
title: "AdAvailableTargetSegmentValue"
domain: media-developer-guide
topic: adavailabletargetsegmentvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.377Z
estimatedTokens: 761
keywords: [AdAvailableTargetSegmentValue, junction, target, segment, API, version, 63.0, later, Calls, Associated, Objects]
---

# AdAvailableTargetSegmentValue

> Represents a junction between ad available target segment and ad
         target segment value. This object is available in API version 63.0 and later.

# AdAvailableTargetSegmentValue

Represents a junction between ad available target segment and ad target segment value. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdAvailableTargetSegmentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the ad available target segment associated with the ad available target segment value.This field is a relationship field.Relationship NameAdAvailableTargetSegmentRefers ToAdAvailableTargetSegment |
| AdTargetSegmentValueId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the ad available target segment associated with the ad available target segment value.This field is a relationship field.Relationship NameAdTargetSegmentValueRefers ToAdTargetSegmentValue |
| IsIncluded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the ad target segment value is included in the ad campaign (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the ad available target segment value. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad available target segment value.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdAvailableTargetSegmentValueFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdAvailableTargetSegmentValueHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdAvailableTargetSegmentValueShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
