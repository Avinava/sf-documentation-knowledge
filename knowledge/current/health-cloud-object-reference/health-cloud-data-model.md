---
title: "Health Cloud Data Model"
domain: health-cloud-object-reference
topic: health-cloud-data-model
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:35.925Z
estimatedTokens: 4147
keywords: [Health, Cloud, Data, Model, Salesforce, rich, objects, store, access, specialized]
---

# Health Cloud Data Model

> Salesforce Health Cloud provides a rich set of objects to store and access specialized
      health information.

# Health Cloud Data Model

Salesforce Health Cloud provides a rich set of objects to store and access specialized health information.

To verify the complete list of fields for an object, you can use a describe call from the API, or inspect with an appropriate tool, for example, inspecting the WSDL or using a schema viewer.

-   **[Advanced Therapy Management](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_advanced_therapy_management_data_model.htm)**
    Advanced Therapy Management helps streamline complex procedures that involve multiple appointments across different locations. Use Advanced Therapy Management’s Multi-Step Scheduling solution for easy scheduling of appointments for program participants. Configure procedure steps based on lead times and set up affiliated service territories to establish where work types are sequentially performed.
-   **[Adverse Events](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_adverse_events_data_model.htm)**
    Adverse Events data model helps you in managing and documenting any unfavorable or unintended signs, symptoms, or diseases that occur as a result of an intervention, such as medical care or research, that impacts a patient or group of patients or participants. These adverse events can include a wide range of physical or psychological effects that varies from mild discomfort to serious health complications.
-   **[Assessment Generation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_api_assessment_generation.htm)**
    Assessment Generation leverages Einstein generative AI capabilities to create assessment questions by efficiently extracting question details from complex source documents. This innovation, combined with the power of Discovery Framework, helps you to build comprehensive healthcare questionnaires that meet your business needs.
-   **[Benefits Verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_benefits_verification_data_model.htm)**
    The benefits verification data model supports providers, payers, and life sciences organizations in determining benefits coverage for services and products provided.
-   **[Care Program Management](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_care_program_data_model.htm)**
    Drive increased adherence and improve patient outcomes using the care program management data model. Now you can enroll and manage patients to achieve the maximum impact of your programs.
-   **[Clinical Data Model](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_clinical_data_model.htm)**
    Patient data and healthcare records are important in the healthcare industry. Without accurate information, performing and managing care becomes difficult. These records are readily available if a patient seeks care from the same provider every time. However, in reality, a patient’s healthcare journey takes them to multiple providers and hospitals at different times. Because the patient’s health hinges on the accuracy of their medical records, it’s crucial for the systems used by different providers and hospitals to be interoperable. And to make this interoperability possible, it’s vital to have some industry-recognized standards for how these records are structured, stored, and transferred. That’s where the standards defined by Health Level 7 (HL7) come in.
-   **[Predecessors to Code Sets and Code Set Bundles in Health Cloud](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_code_sets_data_model.htm)**
    Before the Spring ’21 release, the Healthcare Procedure and Healthcare Diagnosis objects stored codes specifically related to procedures and diagnoses. These codes were used for prior-authorization requests and approval processes. Since the Spring’21 release, Health Cloud uses the Code Set and Code Set Bundle objects for this purpose instead.
-   **[Coverage Requirement Discovery](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_coverage_requirement_discovery_data_model_intro.htm)**
    Payer organizations in the healthcare industry can use the FHIR-aligned Coverage Requirement Discovery (CRD) data model to help providers access member and coverage-related information in real time, directly from their Electronic Health Records (EHR) system. The automation of coverage requirement discovery reduces time spent on administrative tasks, improves the chances of coverage approval, and helps in reducing human errors.
-   **[Crisis Support Center Management](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_crisis_center_data_model.htm)**
    The Crisis Support Center Management data model lets users provide a range of crisis services from a single app. Use a simplified intake flow, search for providers and beds across facilities, and more.
