---
title: "CareBarrierDeterminant"
domain: health-cloud-object-reference
topic: carebarrierdeterminant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.122Z
estimatedTokens: 740
keywords: [CareBarrierDeterminant, relationship, barrier, determinant, patient, member, API, version, 45.0, later, Calls, Associated, Objects]
---

# CareBarrierDeterminant

> Represents the relationship of a barrier to a determinant for a
			patient or member. Available in API version 45.0 and later.

# CareBarrierDeterminant

Represents the relationship of a barrier to a determinant for a patient or member. Available in API version 45.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field Name | Details |
| --- | --- |
| CareBarrierId | TypereferencePropertiesFilter, Group, SortDescriptionID of the care barrier associated with this record.This is a relationship field.Relationship NameCareBarrierRelationship TypeLookupRefers ToCareBarrier |
| CareDeterminantId | TypereferencePropertiesFilter, Group, SortDescriptionID of the care determinant associated with this record.This is a relationship field.Relationship NameCareDeterminantRelationship TypeLookupRefers ToCareDeterminant |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the relationship between the barrier and the determinant. For example, Mold growth in home - Housing. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[CareBarrierDeterminantChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 60.0)

Change events are available for the object.

[CareBarrierDeterminantFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[CareBarrierDeterminantHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[CareBarrierDeterminantOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[CareBarrierDeterminantShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
