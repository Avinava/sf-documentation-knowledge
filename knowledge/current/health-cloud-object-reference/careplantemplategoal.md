---
title: "CarePlanTemplateGoal"
domain: health-cloud-object-reference
topic: careplantemplategoal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.435Z
estimatedTokens: 588
keywords: [CarePlanTemplateGoal, goals, Care, Plan, Templates, don’t, problems, their, parents, added, directly, under, template, determines, position]
---

# CarePlanTemplateGoal

> Represents goals in Care Plan Templates that don’t have problems as their
         parents. These goals are added directly under the care plan in the template . This
      object determines the position of goals in the hierarchy of care plan templates. The specific
      details of goals are referenced from GoalDefinitions records in the PGI library. This object
      is available in API version 57.0 and later.

# CarePlanTemplateGoal

Represents goals in Care Plan Templates that don’t have problems as their parents. These goals are added directly under the care plan in the template . This object determines the position of goals in the hierarchy of care plan templates. The specific details of goals are referenced from GoalDefinitions records in the PGI library. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CarePlanTemplateId | TypeMaster-detailPropertiesCreate, Filter, Group, SortDescriptionReferences the parent care plan template that the goal is a part of.Relationship NameCarePlanTemplateRefers ToCarePlanTemplate |
| GoalDefinitionId | TypeLookupPropertiesCreate, Filter, Group, Sort, UpdateDescriptionReferences a goal definition in the PGI library that specifies the details of the templatized goal.This field is a relationship field.Relationship NameGoalDefinitionRefers ToGoalDefinition |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the templatized care plan goal. |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe priority of the templatized goal.Possible values are:HighLowMedium |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CarePlanTemplateGoalHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CarePlanTemplateGoalHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
