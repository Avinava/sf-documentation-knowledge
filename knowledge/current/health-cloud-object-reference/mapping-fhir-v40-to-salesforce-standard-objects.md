---
title: "Mapping FHIR v4.0 to Salesforce Standard Objects"
domain: health-cloud-object-reference
topic: mapping-fhir-v40-to-salesforce-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:37:44.581Z
estimatedTokens: 3356
keywords: [Mapping, FHIR, v4.0, Salesforce, Standard, Fast, Health, Interoperability, Resources, defined, Level, Seven, HL7, healthcare, systems, work, seamlessly, together, enhancing, their, Clinical, Model, built, align, HL7’s, However, because, way, platform, works, implementation, isn’t, identical, how, it’s, Here’s, various, map, different]
---

> The Fast Health Interoperability Resources (FHIR) standard defined by Health Level Seven
  (HL7) enables healthcare systems to work seamlessly together enhancing their interoperability. The
  Clinical Data Model is built to align with HL7’s FHIR R4. However, because of the way the
  Salesforce platform works, the Salesforce implementation of FHIR R4 isn’t identical to how it’s
  defined by HL7. Here’s how various FHIR resources map to fields in different standard objects in
  Salesforce.

# Mapping FHIR v4.0 to Salesforce Standard Objects

The Fast Health Interoperability Resources (FHIR) standard defined by Health Level Seven (HL7) enables healthcare systems to work seamlessly together enhancing their interoperability. The Clinical Data Model is built to align with HL7’s FHIR R4. However, because of the way the Salesforce platform works, the Salesforce implementation of FHIR R4 isn’t identical to how it’s defined by HL7. Here’s how various FHIR resources map to fields in different standard objects in Salesforce.

-   **[Considerations for Integration](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_considerations.htm)**
    The Salesforce implementation of FHIR resources differs from the FHIR specification. Built on the core Salesforce platform, the FHIR-aligned clinical data model comes with field mappings that help you integrate with the FHIR R4 specification.
-   **[Address](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Address.htm)**
    The Address FHIR resource maps to the Contact​Point​Address​ object in Salesforce.
-   **[AdverseEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_adverseevents.htm)**
    The AdverseEvent FHIR resource maps to the AdverseEvent objects in Salesforce.
-   **[Allergy​Intolerance](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_AllergyIntolerance.htm)**
    The allergy​Intolerance FHIR resource maps to the Allergy​Intolerance and PatientHealthReaction objects in Salesforce.
-   **[Annotation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_annotation.htm)**
    The Annotation FHIR resource maps to the AuthorNote​ object in Salesforce.
-   **[Attachment](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Attachment.htm)**
    The Attachment FHIR resource maps to the Attachment object in Salesforce.
-   **[Care​Plan](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_careplan.htm)**
    The Care​Plan FHIR resource maps to the Care​Plan​, Care​PlanDetail​, Care​Plan​Activity, and Care​PlanActivityDetail​ objects in Salesforce.
-   **[Codeable​Concept](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_CodeableConcept.htm)**
    The Codeable​Concept FHIR resource maps to the CodeSet​BundleBundle object in Salesforce.
-   **[Coding](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Coding.htm)**
    The Coding FHIR resource maps to the CodeSet object in Salesforce.
-   **[CommunicationRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_communicationrequest.htm)**
    The CommunicationRequest FHIR resource maps to the TrackedCommunication and TrackedCommunicationDetail objects in Salesforce.
-   **[Condition](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Condition.htm)**
    The Condition FHIR resource maps to the Health​Condition object in Salesforce.
-   **[ContactPoint](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_ContactPoint.htm)**
    The ContactPoint FHIR resource maps to the Contact​Point​Phone​ object in Salesforce.
-   **[CRDMetricData](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_crdmetricdata.htm)**
    The CRDMetricData FHIR resource maps to the ServiceInformationRequest, ServiceInfoRequestDetail, ServiceInfoResponseCoverage, SvcInfoRespCoverageDetail,ServiceInfoResponseAction ServiceInfoRespSuggestion, ServiceInfoRespOvrideOptobjects.
