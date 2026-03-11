---
title: "AI Accelerator Standard Objects"
domain: omnistudio
topic: ai-accelerator-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:07.526Z
keywords: [Accelerator, Standard, Objects]
---

# AI Accelerator Standard Objects

# AI Accelerator Standard Objects

Use the standard objects to configure your use case by defining the feature extractor, the machine learning model, and the objects and fields for saving the prediction results for your use case.

| Available in: Lightning Experience |
| --- |
| Available when the admin settings for AI Accelerator and for the product related to the use case are enabled. The Salesforce org must have the CRM Plus license and the product’s CRM license. |
  

-   **[AIFeatureExtractor](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_aifeatureextractor.htm)**  
    Represents information about the feature extractor that’s used to extract the input data required for making predictions.This object is available in API version 55.0 and later.
-   **[AIUsecaseDefinition](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_aiusecasedefinition.htm)**  
    Represents a collection of fields to set up the use case for which real-time predictions are to be made. This object is available in API version 55.0 and later.
-   **[AIUsecaseFieldMapping](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_aiusecasefieldmapping.htm)**  
    Represents information about the field mapping that’s used to save extracted features, prediction scores, insights about the predictions, and suggestions to improve the prediction scores. This object is available in API version 55.0 and later.
-   **[AIUsecaseModel](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_aiusecasemodel.htm)**  
    Represents information about the machine learning models that generate predictions for your use case. This object is available in API version 55.0 and later.