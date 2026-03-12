---
title: "CareRequestItem"
domain: health-cloud-object-reference
topic: carerequestitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.681Z
estimatedTokens: 4434
keywords: [CareRequestItem, care, service, including, modifiers, effective, date, requests, associated, Calls, Objects]
---

# CareRequestItem

> Represents the details of a care service request, including name,
         modifiers, and the effective date. One or more care service requests can be associated with
         a care request.

# CareRequestItem

Represents the details of a care service request, including name, modifiers, and the effective date. One or more care service requests can be associated with a care request.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AmbulanceTransportDistance | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDistance traveled during ambulance transport. |
| AmbulanceTransportReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReason for ambulance transport. |
| AmbulanceTransportType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of ambulance transport. |
| ApprovedLengthOfStay | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days requested for the admission. |
| ApprovedLevelOfCare | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the approved level of care for the patient.Possible values are:Hospital - InpatientHospital - Intensive CareHospital - RehabilitationPsychiatric Intensive CarePsychiatric Room - Semi-privatePsychiatric Room and Board - PrivatePsychiatric WardSNF - InpatientSNF - RehabilitationSNF - Specialized Care |
| ApprovedQuantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe approved quantity of the care item. |
| ApprovedServiceEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the approved service that the patient received. |
| ApprovedServiceStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the approved service that the patient received. |
| AssertionIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the requested item in the coverage information. |
| AuthApprovalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier assigned to the item on approval of the authorization request.This field is available in API version 57.0 and later. |
| AuthorizationRefIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the authorization request associated with the requested item.This field is available in API version 57.0 and later. |
| CareRequestCaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionCase related to the care request.This is a relationship field.Relationship NameCareRequestCaseRelationship TypeLookupRefers ToCase |
| CareRequestId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionCare request for the care request item.This is a relationship field.Relationship NameCareRequestRelationship TypeLookupRefers ToCareRequest |
| ClinicalDetermination | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe clinical determination of the care request.Possible values are:ApprovedDeniedMedical Director Review PendingPartially ApprovedReducedStoppedSuspended |
| ClinicalDeterminationNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe notes related to the clinical determination. |
| ClinicalDeterminationReasonId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the clinical determination.This field is a relationship field.Relationship NameClinicalDeterminationReasonRelationship TypeLookupRefers ToCodeSet |
| ClinicalServiceRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe clinical service request associated with the care request item.This field is a relationship field.Relationship NameClinicalServiceRequestRelationship TypeLookupRefers ToClinicalServiceRequestThis field is available in API version 57.0 and later. |
| CodeDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the denied service code. |
| CodeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCode type for the service. |
| CodeTypeIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the code type for the service. |
| CumulativeLengthOfStay | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days a patient is admitted. |
| CurrentLevelOfCare | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the level of care the patient is receiving.Possible values are:Hospital - InpatientHospital - Intensive CareHospital - RehabilitationPsychiatric Intensive CarePsychiatric Room - Semi-privatePsychiatric Room and Board - PrivatePsychiatric WardSNF - InpatientSNF - RehabilitationSNF - Specialized Care |
| DecisionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the last decision was made for this care request item. |
| DeniedLevelOfCare | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of care denied for the patient.Possible values are:Hospital - InpatientHospital - Intensive CareHospital - RehabilitationPsychiatric Intensive CarePsychiatric Room - Semi-privatePsychiatric Room and Board - PrivatePsychiatric WardSNF - InpatientSNF - RehabilitationSNF - Specialized Care |
| DeniedQuantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quantity of the denied service. |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEffective date for the diagnosis. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTermination date for the service. |
| FreeFormProcedureDescription | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFree-form description of the procedure. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| ModifiedCodeDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the modified service code. |
| ModifiedCodeIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the code for the modified service. |
| ModifiedCodeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCode type for the modified service. |
| ModifiedCodeTypeIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the code type for the modified service. |
| ModifiedEffectiveDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEffective date for the modified service. |
| ModifiedEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTermination date for the modified service. |
| ModifiedLevelOfCare | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the modified level of care for the patient.Possible values are:Hospital - InpatientHospital - Intensive CareHospital - RehabilitationPsychiatric Intensive CarePsychiatric Room - Semi-privatePsychiatric Room and Board - PrivatePsychiatric WardSNF - InpatientSNF - RehabilitationSNF - Specialized Care |
| ModifiedModifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionModifier for modified service code. |
| ModifiedModifierDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionModifier description for modified service code. |
| ModifiedProcedureCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCode for the modified service, drug, or equipment. ModifiedProcedureCodeId will be deprecated in a future release, so use ModifiedProcedureCodeSetId instead.This is a relationship field.Relationship NameModifiedProcedureCodeRelationship TypeLookupRefers ToHealthCareProcedure |
| ModifiedProcedureCodeSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code set for the modified service, drug, or device associated with the care request item.This is a polymorphic relationship field.Relationship NameModifiedProcedureCodeSetRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| ModifiedQuantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe modified quantity of requested care. |
| Modifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionModifier for the service code. |
| Modifier2 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSecond modifier for service code. |
| Modifier2Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the second modifier for the service code. |
| Modifier3 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThird modifier for service code. |
| Modifier3Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the third modifier for the service code. |
| Modifier4 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFourth modifier for service code. |
| Modifier4Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the fourth modifier for the service code. |
| ModifierCodeSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe modifier code set for the service code associated with the care request item.This is a polymorphic relationship field.Relationship NameModifierCodeSetRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| ModifierDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the modifier for the service code |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionID of the service code. |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the authorization for the requested item.Possible values are:RoutineStatUrgentThis field is available in API version 57.0 and later. |
| ProcedureCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCode for the service, drug, or equipment. ProcedureCodeId will be deprecated in a future release, so use ProcedureCodeSetId instead.This is a relationship field.Relationship NameProcedureCodeRelationship TypeLookupRefers ToHealthCareProcedure |
| ProcedureCodeSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code set for the service, drug, or device associated with the care request item.This is a polymorphic relationship field.Relationship NameProcedureCodeSetRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| Quantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quantity of the item that is requested. |
| QuantityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionQuantity type for the request such as days, units, or visits. |
| ReasonCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for requesting the item.This field is a polymorphic relationship field.Relationship NameReasonCodeRelationship TypeLookupRefers ToCareDiagnosis, CodeSet, CodeSetBundleThis field is available in API version 57.0 and later. |
| RequestType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of item request.Possible values are:Filler OrderInstance OrderOptionOrderOriginal OrderPlanProposalReflex OrderThis field is available in API version 57.0 and later. |
| RequestedLengthOfStay | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days requested for the admission. |
| RequestedLevelOfCare | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the requested level of care for the patient.Possible values are:Hospital - InpatientHospital - Intensive CareHospital - RehabilitationPsychiatric Intensive CarePsychiatric Room - Semi-privatePsychiatric Room and Board - PrivatePsychiatric WardSNF - InpatientSNF - RehabilitationSNF - Specialized Care |
| RequestedServiceEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the requested service. |
| RequestedServiceStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the requested service. |
| RequiredResponseCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of responses required for the requested item. |
| ResponseDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the response was sent for the requested item. |
| ServiceCategory | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the service type such as medical care, diagnostic radiology, pharmacy, or diagnostic laboratory. |
| ServiceCategoryCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAlphanumeric code that uniquely identifies a service type |
| ServiceInformationResponseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service information response associated with the requested item.This field is a relationship field.Relationship NameServiceInformationResponseRefers ToServiceInformationResponse |
| ServicingFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe facility where a patient receives service of the requested item.This field is a polymorphic relationship field.Relationship NameServicingFacilityRelationship TypeLookupRefers ToHealthcareFacility, HealthcarePractitionerFacilityThis field is available in API version 57.0 and later. |
| ServicingProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe healthcare provider who provides the service of the requested item.This field is a relationship field.Relationship NameServicingProviderRelationship TypeLookupRefers ToHealthcareProviderThis field is available in API version 57.0 and later. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which the request was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID of the system from which the request was sourced. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the most recent update from the source system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe authorization status of this service. |
| StatusCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code of the action taken by the reviewer for the requested item.This field is a relationship field.Relationship NameStatusCodeRefers ToCodeSetBundle |
| StatusReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReason for the authorization status of this service. |
| SubmittedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the item request was submitted. |
| TransactionNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transaction number assigned to the request. |
| TransportLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDestination location for ambulance transport.This is a relationship field.Relationship NameTransportLocationRelationship TypeLookupRefers ToAccount |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareRequestItemChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm) (API version 59.0)

Change events are available for the object.

[CareRequestItemFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[CareRequestItemHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

#### See Also

-   [Care Request Item Input](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_care_request_item_input.htm "The details of a care service request, including name, modifiers, and the effective date. One or more care service requests can be associated with a care request.")

## Related Topics

- Care Request Item Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_care_request_item_input.htm)
