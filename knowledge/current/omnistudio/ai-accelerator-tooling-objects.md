---
title: "AI Accelerator Tooling  Objects"
domain: omnistudio
topic: ai-accelerator-tooling-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:46.434Z
estimatedTokens: 513
keywords: [Accelerator, Tooling, Objects, API, metadata, developer, access, REST, SOAP, API’s, SOQL, capabilities, allow, retrieve, smaller]
---

# AI Accelerator Tooling  Objects

> Tooling API exposes metadata used in developer tooling that you can
   access through REST or SOAP. Tooling API’s SOQL capabilities for many metadata types allow you to
   retrieve smaller pieces of metadata. For more information about Tooling API objects and to find a
   complete reference of all the supported objects, see Introducing Tooling
  API.

# AI Accelerator Tooling Objects

Tooling API exposes metadata used in developer tooling that you can access through REST or SOAP. Tooling API’s SOQL capabilities for many metadata types allow you to retrieve smaller pieces of metadata. For more information about Tooling API objects and to find a complete reference of all the supported objects, see [Introducing Tooling API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_api_tooling.htm "HTML (New Window)").

| Available in: Lightning Experience |
| --- |
| Available when the admin settings for AI Accelerator and for the product related to the use case are enabled. The Salesforce org must have the CRM Plus license and the product’s CRM license. |


-   **[AIFeatureExtractor](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_aifeatureextractor.htm)**
    Represents information about the feature extractor that’s used to extract the data required by the machine learning model for making predictions. This object is available in API version 55.0 and later.
-   **[AIUsecaseDefinition](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_aiusecasedefinition.htm)**
    Represents a collection of fields that are used to set up the use case for which real-time predictions are to be made. This object is available in API version 55.0 and later.
-   **[AIUsecaseFieldMapping](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_aiusecasefieldmapping.htm)**
    Represents information about the field mapping that’s used to save the extracted features, scores, insights, and recommendations for a prediction. This object is available in API version 55.0 and later.
-   **[AIUsecaseModel](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_aiusecasemodel.htm)**
    Represents information about the object that stores the machine learning models that generate predictions for use cases. This object is available in API version 55.0 and later.

## Related Topics

- AIFeatureExtractor (atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_aifeatureextractor.htm)
- AIUsecaseDefinition (atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_aiusecasedefinition.htm)
- AIUsecaseFieldMapping (atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_aiusecasefieldmapping.htm)
- AIUsecaseModel (atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_aiusecasemodel.htm)
