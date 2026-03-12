---
title: "ProblemDefinition"
domain: health-cloud-object-reference
topic: problemdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.464Z
estimatedTokens: 1236
keywords: [ProblemDefinition, definition, care, plan, problem, reusable, PGI, library, that’s, part, Integrated, Management, instantiated, records, HealthCondition]
---

# ProblemDefinition

> The definition of a care plan problem in the reusable PGI library that’s a
         part of Integrated Care Management. When instantiated, ProblemDefinition records create
         HealthCondition records that serve as problems in care plans. This object is available
      in API version 57.0 and later.

# ProblemDefinition

The definition of a care plan problem in the reusable PGI library that’s a part of Integrated Care Management. When instantiated, ProblemDefinition records create HealthCondition records that serve as problems in care plans. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BarrierTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care barrier type associated with the problem.This field is a relationship field.Relationship NameBarrierTypeRelationship TypeLookupRefers toCareBarrierType |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category that the defined problem belongs to.Possible values are:Encounter DiagnosisProblem List Item |
| CodeId | TypePolymorphic lookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that defines the problem.This field is a polymorphic relationship field.Relationship NameCodeRelationship TypeLookupRefers ToCodeSetCodeSetBundle |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description for the problem definition. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the problem definition is active or not.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the defined problem.Possible values are:HighLowNormal |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the type of problem record instantiated from definition.Possible values are:barrier — BarriercareGap — Care GaphealthCondition — Health Condition |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of problem definition.Possible values are:infectiousDiseaseNoteThis field is only available if Disease Surveillance is enabled in your org. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProblemDefinitionFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProblemDefinitionHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProblemDefinitionShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

[ProblemDefinitionChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- ProblemDefinitionFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ProblemDefinitionHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ProblemDefinitionShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
- ProblemDefinitionChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
