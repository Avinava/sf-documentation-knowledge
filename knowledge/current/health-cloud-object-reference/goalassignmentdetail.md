---
title: "GoalAssignmentDetail"
domain: health-cloud-object-reference
topic: goalassignmentdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.453Z
estimatedTokens: 927
keywords: [GoalAssignmentDetail, additional, associated, GoalAssignment, record, may, outcome, goal, something, addressed, API, version, 57.0, later, Calls]
---

# GoalAssignmentDetail

> Represents additional information associated with a GoalAssignment
         record. This information may be the outcome of a goal or something addressed by it.
      This object is available in API version 57.0 and later.

# GoalAssignmentDetail

Represents additional information associated with a GoalAssignment record. This information may be the outcome of a goal or something addressed by it. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DetailCodeId | TypePolymorphic LookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the addition information associated to a goal. This field is used to specify standardized goal outcomes as codes.This field is a polymorphic relationship field.Relationship NameDetailCodeRefers ToCodeSetCodeSetBundle |
| DetailRecordId | TypePolymorphic LookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences clinical records that associate additional information to a goal. This information can be an outcome or an item addressed by the goal.Relationship NameDetailRecordRefers ToCareObservation (Outcome Reference, Addressed Item)ClinicalServiceRequest (Addressed Item)HealthCondition (Addressed Item)MedicationRequest (Addressed Item)MedicationStatement (Addressed Item) |
| DetailType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of additional information associated to the goal.Possible values are:AddressedItem—Addressed ItemOutcomeCode—Outcome CodeOutcomeReference—Outcome Reference |
| GoalAssignmentId | TypeLookupPropertiesCreate, Filter, Group, SortDescriptionReferences the parent goal that is associated with the additional information,Relationship NameGoalAssignmentRefers ToGoalAssignment |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypePolymorphic LookupPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.Relationship NameOwnerRefers ToGroupUser |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GoalAssignmentDetailFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[GoalAssignmentDetailHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[GoalAssignmentDetailShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- GoalAssignmentDetailFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- GoalAssignmentDetailHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- GoalAssignmentDetailShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
