---
title: "ProblemDefRelationship"
domain: health-cloud-object-reference
topic: problemdefrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.750Z
estimatedTokens: 696
keywords: [ProblemDefRelationship, junction, problem, definition, API, version, 64.0, later, Calls, Associated, Objects]
---

# ProblemDefRelationship

> Represents a junction between a problem definition and a related problem
         definition. This object is available in API version 64.0 and later.

# ProblemDefRelationship

Represents a junction between a problem definition and a related problem definition. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| ProblemDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent problem definition record associated with the problem definition relationship.This field is a relationship field.Relationship NameProblemDefinitionRelationship TypeMaster-detailRefers ToProblemDefinition (the master object) |
| RelatedProblemDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe related problem definition record associated with the problem definition relationship.This field is a relationship field.Relationship NameRelatedProblemDefinitionRefers ToProblemDefinition |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProblemDefRelationshipChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ProblemDefRelationshipHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProblemDefRelationshipChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ProblemDefRelationshipHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