-   **[Device](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_device.htm)**
    The Device F​HI​R resource maps to the Asset and ​​Care​Registered​Device​ objects in Salesforce​.
-   **[DiagnosticReport](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_diagnosticReport.htm)**
    The diagnostic​Report FHIR resource maps to the Diagnostic​Summary​ object in Salesforce.
-   **[Document​Reference](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_documentreference.htm)**
    The Document​Reference F​HI​R resource maps to the Diagnostic​Summary and Diagnostic​SummaryDetail objects in Salesforce​.
-   **[Dosage](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_dosage.htm)**
    The Dosage FHIR resource maps to the Patient​Medication​Dosage​ object in Salesforce.
-   **[DTRMetricData](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_dtrmetricdata.htm)**
    The DTRMetricData FHIR resource maps to the ServiceInformationRequest, ServiceInfoRequestDetail, ServiceInfoRequestOperation, andServiceInfoResponseCoverageobjects.
-   **[DTRQuestionnaireResponse](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_dtrquestionnaireresponse.htm)**
    The DTRQuestionnaireResponse FHIR resource maps to the Assessment and AssessmentReason object.
-   **[DTRStdQuestionnaire](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_dtrstdquestionnaire.htm)**
    The DTRStdQuestionnaire FHIR resource maps to the AssessmentDefinition, AssessmentQuestion, AssessmentQuestionResponse, and AssessmentQuestionVersion objects.
-   **[Encounter](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Encounter.htm)**
    The Encounter F​HI​R resource maps to the ​​Clinical​Encounter​, ​​Clinical​Encounter​​Diagnosis, ​​Clinical​Encounter​​Facility, ​​Clinical​Encounter​Identifier, ​​Clinical​Encounter​​Provider, ​​Clinical​Encounter​​Reason, and ​​Clinical​Encounter​Svc​Request objects in Salesforce​.
-   **[EpisodeOfCare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_episodeofcare.htm)**
    The episodeOfCare FHIR resource maps to the Care​Episode​ and Care​EpisodeDetail​ objects in Salesforce.
-   **[​Flag](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Flag.htm)**
    The ​Flag ​FHI​R resource maps to the Clinical​Alert object in Salesforce​.
-   **[Goal](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_goal.htm)**
    The Goal FHIR resource maps to the Goal​Assignment​ and Goal​AssignmentDetail​ objects in Salesforce.
-   **[Human​Name](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_HumanName.htm)**
    The Human​Name FHIR resource maps to the Person​Name object in Salesforce​.
-   **[Identifier](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Identifier.htm)**
    The Identifier FHIR resource maps to the Identifier object in Salesforce.
-   **[​Immunization](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Immunization.htm)**
    The ​Immunization FHIR resource maps to the Patient​Immunization and PatientHealthReaction objects in Salesforce​.
-   **[InformationOrigin](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_informationorigin.htm)**
    The CRDMetricData FHIR resource maps to the AssessmentQuestionResponse object.
-   **[Location](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Location.htm)**
    The Location FHIR resource maps to the Healthcare​Facility and Location objects in Salesforce​.
-   **[​Medication](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Medication.htm)**
    The medication FHIR resource maps to the ​Medication object in Salesforce​.
-   **[​Medication​​Request](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_MedicationRequest.htm)**
    ​The ​Medication​​Request FH​I​R resource maps to the ​Medication​​Request object in ​Salesforce​.
-   **[Medication​Statement](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_MedicationStatement.htm)**
    The medication​Statement FHIR resource maps to the Medication​Statement object in Salesforce​.
-   **[​Observation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_observation.htm)**
    The observation FHIR resource maps to the Care​Observation and Care​Observation​Component objects in Salesforce​.
-   **[Organization](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_organization.htm)**
    The Organization FHIR resource maps primarily to the Account object in Salesforce​.
