---
title: "Utilization Management"
domain: health-cloud-object-reference
topic: utilization-management
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:35.038Z
estimatedTokens: 1283
keywords: [Utilization, Management, health, insurance, plan's, process, interfacing, plan, members, contracted, medical, providers, interpret, administer, explain]
---

# Utilization Management

> Utilization Management (UM) is a health insurance plan's process of interfacing with
  plan members and contracted medical providers to interpret, administer, and explain the medical
  policies of the health plan. Health Cloud provides objects you can use to review and evaluate
  medical care services, communicate about clinical policies, and help health plan members ensure
  they receive the right care in the right setting at the right time.

# Utilization Management

Utilization Management (UM) is a health insurance plan's process of interfacing with plan members and contracted medical providers to interpret, administer, and explain the medical policies of the health plan. Health Cloud provides objects you can use to review and evaluate medical care services, communicate about clinical policies, and help health plan members ensure they receive the right care in the right setting at the right time.

| Available in: Lightning ExperienceAvailable in: Enterprise and Unlimited Editions with Health Cloud |
| --- |


Utilization Management uses objects in the Discovery Framework data model. To learn more about the Discovery Framework objects, see [Discovery Framework Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/discovery_framework_standard_objects.htm).

![Diagram of the Utilization Management data model showing the object relationships](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fhc_utilization_mgmt_ERD.png&folder=health_cloud_object_reference)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/utilization-management.html "HTML (New Window)").

-   **[CareDiagnosis](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carediagnosis.htm)**
    Represents the details of a diagnosis including code type, name, and description. One or more care diagnoses can be associated with a care request.
-   **[CareProcessingError](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprocessingerror.htm)**
    Stores information on processing errors sent from payer to provider on a member’s authorization request. This object is available in API version 58.0 and later.
-   **[CareRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carerequest.htm)**
    Represents the general details of a care-related request including member information, admission date, decision reason, and so on. A single request can contain multiple diagnoses, services, or drugs. Care requests include preauthorizations for drugs and services, admission notifications, concurrent review of admissions, appeals, complaints, and grievances.
-   **[CareRequestDrug](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carerequestdrug.htm)**
    Represents the details of a requested drug including name, strength, frequency, and instructions for administration. One or more drug requests can be associated with a care request.
-   **[CareRequestExchangeInfo](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carerequestexchangeinfo.htm)**
    Represents information about a care request exchange. This object is available in API version 63.0 and later.
-   **[CareRequestExtension](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carerequestextension.htm)**
    Represents extra details for a care request such as the subscriber details for the member's health plan, home healthcare status, and ambulance transportation details.
-   **[CareRequestItem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carerequestitem.htm)**
    Represents the details of a care service request, including name, modifiers, and the effective date. One or more care service requests can be associated with a care request.
-   **[CareRequestReviewer](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carerequestreviewer.htm)**
    Represents the details of a care request reviewer including name, reviewer type, status of the care request at the end of the review, the reviewer’s notes, and date of review. A care request, care request item, care request drug, or care diagnosis can be associated with a care request reviewer. This object is available in API version 52.0 and later.
-   **[CareRequestSupportingCntnt](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carerequestsupportingcntnt.htm)**
    Represents details about supporting content of a care request such as assessments or content documents. This object is available in API version 63.0 and later.
-   **[TrackedCommunication](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_trackedcommunication.htm)**
    Stores information request or communication details sent from payer to provider on a member’s authorization request. This object is available in API version 57.0 and later.
-   **[TrackedCommunicationDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_trackedcommunicationdetail.htm)**
    Stores additional information associated with TrackedCommunication records. This object is available in API version 57.0 and later.

## Related Topics

- CareDiagnosis (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carediagnosis.htm)
- CareProcessingError (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careprocessingerror.htm)
- CareRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carerequest.htm)
- CareRequestDrug (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carerequestdrug.htm)
- CareRequestExchangeInfo (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carerequestexchangeinfo.htm)
- CareRequestExtension (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carerequestextension.htm)
- CareRequestItem (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carerequestitem.htm)
- CareRequestReviewer (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carerequestreviewer.htm)
- CareRequestSupportingCntnt (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carerequestsupportingcntnt.htm)
- TrackedCommunication (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_trackedcommunication.htm)
