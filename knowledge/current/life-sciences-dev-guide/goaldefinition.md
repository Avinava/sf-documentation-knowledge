---
title: "GoalDefinition"
domain: life-sciences-dev-guide
topic: goaldefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.893Z
estimatedTokens: 1104
keywords: [GoalDefinition, goal, business, objective, that’s, instantiated, records, GoalAssignment, serve, goals, care, plans, Calls, Associated, Objects]
---

# GoalDefinition

> Represents a goal or a business objective that’s used as a reference.
         When instantiated, GoalDefinition records create GoalAssignment records that serve as goals
         in care plans.

# GoalDefinition

Represents a goal or a business objective that’s used as a reference. When instantiated, GoalDefinition records create GoalAssignment records that serve as goals in care plans.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category that the defined goal belongs to. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the defined goal. |
| IsCustomGoalNameRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the custom goal name is required.The default value is false. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the goal definition record. |
| OwnerId | TypePolymorphic lookupPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of this goal definition record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroupUser |
| ParentGoalId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the parent record.This field is a relationship field.Relationship NameParentGoalRelationship TypeLookupRefers ToGoalDefinition |
| ScopeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of scope of the goal definition.Possible values are:AffiliateGlobalTerritoryThis field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the goal defintion.Possible values are:ActiveInactiveThe default value is Active. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the defined goal.Possible values are:Individual—Intermediate GoalStrategic—Top GoalThe default value is Individual. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the usage type of the defined goal. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GoalDefinitionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[GoalDefinitionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[GoalDefinitionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
