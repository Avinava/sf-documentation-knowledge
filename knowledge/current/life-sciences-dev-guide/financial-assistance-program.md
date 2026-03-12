---
title: "Financial Assistance Program"
domain: life-sciences-dev-guide
topic: financial-assistance-program
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:43.844Z
estimatedTokens: 767
keywords: [Financial, Assistance, Program, data, model, helps, life, sciences, organizations, implement, several, programs, eligible, patients, receive]
---

# Financial Assistance Program

> The financial assistance program data model helps life sciences organizations implement
  several financial assistance programs for eligible patients to receive assistance with their out
  of pocket medical expenses.

# Financial Assistance Program

The financial assistance program data model helps life sciences organizations implement several financial assistance programs for eligible patients to receive assistance with their out of pocket medical expenses.

| Available in: Lightning ExperienceAvailable in: Enterprise and Unlimited Editions with Life Sciences or Health Cloud |
| --- |


The financial assistance program objects are available to users with Health Cloud Starter (for Life Sciences Cloud) or Health Cloud Foundation (for Health Cloud) and the Manage Financial Assistance Program permission set. The objects are available in API version 61.0 and later.

![Financial Assistance Program relationship diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_financial_assistance_program_erd.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/financial-assistance-for-patient-services-program.html "HTML (New Window)").

-   **[Applicant](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_applicant.htm)**
    Specify the care program enrollee represented as an applicant. This object is available in API version 59.0 and later.
-   **[Benefit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_benefit.htm)**
    Represents information about benefits associated with the financial assistance program. Benefits are mapped to the members based on the program rules. This object is available in API version 51.0 and later.
-   **[BenefitType](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_benefittype.htm)**
    Represents information about the type of benefits, such as Financial Assistance Program, available to the care program enrollee. This object is available in API version 51.0 and later.
-   **[ProgramEnrollment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_programenrollment.htm)**
    Represents details of enrollment for benefits in a program. This object is available in API version 57.0 and later.
-   **[CareProgramAssistance](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramassistance.htm)**
    Represents a junction between Care Program and Program objects. This object is available in API version 61.0 and later.
-   **[ProgramEnrlEligibilityCrit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_programenrleligibilitycrit.htm)**
    Represents a junction between Program and Enrollment Eligibility Criteria objects. This object is available in API version 61.0 and later.
-   **[ProgramRecommendationRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_programrecommendationrule.htm)**
    Represents the eligibility criteria and recommendation for a program. This object is available in API version 61.0 and later.

## Related Topics

- Applicant (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_applicant.htm)
- Benefit (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_benefit.htm)
- BenefitType (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_benefittype.htm)
- ProgramEnrollment (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_programenrollment.htm)
- CareProgramAssistance (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprogramassistance.htm)
- ProgramEnrlEligibilityCrit (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_programenrleligibilitycrit.htm)
- ProgramRecommendationRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_programrecommendationrule.htm)
