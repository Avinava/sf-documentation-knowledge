---
title: "Coverage Requirement Discovery"
domain: health-cloud-object-reference
topic: coverage-requirement-discovery
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:33.980Z
estimatedTokens: 1082
keywords: [Coverage, Requirement, Discovery, Payer, organizations, healthcare, industry, FHIR-aligned, CRD, data, model, help, providers, access, member]
---

# Coverage Requirement Discovery

> Payer organizations in the healthcare industry can use the FHIR-aligned Coverage
  Requirement Discovery (CRD) data model to help providers access member and coverage-related
  information in real time, directly from their Electronic Health Records (EHR) system. The
  automation of coverage requirement discovery reduces time spent on administrative tasks, improves
  the chances of coverage approval, and helps in reducing human errors.

# Coverage Requirement Discovery

Payer organizations in the healthcare industry can use the FHIR-aligned Coverage Requirement Discovery (CRD) data model to help providers access member and coverage-related information in real time, directly from their Electronic Health Records (EHR) system. The automation of coverage requirement discovery reduces time spent on administrative tasks, improves the chances of coverage approval, and helps in reducing human errors.

| Available in: Enterprise and Unlimited editions of Health Cloud |
| --- |


When a provider submits a coverage requirement discovery request, you can use the CRD data model to validate the member and their coverage, assess the need for pre-authorization, and check the required documentation.

Coverage Requirement Discovery objects are available to users with the Hls Clinical Decision Support permission set.

![Coverage Requirement Discovery Diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fsforce_hc_crd_erd.png&folder=health_cloud_object_reference)

-   **[ServiceInfoRequestDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceinforequestdetail.htm)**
    Represents additional details about a service information request, such as the detail type and detail code. This object is available in API version 63.0 and later.
-   **[ServiceInformationRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceinformationrequest.htm)**
    Represents information about a service information request, such as the date and time when the request was submitted and the type of service requested. This object is available in API version 63.0 and later.
-   **[ServiceInformationResponse](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceinformationresponse.htm)**
    Represents a response to a service information request. This object is available in API version 63.0 and later.
-   **[ServiceInfoResponseAction](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceinforesponseaction.htm)**
    Represents actions to be performed as suggested by a service information response. This object is available in API version 63.0 and later.
-   **[ServiceInfoResponseCoverage](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceinforesponsecoverage.htm)**
    Represents coverage details about a service information response. For example, if additional information or documentation is required for the coverage to be provided. This object is available in API version 63.0 and later.
-   **[SvcInfoRespCoverageDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_svcinforespcoveragedetail.htm)**
    Represents additional coverage details about a service information response. This object is available in API version 63.0 and later.
-   **[ServiceInfoRespOvrideOpt](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceinforespovrideopt.htm)**
    Represents the possible reasons for overriding a service information response. This object is available in API version 63.0 and later.
-   **[ServiceInfoRespResourceUrl](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceinforespresourceurl.htm)**
    Represents the URLs of resources relevant to a service information response. This object is available in API version 63.0 and later.
-   **[ServiceInfoRespSuggestion](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceinforespsuggestion.htm)**
    Represents suggestions in a service information response. For example, suggesting a change in medication dosage. This object is available in API version 63.0 and later.
-   **[SvcInfoRelatedQuestionnaire](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_svcinforelatedquestionnaire.htm)**
    Represents the questionnaire associated with a service information request or service information response coverage. This object is available in API version 63.0 and later.

## Related Topics

- ServiceInfoRequestDetail (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceinforequestdetail.htm)
- ServiceInformationRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceinformationrequest.htm)
- ServiceInformationResponse (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceinformationresponse.htm)
- ServiceInfoResponseAction (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceinforesponseaction.htm)
- ServiceInfoResponseCoverage (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceinforesponsecoverage.htm)
- SvcInfoRespCoverageDetail (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_svcinforespcoveragedetail.htm)
- ServiceInfoRespOvrideOpt (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceinforespovrideopt.htm)
- ServiceInfoRespResourceUrl (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceinforespresourceurl.htm)
- ServiceInfoRespSuggestion (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceinforespsuggestion.htm)
- SvcInfoRelatedQuestionnaire (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_svcinforelatedquestionnaire.htm)
