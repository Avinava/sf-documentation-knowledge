---
title: "ActionPlanTemplateAssignment"
domain: health-cloud-object-reference
topic: actionplantemplateassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.948Z
estimatedTokens: 637
keywords: [ActionPlanTemplateAssignment, association, action, plan, template, care, goal, problem, definition, instantiated, generates, corresponding, intervention, tasks, links]
---

# ActionPlanTemplateAssignment

> Represents the association of an action plan template with its related
      care plan template, goal, or problem definition. When instantiated, the action plan generates
      the corresponding intervention tasks and links them to the appropriate record, such as a
      condition, goal, or care plan.

# ActionPlanTemplateAssignment

Represents the association of an action plan template with its related care plan template, goal, or problem definition. When instantiated, the action plan generates the corresponding intervention tasks and links them to the appropriate record, such as a condition, goal, or care plan.

## Special Access Rules

In Health Cloud, this object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionPlanTemplateVersionId | TypeReferencePropertiesCreate, Filter, Group, SortDescriptionAction plan template that’s mapped to a problem defintion, goal definition, or care plan template. This field is a relationship field.Relationship NameActionPlanTemplateVersionRelationship TypeMaster-DetailRefers ToActionPlanTemplateVersion |
| AssociatedObjectId | TypePolymorphic lookupPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe object to which the action plan template is associated. For example: a problem definition, goal definition, or care plan template, associated with an action plan template.Refers ToCarePlanTemplateRelationship TypeLookupRefers ToCarePlanTemplateGoalDefinitionProblemDefinition |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the action plan template assignment record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionPlanTemplateAssignmentFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[ActionPlanTemplateAssignmentHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.