-   **[Documentation Templates and Rules](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_documentation_templates_and_rules_data_model.htm)**
    Da Vinci Documentation Templates and Rules (DTR) is a framework under the HL7 FHIR standards that facilitates the exchange of documentation requirements in the healthcare industry. DTR enables the use of standardized templates and rules in the exchange of critical healthcare documentation, ensuring compliance and reducing administrative burden.
-   **[Disease Surveillance](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_disease_surveillance_data_model.htm)**
    Disease Surveillance tracks and manages disease data and public health activities. Use the Disease Surveillance data model to centralize patient information, including demographics, disability status, medications, and specimens. Streamline health monitoring and enable timely, informed decision making by gaining a comprehensive view of disease-related data, such as definitions, investigations, and outbreaks.
-   **[Electronic Signatures](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_electronic_signatures_data_model.htm)**
    Manage electronic signatures by using Digital Verifications. Set up signature trails for records or workflows that require users to verify key updates. Define signature details such as the order of designated verifiers and whether designated verifiers belong to a user group or have a specific participant role.
-   **[Engagement Interaction](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_engagement_interaction_data_model.htm)**
    The engagement data model stores details, such as start date and end date, time, topic, and attendees, about an interaction between a customer or a customer-authorized representative and a customer service representative (CSR) or contact center agent (CCA). You can add up to 50 custom fields each in the EngagementAttendee, EngagementInteraction, and EngagementTopic objects. The engagement objects also support quick actions that help CCAs to perform routine actions quickly without navigating to multiple pages. CCAs can also create personalized list views for engagement objects by using the My engagement attendees, My engagement interactions, and My engagement topics filters.
-   **[FHIR Subscription](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_fhir_subscription_data_model.htm)**
    Publishers can use the Fast Healthcare Interoperability Resources (FHIR) Subscription data model to store subscription topics, subscriber details, the filters and parameters applied to a subscription, and other subscription details. When an event change occurs in the subscribed resource, it triggers a notification and a platform event is created as an Interoperability Topic Subscription Event record. Then, Mulesoft sends the notification to the subscriber’s endpoint in real time.
-   **[Financial Assistance Program](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_financial_assistance_program_data_model.htm)**
    The financial assistance program data model helps health and life sciences organizations implement several financial assistance programs for eligible patients to receive assistance with their out of pocket medical expenses.
-   **[Health Assessments](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_behavior_health_assessment_data_model.htm)**
    Health Cloud Assessments use the power of Discovery Framework and OmniStudio to build more complex questionnaire paths.
-   **[Health Insurance](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_membership_data_model.htm)**
    The health insurance data model provides objects for managing the ways care is paid for. It represents information about participants such as employment, insurance coverage, and dependents. You can manage details of the benefits provided by plans to members and treatment preauthorization requests made by members or providers.
-   **[Home Health](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_api_home_health.htm)**
    The Home Health data model helps you store data for your organization’s home healthcare services. You can store the preferences patients have for their services, the skills your resources possess, the details of each home visit, and so on. The Home Health data model is primarily built over the Salesforce Field Service data model and uses many of its objects.
-   **[Integrated Care Management](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_dev_integrated_care_management.htm)**
    Integrated Care Management provides a data model to store clinical data related to a patient or member’s care plans. This data model is both USCDI and FHIR R4-aligned, which helps with your system’s interoperability.
-   **[Intelligent Appointment Management](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_appointment_management_data_model.htm)**
    Health Cloud integrates with a customer’s appointment management system to provide a patient appointment booking experience in Salesforce for call center agents and care coordinators. The Health Cloud data model for appointments enables you to work with multiple source systems operating on different electronic health record platforms.
-   **[Intelligent Document Automation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/document_management_data_model.htm)**
    Use the Intelligent Document Automation data objects to simplify the document management process, reduce manual data entry, and get patients the right care and services faster by managing patient and member forms all in one place, from intake through processing.
-   **[Intelligent Sales](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_intelligent_sales_data_model.htm)**
    Help your sales team plan and execute sales visits and manage field inventory with Intelligent Sales.
