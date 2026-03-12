---
title: "Care Requests List Input"
domain: life-sciences-dev-guide
topic: care-requests-list-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.229Z
estimatedTokens: 92
keywords: [Care, Requests, Input, authorization]
---

# Care Requests List Input

> A list of care authorization requests.

# Care Requests List Input

A list of care authorization requests.

Root XML tag

<careRequestsList>

JSON Schema

```

```

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| careRequestsList | Care Authorization Request Input[] | List of Care Requests to be created or updated. (Up to 25 items.) | Yes | 46.0 |

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

- Care Authorization Request Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_care_authorization_request_input.htm)
