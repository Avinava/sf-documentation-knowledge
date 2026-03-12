---
title: "Care Program Management"
domain: health-cloud-object-reference
topic: care-program-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.955Z
estimatedTokens: 1247
keywords: [Care, Program, Management, Drive, increased, adherence, improve, patient, outcomes, data, model, Now, enroll, manage, patients]
---

# Care Program Management

> Drive increased adherence and improve patient outcomes using the care program
  management data model. Now you can enroll and manage patients to achieve the maximum impact of
  your programs.

# Care Program Management

Drive increased adherence and improve patient outcomes using the care program management data model. Now you can enroll and manage patients to achieve the maximum impact of your programs.

The program management data model represents the entire picture of a program—from products and providers to enrollment eligibility of the enrollee. Available in API version 46.0 and later.

![Care Program entity-relationship diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2FV3_Care_Program_ERD.png&folder=health_cloud_object_reference)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/care-program-management.html "HTML (New Window)").

-   **[CarePgmProvHealthcareProvider](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carepgmprovhealthcareprovider.htm)**
    Represents a junction object identifying the primary healthcare professional associated with a care program provider and to look up all healthcare professionals for care program providers. This object is available in API version 49.0 and later.
-   **[CareProgram](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogram.htm)**
    Represents a set of activities, such as a patient therapy, financial assistance, education, wellness, or fitness plan, offered to participants by an employer or insurer.
-   **[CareProgramCampaign](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramcampaign.htm)**
    Represents a relationship between the Care Program object and the Campaign object. This junction object enables admins to associate one or more campaigns to a program.
-   **[CareProgramEligibilityRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogrameligibilityrule.htm)**
    Represents a rule defining the criteria for patient care program enrollment eligibility. This entity creates an association between Care Program and an Enrollment Eligibility Criteria.
-   **[CareProgramEnrollee](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramenrollee.htm)**
    Represents a participant enrolled in a care program.
-   **[CareProgramEnrolleeProduct](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramenrolleeproduct.htm)**
    Represents the affiliation between a care program enrollee and a care program product, a care program provider, or both.
-   **[CareProgramEnrollmentCard](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramenrollmentcard.htm)**
    Represents a care program membership card that includes a membership number or enrollment code.
-   **[CareProgramGoal](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramgoal.htm)**
    Represents a business or clinical goal related to a care program.
-   **[CareProgramProduct](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramproduct.htm)**
    Represents the affiliation between a care program and a care program product, care program provider, or both.
-   **[CareProgramProvider](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramprovider.htm)**
    Represents a business account that is the service provider for a care program product.
-   **[CareProgramTeamMember](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramteammember.htm)**
    Represents a person who delivers services under a program, such as a program manager or care coordinator.
-   **[CareRegisteredDevice](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careregistereddevice.htm)**
    Represents a device or device registration information for a patient or a care program enrollee. This object is available in API version 49.0 and later.
-   **[CareSystemFieldMapping](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_caresystemfieldmapping.htm)**
    Represents a mapping from source system fields to Salesforce target entities and attributes.
-   **[EnrollmentEligibilityCriteria](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_enrollmenteligibilitycriteria.htm)**
    Represents criteria that define patient enrollment eligibility for one or more care programs.

#### See Also

-   [Care Program Enrollments (POST)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_careprogram_enrollment_intro.htm "Use this API to enroll multiple patients in a care program.")

## Related Topics

- CarePgmProvHealthcareProvider (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carepgmprovhealthcareprovider.htm)
- CareProgram (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogram.htm)
- CareProgramCampaign (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramcampaign.htm)
- CareProgramEligibilityRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogrameligibilityrule.htm)
- CareProgramEnrollee (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramenrollee.htm)
- CareProgramEnrolleeProduct (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramenrolleeproduct.htm)
- CareProgramEnrollmentCard (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramenrollmentcard.htm)
- CareProgramGoal (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramgoal.htm)
- CareProgramProduct (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramproduct.htm)
- CareProgramProvider (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramprovider.htm)