-   **[Medication Management](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_medication_review_data_model.htm)**
    The Medication Management data model provides objects to enable providers, care coordinators, and clinicians to perform a medication reconciliation and medication therapy review of their patients’ medication regimen. The data model provides objects for managing information on medication reconciliations, medication recommendations, and comprehensive and targeted medication reviews conducted for patients.
-   **[Patient Program Outcome Management](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_patient_program_outcome_management_data_model.htm)**
    Patient Program Outcome Management data model helps you to improve patient and program outcomes by defining and measuring program outcomes, linking patient progress to program outcomes. Program Leads can define outcomes for a care program, and can generate a program and patient outcome summary. Additionally, case agents can generate a patient outcome summary.
-   **[Participant Management](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_participant_management_data_model.htm)**
    Participant Management data model helps you to streamline the recruitment and enrollment processes in clinical trials with advanced digital solutions. With this data model, you can store clinical trial data representing care programs and research studies. It’s USCDI and FHIR R4-aligned, which helps with your system's interoperability and compliance while managing participant data efficiently.
-   **[Patient Segmentation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_patient_segmentation.htm)**
    The Patient Segmentation data model helps the Patient Segmentation dashboard generate insights into patient demographics and risk scores based on risk adjustment factors.
-   **[Pharmacy Benefits Verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_pharmacy_benefits_verification_data_model.htm)**
    Pharmacy Benefits Verification uses a data model that’s FHIR-CARIN and NCPDP aligned to store its data and make it interoperable. The pharmacy benefits verification data model supports drug manufacturers, providers, pharmacists, and healthcare organizations in determining pharmacy benefits coverage for the medications prescribed to the patients under a care program.
-   **[Provider Network Management](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_pnm_data_model.htm)**
    Provider Network Management allows health insurance companies to bring providers into their network and helps members or patients find care that fits their needs. It provides objects for managing provider networks and contract payment agreement terms.
-   **[Provider Relationship Management](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_provider_data_model_overview.htm)**
    Use the Provider Relationship Management data model along with standard Salesforce objects to manage your provider relationships.
-   **[Remote Monitoring and Device Registration](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_remote_monitoring_data_model.htm)**
    The remote monitoring and device registration data model provides objects for managing data collected from devices issued to patients or program members, such as smart watches and heart monitors.
-   **[Social Determinants](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_social_determinants_data_model.htm)**
    The social determinants data model represents the barriers, health determinants, and interventions for a patient or member. Available in API version 45.0 and later.
-   **[Timeline](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_api_timeline_standard_objects.htm)**
    Use Timeline to configure a chronological view of records from multiple objects.
-   **[Unified Health Scoring](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/unified_health_scoring_developer_overview.htm)**
    The Unified Health Scoring data model provides three objects, three tooling APIs, and a metadata type with two subtypes. Use these objects to implement the feature in your Health Cloud org.
-   **[Utilization Management](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_utilization_management_data_model.htm)**
    Utilization Management (UM) is a health insurance plan's process of interfacing with plan members and contracted medical providers to interpret, administer, and explain the medical policies of the health plan. Health Cloud provides objects you can use to review and evaluate medical care services, communicate about clinical policies, and help health plan members ensure they receive the right care in the right setting at the right time.

#### See Also

-   [Salesforce Object Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)

-   [Salesforce Developer Limits and Allocations Quick Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm)

## Related Topics

- Advanced Therapy Management (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_advanced_therapy_management_data_model.htm)
- Adverse Events (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_adverse_events_data_model.htm)
- Assessment Generation (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_api_assessment_generation.htm)
- Benefits Verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_benefits_verification_data_model.htm)
- Care Program Management (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_care_program_data_model.htm)
- Clinical Data Model (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_clinical_data_model.htm)
- Predecessors to Code Sets and Code Set Bundles in Health Cloud (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_code_sets_data_model.htm)
- Coverage Requirement Discovery (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_coverage_requirement_discovery_data_model_intro.htm)
- Crisis Support Center Management (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_crisis_center_data_model.htm)
- Documentation Templates and Rules (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_documentation_templates_and_rules_data_model.htm)
