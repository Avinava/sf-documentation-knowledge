---
title: "HomeHealth"
domain: health-cloud-object-reference
topic: homehealth
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.347Z
estimatedTokens: 666
keywords: [HomeHealth, Apex, implementation, Manual, Scheduling, healthcare, appointments]
---

# HomeHealth

> Contains Apex implementation for Manual Scheduling for healthcare
            appointments.

# HomeHealth

Contains Apex implementation for Manual Scheduling for healthcare appointments.

## Namespace

[healthcloudext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

-   **[GroupVisitAddress Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_healthcloudext_group_visit_address.htm)**
    Represents the details of the group visit address.
-   **[HomeVisitDetails Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_healthcloudext_Home_Visit_Details.htm)**
    Represents the details of the home visit requests. Once the scheduler approves the visit requests submitted by the patient or the quote requests submitted by the care coordinator, use this Apex class to retrieve the home visit details.
-   **[HomeVisitPatientBenefitDetails Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_healthcloudext_home_visit_patient_benefit_details.htm)**
    Represents the home visit details for storing benefit related data. This class is used in the Additional Benefits flow in Budget screen and Agent benefit review flow in Agentforce.
-   **[HomeVisitPatientQuoteDetails Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_healthcloudext_home_visit_patient_quote_details.htm)**
    Represents the home visit details for storing quote related data. This class is used in the Additional Quotes flow in Budget screen and Agent Quote review flow in Agentforce.
-   **[ResourceDetails Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_healthcloudext_HomeHealth_ResourceDetails.htm)**
    Represents the home visit details for manual scheduling of appointments. Once the scheduler has selected the recommended resources along with the time slot, it will schedule the appointment using this Apex class.
-   **[PricingAttribute Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_PricingAttribute.htm)**
    Represents the attribute key, attribute value, and a boolean indicating if the attribute is a picklist type for a product.
-   **[ProductPricingAttributeDetails Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_ProductPricingAttributeDetails.htm)**
    Represents details about a product's pricing attributes and their associated quantities.

## Related Topics

- healthcloudext (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- GroupVisitAddress Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_healthcloudext_group_visit_address.htm)
- HomeVisitDetails Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_healthcloudext_Home_Visit_Details.htm)
- HomeVisitPatientBenefitDetails Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_healthcloudext_home_visit_patient_benefit_details.htm)
- HomeVisitPatientQuoteDetails Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_healthcloudext_home_visit_patient_quote_details.htm)
- ResourceDetails Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_healthcloudext_HomeHealth_ResourceDetails.htm)
- PricingAttribute Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_PricingAttribute.htm)
- ProductPricingAttributeDetails Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_ProductPricingAttributeDetails.htm)
