---
title: "Care Services Review and Response"
domain: health-cloud-object-reference
topic: care-services-review-and-response
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:33.960Z
estimatedTokens: 909
keywords: [Care, Services, Review, RESTful, APIs, support, data, elements, ANSI, X12, Health, referred, Authorization, they, enable]
---

# Care Services Review and Response

> These RESTful APIs support data elements required for ANSI X12 278 format Health Care
  Services Review and Response. Also referred to as ANSI 278 Authorization APIs, they enable payer
  organizations to electronically receive prior authorization requests and referral requests from
  providers. Other users of these APIs can be healthcare providers, payers, plan sponsors, or other
  entities involved in health care services review, such as clearinghouses.

# Care Services Review and Response

These RESTful APIs support data elements required for ANSI X12 278 format Health Care Services Review and Response. Also referred to as ANSI 278 Authorization APIs, they enable payer organizations to electronically receive prior authorization requests and referral requests from providers. Other users of these APIs can be healthcare providers, payers, plan sponsors, or other entities involved in health care services review, such as clearinghouses.


| User Permissions Needed |
| --- |
| To access care services APIs | Health Cloud Utilization Management Permission Set |

These APIs facilitate communication between two parties for the following cases:

-   Appeals
-   Drug Requests
-   Admissions
-   Healthcare Service Requests
-   Referrals
-   Complaints
-   Grievances

[Care Services Review Requests (PATCH)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_create_update_care_services_review.htm "Update care services review requests or update existing requests.")

Depending on the type of care service review request (drug request, prior authorization, and so on), and the content of the request body, this API creates one or more records for Case, CareRequest, CareRequestExtension, CareRequestDrug, CareRequestItem, or CareRequestDiagnosis..

The following diagram shows what happens when you make a POST request to this API, to create a care services review request.

![Diagram explaining what happens when a care services review request is triggered.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fhc_care_services_diagram.png&folder=health_cloud_object_reference)

[Care Services Review Requests (GET)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_get_care_services.htm "Get details of existing care services review requests.")

You can get Care Services Review Response for one or more care service review requests, by either using their Salesforce IDs or external source system IDs. Use section query parameter to have granular filters. Some examples of valid values in section are, Subscriber, Patient, CareDiagnoses, CareRequestItems, CareRequestDrugs, TransportLocations, CareRequest, or CareRequestCase.

-   **[Care Services Review Resources](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_resource_care_services_review.htm)**
    Use these resources to create or update care services review requests, or get information about the status of existing requests.

#### See Also

-   [*Salesforce Help*: Handle Care Requests with Utilization Management](https://help.salesforce.com/articleView?id=utilization_management.htm&language=en_US "Salesforce Help: Handle Care Requests with Utilization Management - HTML (New Window)")

-   [*Salesforce Help*: What is a Care Request?](https://help.salesforce.com/articleView?id=care_request.htm&language=en_US "Salesforce Help: What is a Care Request? - HTML (New Window)")

-   [*Salsforce Help*: How Are Care Requests Reviewed?](https://help.salesforce.com/articleView?id=utilization_management_types.htm&language=en_US "Salsforce Help: How Are Care Requests Reviewed? - HTML (New Window)")

-   [ANSI X12 278 - Request for Review and Response Examples](http://www.x12.org/examples/005010X217/ "ANSI X12 278 - Request for Review and Response Examples - HTML (New Window)")

-   [*Salesforce Help*: Enable Person Accounts](https://help.salesforce.com/articleView?id=account_person_enable.htm&language=en_US "Salesforce Help: Enable Person Accounts - HTML (New Window)")

## Related Topics

- Care Services Review Requests (PATCH) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_create_update_care_services_review.htm)
- Care Services Review Requests (GET) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_get_care_services.htm)
- Care Services Review Resources (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_resource_care_services_review.htm)
