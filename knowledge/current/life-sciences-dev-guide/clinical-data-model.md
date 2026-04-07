---
title: "Clinical Data Model"
domain: life-sciences-dev-guide
topic: clinical-data-model
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:37:56.259Z
estimatedTokens: 937
keywords: [Clinical, Model, Patient, healthcare, records, industry, accurate, performing, managing, care, becomes, difficult, readily, seeks, provider, every, time, However, reality, patient’s, journey, multiple, providers, hospitals, different, times, Because, health, hinges, accuracy, their, medical, it’s, crucial, systems, interoperable, interoperability, possible, vital, industry-recognized, standards, how, structured, stored, transferred, That’s, defined, Level, HL7, come]
---

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

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

Some of these objects are available in your org even before enabling this org pref because they’re part of other data models in Health Cloud and Life Sciences Cloud.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

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

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

-   Starting with the Spring ’23 release, new customers won’t be able to create records in the packaged EHR objects that have counterpart standard objects in the FHIR R4-aligned data model.
-   All future development will be built on the FHIR R4-aligned data model. The packaged objects in the EHR data model won’t be used for future development.
