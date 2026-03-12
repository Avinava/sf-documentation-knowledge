---
title: "Clinical Data Model"
domain: health-cloud-object-reference
topic: clinical-data-model
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:33.973Z
estimatedTokens: 3827
keywords: [Clinical, Data, Model, Patient, healthcare, records, industry, accurate, performing, managing, care, becomes, difficult, readily, seeks]
---

# Clinical Data Model

> Patient data and healthcare records are important in the healthcare industry. Without
  accurate information, performing and managing care becomes difficult. These records are readily
  available if a patient seeks care from the same provider every time. However, in reality, a
  patient’s healthcare journey takes them to multiple providers and hospitals at different times.
  Because the patient’s health hinges on the accuracy of their medical records, it’s crucial for the
  systems used by different providers and hospitals to be interoperable. And to make this
  interoperability possible, it’s vital to have some industry-recognized standards for how these
  records are structured, stored, and transferred. That’s where the standards defined by Health
  Level 7 (HL7) come in.

# Clinical Data Model

Patient data and healthcare records are important in the healthcare industry. Without accurate information, performing and managing care becomes difficult. These records are readily available if a patient seeks care from the same provider every time. However, in reality, a patient’s healthcare journey takes them to multiple providers and hospitals at different times. Because the patient’s health hinges on the accuracy of their medical records, it’s crucial for the systems used by different providers and hospitals to be interoperable. And to make this interoperability possible, it’s vital to have some industry-recognized standards for how these records are structured, stored, and transferred. That’s where the standards defined by Health Level 7 (HL7) come in.

| Available in: Enterprise and Unlimited Editions |
| --- |


Two standards defined by HL7 for this purpose are the Fast Health Interoperability Resources (FHIR) v4.0 and HL7 (the standard) 2.3. The Clinical Data Model is built from the ground up to align with FHIR v4.0, and also supports many of the HL7 v2.3 message types.

To enable these objects in your org, go to **FHIR R4 Support Settings** in **Setup** and enable the **FHIR-Aligned Clinical Data Model** org pref.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

Some of these objects are available in your org even before enabling this org pref because they’re part of other data models in Health Cloud and Life Sciences Cloud.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

To use the Clinical Data Model objects on an Experience Cloud site, community users need the FHIR R4 for Experience Cloud Sites permission set.

Here’s the list of objects that need the org pref to be enabled versus a list of objects that don’t require the org pref.

| Org Pref Required | Org Pref Not Required |
| --- | --- |
| AllergyIntoleranceCarePerformerClinicalAlertClinicalEncounterClinicalEncounterDiagnosisClinicalEncounterFacilityClinicalEncounterIdentifierClinicalEncounterProviderClinicalEncounterReasonClinicalEncounterSvcRequestClinicalServiceRequestClinicalServiceRequestDetailDiagnosticSummaryHealthConditionMedicationRequestMedicationStatementPatientHealthReactionPatientImmunizationPatientMedicalProcedurePatientMedicalProcedureDetailPatientMedicationDosage | CareObservationCareObservationComponentCareProviderFacilitySpecialtyCodeSetCodeSetBundleHealthcareFacilityHealthcarePractitionerFacilityHealthcareProviderIdentifierMedicationMedication AdministrationMedication Administration DetailPersonLanguagePersonNameProblem Definition RelationshipSpecimen |

And here’s the list of fields added to standard objects when you enable this org pref.

-   ContactPointPhone.PreferenceRank
-   ContactPointPhone.UsageType
-   ContactPointEmail.PreferenceRank
-   ContactPointEmail.UsageType
-   ContactPointAddress.PreferenceRank
-   ContactPointAddress.UsageType
-   Account.IsActive
-   Account.EffectiveDate
-   Account.SourceSystemIdentifier
-   Account.SourceSystemModifiedDate
-   Account.EndDate
-   Contact.MaritalStatus
-   Contact.Gender
-   Contact.DeceasedDate
-   Contact.SequenceInMultipleBirth

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

