---
title: "HealthCloudExt Namespace for Benefit Verification"
domain: health-cloud-object-reference
topic: healthcloudext-namespace-for-benefit-verification
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:32.699Z
estimatedTokens: 599
namespace: HealthCloudExt
keywords: [HealthCloudExt, Benefit, Verification, classes, Health, Cloud, integrate, source, electronic, records, EHR, system]
---

# HealthCloudExt Namespace for Benefit Verification

> The HealthCloudExt namespace provides an
    interface and classes for Health Cloud to integrate with a source electronic health records
    (EHR) system.

**Namespace:** `HealthCloudExt`

# HealthCloudExt Namespace for Benefit Verification

The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.

Integrate benefit verification into the end-to-end patient access workflow to help caregivers and patients reduce the time and effort it takes to find out what coverage is available under each patient's health benefits.

The HealthCloudExt namespace includes these classes and interface.

-   **[BenefitsItem Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItem.htm#apex_class_healthcloudext_BenefitsItem)**
    Specific service covered by the insurance plan.
-   **[BenefitsItemLimit Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm#apex_class_healthcloudext_BenefitsItemLimit)**
    Services not covered, or expenditures required for coverage.
-   **[BenefitsVerificationRequest Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm#apex_class_healthcloudext_BenefitsVerificationRequest)**
    Request for verification of benefits.
-   **[BenefitsVerificationResponse Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm#apex_class_healthcloudext_BenefitsVerificationResponse)**
    Response for verification of benefits.
-   **[IBenefitsVerificationInterOp Interface](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_IBenefitsVerificationInterOp.htm#apex_interface_healthcloudext_IBenefitsVerificationInterOp)**
    Contains default Apex implementation for verification of benefits.

#### See Also

-   [Health Cloud Administration Guide: Connect to a Benefit Verification Service](https://help.salesforce.com/articleView?id=ind.admin_benefit_verification_setup.htm&type=5&language=en_US)

-   [Benefits Verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_benefits_verification_data_model.htm "The benefits verification data model supports providers, payers, and life sciences organizations in determining benefits coverage for services and products provided.")

## Related Topics

- BenefitsItem Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItem.htm)
- BenefitsItemLimit Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm)
- BenefitsVerificationRequest Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm)
- BenefitsVerificationResponse Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm)
- IBenefitsVerificationInterOp Interface (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_IBenefitsVerificationInterOp.htm)
- Benefits Verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_benefits_verification_data_model.htm)
