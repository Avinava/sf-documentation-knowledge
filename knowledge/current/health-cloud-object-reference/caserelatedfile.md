---
title: "CaseRelatedFile"
domain: health-cloud-object-reference
topic: caserelatedfile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.786Z
estimatedTokens: 941
keywords: [CaseRelatedFile, file, attached, case, processing, additional, relevant, API, version, 62.0, later, Calls, Associated, Objects]
---

# CaseRelatedFile

> Represents the details of a file attached to a case, such as file
         properties, file processing details, and other additional relevant information. This
      object is available in API version 62.0 and later.

# CaseRelatedFile

Represents the details of a file attached to a case, such as file properties, file processing details, and other additional relevant information. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe case associated with the case related file.This field is a relationship field.Relationship NameCaseRelationship TypeMaster-detailRefers ToCase (the master object) |
| ContentDocumentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe content document associated with the case related file.This field is a relationship field.Relationship NameContentDocumentRefers ToContentDocument |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the case related file. |
| ProcessDefinitionReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe batch calc job definition associated with the case related file.This field is a relationship field.Relationship NameProcessDefinitionReferenceRefers ToBatchCalcJobDefinition |
| ProcessStage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the stages during processing.Possible values are:MappingProcessingStaging |
| ProcessStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the current status of the case related file during processing.Possible values are:CompleteFailedInProgressInReview |
| SourceDatasetName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source dataset for processing. |
| TargetDatasetName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the target data created through the transformation of the source dataset. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CaseRelatedFileChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CaseRelatedFileHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CaseRelatedFileChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CaseRelatedFileHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