-   Starting with the Spring ’23 release, new customers won’t be able to create records in the packaged EHR objects that have counterpart standard objects in the FHIR R4-aligned data model.
-   All future development will be built on the FHIR R4-aligned data model. The packaged objects in the EHR data model won’t be used for future development.

-   **[ActivityTiming](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_activitytiming.htm)**
    Represents detailed information about an activity that’s repeated in regular intervals over a period of time. This object is available in API version 52.0 and later.
-   **[AllergyIntolerance](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_AllergyIntolerance.htm)**
    Represents a clinical assessment of a patient’s allergy or intolerance. This object is available in API version 51.0 and later.
-   **[AuthorNote](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_authornote.htm)**
    Stores notes associated with different types of records along with information about the author of the note and the time the note was authored. The author isn’t necessarily the person who created a record. The author is the person who provided the information in the note. This object is available in API version 52.0 and later.
-   **[CareObservation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_CareObservation.htm)**
    Represents the observed values for care metrics originating from external systems that contain biometric data. This object is available in API version 49.0 and later.
-   **[CarePerformer](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_CarePerformer.htm)**
    Represents the person performing care in observations, procedure, and immunizations. This person may be a physician, the patient’s contact, or anyone who administered any sort of care to the patient in the context of the concerned care event. This object is available in API version 51.0 and later.
-   **[CareRegisteredDevice](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_careregistereddevice.htm)**
    Represents a device or device registration information for a patient or a care program enrollee. This object is available in API version 49.0 and later.
-   **[DiagnosticSummary](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_DiagnosticSummary.htm)**
    Represents the findings, interpretations, and summaries of tests performed on patients. This object is available in API version 51.0 and later.
-   **[ClinicalAlert](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalAlert.htm)**
    Represents a warning or notification of significance related to different healthcare entities. The subject of the alert may be a patient, a location, a provider, a procedure, or even a medication. This object is available in API version 51.0 and later.
-   **[ClinicalDetectedIssue](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalDetectedIssue.htm)**
    Represents information about a detected issue resulting from a clinical activity. This object is available in API version 55.0 and later.
-   **[ClinicalDetectedIssueDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalDetectedIssueDetail.htm)**
    Represents additional information about a clinical detected issue. This object is available in API version 55.0 and later.
-   **[ClinicalEncounter](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalEncounter.htm)**
    Represents a healthcare related encounter of a patient with a care provider. This is a broad object that covers multiple phases of a patient’s healthcare service experience, all the way from pre-admission to stay to discharge, and everything in between. This object is available in API version 51.0 and later.
-   **[ClinicalServiceRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalServicerequest.htm)**
    Represents requests for a procedure or diagnostic service that needs to be planned, proposed, or performed as part of the patient’s healthcare. This object is available in API version 51.0 and later.
-   **[CodeSet](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_CodeSet.htm)**
    Represents various industry defined codes in the context of their systems and versions of those systems. These codes are used in all sorts of digital records. This object is available in API version 50.0 and later.
-   **[CodeSetBundle](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_CodeSetBundle.htm)**
    Represents a group of code sets across multiple systems and versions. All of these code sets refer to the same conceptual entity. This object is available in API version 50.0 and later.
-   **[ContactProfile](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_contactprofile.htm)**
    Represents information about an individual, such as their ethnicity, citizenship, birth place, race, and so on. This object is available in API version 57.0 and later.
-   **[HealthcareFacility](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_HealthCareFacility.htm)**
    Represents a healthcare facility and all its related details. These details may be physical, functional, geographic, or business details. This object is available in API version 51.0 and later.
-   **[HealthCondition](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_HealthCondition.htm)**
    Represents a clinical condition, problem, or any clinically relevant occurrence that is a matter of concern. This object is available in API version 51.0 and later.
-   **[HealthRiskEvaluation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_healthriskevaluation.htm)**
    Represents the evaluation of health risks. This object is available in API version 64.0 and later.
