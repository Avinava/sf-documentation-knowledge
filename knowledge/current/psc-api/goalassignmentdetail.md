---
title: "GoalAssignmentDetail"
domain: psc-api
topic: goalassignmentdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.871Z
estimatedTokens: 884
keywords: [GoalAssignmentDetail, additional, associated, goal, assignment, API, version, 61.0, later, Calls, Special, Access, Rules, Objects]
---

# GoalAssignmentDetail

> Represents additional information associated with a goal
         assignment. This object is available in API version 61.0 and later.

# GoalAssignmentDetail

Represents additional information associated with a goal assignment. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if care plans are enabled in your org. To access the object, you need the Care Plans Access permission set or the Care Plans permission set license.

## Fields

| Field | Details |
| --- | --- |
| DetailCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the addition information associated to a goal. This field is used to specify standardized goal outcomes as codes.This field is a polymorphic relationship field.Relationship NameDetailCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| DetailRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference record that represents additional information associated with the goal assignment.This field is a polymorphic relationship field.Relationship NameDetailRecordRelationship TypeLookupRefers ToCareBarrier |
| GoalAssignmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the associated goal assignment.This field is a relationship field.Relationship NameGoalAssignmentRelationship TypeMaster-detailRefers ToGoalAssignment (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the goal assignment detail. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GoalAssignmentDetailFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[GoalAssignmentDetailHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[GoalAssignmentDetailShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- GoalAssignmentDetailFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- GoalAssignmentDetailHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- GoalAssignmentDetailShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
