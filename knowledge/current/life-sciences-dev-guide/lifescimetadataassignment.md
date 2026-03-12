---
title: "LifeSciMetadataAssignment"
domain: life-sciences-dev-guide
topic: lifescimetadataassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.439Z
estimatedTokens: 812
keywords: [LifeSciMetadataAssignment, assignments, Life, Sciences, configuration, record, child, LifeSciMetadataRecord, API, version, 65.0, later, Calls, Associated, Objects]
---

# LifeSciMetadataAssignment

> Represents the assignments for a Life Sciences configuration record. This
         object is a child of LifeSciMetadataRecord. This object is available in API version
      65.0 and later.

# LifeSciMetadataAssignment

Represents the assignments for a Life Sciences configuration record. This object is a child of LifeSciMetadataRecord. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssignedToId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The profile or user associated with the record.This field is a polymorphic relationship field.Relationship NameAssignedToRelationship TypeLookupRefers ToProfile, User |
| AssignmentApiName | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionRequired. The API name of the assignment record. |
| AssignmentLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the level of the assignment.Possible values are:ProfileUser |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LifeSciMetadataRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The configuration record associated with the assignment.This field is a relationship field.Relationship NameLifeSciMetadataRecordRelationship TypeMaster-detailRefers ToLifeSciMetadataRecord (the master object) |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the assignment record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LifeSciMetadataAssignmentFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for tracked fields of the object.

[LifeSciMetadataAssignmentHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LifeSciMetadataAssignmentFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- LifeSciMetadataAssignmentHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
