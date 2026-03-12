---
title: "Predecessors to Code Sets and Code Set Bundles in Health Cloud"
domain: health-cloud-object-reference
topic: predecessors-to-code-sets-and-code-set-bundles-in-health-cloud
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.976Z
estimatedTokens: 570
keywords: [Predecessors, Code, Bundles, Health, Cloud, Spring, ’21, release, Healthcare, Procedure, Diagnosis, objects, stored, codes, specifically]
---

# Predecessors to Code Sets and Code Set Bundles in Health Cloud

> Before the Spring ’21 release, the Healthcare Procedure and Healthcare Diagnosis objects
  stored codes specifically related to procedures and diagnoses. These codes were used for
  prior-authorization requests and approval processes. Since the Spring’21 release, Health Cloud
  uses the Code Set and Code Set Bundle objects for this purpose instead.

# Predecessors to Code Sets and Code Set Bundles in Health Cloud

Before the Spring ’21 release, the Healthcare Procedure and Healthcare Diagnosis objects stored codes specifically related to procedures and diagnoses. These codes were used for prior-authorization requests and approval processes. Since the Spring’21 release, Health Cloud uses the Code Set and Code Set Bundle objects for this purpose instead.

| Available in: Lightning ExperienceAvailable in: Enterprise and Unlimited Editions with Health Cloud |
| --- |


The Code Set and Code Set Bundle objects improve on the old objects by adding support for terminology system information. This added support comes in the form of the Source System and Version fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

Objects, flows, and apps that previously used Healthcare Diagnosis and Healthcare Procedure have been or will be extended to support the use of Code Set and Code Set Bundle. Healthcare Diagnosis and Healthcare Procedure are to be gradually phased out with future releases.

-   **[HealthCareDiagnosis](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_healthcarediagnosis.htm)**
    Represents information related to industry-standard healthcare diagnosis codes. Before the Spring ’21 release, the Healthcare Procedure and Healthcare Diagnosis objects stored codes specifically related to procedures and diagnoses. These codes were used for prior-authorization requests and approval processes. Since the Spring’21 release, Health Cloud uses the Code Set and Code Set Bundle objects for this purpose instead.
-   **[HealthCareProcedure](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_healthcareprocedure.htm)**
    Represents information related to industry-standard healthcare procedure codes. Before the Spring ’21 release, the Healthcare Procedure and Healthcare Diagnosis objects stored codes specifically related to procedures and diagnoses. These codes were used for prior-authorization requests and approval processes. Since the Spring’21 release, Health Cloud uses the Code Set and Code Set Bundle objects for this purpose instead.

## Related Topics

- HealthCareDiagnosis (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_healthcarediagnosis.htm)
- HealthCareProcedure (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_healthcareprocedure.htm)
