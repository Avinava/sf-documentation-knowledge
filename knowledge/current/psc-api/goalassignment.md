---
title: "GoalAssignment"
domain: psc-api
topic: goalassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.818Z
estimatedTokens: 1402
keywords: [GoalAssignment, assignment, goal, API, version, 55.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# GoalAssignment

> Represents the assignment of a goal. This object is available in API
      version 55.0 and later.

# GoalAssignment

Represents the assignment of a goal. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Program and Benefit Management is enabled in your org. To access the object, you need the Program and Benefit Management Access permission set or the Program and Benefit Management permission set license.

## Fields

| Field | Details |
| --- | --- |
| CompletionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the goal is completed. |
| CompletionPercentage | TypepercentPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionIndicates the progress made on the assigned goal in percentage. |
| CustomGoalName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA custom name that can be defined for the goal assignment. If this field is empty, the goal definition name is used for the goal assignment.This field is available from API version 63.0 and later. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the goal assignment record. |
| GoalAssigneeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe assigees associated with the goal assignment.This is a polymorphic relationship field.Relationship NameGoalAssigneeRelationship TypeLookupRefers ToAccount, Contact |
| GoalDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe goal definition associated with the goal assignment.This is a relationship field.Relationship NameGoalDefinitionRelationship TypeLookupRefers ToGoalDefinition |
| DescriptionCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the description of a standardized goal.This field is a polymorphic relationship field.Available in API version 61.0 and later.Relationship NameDescriptionCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| GoalType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies if the goal applies to a group or an individual. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the goal assignment record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the goal assignment record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care plan or benefit assignment object associated with the goal assignment.This is a polymorphic relationship field.Relationship NameParentRecordRelationship TypeLookupRefers ToBenefitAssignment, CarePlan |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the priority of the goal assignment.Possible values are:HighLowMedium |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the assigned goal. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the assigned goal.Possible values are:CanceledCompletedIn ProgressNot StartedThe default value is 'Not Started'. |
| TargetCompletionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date by when the assigned goal is targeted to be completed. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GoalAssignmentFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[GoalAssignmentHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[GoalAssignmentOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[GoalAssignmentShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- GoalAssignmentFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- GoalAssignmentHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- GoalAssignmentOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- GoalAssignmentShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
