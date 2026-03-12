---
title: "Care Authorization Request Response"
domain: life-sciences-dev-guide
topic: care-authorization-request-response
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.628Z
estimatedTokens: 218
keywords: [Care, Authorization, Services, Review]
---

# Care Authorization Request Response

> The response body for the Care Services Review GET
    request.

# Care Authorization Request Response

The response body for the Care Services Review GET request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| careAuthorizationRequests | Care Authorization Request[] | A list of care authorization requests. | Small, 46.0 | 46.0 |
| errorMessage | String | If the parameters were invalid, this property contains the error message. | Small, 46.0 | 46.0 |
| isSuccess | Boolean | This flag indicates if the request was successful or not. | Small, 46.0 | 46.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

When you call the CareAuthorization GET API with the sectionNames attribute set, empty sections may appear in the response body. This is normal and can be ignored.

## Code Examples

```
{
  "careAuthorizationRequests": [
    {
      "careDiagnoses": [
        {
          "careRequestReviewers": [],
          "healthConditionId": "0j4RM0000004Mk9YAE",
          "id": "0VCRM0000004COJ4A2",
          "modifiedPrimaryDiagnosis": false,
          "name": "CD Connect 1.0",
          "presentOnAdmission": "Yes",
          "primary": false,
          "primaryDischargeDiagnosis": false
        }
      ],
      "careRequest": {
        "appointedRepresentative": {},
        "authorizationRefIdentifier": "1234",
        "careRequestReviewers": [],
        "caseSubStatus": "active",
        "extendedRequest": false,
        "firstReviewer": {},
        "generalPractitioner": {
          "generalPractitionerNpi": "1234"
        },
        "id": "0UmRM0000004HOG0A2",
        "initialDenialNotificationTime": "",
        "isIndependentReviewRequired": false,
        "isReadmission": false,
        "lastModifiedDate": "2022-11-29T15:39:56.000Z",
        "medicalDirector": {},
        "member": "001RM000005XHdbYAG",
        "memberPrimaryPlan": "Gold Plan",
        "originalDenialMedicalDirector": {},
        "reconsiderationDenialNotificationTime": "",
        "recordType": "Admission",
        "reopenedBy": {},
        "requestingPractitioner": {
          "healthCareProviderId": "0cmRM0000000tldYAA",
          "requestingPractitionerNpi": "742963"
        },
        "serviceorMedicationReceived": false,
        "servicingFacility": {
          "servicingFacilityId": "0klRM0000004CBnYAM",
          "servicingFacilityNpi": "742963"
        },
        "servicingPractitioner": {
          "servicingPractitionerNpi": "1234"
        }
      },
      "careRequestCase": {
        "caseNumber": "00001078",
        "caseOrigin": "Web",
        "caseOwner": "Chiranjeevi User",
        "closed": false,
        "createdBy": "005RM000002dmjJYAQ",
        "dateOpened": "2022-11-29T15:39:56.000Z",
        "escalated": false,
        "lastModifiedBy": "005RM000002dmjJYAQ",
        "lastModifiedDate": "2022-11-29T15:39:56.000Z",
        "lastReferencedDate": "2022-11-29T15:39:56.000Z",
        "lastViewedDate": "2022-11-29T15:39:56.000Z",
        "priority": "Medium",
        "status": "New"
      },
      "careRequestDrugs": [
        {
          "authApprovalIdentifier": "123",
          "authorizationRefIdentifier": "123",
          "careRequestReviewers": [],
          "dispenserAddress": {},
          "drugAdministrationSetting": "Inpatient",
          "id": "0VDRM0000004Cla4AE",
          "medicationRefObjectId": "0kmRM0000004CSeYAM",
          "name": "CRD Connect 1.0",
          "priority": "Routine",
          "requestType": "Filler Order",
          "servicingFacility": {
            "servicingFacilityId": "0klRM0000004CBnYAM",
            "servicingFacilityNpi": "742963"
          },
          "servicingProvider": {
            "healthCareProviderId": "0cmRM0000000tldYAA",
            "servicingPractitionerNpi": "1234"
          },
          "status": "Active",
          "statusReason": "Insufficient Information"
        }
      ],
      "careRequestItems": [
        {
          "authApprovalIdentifier": "123",
          "authorizationRefIdentifier": "123",
          "careRequestReviewers": [],
          "clinicalServiceRequestId": "0jyRM0000004CAGYA2",
          "id": "0VKRM0000004CPd4AM",
          "name": "CRI Connect-1.0",
          "priority": "Stat",
          "reasonCode": "0hsRM00000003ytYAA",
          "requestType": "Order",
          "servicingFacility": {
            "servicingFacilityId": "0klRM0000004CBnYAM",
            "servicingFacilityNpi": "742963"
          },
          "servicingProvider": {
            "healthCareProviderId": "0cmRM0000000tldYAA",
            "servicingPractitionerNpi": "1234"
          }
        }
      ],
      "patient": {
        "firstName": "Charles",
        "lastName": "Green",
        "memberId": "001RM000005XHdbYAG"
      },
      "subscriber": {},
      "trackedCommunications": [
        {
          "categories": [
            "0hsRM00000003ytYAA"
          ],
          "mediums": [
            "0hsRM00000003ytYAA"
          ],
          "name": "CX Label Test",
          "notes": [
            "0nNRM00000000272AA"
          ],
          "payloads": [
            {
              "authorNoteId": "0nNRM00000000272AA",
              "codeSetBundleId": "0hsRM00000003ytYAA"
            }
          ],
          "priority": "Urgent",
          "reasonCodes": [
            "0hsRM00000003ytYAA"
          ],
          "recipients": [
            "001RM000005ZZgSYAW"
          ],
          "replacedItems": [
            "108RM0000004C9IYAU"
          ],
          "status": "Active",
          "statusReason": "Unknown",
          "type": "COMMUNICATIONREQUEST"
        }
      ],
      "transportLocations": []
    }
  ],
  "errorMessage": "",
  "isSuccess": true
}
```

## Related Topics

- Care Authorization Request (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_authorization_request_output.htm)
