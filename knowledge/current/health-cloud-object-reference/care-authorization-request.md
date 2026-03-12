---
title: "Care Authorization Request"
domain: health-cloud-object-reference
topic: care-authorization-request
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.434Z
estimatedTokens: 438
keywords: [Care, Authorization, Output, services, review]
---

# Care Authorization Request

> Output of create or update request for care services
    review.

# Care Authorization Request

Output of create or update request for care services review.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| careDiagnoses | Care Diagnoses[] | A list of associated diagnoses including code type, name, and description. One or more care diagnoses can be associated with a care request. | Big, 46.0 | 46.0 |
| careRequest | Care Request | The general details of a care-related request including member information, admission date, decision reason, and so on. A single request can contain multiple diagnoses, services, or drugs. Care requests include prior authorizations for drugs and services, admission notifications, concurrent review of admissions, appeals, complaints, and grievances. | Big, 46.0 | 46.0 |
| careRequestCase | Care Request Case | Case related to the care request. | Big, 46.0 | 46.0 |
| careRequestDrugs | Care Request Drug[] | A list of requested drugs including name, strength, frequency, and instructions for administration. One or more drug requests can be associated with a care request. | Big, 46.0 | 46.0 |
| careRequestItems | Care Request Item[] | A list of care request items containing name, modifiers, and the effective date. One or more care service requests can be associated with a care request. | Big, 46.0 | 46.0 |
| patient | Patient | The patient for whom the request is raised. | Big, 46.0 | 46.0 |
| subscriber | Subscriber | The primary member on the plan. | Big, 46.0 | 46.0 |
| tracked​Communications | Tracked Communication​ Output[] | A list of tracked communications for a care request. | Big, 57.0 | 57.0 |
| transportLocations | Transport Locations[] | Transport location output. | Big, 46.0 | 46.0 |

## Related Topics

- Care Diagnoses (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_diagnosis_output.htm)
- Care Request (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_request_output.htm)
- Care Request
                Case (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_case_output.htm)
- Care Request
                Drug (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_request_drug_output.htm)
- Care Request
                Item (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_request_item_output.htm)
- Patient (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_patient_output.htm)
- Subscriber (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_subscriber_output.htm)
- Tracked Communication​ Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_tracked_communication_output.htm)
- Transport
                Locations (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_transport_location_output.htm)
