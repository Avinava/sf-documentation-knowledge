---
title: "DocumentExtractionRequest"
domain: health-cloud-object-reference
topic: documentextractionrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:34.935Z
estimatedTokens: 948
keywords: [DocumentExtractionRequest, extract, documents, API, version, 63.0, later, Calls, Associated, Objects]
---

# DocumentExtractionRequest

> Represents a request to extract documents. This object is available in
      API version 63.0 and later.

# DocumentExtractionRequest

Represents a request to extract documents. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the document.This field is a relationship field.Relationship NameContentDocumentRefers ToContentDocument |
| DocumentUploadMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the document was added manually by a user or automatically by the system.Possible values are:AutomaticManual |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this document. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the document. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this document.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ServiceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the category for the type of service being provided.Possible values are:OpenAIComplianceClauseExtractionIntelligentDocumentProcessingEinsteinGPTService |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the document clause extraction review status.Possible values are:ExtractionFailedExtractionInProgressReviewCompletedReviewExpiredReviewInProgressReviewNotStartedSaveCompletedSaveFailedSaveInProgress |
| StatusReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the record's current status. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type of the document extraction request.Possible values are:CaseIntakeFormCompliancePolicyClauseExtractionDiseaseDefinitionRegulationClauseExtraction |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DocumentExtractionRequestOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DocumentExtractionRequestShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

-   **[DocumentExtractionRqstStep](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_documentextractionrqststep.htm)**
    Represents each step involved in the document extraction request process. This object is available in API version 64.0 and later.

## Related Topics

- DocumentExtractionRequestOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- DocumentExtractionRequestShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
- DocumentExtractionRqstStep (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_documentextractionrqststep.htm)
