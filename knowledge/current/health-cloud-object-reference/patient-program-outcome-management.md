---
title: "Patient Program Outcome Management"
domain: health-cloud-object-reference
topic: patient-program-outcome-management
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:34.117Z
estimatedTokens: 1152
keywords: [Patient, Program, Outcome, Management, data, model, helps, improve, outcomes, defining, measuring, linking, progress, Leads, define]
---

# Patient Program Outcome Management

> Patient Program Outcome Management data model helps you to improve patient and program
  outcomes by defining and measuring program outcomes, linking patient progress to program outcomes.
  Program Leads can define outcomes for a care program, and can generate a program and patient
  outcome summary. Additionally, case agents can generate a patient outcome summary.

# Patient Program Outcome Management

Patient Program Outcome Management data model helps you to improve patient and program outcomes by defining and measuring program outcomes, linking patient progress to program outcomes. Program Leads can define outcomes for a care program, and can generate a program and patient outcome summary. Additionally, case agents can generate a patient outcome summary.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise and Unlimited Editions with Health Cloud or Life Sciences Cloud |


Patient Program Outcome Management reuses Care Program Management standard objects to calculate the outcomes at a care program level. To learn more about Care Program Management objects, refer [Care Program Management Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/hc_care_program_data_model.htm).

The patient program outcome management objects are available to users with Health Cloud Foundation and Patient Program Outcome Management permission set. Available in API version 61.0 and later.

![Patient Program Outcome Management entity relationship diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fhc_patient_program_outcome_management_erd.png&folder=health_cloud_object_reference)

To view a larger version, right-click or control-click the image and select **Open Image in New Tab**.

-   **[CareProgram](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogram.htm)**
    Represents a set of activities, such as a patient therapy, financial assistance, education, wellness, or fitness plan, offered to participants by an employer or insurer.
-   **[CareProgramEnrollee](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramenrollee.htm)**
    Represents a participant enrolled in a care program.
-   **[IndicatorAssignment](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_indicatorassignment.htm)**
    Represents the assignment of an indicator definition that's used to measure the performance of an outcome or a related activity. This object is available in API version 59.0 and later.
-   **[IndicatorDefinition](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_indicatordefinition.htm)**
    Represents information about the indicator assignment and the process of measuring and calculating the indicator results. This object is available in API version 59.0 and later.
-   **[IndicatorPerformancePeriod](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_indicatorperformanceperiod.htm)**
    Represents information about a specified time period including the frequency at which indicator results should be calculated and the baseline value of the indicator. This object is available in API version 59.0 and later.
-   **[IndicatorResult](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_indicatorresult.htm)**
    Represents the result of an indicator assignment for the specified time period that can be used to track the performance of the indicator. This object is available in API version 59.0 and later.
-   **[Outcome](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_outcome.htm)**
    Represents information about the expected change in participants that is driven by the organization's activity. This object is available in API version 59.0 and later.
-   **[OutcomeActivity](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_outcomeactivity.htm)**
    Represents a junction between Outcome and the object that's related to the activity undertaken by an organization to achieve that outcome. This object is available in API version 59.0 and later.
-   **[PartyIndicatorResult](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_partyindicatorresult.htm)**
    Represents information about a party for which the indicator result is calculated. This object is available in API version 62.0 and later.
-   **[TimePeriod](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_timeperiod.htm)**
    Represents the time period that's used to calculate the indicator performance and result. This object is available in API version 59.0 and later.

## Related Topics

- CareProgram (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogram.htm)
- CareProgramEnrollee (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramenrollee.htm)
- IndicatorAssignment (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_indicatorassignment.htm)
- IndicatorDefinition (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_indicatordefinition.htm)
- IndicatorPerformancePeriod (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_indicatorperformanceperiod.htm)
- IndicatorResult (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_indicatorresult.htm)
- Outcome (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_outcome.htm)
- OutcomeActivity (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_outcomeactivity.htm)
- PartyIndicatorResult (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_partyindicatorresult.htm)
- TimePeriod (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_timeperiod.htm)
