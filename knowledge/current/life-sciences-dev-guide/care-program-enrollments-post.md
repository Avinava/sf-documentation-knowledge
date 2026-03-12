---
title: "Care Program Enrollments (POST)"
domain: life-sciences-dev-guide
topic: care-program-enrollments-post
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:42.941Z
estimatedTokens: 248
keywords: [Care, Program, Enrollments, POST, API, enroll, multiple, patients]
---

# Care Program Enrollments (POST)

> Use this API to enroll multiple patients in a care program.

# Care Program Enrollments (POST)

Use this API to enroll multiple patients in a care program.

A single API call creates both patient enrollment cards, and enrollee products for all the patients. You can enroll up to 200 patients in a single request.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Ensure that you have configured required care system field-mapping records for provider, patient, care program, and the product in **Setup** | **Care System Field Mappings**. For more information, see [CareSystemFieldMapping](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_caresystemfieldmapping.htm "Represents a mapping from source system fields to Salesforce target entities and attributes.").

-   **[Enrollments](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_resource_enroll-pantients.htm)**
    Enroll multiple patients into a care program.

## Related Topics

- CareSystemFieldMapping (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_caresystemfieldmapping.htm)
- Enrollments (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_resource_enroll-pantients.htm)
