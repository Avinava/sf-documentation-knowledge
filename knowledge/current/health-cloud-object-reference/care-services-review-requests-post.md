---
title: "Care Services Review Requests (POST)"
domain: health-cloud-object-reference
topic: care-services-review-requests-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.248Z
estimatedTokens: 312
keywords: [Care, Services, Review, Requests, POST]
---

# Care Services Review Requests (POST)

> Create care services review requests or update existing
            requests.

# Care Services Review Requests (POST)

Create care services review requests or update existing requests.

-   You must have Person Accounts enabled to use these APIs.
-   After enabling person accounts, enable name suffixes.
    1.  Navigate to **Setup** | **Customize** | **User Interface**.
    2.  In **Name Settings**, select **Enable Name Suffixes for Person Names** and save.
-   You can create or update up to 25 care services requests.

Resource

/services/data/vXX.X/connect/health/care-services

Available version

46.0

Authentication

Use OAuth to connect to Salesforce and get an access token. Pass the access token in your requests.

HTTP methods

POST

Request body for POST

Root XML tag

<careRequestsList>

JSON Schema

```

```

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| careRequestsList | Care Authorization Request Input[] | List of Care Requests to be created or updated. (Up to 25 items.) | Yes | 46.0 |

Response body for POST

[Care Authorization Request Result](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_request_result.htm "Response to create or update care services review request.")

## Code Examples

```
{
  "careRequestsList": [
    {
      "careRequestCase": {
        "caseOrigin": "Web"
      },
      "careRequest": {
        "recordType": "Admission",
        "authorizationRefIdentifier": "1234",
        "name": "Headache",
        "member": "001RM000005XHdbYAG",
        "memberPrimaryPlan": "0SqRM00000000Fp0AI",
        "caseSubStatus": "active",
        "servicingFacility": {
          "npi": "742963",
          "servicingFacilityId": "0klRM0000004CBnYAM"
        },
        "requestingPractitioner": {
          "npi": "11111",
          "healthCareProviderId": "0cmRM0000000tldYAA"
        }
      },
      "careRequestItems": [
        {
          "authApprovalIdentifier": "123",
          "authorizationRefIdentifier": "123",
          "name": "CRI Connect-1.0",
          "procedureCodeSet": "0hxxG0000008hKxxAI",
          "requestType": "Order",
          "priority": "Stat",
          "healthcareProcedureCode": "0XSxx000000SXxxA2",
          "reasonCode": "0hsRM00000003ytYAA",
          "servicingFacility": {
            "npi": "742963",
            "servicingFacilityId": "0klRM0000004CBnYAM"
          },
          "servicingProvider": {
            "npi": "11111",
            "healthCareProviderId": "0cmRM0000000tldYAA"
          },
          "clinicalServiceRequestId": "0jyRM0000004CAGYA2"
        }
      ],
      "careDiagnoses": [
        {
          "name": "CD Connect 1.0",
          "presentOnAdmission": "Yes",
          "diagnosisCodeSet": "0hsSG0000008hKjYAI",
          "healthcareDiagnosisCode": "0XNSG0000000PjB4AU",
          "healthConditionId": "0j4RM0000004Mk9YAE"
        }
      ],
      "careRequestDrugs": [
        {
          "name": "CRD Connect 1.0",
          "status": "Active",
          "statusReason": "Insufficient Information",
          "requestType": "Filler Order",
          "drugAdministrationSetting": "Inpatient",
          "priority": "Routine",
          "medicationRefObjectId": "0kmRM0000004CSeYAM",
          "authApprovalIdentifier": "123",
          "authorizationRefIdentifier": "123",
          "servicingFacility": {
            "npi": "742963",
            "servicingFacilityId": "0klRM0000004CBnYAM"
          },
          "servicingProvider": {
            "npi": "11111",
            "healthCareProviderId": "0cmRM0000000tldYAA"
          }
        }
      ],
      "assessmentLinks": [
          {
            "id": "0U3SG00000068Cb0AI"     
          },
      "patient": {
        "memberId": "001RM000005XHdbYAG",
        "lastName": "Green",
        "firstName": "Charles",
        "birthDate": "2001-10-26T21:32:52"
      }
    }
  ]
}
```

## Related Topics

- Care Authorization Request Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_care_authorization_request_input.htm)
- Care Authorization Request Result (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_request_result.htm)
