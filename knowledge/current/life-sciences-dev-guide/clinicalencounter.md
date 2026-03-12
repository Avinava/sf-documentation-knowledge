---
title: "ClinicalEncounter"
domain: life-sciences-dev-guide
topic: clinicalencounter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.116Z
estimatedTokens: 2798
keywords: [ClinicalEncounter, healthcare, encounter, patient, care, provider, broad, covers, multiple, phases, patient’s, service, experience, way, pre-admission]
---

# ClinicalEncounter

> Represents a healthcare related encounter of a patient with a care provider. This is a broad object that covers multiple phases of a patient’s healthcare service experience,
			all the way from pre-admission to stay to discharge, and everything in between. This object is available in API version 51.0 and later.

# ClinicalEncounter

Represents a healthcare related encounter of a patient with a care provider. This is a broad object that covers multiple phases of a patient’s healthcare service experience, all the way from pre-admission to stay to discharge, and everything in between. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdmissionSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the source of the admission.Possible values are:Another HospitalEmergency DepartmentGeneral Practitioner ReferralIn-Hospital BirthNursing HomeOtherOther Medical Practitioner ReferralOutpatient DepartmentPsychiatric HospitalRehabilitation Facility |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the clinical encounter of a patient with a care provider.This field is a relationship field.Relationship NameCaseRefers ToCase |
| Category | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the classification of the encounter.Possible values are:AmbulatoryEmergencyHome HealthInpatient Encounter |
| DestinationFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe facility to which the patient is transferred.Referenced ObjectsHealthcareFacility |
| DestinationOrganizationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe organization to which the patient is transferred.Referenced ObjectsAccount |
| DietPreference | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe diet preferences of the patient.Possible values are:Dairy-FreeGluten-FreeHalalKosherNut-FreeVeganVegetarian |
| DischargeDispositionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the patient at discharge.Referenced ObjectsCodeSetBundle |
| Duration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe duration of the patient encounter, in the given unit of measure. |
| DurationUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measurement for the encounter duration.Referenced ObjectsUnitOfMeasure |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the encounter ended. |
| FacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe facility where the encounter took place.Referenced ObjectsHealthcareFacility |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the clinical encouter record. |
| PatientId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe patient receiving the treatment.Referenced ObjectsAccount |
| PreAdmissionIdentifierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier for the encounter pre-admission.Referenced ObjectsClinicalEncounterIdentified |
| PreviousFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe patient's location before the admission.Referenced ObjectsHealthcareFacility |
| PreviousOrganizationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the organization where the patient was previously located.Referenced ObjectsAccount |
| PriorityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the priority associated with the urgency of the encounter.Referenced ObjectsCodeSetBundle |
| ReadmissionCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code for the readmission.Referenced ObjectsCodeSetBundle |
| RelatedClinicalEncounterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies an encounter that is related to this encounter.Referenced ObjectsClinicalEncounter |
| ServiceAppointment | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe appointment associated with this clinical encounter.Referenced ObjectsServiceAppointment |
| ServiceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the classification of the type of service.Possible values are:HomoeopathyMeditationNaturopathyReflexology |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system this record came from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of this record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which this item was last changed in the source system. |
| SpecialCourtesy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies a class of courtesy extended to the patient.Possible values are:ExtendedNormalProfessionalStaffUnknownVIP |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date on which the encounter began. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the patient encounter.Possible values are:ArrivedCancelledFinishedIn ProgressPlannedTriaged |
| TypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the type of the encounter.Referenced ObjectsCodeSetBundle |

## Additional Information for ClinicalEncounter in Other Objects

In addition to creating a record using these fields, you can add more details to your ClinicalEncounter record by creating records in certain other objects, and referencing your ClinicalEncounter record as the parent record. Here’s the list of objects you can associate to ClinicalEncounter in this way, the type of information they add, and the field they use to reference ClinicalEncounter.

| Object | Type of Information | Reference Field |
| --- | --- | --- |
| ClinicalEncounterDiagnosis | Specifies the different diagnoses from an encounter, and other diagnosis-related information. | ClinicalEncounterId |
| ClinicalEncounterFacility | Specifies the different healthcare facilities involved in an encounter, and other details relevant to the facility and the encounter. | ClinicalEncounterId |
| ClinicalEncounterIdentifier | Specifies identifiers for the encounter. The object is very similar to the standard Identifier object, but is exclusive to ClinicalEncounter. | ClinicalEncounterId |
| ClinicalEncounterProvider | Specifies the different providers involved in an encounter and the details of their involvement. | ClinicalEncounterId |
| ClinicalEncounterReason | Specifies the reasons for why the encounter happened or was required. | ClinicalEncounterId |
| ClinicalEncounterSvcRequest | Specifies service requests that the encounter was based on. | ClinicalEncounterId |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ClinicalEncounterChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 58.0)

Change events are available for the object.

[ClinicalEncounterFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClinicalEncounterHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

-   **[ClinicalEncounterDiagnosis](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterDiagnosis.htm)**
    Represents a diagnosis related to a clinical encounter. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.
-   **[ClinicalEncounterFacility](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterFacility.htm)**
    Represents information about the different facilities involved in an encounter, the time spent at those facilies, and other relevant details. This is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.
-   **[ClinicalEncounterIdentifier](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterIdentifier.htm)**
    Represents the identifier information for a clinical encounter. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.
-   **[ClinicalEncounterProvider](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterProvider.htm)**
    Represents the providers involved in an encounter. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.
-   **[ClinicalEncounterReason](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterReason.htm)**
    Represents the reasons for why the encounter was required. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.
-   **[ClinicalEncounterSvcRequest](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterSvcRequest.htm)**
    Represents the service requests related to a clinical encounter. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.

## Related Topics

- ClinicalEncounterChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- ClinicalEncounterFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ClinicalEncounterHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ClinicalEncounterDiagnosis (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterDiagnosis.htm)
- ClinicalEncounterFacility (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterFacility.htm)
- ClinicalEncounterIdentifier (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterIdentifier.htm)
- ClinicalEncounterProvider (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterProvider.htm)
- ClinicalEncounterReason (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterReason.htm)
- ClinicalEncounterSvcRequest (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalEncounterSvcRequest.htm)
