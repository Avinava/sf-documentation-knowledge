---
title: "ProblemGoalDefinition"
domain: health-cloud-object-reference
topic: problemgoaldefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.470Z
estimatedTokens: 795
keywords: [ProblemGoalDefinition, junction, associated, goal, definition, parent, problem, records, assist, establishing, problem-goal, hierarchy, care, plans, instantiated]
---

# ProblemGoalDefinition

> A junction object that associated a goal definition to its parent problem
         definition. These junction records assist in establishing the problem-goal hierarchy in
         care plans instantiated from the PGI library. A problem definition can have multiple
      goal definitions as its children, and a goal definition can have multiple problem definitions
      as its parents. This object is available in API version 57.0 and later.

# ProblemGoalDefinition

A junction object that associated a goal definition to its parent problem definition. These junction records assist in establishing the problem-goal hierarchy in care plans instantiated from the PGI library. A problem definition can have multiple goal definitions as its children, and a goal definition can have multiple problem definitions as its parents. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| GoalDefinitionId | TypeLookupPropertiesCreate, Filter, Group, Sort, UpdateDescriptionReferences the GoalDefinition record that’s associated to a parent ProblemDefinition record.This field is a relationship field.Relationship NameGoalDefinitionRelationship TypeLookupRefers ToGoalDefinition |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypePolymorphic lookupPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.Relationship NameOwnerRelationship TypeLookupRefers ToGroupUser |
| ProblemDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReferences the ProblemDefinition record that’s associated to a child GoalDefinition record.This field is a relationship field.Relationship NameProblemDefinitionRelationship TypeLookupRefers ToProblemDefinition |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProblemGoalDefinitionFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProblemGoalDefinitionHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProblemGoalDefinitionShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProblemGoalDefinitionFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ProblemGoalDefinitionHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ProblemGoalDefinitionShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
