---
title: "Pharmacy Benefits Verification"
domain: health-cloud-object-reference
topic: pharmacy-benefits-verification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.124Z
estimatedTokens: 1120
keywords: [Pharmacy, Benefits, Verification, uses, data, model, that’s, FHIR-CARIN, NCPDP, aligned, store, interoperable, supports, drug, manufacturers]
---

# Pharmacy Benefits Verification

> Pharmacy Benefits Verification uses a data model that’s FHIR-CARIN and NCPDP aligned to
  store its data and make it interoperable. The pharmacy benefits verification data model supports
  drug manufacturers, providers, pharmacists, and healthcare organizations in determining pharmacy
  benefits coverage for the medications prescribed to the patients under a care program.

# Pharmacy Benefits Verification

Pharmacy Benefits Verification uses a data model that’s FHIR-CARIN and NCPDP aligned to store its data and make it interoperable. The pharmacy benefits verification data model supports drug manufacturers, providers, pharmacists, and healthcare organizations in determining pharmacy benefits coverage for the medications prescribed to the patients under a care program.

| Available in: Lightning ExperienceAvailable in: Enterprise and Unlimited Editions with Health Cloud |
| --- |


The pharmacy benefits verification objects are available to users with the Health Cloud Foundation and Manage Pharmacy Benefits Verification permission set. Available in API version 61.0 and later.

![Pharmacy Benefit Verification Entity Relationship Diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fhc_pharmacy_benefits_verification_erd.png&folder=health_cloud_object_reference)

To view a larger version, right-click or control-click the image and select **Open Image in New Tab**.

-   **[CareBenefitVerifyRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carebenefitverifyrequest.htm)**
    Request for verification of benefits. This object is available in API version 53.0 and later.
-   **[CareProgram](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogram.htm)**
    Represents a set of activities, such as a patient therapy, financial assistance, education, wellness, or fitness plan, offered to participants by an employer or insurer.
-   **[CareProgramEnrollee](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramenrollee.htm)**
    Represents a participant enrolled in a care program.
-   **[CareProgramProduct](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramproduct.htm)**
    Represents the affiliation between a care program and a care program product, care program provider, or both.
-   **[CoverageBenefit](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefit.htm)**
    Represents the benefits provided to a covered member by a purchaser’s plan.
-   **[CoverageBenefitItem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefititem.htm)**
    Specific service covered by the insurance plan. This object is available in API version 53.0 and later.
-   **[CoverageBenefitItemLimit](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefititemlimit.htm)**
    Allows you to track details associated with a specific benefit as it relates to expenditures, limits, coverage levels, eligibility, and exclusion. This object is available in API version 53.0 and later.
-   **[HealthcareProvider](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_healthcareprovider.htm)**
    Represents business-level details about the healthcare organization or the practitioner.
-   **[Medication](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_Medication.htm)**
    Represents detailed information about different medications. This object is available in API version 51.0 and later.
-   **[MedicationRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_MedicationRequest.htm)**
    Represents a request or order for the supply of medication, along with information about how it should be administered. This object is available in API version 51.0 and later.
-   **[MemberPlan](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_memberplan.htm)**
    Represents details about the insurance coverage for a member or subscriber.
-   **[PurchaserPlan](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_purchaserplan_bv.htm)**
    Represents the payer plan that a purchaser makes available to its members and members’ dependents.
-   **[UnitOfMeasure](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_unitofmeasure.htm)**
    Represents the unit of measures for care metrics and care observations. This object is available in API version 49.0 and later.

## Related Topics

- CareBenefitVerifyRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carebenefitverifyrequest.htm)
- CareProgram (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogram.htm)
- CareProgramEnrollee (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramenrollee.htm)
- CareProgramProduct (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprogramproduct.htm)
- CoverageBenefit (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefit.htm)
- CoverageBenefitItem (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefititem.htm)
- CoverageBenefitItemLimit (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefititemlimit.htm)
- HealthcareProvider (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_healthcareprovider.htm)
- Medication (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_Medication.htm)
- MedicationRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_MedicationRequest.htm)
