---
title: "Benefits Verification"
domain: health-cloud-object-reference
topic: benefits-verification
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:33.947Z
estimatedTokens: 709
keywords: [Benefits, Verification, data, model, supports, providers, payers, life, sciences, organizations, determining, coverage, services, products, provided]
---

# Benefits Verification

> The benefits verification data model supports providers, payers, and life sciences
  organizations in determining benefits coverage for services and products provided.

# Benefits Verification

The benefits verification data model supports providers, payers, and life sciences organizations in determining benefits coverage for services and products provided.

| Available in: Lightning ExperienceAvailable in: Enterprise and Unlimited Editions with Health Cloud |
| --- |


The benefits verification objects are available to users with the Health Cloud and the Health Cloud Platform permission set licenses and the Health Foundation permission set. Available in API version 53.0 and later.

![Benefit verification entity relationship diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fbenefit_verification_erd.png&folder=health_cloud_object_reference)

-   **[CareBenefitVerifyRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carebenefitverifyrequest.htm)**
    Request for verification of benefits. This object is available in API version 53.0 and later.
-   **[CoverageBenefit](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefit.htm)**
    Represents the benefits provided to a covered member by a purchaser’s plan.
-   **[CoverageBenefitItem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefititem.htm)**
    Specific service covered by the insurance plan. This object is available in API version 53.0 and later.
-   **[CoverageBenefitItemLimit](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefititemlimit.htm)**
    Allows you to track details associated with a specific benefit as it relates to expenditures, limits, coverage levels, eligibility, and exclusion. This object is available in API version 53.0 and later.
-   **[MemberPlan](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_memberplan_bv.htm)**
    Represents details about the insurance coverage for a member or subscriber.
-   **[PurchaserPlan](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_purchaserplan_bv.htm)**
    Represents the payer plan that a purchaser makes available to its members and members’ dependents.

#### See Also

-   [Health Cloud Administration Guide: Connect to a Benefit Verification Service](https://help.salesforce.com/articleView?id=ind.admin_benefit_verification_setup.htm&type=5&language=en_US)

-   [HealthCloudExt Namespace for Benefit Verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext_benefit_verification.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

## Related Topics

- CareBenefitVerifyRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carebenefitverifyrequest.htm)
- CoverageBenefit (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefit.htm)
- CoverageBenefitItem (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefititem.htm)
- CoverageBenefitItemLimit (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefititemlimit.htm)
- MemberPlan (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_memberplan_bv.htm)
- PurchaserPlan (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_purchaserplan_bv.htm)
- HealthCloudExt Namespace for Benefit Verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext_benefit_verification.htm)
