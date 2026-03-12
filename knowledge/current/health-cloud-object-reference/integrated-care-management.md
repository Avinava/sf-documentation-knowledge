---
title: "Integrated Care Management"
domain: health-cloud-object-reference
topic: integrated-care-management
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:34.037Z
estimatedTokens: 2732
keywords: [Integrated, Care, Management, data, model, store, clinical, patient, member’s, plans, USCDI, FHIR, R4-aligned, helps, system’s]
---

# Integrated Care Management

> Integrated Care Management provides a data model to store clinical data related to a
    patient or member’s care plans. This data model is both USCDI and FHIR R4-aligned, which helps
    with your system’s interoperability.

# Integrated Care Management

Integrated Care Management provides a data model to store clinical data related to a patient or member’s care plans. This data model is both USCDI and FHIR R4-aligned, which helps with your system’s interoperability.

With the objects in this data model, you can define a PGI library for your organization’s care plans, define care plan templates, and store care plans for patients or members. You can also store other information like episodes of care.

To use this data model, go to Setup and enable the **FHIR R4-Aligned Data Model** setting on the FHIR R4 Support Settings page and the **Enhanced Care Plans** setting on the Integrated Care Management Settings page.

![A diagram of the Integrated Care Management data model](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fhc_integrated_care_management_erd.png&folder=health_cloud_object_reference)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/integrated-care-management.html "HTML (New Window)").

-   **[ActionPlanTemplateAssignment](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_actionplantemplateassignment.htm)**
    Represents the association of an action plan template with its related care plan template, goal, or problem definition. When instantiated, the action plan generates the corresponding intervention tasks and links them to the appropriate record, such as a condition, goal, or care plan.
-   **[AsmtQstnRespRecommendation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_asmtqstnresprecommendation.htm)**
    Maps an assessment question’s response to the recommendation it has to provide for a care plan. Recommendations can be problems, goals, interventions, or other assessments. This object is available in API version 57.0 and later.
