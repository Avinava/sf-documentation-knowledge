---
title: "Social Determinants"
domain: life-sciences-dev-guide
topic: social-determinants
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.787Z
estimatedTokens: 538
keywords: [Social, Determinants, data, model, barriers, health, interventions, patient, member, API, version, 45.0, later]
---

# Social Determinants

> The social determinants data model represents the barriers, health determinants, and
  interventions for a patient or member. Available in API version 45.0 and later.

# Social Determinants

The social determinants data model represents the barriers, health determinants, and interventions for a patient or member. Available in API version 45.0 and later.

The social determinants standard objects are visible to users with the Health Cloud Starter permission set.

![Social determinants entity-relationship diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fsocial_determinants_ERD.png&folder=life_sciences_dev_guide)

-   **[CareBarrier](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carebarrier.htm)**
    Represents the circumstances or obstacles affecting a patient or member. Available in API version 45.0 and later.
-   **[CareBarrierDeterminant](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carebarrierdeterminant.htm)**
    Represents the relationship of a barrier to a determinant for a patient or member. Available in API version 45.0 and later.
-   **[CareBarrierType](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carebarriertype.htm)**
    Represents the standard, defined list of barriers maintained by an organization. Available in API version 45.0 and later.
-   **[CareDeterminant](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_caredeterminant.htm)**
    Represents the determinants of health for a patient such as availability of safe housing, adequate employment, or local food markets. Available in API version 45.0 and later.
-   **[CareDeterminantType](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_caredeterminanttype.htm)**
    Represents the standard, defined list of determinants of health maintained by an organization, including the domain and type. Available in API version 45.0 and later.
-   **[CareInterventionType](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careinterventiontype.htm)**
    Represents the standard, defined list of interventions maintained by an organization. Available in API version 45.0 and later.

## Related Topics

- CareBarrier (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carebarrier.htm)
- CareBarrierDeterminant (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carebarrierdeterminant.htm)
- CareBarrierType (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carebarriertype.htm)
- CareDeterminant (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_caredeterminant.htm)
- CareDeterminantType (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_caredeterminanttype.htm)
- CareInterventionType (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careinterventiontype.htm)
