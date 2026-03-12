---
title: "DiseaseDefinitionCondition"
domain: health-cloud-object-reference
topic: diseasedefinitioncondition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.891Z
estimatedTokens: 772
keywords: [DiseaseDefinitionCondition, condition, disease, definition, criteria, API, version, 64.0, later, Calls, Associated, Objects]
---

# DiseaseDefinitionCondition

> Represents a condition for disease definition criteria. This object is
      available in API version 64.0 and later.

# DiseaseDefinitionCondition

Represents a condition for disease definition criteria. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ConditionMatchRequirement | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the level of strictness required when matching the criteria condition.Possible values are:NecessarySufficientSupportiveThe default value is Sufficient. |
| Description | TypetextareaPropertiesCreate, UpdateDescriptionThe description of the disease definition criteria condition. |
| DiseaseDefinitionCriteriaId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe disease definition criteria associated with the disease definition criteria condition.This field is a relationship field.Relationship NameDiseaseDefinitionCriteriaRelationship TypeMaster-detailRefers ToDiseaseDefinitionCriteria (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the disease definition criteria condition. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DiseaseDefinitionConditionChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[DiseaseDefinitionConditionHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- DiseaseDefinitionConditionChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- DiseaseDefinitionConditionHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
