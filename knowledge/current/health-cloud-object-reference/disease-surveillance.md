---
title: "Disease Surveillance"
domain: health-cloud-object-reference
topic: disease-surveillance
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:34.040Z
estimatedTokens: 782
keywords: [Disease, Surveillance, tracks, manages, data, health, activities, model, centralize, patient, including, demographics, disability, status, medications]
---

# Disease Surveillance

> Disease Surveillance tracks and manages disease data and public health activities. Use
                the Disease Surveillance data model to centralize patient information, including
                demographics, disability status, medications, and specimens. Streamline health
                monitoring and enable timely, informed decision making by gaining a comprehensive
                view of disease-related data, such as definitions, investigations, and
                outbreaks.

# Disease Surveillance

Disease Surveillance tracks and manages disease data and public health activities. Use the Disease Surveillance data model to centralize patient information, including demographics, disability status, medications, and specimens. Streamline health monitoring and enable timely, informed decision making by gaining a comprehensive view of disease-related data, such as definitions, investigations, and outbreaks.

| Available in: Lightning ExperienceAvailable in: Enterprise and Unlimited Editions with Health Cloud |
| --- |


To use this data model, go to Setup and enable **Disease Surveillance** on the Public Health Settings page.

![Diagram of the disease surveillance data model showing object relationships](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fhc_disease_surveillance_erd.png&folder=health_cloud_object_reference)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/disease-surveillance.html "HTML (New Window)").

-   **[DiseaseDefinition](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_diseasedefinition.htm)**
    Represents a disease definition that public health organizations regularly monitor to identify and prevent outbreaks. This object is available in API version 64.0 and later.
-   **[DiseaseDefinitionCondition](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_diseasedefinitioncondition.htm)**
    Represents a condition for disease definition criteria. This object is available in API version 64.0 and later.
-   **[DiseaseDefinitionCriteria](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_diseasedefinitioncriteria.htm)**
    Represents disease definition criteria, such as clinical, laboratory, and epidemiologic linkage used to diagnose diseases. This object is available in API version 64.0 and later.
-   **[DiseaseInvestigation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_diseaseinvestigation.htm)**
    Represents an investigation of a disease. This object is available in API version 64.0 and later.
-   **[DiseaseInvestigationCase](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_diseaseinvestigationcase.htm)**
    Represents a junction between a disease investigation and a case. This object is available in API version 64.0 and later.
-   **[DiseaseOutbreak](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_diseaseoutbreak.htm)**
    Represents a disease outbreak monitored by the public health organization. This object is available in API version 64.0 and later.
-   **[DocumentExtractionRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_documentextractionrequest.htm)**
    Represents a request to extract documents. This object is available in API version 63.0 and later.

## Related Topics

- DiseaseDefinition (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_diseasedefinition.htm)
- DiseaseDefinitionCondition (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_diseasedefinitioncondition.htm)
- DiseaseDefinitionCriteria (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_diseasedefinitioncriteria.htm)
- DiseaseInvestigation (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_diseaseinvestigation.htm)
- DiseaseInvestigationCase (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_diseaseinvestigationcase.htm)
- DiseaseOutbreak (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_diseaseoutbreak.htm)
- DocumentExtractionRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_documentextractionrequest.htm)
