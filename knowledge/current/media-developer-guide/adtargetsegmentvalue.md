---
title: "AdTargetSegmentValue"
domain: media-developer-guide
topic: adtargetsegmentvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.850Z
estimatedTokens: 717
keywords: [AdTargetSegmentValue, targeting, target, category, segment, API, version, 62.0, later, Calls, Associated, Objects]
---

# AdTargetSegmentValue

> Represents a targeting value of an ad target category segment. This
      object is available in API version 62.0 and later.

# AdTargetSegmentValue

Represents a targeting value of an ad target category segment. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DependantSegmentValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad target segment value that the current ad target segment value is dependent on.This field is a relationship field.Relationship NameDependantSegmentValueRefers ToAdTargetSegmentValue |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad target segment value. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad target segment value.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ServerIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The unique identifier of the ad target segment value on the ad server. |
| TargetCategorySegmentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the ad target category segment associated with the ad target segment value.This field is a relationship field.Relationship NameTargetCategorySegmentRefers ToAdTargetCategorySegment |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdTargetSegmentValueFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdTargetSegmentValueHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdTargetSegmentValueShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
