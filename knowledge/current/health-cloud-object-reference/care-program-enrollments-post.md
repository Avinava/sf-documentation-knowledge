---
title: "Care Program Enrollments (POST)"
domain: health-cloud-object-reference
topic: care-program-enrollments-post
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:33.963Z
estimatedTokens: 512
keywords: [Care, Program, Enrollments, POST, API, enroll, multiple, patients]
---

# Care Program Enrollments (POST)

> Use this API to enroll multiple patients in a care program.

# Care Program Enrollments (POST)

Use this API to enroll multiple patients in a care program.

A single API call creates both patient enrollment cards, and enrollee products for all the patients. You can enroll up to 200 patients in a single request.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Ensure that you have configured required care system field-mapping records for provider, patient, care program, and the product in **Setup** | **Care System Field Mappings**. For more information, see [CareSystemFieldMapping](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_caresystemfieldmapping.htm "Represents a mapping from source system fields to Salesforce target entities and attributes.").

-   **[Enrollments](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_resource_enroll-pantients.htm)**
    Enroll multiple patients into a care program.

#### See Also

-   [Care Program Management](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_care_program_data_model.htm "Drive increased adherence and improve patient outcomes using the care program management data model. Now you can enroll and manage patients to achieve the maximum impact of your programs.")

-   [Enrollments](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_resource_enroll-pantients.htm "Enroll multiple patients into a care program.")

-   [CareSystemFieldMapping](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_caresystemfieldmapping.htm "Represents a mapping from source system fields to Salesforce target entities and attributes.")

-   [*Salesforce Help*: Map External Program Fields to Health Cloud](https://help.salesforce.com/articleView?id=admin_config_care_system_field_mappings&language=en_US "Salesforce Help: Map External Program Fields to Health Cloud - HTML (New Window)")

## Related Topics

- CareSystemFieldMapping (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_caresystemfieldmapping.htm)
- Enrollments (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_resource_enroll-pantients.htm)
- Care Program Management (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_care_program_data_model.htm)
