---
title: "DiseaseDefinition"
domain: health-cloud-object-reference
topic: diseasedefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.884Z
estimatedTokens: 1440
keywords: [DiseaseDefinition, disease, definition, health, organizations, regularly, monitor, identify, prevent, outbreaks, API, version, 64.0, later, Calls]
---

# DiseaseDefinition

> Represents a disease definition that public health organizations regularly
         monitor to identify and prevent outbreaks. This object is available in API version
      64.0 and later.

# DiseaseDefinition

Represents a disease definition that public health organizations regularly monitor to identify and prevent outbreaks. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivationDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date the disease definition becomes active. |
| AuthorityReportingLevel | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the scope for reporting the disease.Possible values are:GlobalLocalNationalState |
| ClinicalDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA clinical description of the disease definition that details the initial symptoms or physical and clinical findings. |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details related to the disease definition. |
| DocumentVersionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe document version used for data extraction.This field is a relationship field.Relationship NameDocumentVersionRefers ToContentVersion |
| ExpirationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expiration date of disease definition. |
| IcdCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe International Classification of Diseases (ICD) code set bundle associated with the disease definition.This field is a relationship field.Relationship NameIcdCodeRefers ToCodeSetBundle |
| IsHighRisk | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the disease is high risk (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the disease. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProblemDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent problem definition associated with the disease definiton.This field is a relationship field.Relationship NameProblemDefinitionRelationship TypeMaster-detailRefers ToProblemDefinition (the master object) |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the disease definition.Possible values are:ActiveDraftInactiveThe default value is Draft. |
| Summary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe summary of the disease definition. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of disease definition.Possible values are:Animal BorneBlood BorneFood or Water BorneNoneRespiratory DiseaseSexually_Transmitted_InfectionVaccine Preventable |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DiseaseDefinitionChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[DiseaseDefinitionHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DiseaseDefinitionOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DiseaseDefinitionShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DiseaseDefinitionChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- DiseaseDefinitionHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- DiseaseDefinitionOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- DiseaseDefinitionShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
