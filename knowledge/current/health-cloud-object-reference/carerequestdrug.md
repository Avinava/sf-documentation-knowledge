---
title: "CareRequestDrug"
domain: health-cloud-object-reference
topic: carerequestdrug
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.607Z
estimatedTokens: 3427
keywords: [CareRequestDrug, requested, drug, including, strength, frequency, instructions, administration, requests, associated, care, Calls, Objects]
---

# CareRequestDrug

> Represents the details of a requested drug including name, strength,
         frequency, and instructions for administration. One or more drug requests can be associated
         with a care request.

# CareRequestDrug

Represents the details of a requested drug including name, strength, frequency, and instructions for administration. One or more drug requests can be associated with a care request.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ApprovedUnits | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionApproved quantity of the drug. |
| AssertionIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the coverage assertion. |
| AuthApprovalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier assigned to the drug on approval of the authorization request.This field is available in API version 57.0 and later. |
| AuthorizationRefIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the authorization request associated with the requested drug.This field is available in API version 57.0 and later. |
| CareRequestCaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionCase related to the care request.This is a relationship field.Relationship NameCareRequestCaseRelationship TypeLookupRefers ToCase |
| CareRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCare request for the care request drug.This is a relationship field.Relationship NameCareRequestRelationship TypeLookupRefers ToCareRequest |
| ClinicalDetermination | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe clinical determination of the drug request.Possible values are:ApprovedDeniedPartially ApprovedStoppedReducedSuspendedMedical Director Review Pending |
| ClinicalDeterminationNote | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe notes related to the clinical determination. |
| ClinicalDeterminationReasonId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the clinical determination.This is a relationship field.Relationship NameClinicalDeterminationReasonRelationship TypeLookupRefers ToCodeSet |
| Code | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCode for the drug. |
| CodeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID code type for the drug.Possible values are:NDCRxNorm |
| DaysSupply | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of days to supply the drug. |
| DecisionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the decision was made for this drug request. |
| DeniedUnits | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDenied quantity of the drug. |
| DispenserAddress | TypeaddressPropertiesFilter, NillableDescriptionPharmacy address. |
| DispenserFaxNumber | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPharmacy fax number. |
| DispenserIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID for the pharmacy. |
| DispenserName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID for the pharmacy. |
| DispenserPhoneNumber | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPharmacy phone number. |
| DispenserTaxIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPharmacy tax identification number. |
| DispenserVerbalNotificationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when the pharmacy or pharmacy benefit manager was contacted verbally. |
| DispenserWrittenNotificationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when the pharmacy or pharmacy benefit manager was notified in writing or electronically. |
| DispensingPharmacyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe pharmacy that dispenses the drug.This is a polymorphic relationship field.Relationship NameDispensingPharmacyRelationship TypeLookupRefers ToAccount, HealthcareProvider |
| Dose | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDose of the drug. |
| DrugAdministrationSetting | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe setting where the drug is administered to the patient.Possible values are:CommunityDischargeInpatientOutpatientThis field is available in API version 57.0 and later. |
| DrugCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code set that defines the requested drug.This field is a polymorphic relationship field.Relationship NameDrugCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundleThis field is available in API version 58.0 and later. |
| Frequency | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFrequency of the drug. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MedicationCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code of the care request drug.This is a relationship field.Relationship NameMedicationCodeRelationship TypeLookupRefers ToMedication |
| MedicationRefObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe medication request or statement associated with the requested drug.This field is a polymorphic relationship field.Relationship NameMedicationRefObjectRelationship TypeLookupRefers ToMedicationRequest, MedicationStatementThis field is available in API version 57.0 and later. |
| ModifiedCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCode for the modified drug. |
| ModifiedCodeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID code type for the modified drug.Possible values are:NDCRxNorm |
| ModifiedDaysSupply | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of days of supply for the modified drug. |
| ModifiedDose | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDose of the modified drug. |
| ModifiedFrequency | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFrequency of the modified drug. |
| ModifiedName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the modified drug. |
| ModifiedSig | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDirections for use of the modified drug. |
| ModifiedStrength | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStrength of the modified drug. |
| ModifiedTherapyDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDuration of therapy for the modified drug. |
| ModifiedUnits | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionModified quantity of the drug. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the drug. |
| PrescriptionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate for the prescription. |
| PrescriptionFillDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of fills for the prescription. |
| PrescriptionFills | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of fills for the prescription. |
| PrescriptionNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDrug prescription number. |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the authorization for the requested drug.Possible values are:RoutineStatUrgentThis field is available in API version 57.0 and later. |
| RequestType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of drug request.Possible values are:Filler OrderInstance OrderOptionOrderOriginal OrderPlanProposalReflex OrderThis field is available in API version 57.0 and later. |
| RequiredResponseCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of responses required for the requested drug. |
| ResponseDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the response was sent for the drug request. |
| ServiceCategory | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the service type such as medical care, diagnostic radiology, pharmacy, or diagnostic laboratory. |
| ServiceCategoryCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAlphanumeric code that uniquely identifies a service type. |
| ServiceInformationResponseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service information response associated with the drug request.This field is a relationship field.Relationship NameServiceInformationResponseRefers ToServiceInformationResponse |
| ServicingFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe facility where a patient receives service of the requested drug.This field is a polymorphic relationship field.Relationship NameServicingFacilityRelationship TypeLookupRefers ToHealthcareFacility, HealthcarePractitionerFacilityThis field is available in API version 57.0 and later. |
| ServicingProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe healthcare provider who provides the service of the requested drug.This field is a relationship field.Relationship NameServicingProviderRelationship TypeLookupRefers ToHealthcareProviderThis field is available in API version 57.0 and later. |
| Sig | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDirections for use of the drug. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which this request was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID of the system from which the request was sourced. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the most recent update from the source system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe authorization status of the requested drug.Possible values are:ActiveCancelledCompletedDraftEntered-in-ErrorOn-HoldStoppedUnknownThis field is available in API version 57.0 and later. |
| StatusCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code of the action taken by the reviewer for the requested drug.This field is a relationship field.Relationship NameStatusCodeRefers ToCodeSetBundle |
| StatusReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe reason for assigning the authorization status to the requested drug.Possible values are:Insufficient InformationMedically Not RequiredOtherThis field is available in API version 57.0 and later. |
| Strength | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStrength of the drug. |
| SubmittedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the drug request was submitted. |
| TherapyDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDuration of therapy for the drug. |
| TransactionNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transaction number assigned to the drug request. |
| Units | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionQuantity of the drug. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareRequestDrugChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm) (API version 59.0)

Change events are available for the object.

[CareRequestDrugFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[CareRequestDrugHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

#### See Also

-   [Care Request Drug Input](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_care_request_drug_input.htm "Requested drug including name, strength, frequency, and instructions for administration. One or more drug requests can be associated with a care request.")

## Related Topics

- Care Request Drug Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_care_request_drug_input.htm)