-   **[PASClaim](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_pasclaim.htm)**
    The PASClaim FHIR resource maps to the CareDiagnosis, CareRequest, CareRequestDrug, CareRequestItem, CareRequestReviewer, and Identifier obejcts.
-   **[PASClaimResponse](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_pasclaimresponse.htm)**
    The PASClaimResponse FHIR resource maps to the CareProcessingError, AuthorNote, TrackedCommunication, andTrackedCommunicationDetailobjects.
-   **[PASMetricData](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_pasmetricdata.htm)**
    The PASMetricData FHIR resource maps to the CareRequestExchangeInfo object.
-   **[Patient](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Patient.htm)**
    The Patient FHIR resource maps to the Account and Contact objects in Salesforce​. Patients are modeled using Person Accounts.
-   **[Practitioner](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_practitioner.htm)**
    The Practitioner FHIR resource maps to the HealthcareProvider object and person accounts in Salesforce​.
-   **[PractitionerRole](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_practitionerrole.htm)**
    The practitionerRole FHIR resource maps to the HealthcarePractitionerFacility and CareProviderFacilitySpecialty objects in Salesforce​.
-   **[​Procedure](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Procedure.htm)**
    The procedure FHIR resource maps to the Patient​Medical​​Procedure and Patient​Medical​​Procedure​Detail objects in Salesforce​.
-   **[RelatedPerson](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_related_person.htm)**
    The relatedPerson FHIR resource maps to the Account and Contact objects in Salesforce, and is connected to the person that person’s related to using the ContactContactRelation\_\_c object​.
-   **[ResearchStudy](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_researchstudy.htm)**
    The ResearchStudy FHIR resource maps to the ResearchStudy objects in Salesforce.
-   **[Service​Request](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_ServiceRequest.htm)**
    The service​Request FH​IR resource maps to the Clinical​Service​Request and Clinical​Service​Request​Detail objects in Salesforce​.
-   **[Subscription](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_subscription.htm)**
    The Subscription FHIR resource maps to the InteropTopicSubscription, InteropTopicSubscriptionDtl, InteropTopicSubcrParameter, and InteropTopicSubcrFilterobjects in Salesforce.
-   **[SubscriptionTopic](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_subscriptiontopic.htm)**
    The SubscriptionTopic FHIR resource maps to the InteropTopic, InteropTopicDetail, InteropTopicTriggerCriteria, InteropTopicFilterand InteropTopicNtfcnResourceobjects in Salesforce.
-   **[Timing](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_timing.htm)**
    The Timing FHIR resource maps to the ActivityTiming​ object in Salesforce.

#### See Also

-   [Clinical Data Model](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_clinical_data_model.htm "Patient data and healthcare records are important in the healthcare industry. Without accurate information, performing and managing care becomes difficult. These records are readily available if a patient seeks care from the same provider every time. However, in reality, a patient’s healthcare journey takes them to multiple providers and hospitals at different times. Because the patient’s health hinges on the accuracy of their medical records, it’s crucial for the systems used by different providers and hospitals to be interoperable. And to make this interoperability possible, it’s vital to have some industry-recognized standards for how these records are structured, stored, and transferred. That’s where the standards defined by Health Level 7 (HL7) come in.")

-   [Electronic Health Records (Managed Package)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_ehr.htm "Salesforce Health Cloud provides custom objects to store the data contained in the standard electronic health record (EHR) fields.")

## Related Topics

- Considerations for Integration (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_considerations.htm)
- Address (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Address.htm)
- AdverseEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_adverseevents.htm)
- Allergy​Intolerance (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_AllergyIntolerance.htm)
- Annotation (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_annotation.htm)
- Attachment (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Attachment.htm)
- Care​Plan (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_careplan.htm)
- Codeable​Concept (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_CodeableConcept.htm)
- Coding (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Coding.htm)
- CommunicationRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_communicationrequest.htm)
