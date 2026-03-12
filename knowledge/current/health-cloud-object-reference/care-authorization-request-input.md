---
title: "Care Authorization Request Input"
domain: health-cloud-object-reference
topic: care-authorization-request-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.799Z
estimatedTokens: 514
keywords: [Care, Authorization, Input]
---

# Care Authorization Request Input

> A complete care authorization request.

# Care Authorization Request Input

A complete care authorization request.

Root XML tag

<careAuthorization>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assessmentLinks | Assessment Links Input[] | The details of the associated assessments used as the supporting content. | Optional | 55.0 |
| careDiagnoses | Care Diagnosis Input[] | List of associated diagnosis including code type, name, and description. One or more care diagnoses can be associated with a care request. | Optional | 46.0 |
| careRequest | Care Request Input[] | The general details of a care-related request including member information, admission date, decision reason, and so on. A single request can contain multiple diagnoses, services, or drugs. Care requests include prior authorizations for drugs and services, admission notifications, concurrent review of admissions, appeals, complaints, and grievances. | Optional | 46.0 |
| careRequestDrugs | Care Request Drug Input[] | List of requested drug including name, strength, frequency, and instructions for administration. One or more drug requests can be associated with a care request. | Optional | 46.0 |
| careRequestItems | Care Request Item Input[] | The details of a care service request, including name, modifiers, and the effective date. One or more care service requests can be associated with a care request. | Optional | 46.0 |
| contentDocumentLinks | Documents Input[] | List of clinical documents to be attached as content document links to the prior authorization request. | Optional | 55.0 |
| careRequestCase | Care Request Case Input[] | Case related to the care request. | Optional | 46.0 |
| patient | Care Request Patient Input[] | The patient for whom the request is being raised. | Optional | 46.0 |
| subscriber | Care Request Subscriber Input[] | The primary member on the plan. | Optional | 46.0 |
| transportLocations | Transport Location Input[] | List of Transport Locations. | Optional | 46.0 |

## Code Examples

```
{
  "careRequestCase": {
    "caseOrigin": "Web",
    "subject": "Case No 10"
  },
  "contentDocumentLinks": [
    {
      "id": "069xx0000004CNZAA2"
    },
    {
      "id": "069xx0000004CNYAA2"
    }
  ],
  "assessmentLinks": [
    {
      "id": "0U3SG00000068Cb0AI"
    }
  ],
  "patient": {
    "lastName": "Fedex",
    "firstName": "Roger"
  },
  "careRequestItems": [
    {
      "name": "95810",
      "codeType": "CPT",
      "sourceSystem": "source_system_name",
      "codeDescription": "Dysuria",
      "sourceSystemIdentifier": "0015cmi",
      "quantity": "15"
    }
  ],
  "careRequestDrugs": [
    {
      "sourceSystem": "source_system_name",
      "daysSupply": "10",
      "frequency": "16",
      "name": "Metoprolol"
    }
  ],
  "careRequest": {
    "requestingPractitionerSpecialty": "Neurologist",
    "placeOfService": "InPatient",
    "sourceSystemIdentifier": "0015",
    "name": "Care Request 15",
    "requestingPractitionerLicense": "M.D",
    "sourceSystem": "source_system_name",
    "servicingPractitionerLicense": "M.D",
    "servicingPractitionerSpecialty": "Hospitalist",
    "recordType": "Complaint"
  },
  "careDiagnoses": [
    {
      "sourceSystem": "ajSource",
      "name": "G47.30",
      "codeDescription": "Sleep apnea, unspecified",
      "codeType": "ICD-10-CM"
    }
  ]
}
```

## Related Topics

- Assessment Links Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_assessment_links_input.htm)
- Care Diagnosis Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_care_diagnosis_input.htm)
- Care Request Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_care_request_input.htm)
- Care Request Drug Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_care_request_drug_input.htm)
- Care Request Item Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_care_request_item_input.htm)
- Documents Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_content_document_input.htm)
- Care Request Case Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_care_authorization_case_input.htm)
- Care Request Patient Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_care_authorization_patient_input.htm)
- Care Request Subscriber Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_subscriber_input.htm)
- Transport Location Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_transport_location_input.htm)
