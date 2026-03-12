---
title: "Health Cloud Tooling API Objects"
domain: health-cloud-object-reference
topic: health-cloud-tooling-api-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.016Z
estimatedTokens: 1420
keywords: [Health, Cloud, Tooling, API, Objects, metadata, developer, access, REST, SOAP, API’s, SOQL, capabilities, allow, retrieve]
---

# Health Cloud Tooling API Objects

> Tooling API exposes metadata used in developer tooling that
        you can access through REST or SOAP. Tooling API’s SOQL capabilities for many metadata types
        allow you to retrieve smaller pieces of metadata. For more information about Tooling API
        objects and to find a complete reference of all the supported objects, see Introducing Tooling API.

# Health Cloud Tooling API Objects

Tooling API exposes metadata used in developer tooling that you can access through REST or SOAP. Tooling API’s SOQL capabilities for many metadata types allow you to retrieve smaller pieces of metadata. For more information about Tooling API objects and to find a complete reference of all the supported objects, see **[Introducing Tooling API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_api_tooling.htm)**.

-   **[ApptBookingConfig](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_apptbookingconfig.htm)**
    Represents a collection of fields to set up appointment scheduling. This object is available in API version 52.0 and later.
-   **[ApptBookingUrlConfig](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_apptbookingurlconfig.htm)**
    Represents a collection of fields used to set up the URL paths for appointment scheduling endpoints. This object is available in API version 52.0 and later.
-   **[AssessmentConfiguration](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_assessmentconfiguration.htm)**
    Represents a configuration for Assessment component. An AssessmentConfiguration entry indicates configuration for user flows such as sending out emails or reminder actions on assessments initiated by the patient. This object is available in API version 58.0 and later.
-   **[CareBenefitVerifySettings](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_carebenefitverifysettings.htm)**
    Configuration settings for benefit verification requests. This object is available in API version 53.0 and later.
-   **[CareLimitType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_carelimittype.htm)**
    Defines the characteristics of limits on benefit provision. This object is available in API version 53.0 and later.
-   **[CareProviderAfflRoleConfig](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_careproviderafflroleconfig.htm)**
    Represents information about the affiliations of the healthcare provider. For example, this object represents an affiliation between a healthcare provider and a hospital. This object is available in API version 59.0 and later.
-   **[CareProviderSearchConfig](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_careprovidersearchconfig.htm)**
    Represents fields that can appear in provider search results. Use this object to specify fields in arbitrary objects (source) that are made available in the search object (target). This object is available in API version 48.0 and later.
-   **[CareRequestConfiguration](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_carerequestconfiguration.htm)**
    Represents the details for a record type such as service request, drug request, or admission request. One or more record types can be associated with a care request.
-   **[CareSystemFieldMapping](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_caresystemfieldmapping.htm)**
    Represents a mapping from fields in external source systems to Salesforce target entities and attributes
-   **[IdentityVerificationProcDef](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_identityverificationprocdef.htm)**
    Represents the definition of the identity verification process. This object is available in API version 54.0 and later.
-   **[IdentityVerificationProcDtl](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_identityverificationprocdtl.htm)**
    Used to configure the search function as well as the minimum number of verifiers for the identity verification process. Available in API version 54.0 and later.
-   **[IdentityVerificationProcFld](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_identityverificationprocfld.htm)**
    Used to configure the questions or criteria for verifying the identity of a caller. This object is available in API version 54.0 and later.
-   **[ScoreCategory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_scorecategory.htm)**
    Represents the categories that are scored in a unified health profile. This object is available in API version 55.0 and later.
-   **[ScoreCategoryCalcInsight](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_scorecategorycalcinsight.htm)**
    Represents how a score category in Unified Health Scoring is mapped to a calculated insight in Salesforce CDP. Use this object only if you use CDP to calculate scores for Unified Health Scoring. This object is available in API version 55.0 and later.
-   **[ScoreRangeClassification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_scorerangeclassification.htm)**
    Represents the different score ranges of a score category and how scores in those ranges are classified or interpreted. This object is available in API version 55.0 and later.
-   **[TimelineObjectDefinition](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_timelineobjectdefinition.htm)**
    Stores timeline configurations. This object is available in API version 55.0 and later.

## Related Topics

- ApptBookingConfig (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_apptbookingconfig.htm)
- ApptBookingUrlConfig (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_apptbookingurlconfig.htm)
- AssessmentConfiguration (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_assessmentconfiguration.htm)
- CareBenefitVerifySettings (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_carebenefitverifysettings.htm)
- CareLimitType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_carelimittype.htm)
- CareProviderAfflRoleConfig (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_careproviderafflroleconfig.htm)
- CareProviderSearchConfig (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_careprovidersearchconfig.htm)
- CareRequestConfiguration (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_carerequestconfiguration.htm)
- CareSystemFieldMapping (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_caresystemfieldmapping.htm)
- IdentityVerificationProcDef (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_identityverificationprocdef.htm)
