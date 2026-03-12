---
title: "Health Cloud Developer Guide"
domain: health-cloud-object-reference
topic: health-cloud-developer-guide
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:35.861Z
estimatedTokens: 1342
keywords: [Health, Cloud, Developer, custom, objects, their, may, listed]
---

# Health Cloud Developer Guide

> This guide provides information on the custom objects used by Health Cloud and their
  fields. Some fields may not be listed for some objects.

# Health Cloud Developer Guide

This guide provides information on the custom objects used by Health Cloud and their fields. Some fields may not be listed for some objects.

| Available in: Lightning ExperienceAvailable in: Enterprise and Unlimited Editions with Health Cloud |
| --- |


-   **[Health Cloud Data Model](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects.htm)**
    Salesforce Health Cloud provides a rich set of objects to store and access specialized health information.
-   **[Health Cloud Fields on Standard Objects](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/health_custom_fields.htm)**
    Health Cloud adds standard and custom fields to some standard Salesforce objects to represent information about individuals. These fields are available only in orgs where Health Cloud is enabled.
-   **[Health Cloud Platform Events](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/health_platform_events_parent.htm)**
    Use the ApplnFormAppealStsChgEvnt platform event to notify subscribers when the status of the Financial Assistance Program’s appeal changes. Use the CareBnftVrfyRqstStsChgEvent platform event to notify subscribers when the status of care benefit verify request changes.
-   **[Working With Electronic Health Records](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hl7.htm)**
    HL7 (Health Level Seven) is a standard for exchanging electronic health records (EHR). You can parse EHR data transmitted via HL7 data messages and store it in Salesforce.
-   **[Emergency Response Management](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/erm_hc_dev_guide_overview.htm)**
    Use the objects, fields, and metadata that extend Salesforce for Emergency Response Management.
-   **[Apex Reference](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_apex_reference.htm)**
    This Apex reference goes into detail about the built-in Apex classes, interfaces, methods, or enums for Health Cloud.
-   **[Health Cloud Business APIs](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_business_apis.htm)**
    Use the Health Cloud Business APIs for building integrations with Health Cloud or for creating custom UI components. The APIs wrap complex business logic by executing multiple tasks within a single API call. They aim to fulfill business use cases specific to the healthcare industry, such as enrolling patients into a care program or creating requests for prior authorizations. To use these APIs, you are not required to understand the underlying healthcare data model. Most of the APIs are RESTful APIs, but a few are also available through Apex classes and methods.
-   **[Health Cloud Tooling API Objects](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_tooling_api_parent.htm)**
    Tooling API exposes metadata used in developer tooling that you can access through REST or SOAP. Tooling API’s SOQL capabilities for many metadata types allow you to retrieve smaller pieces of metadata. For more information about Tooling API objects and to find a complete reference of all the supported objects, see **[Introducing Tooling API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_api_tooling.htm)**.
-   **[Health Cloud Standard Invocable Actions](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_actions_parent.htm)**
    Manage healthcare facilities using invocable actions. For more information on standard invocable actions, see **[REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_actions_invocable_standard.htm)** and **[Actions Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_action.meta/api_action/actions_intro.htm)**.
-   **[Metadata Types](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_metadata_types.htm)**

-   **[Health Cloud FHIR APIs](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_fhir_apis_overview.htm)**
    Use Salesforce Healthcare API to securely connect and interact with a system that uses Fast Health Interoperability Resources (FHIR) APIs.
-   **[MuleSoft Direct Integrations](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_mulesoft_direct_integrations.htm)**
    Use the Salesforce integration apps that are out-of-the-box integration templates with pre-built transformations that can be used to integrate Health Cloud with external systems. These integration apps are available in MuleSoft Exchange.
-   **[API End-of-Life Policy](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_api_rest_eol.htm)**

-   **[Health Cloud Managed Package](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_dev_managed_package.htm)**
    Health Cloud originally started out as a managed package that was installed on the core Salesforce platform. Over the years, Health Cloud has gradually moved away from distributing new features through the managed packaged, and instead has built its features directly on the core Salesforce platform.

## Related Topics

- Health Cloud Data Model (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects.htm)
- Health Cloud Fields on Standard Objects (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/health_custom_fields.htm)
- Health Cloud Platform Events (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/health_platform_events_parent.htm)
- Working With Electronic Health Records (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hl7.htm)
- Emergency Response Management (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/erm_hc_dev_guide_overview.htm)
- Apex Reference (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_apex_reference.htm)
- Health Cloud Business APIs (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_business_apis.htm)
- Health Cloud Tooling API Objects (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_tooling_api_parent.htm)
- Health Cloud Standard Invocable Actions (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_actions_parent.htm)
- Metadata Types (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_metadata_types.htm)
