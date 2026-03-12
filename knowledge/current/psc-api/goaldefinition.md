---
title: "GoalDefinition"
domain: psc-api
topic: goaldefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.826Z
estimatedTokens: 958
keywords: [GoalDefinition, definition, care, plan, goal, reusable, PGI, library, that’s, part, Integrated, Management, instantiated, records, GoalAssignment]
---

# GoalDefinition

> The definition of a care plan goal in the reusable PGI library that’s a part
         of Integrated Care Management. When instantiated, GoalDefinition records create
         GoalAssignment records that serve as goals in care plans. This object is available in
      API version 57.0 and later.

# GoalDefinition

The definition of a care plan goal in the reusable PGI library that’s a part of Integrated Care Management. When instantiated, GoalDefinition records create GoalAssignment records that serve as goals in care plans. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe category that the defined goal belongs to. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the defined goal. |
| IsCustomGoalNameRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a custom goal name is required for a goal assignment related to the goal definition.The default value is false.This field is available from API version 63.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypePolymorphic lookupPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroupUser |
| ParentGoalId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is not used in Integrated Care Management.Relationship NameParentGoalRelationship TypeLookupRefers ToGoalDefinition |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the goal defintion. This value indicates whether the defintion is active or not,.Possible values are:ActiveInactiveThe default value is Active. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the defined goal.Possible values are:Individual—Intermediate GoalStrategic—Top GoalThe default value is Individual. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThis field is not used in Integrated Care Management. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GoalDefinitionFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[GoalDefinitionHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[GoalDefinitionShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- GoalDefinitionFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- GoalDefinitionHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- GoalDefinitionShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
