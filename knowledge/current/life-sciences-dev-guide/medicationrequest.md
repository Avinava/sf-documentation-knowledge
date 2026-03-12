---
title: "MedicationRequest"
domain: life-sciences-dev-guide
topic: medicationrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.330Z
estimatedTokens: 3230
keywords: [MedicationRequest, order, supply, medication, along, how, administered, API, version, 51.0, later, Calls, Additional, Objects, Associated, ​Medication​​Request, ​The, FH​I​R, resource, maps]
---

# MedicationRequest

> Represents a request or order for the supply of medication, along with
      information about how it should be administered. This object is available in API version
    51.0 and later.

# MedicationRequest

Represents a request or order for the supply of medication, along with information about how it should be administered. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AllowedSubstitutionTypeCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the type of substitution that's allowed. This field can’t be used if the CanSubstitute field is set to true.Referenced ObjectsCodeSetBundle |
| CanSubstitute | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether substitution is acceptable. If the value for this field is set to true, then the AllowedSubstitutionTypeCodeId field can’t be selected. |
| CarePlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care plan related to this medication request.This field is a relationship field.Relationship NameCarePlanRelationship TypeLookupReferenced ObjectsCarePlan |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the medication request.This field is a relationship field.Relationship NameCaseRefers ToCase |
| ClinicalEncounterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe clinical encounter related to the medication request.Referenced ObjectsClinicalEncounter |
| ClinicalServiceRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the service request related to the medication request.Referenced ObjectsClinicalServiceRequest |
| DispenseInterval | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum interval required between refills. |
| DispenseIntervalUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit for that interval.Referenced ObjectsUnitOfMeasure |
| DispenserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person who provides the medication.Referenced ObjectsAccount |
| FillDurationUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit for the fill duration.Referenced ObjectsUnitOfMeasure |
| FillQuantityUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of the fill quantity.Referenced ObjectsUnitOfMeasure |
| InitialFillDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe length of time the first fill is expected to last. |
| InitialFillQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity to be filled in the first dispense. |
| IsIgnored | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the request should be ignored. |
| IsSecondaryInformation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the request is based on information from a secondary source instead of a primary one. If this field is set to true, then the SecondarySourceId field can’t be selected. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| MedicationAdministrationContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the setting in which the medication is administered.Referenced ObjectsCodeSetBundle |
| MedicationCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that specifies the medication requested. A record can select either a MedicationId or a MedicationCodeId, but not both.Referenced ObjectsCodeSetBundle |
| MedicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the medication record for the medicine requested. A record can select either a MedicationId or a MedicationCodeId, but not both.Referenced ObjectsMedication |
| MedicationRequestGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA shared identifier common to all medication requests that were authorized more or less simultaneously by a single author.Referenced ObjectsIdentifier |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the medication request record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the medication request record. Available in API version 56.0 and later.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupReferenced ObjectsGroupUser |
| PatientId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe person who needs the medicine.Referenced ObjectsAccount |
| PerformerId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person who administers the medicine.Referenced ObjectsAccountHealthcareProviderCareRegisteredDevice |
| PerformerTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the performer's role. For instance, the cardiologist, neurosurgeon, and so on.Referenced ObjectsCodeSetBundle |
| PrescribedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and optionally the time when the prescription was initially written or authored on. |
| PrescriptionPeriodEnd | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date for the prescription's validity. |
| PrescriptionPeriodStart | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date for the prescription's validity. |
| PreviousPrescriptionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to previous prescriptions.Referenced ObjectsMedicationRequest |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the priority of the request.Possible values are:ASAPRoutineStatUrgent |
| ReasonCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code for why the medicine was requested.Referenced ObjectsCodeSetBundle |
| ReasonReferenceId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the condition or observation that warranted this medicine.Referenced ObjectsHealthConditionCareObservation |
| RefillDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionHow long the refill is expected to last. |
| RefillQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity in each refill. |
| RefillsAllowed | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of refills that are allowed. |
| RelatedRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA plan or request that is fulfilled in whole or in part by this medication request.Referenced ObjectsMedicationRequest |
| RequesterId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person who raised the request.Referenced ObjectsAccountHealthcareProviderCareRegisteredDevice |
| SecondarySourceId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the person who gave the information for the request. This field can’t be selected if the IsSecondarySource field is set to true.Referenced ObjectsAccountHealthcareProvider |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system this record came from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which this item was last changed in the source system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status of the medication request.Possible values are:ActiveCancelledCompletedDraftEntered-in-ErrorOn-HoldStoppedUnknown |
| StatusReasonCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that specifies the reason for the status.Referenced ObjectsCodeSetBundle |
| SubstitutionReasonCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies why a substitution is required.Referenced ObjectsCodeSetBundle |
| TherapyDuration | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the overall pattern of the administration of the medication to the patient. For instance, Continuous, Acute, Seasonal.Possible values are:ContinuousSeasonalShort Term |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of the request.Possible values are:Filler OrderInstance OrderOptionOrderOriginal OrderPlanProposalReflex Order |

## Additional Information for MedicationRequest in Other Objects

In addition to creating a record using these fields, you can add more details to your MedicationRequest record by creating records in certain other objects, and referencing your MedicationRequest record as the parent record. Here’s the list of objects you can associate to MedicationRequest in this way, the type of information they add, and the field they use to reference MedicationRequest.

| Object | Type of Information | Reference Field |
| --- | --- | --- |
| Identifier | Associates an identifier value to the medication request. | ParentRecordId |
| PatientMedicationDosage | Associates dosage-related information for the medication in the medication request record. | ParentRecordId |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MedicationRequestChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

[MedicationRequestFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MedicationRequestHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[MedicationRequestOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 56.0)

Sharing rules are available for the object.

[MedicationRequestShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 56.0)

Sharing is available for the object.

## Related Topics

- MedicationRequestChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- MedicationRequestFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- MedicationRequestHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- MedicationRequestOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- MedicationRequestShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
- MedicationRequest (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_MedicationRequest.htm)