-   **[CareEpisode](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_careepisode.htm)**
    Records details of the interaction between a patient and a healthcare provider for the period during which the patient receives healthcare services from the provide. This object is based on the [EpisodeOfCare](https://www.hl7.org/fhir/episodeofcare.html#EpisodeOfCare) FHIR resource. This object is available in API version 57.0 and later.
-   **[CareEpisodeDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_careepisodedetail.htm)**
    Represents additional information associated with a CareEpisode record. This information may be the referral requests that an episode of care started from or the diagnoses that the episode of care is meant to address. This object is available in API version 57.0 and later.
-   **[CareGap](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_caregap.htm)**
    Represents gaps in patient care through a specified period. This object is available in API version 59.0 and later.
-   **[CareGapCriteriaResult](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_caregapcriteriaresult.htm)**
    Represents the result of an evaluated clinical measure criteria. This object is available in API version 59.0 and later.
-   **[CarePlan](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_careplan.htm)**
    Represents a care plan that is created to help improve a patient or member’s health. This object is based on the [CarePlan](https://www.hl7.org/fhir/careplan.html#CarePlan) FHIR resource. This object is available in API version 56.0 and later.
-   **[CarePlanActivity](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_careplanactivity.htm)**
    Represents an activity that’s part of a care plan. This object is a child of CarePlan. This object is available in API version 56.0 and later.
-   **[CarePlanActivityDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_careplanactivitydetail.htm)**
    Represents additional information associated with a CarePlanActivity record. This information may be outcomes of the activity, the performers who contributed to it, or the reasons why the activity was necessary.. This object is a child of CarePlanActivity. This object is available in API version 57.0 and later.
-   **[CarePlanDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_careplandetail.htm)**
    Represents additional information associated with a care plan record. These details may be things addressed by the care plan, contributors in the care plan, supporting information, and so on. This object is available in API version 57.0 and later.
-   **[CarePlanTemplate](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_careplantemplate.htm)**
    Represents a template use to instantiate a care plan. This object is available in API version 56.0 and later.
-   **[CarePlanTemplateGoal](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_careplantemplategoal.htm)**
    Represents goals in Care Plan Templates that don’t have problems as their parents. These goals are added directly under the care plan in the template . This object determines the position of goals in the hierarchy of care plan templates. The specific details of goals are referenced from GoalDefinitions records in the PGI library. This object is available in API version 57.0 and later.
-   **[CarePlanTemplateProblem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_careplantemplateproblem.htm)**
    Represents problems in Care Plan Templates. These problems may or may not have goals as their direct children. This object determines the position of problems in the hierarchy of care plan templates. The specific details of problems are referenced from ProblemDefinition records in the PGI library. This object is available in API version 57.0 and later.
-   **[CareTask](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_caretask.htm)**
    Represents additional information about a healthcare-related task such as process status, beneficiary, and related tasks. This object is available in API version 61.0 and later.
-   **[CareTaskDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_caretaskdetail.htm)**
    Represents extra details about a healthcare-related task such as the detail type, detail record, detail code, and detail value. This object is available in API version 61.0 and later.
-   **[ClinicalMeasure](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_clinicalmeasure.htm)**
    Represents a structured and computable definition of a health-related measure for identifying care gaps. This object is available in API version 59.0 and later.
-   **[ClinicalMeasureCriteria](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_clinicalmeasurecriteria.htm)**
    Represents a computable criteria of a health-related measure. This object is available in API version 59.0 and later.
-   **[ClinicalMeasureCriteriaGrp](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_clinicalmeasurecriteriagrp.htm)**
    Represents a group of computable criteria for a health-related measure. This object is available in API version 59.0 and later.
-   **[GoalAssignment](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_goalassignment.htm)**
    Represents the goals that are part of a care plan.
-   **[GoalAssignmentDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_goalassignmentdetail.htm)**
    Represents additional information associated with a GoalAssignment record. This information may be the outcome of a goal or something addressed by it. This object is available in API version 57.0 and later.
-   **[GoalDefinition](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_goaldefinition.htm)**
    Represents a goal or a business objective that’s used as a reference. When instantiated, GoalDefinition records create GoalAssignment records that serve as goals in care plans.
-   **[MemberPlanCarePlan](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_memberplancareplan.htm)**
    Represents a junction between member plans and care plans. It defines the problems, goals, and interventions in a care plan based on the patient's health plan coverage. This object is available in API version 66.0 and later.
-   **[MemberPlanMedicationStmt](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_memberplanmedicationstmt.htm)**
    Represents a junction between member plans and medication statements. It associates the medications that a patient is currently taking or has taken in the past with their health plan coverage. This object is available in API version 66.0 and later.
-   **[ProblemDefinition](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_problemdefinition.htm)**
    The definition of a care plan problem in the reusable PGI library that’s a part of Integrated Care Management. When instantiated, ProblemDefinition records create HealthCondition records that serve as problems in care plans. This object is available in API version 57.0 and later.
-   **[ProblemGoalDefinition](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_problemgoaldefinition.htm)**
    A junction object that associated a goal definition to its parent problem definition. These junction records assist in establishing the problem-goal hierarchy in care plans instantiated from the PGI library. A problem definition can have multiple goal definitions as its children, and a goal definition can have multiple problem definitions as its parents. This object is available in API version 57.0 and later.
-   **[PurchaserPlanCareProgram](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_purchaserplancareprogram.htm)**
    Represents a junction between puchaser plans and care programs. It defines the care programs that are available under a purchaser plan such as employer-sponsored programs for managing chronic conditions. This object is available in API version 66.0 and later.

## Related Topics

- ActionPlanTemplateAssignment (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_actionplantemplateassignment.htm)
- AsmtQstnRespRecommendation (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_asmtqstnresprecommendation.htm)
- CareEpisode (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_careepisode.htm)
- CareEpisodeDetail (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_careepisodedetail.htm)
- CareGap (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_caregap.htm)
- CareGapCriteriaResult (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_caregapcriteriaresult.htm)
- CarePlan (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_careplan.htm)
- CarePlanActivity (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_careplanactivity.htm)
- CarePlanActivityDetail (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_careplanactivitydetail.htm)
- CarePlanDetail (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_careplandetail.htm)
