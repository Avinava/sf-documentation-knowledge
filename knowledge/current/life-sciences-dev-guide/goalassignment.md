---
title: "GoalAssignment"
domain: life-sciences-dev-guide
topic: goalassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.883Z
estimatedTokens: 1580
keywords: [GoalAssignment, goals, part, care, plan, Calls, Associated, Objects]
---

# GoalAssignment

> Represents the goals that are part of a care plan.

# GoalAssignment

Represents the goals that are part of a care plan.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssignedById | TypePolymorphic lookupReference (Key Account Management)PropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the person who assigned the goal.This field is a polymorphic relationship field.Relationship NameAssignedByRelationship TypeLookupRefers ToAccount, CarePerformer, Contact, HealthcarePractitionerFacility, HealthcareProvider |
| CompletionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the goal is completed. |
| CompletionPercentage | TypepercentPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionRecords the progress of the goal with a percentage value. |
| CustomGoalName | TypeStringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the custom goal.This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the goal. |
| GoalAssigneeId | TypePolymorphic lookupReferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person to whom the goal is assigned.This field is a polymorphic relationship field.Relationship NameGoalAssigneeRelationship TypeLookupRefers ToAccount, Contact |
| GoalDefinitionId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the goal definition in the PGI library that defines the details of the goal.This field is a relationship field.Relationship NameGoalDefinitionRefers ToGoalDefinition |
| GoalType | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the type of the goal. |
| IsContinuousGoal | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the goal is a continuous goal (true) or not (false). For instance, setting a goal to quit smoking.The default value is false. |
| LastReferencedDate | TypeDateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypeDateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypeStringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the goal assignment record. |
| OwnerId | TypePolymorphic lookupReference (Key Account Management)PropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of this goal assignment record.This field is a polymorphic relationship field for Key Account Mangement.Relationship NameOwnerRefers ToGroup, User |
| ParentRecordId | TypePolymorphic lookupPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe parent record that the goal is associated with.This field is a polymorphic relationship field.Relationship NameParentRecordRefers ToAccountCarePlanActivityGoalAssignmentTerritoryBusinsessPlan |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the priority of the goal.Possible values are:HighLowMedium |
| SortOrder | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDetermines the spot of the goal in the list of all goals in a care plan. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in its source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system this record came from. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the goal is intended to start. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the goal.Possible values are:CanceledCompletedIn ProgressNot StartedThe default value is Not Started. |
| StatusDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRecords the date and time when the current status was set. |
| StatusReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescribes the reason for the current status. |
| Target | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe target of the goal assignment. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| TargetCompletionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the goal is targeted to be completed. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GoalAssignmentFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[GoalAssignmentHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[GoalAssignmentOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[GoalAssignmentShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
