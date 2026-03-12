---
title: "Participant Management"
domain: life-sciences-dev-guide
topic: participant-management
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:43.867Z
estimatedTokens: 2477
keywords: [Participant, Management, data, model, helps, streamline, recruitment, enrollment, processes, clinical, trials, advanced, digital, solutions, store]
---

# Participant Management

> Participant Management data model helps you to streamline the recruitment and enrollment
  processes in clinical trials with advanced digital solutions. With this data model, you can store
  clinical trial data representing care programs and research studies. It’s USCDI and FHIR
  R4-aligned, which helps with your system's interoperability and compliance while managing
  participant data efficiently.

# Participant Management

Participant Management data model helps you to streamline the recruitment and enrollment processes in clinical trials with advanced digital solutions. With this data model, you can store clinical trial data representing care programs and research studies. It’s USCDI and FHIR R4-aligned, which helps with your system's interoperability and compliance while managing participant data efficiently.

| Available in: Lightning ExperienceAvailable in: Enterprise and Unlimited Editions with Life Sciences or Health Cloud |
| --- |


Participant data in clinical trials is essential in the Life Sciences industry as it helps you track and manage participants' enrollment journey. This data model is your key to collecting information on participants and monitoring the effectiveness and safety of clinical trials.

The Participant Management data model allows you to store clinical trial data representing care program management and research studies. Participant Management uses Care Program Management objects to improve patient outcomes. It also uses the Discovery Framework objects to build more complex prescreening assessment forms and questions to check participants' eligibility. To learn more about Care Program Management objects and Discovery Framework objects, refer [Care Program Management](https://developer.salesforce.com/docs/atlas.en-us.260.0.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_care_program_data_model.htm) and [Discovery Framework Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.250.0.industries_reference.meta/industries_reference/discovery_framework_standard_objects.htm).

Participant Management also reuses some of the standard Salesforce objects to digitize the Consent Management flow. You can add consent documents to clinical trials by associating them with the related care program and defining their data use purpose. To learn more about the standard objects used for e-consents, refer [Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_list.htm).

The participant management objects are available to users with Health Cloud Starter and the Participant Enrollment Add-On license. Available in API version 61.0 and later.

![Participant Management entity relationship diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_participant_management_erd.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/participant-management.html "HTML (New Window)").

-   **[CareProgram](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogram.htm)**
    Represents a set of activities, such as a patient therapy, financial assistance, education, wellness, or fitness plan, offered to participants by an employer or insurer.
-   **[CareProgramDetail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramdetail.htm)**
    Represents the detail records related to the care program. This object is available in API version 61.0 and later.
-   **[CareProgramEligibilityRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogrameligibilityrule.htm)**
    Represents a rule defining the criteria for patient care program enrollment eligibility. This entity creates an association between Care Program and an Enrollment Eligibility Criteria.
-   **[CareProgramEnrollee](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramenrollee.htm)**
    Represents a participant enrolled in a care program.
-   **[CareProgramSite](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramsite.htm)**
    Represents the details about the care program site. This object is available in API version 61.0 and later.
-   **[CareProgramStatusPeriod](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramstatusperiod.htm)**
    Represents the historical changes to the status of a care program. This object is available in API version 61.0 and later.
-   **[CareProgramTeamMember](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramteammember.htm)**
    Represents a person who delivers services under a program, such as a program manager or care coordinator.
-   **[CarePgmEnrleeStatusPeriod](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carepgmenrleestatusperiod.htm)**
    Represents the historical changes to the status or stage of a care program enrollee. This object is available in API version 61.0 and later.
-   **[CarePgmEnrollmentEvalRslt](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carepgmenrollmentevalrslt.htm)**
    Represents the result of an evaluation done to assess the eligibility of a participant enrolling for a research study or care program. This object is available in API version 62.0 and later.
-   **[CarePgmTeamMbrRolePeriod](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carepgmteammbrroleperiod.htm)**
    Represents the historical changes in the role of a care program team member. This object is available in API version 61.0 and later.
-   **[DiagnosticSummary](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_DiagnosticSummary.htm)**
    Represents the findings, interpretations, and summaries of tests performed on patients. This object is available in API version 51.0 and later.
-   **[DigitalVerification](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_digitalverification.htm)**
    Stores information about the verification of a related record. This object is available in API version 60.0 and later.
-   **[EnrollmentEligibilityCriteria](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_enrollmenteligibilitycriteria.htm)**
    Represents criteria that define patient enrollment eligibility for one or more care programs.
-   **[ResearchStudy](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstudy.htm)**
    Represents the details of a research study that include its design, execution, and oversight. This object is available in API version 61.0 and later.
-   **[ResearchStudyCandidate](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstudycandidate.htm)**
    Represents the details of the research participant which includes the associated account and the status of the subject. This object is available in API version 61.0 and later.
-   **[ResearchStudyCmprGroup](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstudycmprgroup.htm)**
    Represents the details of a research study comparison group. This object is available in API version 61.0 and later.
-   **[ResearchStudyProtocolInfo](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstudyprotocolinfo.htm)**
    Represents details of the research study protocol document. This object is available in API version 62.0 and later.
-   **[ResearchStudyRelation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstudyrelation.htm)**
    Represents different related research studies. This object is available in API version 61.0 and later.
-   **[ResearchStudyRndmBlockSlot](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstudyrndmblockslot.htm)**
    Represents the individual randomization block items corresponding to a Research Study Randomization Block This object is available in API version 61.0 and later.
-   **[ResearchStdyCndtStatusPrd](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstdycndtstatusprd.htm)**
    Represents the time duration during which a research study candidate is assigned a specific status. This object is available in API version 61.0 and later.
-   **[ResearchStdyCmprGroupCndt](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstdycmprgroupcndt.htm)**
    Represents the junction between a research study control group and a research study candidate. This object is available in API version 61.0 and later.
-   **[RsrchStdyRandomizationCrit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_rsrchstdyrandomizationcrit.htm)**
    Represents the criteria definition for grouping the candidates participating in the research study. This object is available in API version 61.0 and later.
-   **[ResearchStdyRandomization](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstdyrandomization.htm)**
    Represents the randomization algorithm configuration defined for a research study. This object is available in API version 61.0 and later.
-   **[RsrchStdyRandomizationBlock](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_rsrchstdyrandomizationblock.htm)**
    Represents the details of a block that’s generated through the parameters specified in the research study randomization. This object is available in API version 61.0 and later.
-   **[ResearchStdySearchableField](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_researchstdysearchablefield.htm)**
    Represents a common dataset that includes multiple fields and values from multiple objects and serves as the basis for searches related to research studies. This object is available in API version 61.0 and later.

## Related Topics

- CareProgram (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogram.htm)
- CareProgramDetail (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramdetail.htm)
- CareProgramEligibilityRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogrameligibilityrule.htm)
- CareProgramEnrollee (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramenrollee.htm)
- CareProgramSite (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramsite.htm)
- CareProgramStatusPeriod (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramstatusperiod.htm)
- CareProgramTeamMember (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramteammember.htm)
- CarePgmEnrleeStatusPeriod (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carepgmenrleestatusperiod.htm)
- CarePgmEnrollmentEvalRslt (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carepgmenrollmentevalrslt.htm)
- CarePgmTeamMbrRolePeriod (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carepgmteammbrroleperiod.htm)
