---
title: "ClinicalServiceRequest"
domain: life-sciences-dev-guide
topic: clinicalservicerequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.190Z
estimatedTokens: 2980
keywords: [ClinicalServiceRequest, requests, procedure, diagnostic, service, needs, planned, proposed, performed, part, patient’s, healthcare, API, version, 51.0]
---

# ClinicalServiceRequest

> Represents requests for a procedure or diagnostic service that needs
      to be planned, proposed, or performed as part of the patient’s healthcare. This object is
    available in API version 51.0 and later.

# ClinicalServiceRequest

Represents requests for a procedure or diagnostic service that needs to be planned, proposed, or performed as part of the patient’s healthcare. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BodySiteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents site of the body associated with the service request.Referenced ObjectsCodeSetBundle |
| CategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the category of the service request.Referenced ObjectsCodeSetBundle |
| ConditionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe condition that justifies the service request.Referenced ObjectsHealthCondition |
| DateSigned | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the service request was signed. |
| DiagnosticReportId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe diagnosis that justifies the service request.Referenced ObjectsClinicalEncounterDiagnosis |
| DiseaseInvestigationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe disease investigation related to the clinical service request.This field is a relationship field.Relationship NameDiseaseInvestigationRefers ToDiseaseInvestigation |
| EncounterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe encounter related to the service request.Referenced ObjectsClinicalEncounter |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time for the service request. |
| FacilityCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-generated code for the facility where the service request is to be performed.Referenced ObjectsCodeSetBundle |
| FacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe facility where the service request is to be performed.Referenced ObjectsHealthcareFacility |
| HasPrerequisites | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether there are any prerequisites for the service request. If the value of this field is true, then you can’t select a PrerequisiteCodeId. |
| IsAccepted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the clinical service request is accepted (true) or not (false). The default value is false. |
| IsIgnored | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the request should be ignored. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the clinical service request. |
| ObservationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe observation that justifies the service request.Referenced ObjectsClinicalObservation |
| OriginalRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the original service request the service request replaces.Referenced ObjectsClinicalServiceRequest |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the clinical service request record. Available in API version 56.0 and later.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroupUserNoteTo enable queues for the Clinical Service Request object, change the sharing settings for the object from Controlled By Parent to Private. |
| PatientId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe patient associated with the service request.Referenced ObjectsAccount |
| PatientInstruction | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionInstructions for the patient. |
| PerformerId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person or device that performs the service request.Referenced ObjectsAccountAssetHealthcareProviderCareRegisteredDevice |
| PerformerTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the type or role of the person performing the service request.Referenced ObjectsCodeSetBundle |
| PrerequisiteCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-generated code that represents the prerequisites for the service request. You can’t select a record for this field if the HasPrerequisites field is set to true.Referenced ObjectsCodeSetBundle |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the priority of the service request.Possible values are:ASAPRoutineStatUrgent |
| QuantityDenominator | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe denominator value of the quantity associated with the service request. |
| QuantityNumerator | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe numerator value of the quantity associated with the service request. |
| QuantityNumeratorUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of the numerator value of the quantity associated with the service request.Referenced ObjectsUnitOfMeasure |
| QuantityType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the type of quantity related to the service request.Possible values are:RangeRatio |
| ReasonCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the justification for the service request.Referenced ObjectsCodeSetBundle |
| RequestCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the service request.Referenced ObjectsCodeSetBundle |
| RequesterId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person or device raising a service request.Referenced ObjectsAccountAssetHealthcareProviderCareRegisteredDevice |
| ServiceRequestGroupIdentifierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifier that ties the service request to its batch of requests.Referenced ObjectsIdentifier |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system this record came from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which this item was last changed in the source system. |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time for the service request. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe status of the service request.Possible values are:ActiveCompletedDraftEntered-in-ErrorOn-HoldRevokedUnknown |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of the service request.Possible values are:DirectiveFiller-OrderInstance-OrderOptionOrderOriginal-OrderPlanProposalReflex-Order |

## Additional Information for ClinicalServiceRequest in Other Objects

In addition to creating a record using these fields, you can add more details to your ClinicalServiceRequest record by creating records in certain other objects, and referencing your ClinicalServiceRequest record as the parent record. Here’s the list of objects you can associate to ClinicalServiceRequest in this way, the type of information they add, and the field they use to reference ClinicalServiceRequest.

| Object | Type of Information | Reference Field |
| --- | --- | --- |
| Identifier | Associates an identifier value to the service request. | ParentRecordId |
| ClinicalServiceRequestDetail | Associates the service request with various other records and defines the nature of the association. For instance, if the service request is based on an associated record. | ClinicalServiceRequestId |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClinicalServiceRequestFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClinicalServiceRequestHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ClinicalServiceRequestOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 56.0)

Sharing rules are available for the object.

[ClinicalServiceRequestShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 56.0)

Sharing is available for the object.

[ClinicalServiceRequestChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

-   **[ClinicalServiceRequestDetail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalServiceRequestDetail.htm)**
    Associates records from different objects to a clinical service request record to add more information to it. This is a multi-object junction object. This object is available in API version 51.0 and later.

## Related Topics

- ClinicalServiceRequestFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ClinicalServiceRequestHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ClinicalServiceRequestOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- ClinicalServiceRequestShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
- ClinicalServiceRequestChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- ClinicalServiceRequestDetail (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalServiceRequestDetail.htm)
