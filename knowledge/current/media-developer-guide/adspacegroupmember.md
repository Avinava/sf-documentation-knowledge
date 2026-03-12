---
title: "AdSpaceGroupMember"
domain: media-developer-guide
topic: adspacegroupmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.790Z
estimatedTokens: 617
keywords: [AdSpaceGroupMember, junction, space, specification, group, API, version, 54.0, later, Calls, Associated, Objects]
---

# AdSpaceGroupMember

> Represents the junction between an ad space specification and an ad
         space group. This object is available in API version 54.0 and later.

# AdSpaceGroupMember

Represents the junction between an ad space specification and an ad space group. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdSpaceGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the group type ad space specificaton that the ad space specification group member is a part of.This is a relationship field.Relationship NameAdSpaceGroupId__rRelationship TypeMaster-detailRefers ToAdSpaceSpecification (the master object) |
| AdSpaceGroupMemberNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID the ad space specification that's part of the related ad space group.This field is a relationship field.Relationship NameAdSpaceGroupMemberNameRefers ToAdSpaceSpecification |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad space group member. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdSpaceGroupMemberFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdSpaceGroupMemberHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdSpaceGroupMemberShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
