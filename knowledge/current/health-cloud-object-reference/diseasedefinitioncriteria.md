---
title: "DiseaseDefinitionCriteria"
domain: health-cloud-object-reference
topic: diseasedefinitioncriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.897Z
estimatedTokens: 819
keywords: [DiseaseDefinitionCriteria, disease, definition, criteria, clinical, laboratory, epidemiologic, linkage, diagnose, diseases, API, version, 64.0, later, Calls]
---

# DiseaseDefinitionCriteria

> Represents disease definition criteria, such as clinical, laboratory, and
         epidemiologic linkage used to diagnose diseases. This object is available in API
      version 64.0 and later.

# DiseaseDefinitionCriteria

Represents disease definition criteria, such as clinical, laboratory, and epidemiologic linkage used to diagnose diseases. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the disease definition criteria. |
| DiseaseDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe disease definition associated with the disease definition criteria.This field is a relationship field.Relationship NameDiseaseDefinitionRelationship TypeMaster-detailRefers ToDiseaseDefinition (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the disease definition criteria. |
| ParentCriteriaId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent criteria associated with disease definition criteria.This field is a relationship field.Relationship NameParentCriteriaRefers ToDiseaseDefinitionCriteria |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the disease definition criteria.Possible values are:Case ClassificationClinicalLaboratory |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DiseaseDefinitionCriteriaChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[DiseaseDefinitionCriteriaHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- DiseaseDefinitionCriteriaChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- DiseaseDefinitionCriteriaHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
