---
title: "WorkTypeCareSpecialty"
domain: health-cloud-object-reference
topic: worktypecarespecialty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.266Z
estimatedTokens: 659
keywords: [WorkTypeCareSpecialty, relationship, care, specialty, visit, Work, API, version, 52.0, later, Calls, Associated, Objects]
---

# WorkTypeCareSpecialty

> Represents a relationship between a care specialty and a visit type (Work
         Type). This object is available in API version 52.0 and later.

# WorkTypeCareSpecialty

Represents a relationship between a care specialty and a visit type (Work Type). This object is available in API version 52.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareSpecialtyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care speciality associated with the work type.This is a relationship field.Relationship NameCareSpecialtyRelationship TypeLookupRefers ToCareSpecialty |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the record was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the WorkTypeCareSpecialty record. |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe work type that the specialty is associated with. This is the parent record of the work type care specialty.This is a relationship field.Relationship NameWorkTypeRelationship TypeMaster-DetailRefers ToWorkType |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WorkTypeCareSpecialtyFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WorkTypeCareSpecialtyHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- WorkTypeCareSpecialtyFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- WorkTypeCareSpecialtyHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
