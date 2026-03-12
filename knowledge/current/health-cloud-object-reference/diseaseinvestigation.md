---
title: "DiseaseInvestigation"
domain: health-cloud-object-reference
topic: diseaseinvestigation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.908Z
estimatedTokens: 1302
keywords: [DiseaseInvestigation, investigation, disease, API, version, 64.0, later, Calls, Associated, Objects]
---

# DiseaseInvestigation

> Represents an investigation of a disease. This object is available in
      API version 64.0 and later.

# DiseaseInvestigation

Represents an investigation of a disease. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe user responsible for conducting the disease investigation.This field is a polymorphic relationship field.Relationship NameAssigneeRefers ToUser |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionComments or notes related to the disease investigation. |
| DiseaseDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe disease definition associated with the disease investigation.This field is a relationship field.Relationship NameDiseaseDefinitionRefers ToDiseaseDefinition |
| DiseaseOutbreakId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe disease outbreak associated with the disease investigation.This field is a relationship field.Relationship NameDiseaseOutbreakRefers ToDiseaseOutbreak |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the disease investigation. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the disease investigation. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RelatedDiseaseInvestigationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA related disease investigation associated with the disease investigation.This field is a relationship field.Relationship NameRelatedDiseaseInvestigationRefers ToDiseaseInvestigation |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe start date and time of the disease investigation. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the disease investigation.Possible values are:CompletedInProgressNotStartedThe default value is InProgress. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of disease investigation.Possible values are:ClinicalEnvironmentalEpidemiologicLaboratorySource InvestigationVector Surveillance |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DiseaseInvestigationChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[DiseaseInvestigationHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DiseaseInvestigationOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DiseaseInvestigationShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DiseaseInvestigationChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- DiseaseInvestigationHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- DiseaseInvestigationOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- DiseaseInvestigationShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