-   **[HealthRiskEvalDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_healthriskevaldetail.htm)**
    Represents additional details of a health risk evaluation, including the basis and reason for the evaluation. This object is available in API version 64.0 and later.
-   **[HealthRiskEvalOutcome](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_healthriskevaloutcome.htm)**
    Represents the outcome of a risk evaluation, such as the probability of disease occurrence. This object is available in API version 64.0 and later.
-   **[Identifier](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_Identifier.htm)**
    Represents identifier information for multiple objects. This object is available in API version 51.0 and later.
-   **[Medication](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_Medication.htm)**
    Represents detailed information about different medications. This object is available in API version 51.0 and later.
-   **[MedicationAdministration](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_objects_medicationadministration.htm)**
    Represents an instance of medication administered to a patient. This object is available in API version 64.0 and later.
-   **[MedicationDispense](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_medicationdispense.htm)**
    Represents the dispense of a medication to a patient in response to a medication request or order. This object also includes the instructions for how the medication is to be administered This object is available in API version 54.0 and later.
-   **[MedicationRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_MedicationRequest.htm)**
    Represents a request or order for the supply of medication, along with information about how it should be administered. This object is available in API version 51.0 and later.
-   **[MedicationStatement](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_MedicationStatement.htm)**
    Represents a record of medication that the patient is currently taking or has taken in the past. This object is available in API version 51.0 and later.
-   **[PatientHealthReaction](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_PatientHealthReaction.htm)**
    Represents a patient’s adverse reaction to an allergy, intolerance, or immunization. This object is available in API version 51.0 and later.
-   **[PatientImmunization](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_PatientImmunization.htm)**
    Represents information about a patient’s immunizations. This object is available in API version 51.0 and later.
-   **[PatientMedicalProcedure](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_patientmedicalprocedure.htm)**
    Represents detailed information about a healthcare procedure the patient has undergone, is undergoing or will undergo. This object is available in API version 51.0 and later.
-   **[PatientMedicationDosage](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_PatientMedicationDosage.htm)**
    Represents dosage information for medication. This object is primarily used to add dosage information in MedicationStatement, MedicationRequest, or MedicationDispense records. This object is available in API version 51.0 and later.
-   **[PersonLanguage](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_PersonLanguage.htm)**
    Represents the use and preference information about a person’s language. This object is available in API version 51.0 and later.
-   **[PersonName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_PersonName.htm)**
    Represents detailed information about a person’s name. This object is available in API version 51.0 and later.
-   **[ProblemDefRelationship](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_objects_problemdefrelationship.htm)**
    Represents a junction between a problem definition and a related problem definition. This object is available in API version 64.0 and later.
-   **[Specimen](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_objects_specimen.htm)**
    Represents a sample used for analysis. This object is available in API version 64.0 and later.

#### See Also

-   [Mapping FHIR v4.0 to Salesforce Standard Objects](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_overview.htm "The Fast Health Interoperability Resources (FHIR) standard defined by Health Level Seven (HL7) enables healthcare systems to work seamlessly together enhancing their interoperability. The Clinical Data Model is built to align with HL7’s FHIR R4. However, because of the way the Salesforce platform works, the Salesforce implementation of FHIR R4 isn’t identical to how it’s defined by HL7. Here’s how various FHIR resources map to fields in different standard objects in Salesforce.")

## Related Topics

- ActivityTiming (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_activitytiming.htm)
- AllergyIntolerance (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_AllergyIntolerance.htm)
- AuthorNote (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_authornote.htm)
- CareObservation (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_CareObservation.htm)
- CarePerformer (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_CarePerformer.htm)
- CareRegisteredDevice (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_careregistereddevice.htm)
- DiagnosticSummary (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_DiagnosticSummary.htm)
- ClinicalAlert (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalAlert.htm)
- ClinicalDetectedIssue (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalDetectedIssue.htm)
- ClinicalDetectedIssueDetail (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalDetectedIssueDetail.htm)
