---
title: "Claim (POST)"
domain: insurance-developer-guide
topic: claim-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.072Z
estimatedTokens: 562
keywords: [Claim, POST]
---

# Claim (POST)

> Create a claim.

# Claim (POST)

Create a claim.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account that's associated with the claim. | Optional | 65.0 |
| additionalFields | Object | Additional standard or custom fields that are used to create or update insurance claim. | Optional | 65.0 |
| attributes | Claim Attribute Input[] | Attributes of the claim product. | Optional | 65.0 |
| claimLossDate | String | Date when the loss occurred.This parameter doesn't accept time of incident. To specify both the date and time of loss, use the lossDate parameter. | Optional | 66.0 |
| claimReason | String | Reason for the claim. | Optional | 65.0 |
| claimReasonType | String | Category that the claim reason belongs to. | Optional | 65.0 |
| claimType | String | Type of claim. | Optional | 65.0 |
| incidentTypeId | String | ID for the type of incident in the claim. | Optional | 65.0 |
| insurance​PolicyId | String | ID of the insurance policy on which the claim is raised. | Optional | 65.0 |
| items | Claim Item Input[] | Details of the items that are associated with the claim. | Optional | 65.0 |
| lossDate | Date | Date and time when the loss occurred.You must specify both the date and time of the incident; otherwise, the API returns an error. To specify only the date of loss, use the claimLossDate parameter. | Optional | 65.0 |
| lossType | String | Type of the loss for which the claim is initiated. | Optional | 65.0 |
| name | String | Name of the claim. | Optional | 65.0 |
| options | Claim Options Input | Options for creating or updating a claim. | Optional | 65.0 |
| participants | Claim Participant Input[] | Claim participants that are associated with the claim. | Optional | 65.0 |
| productCode | String | Product code of the claim product. | Required to create a claim | 65.0 |

Response body for POST

[Claim Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_create_claim_output.htm "Output representation for a created or updated claim.")

## Code Examples

```
/connect/claims
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/claims
```

```
{
  "name": "INS-Auto-Claim-27868",
  "lossDate": "2025-10-23T15:41:10.446Z",
  "claimLossDate": "2025-09-15",
  "claimType": "Auto",
  "incidentTypeId": "0itxx000000001dEAA",
  "claimReason": "Rear-end collision",
  "claimReasonType": "Accident",
  "lossType": "Accident",
  "insurancePolicyId": "0YTx0000000001qEAA",
  "productCode": "AutoClaimRoot",
  "accountId": "001xx000003DGQyAAO",
  "additionalFields": {
    "PoliceReportNumber": "SF2025-00817",
    "IsTotalLoss": false,
    "ReportedDate__c": "2025-09-15"
  },
  "options": {
    "executeConfigurationRules": "false"
  },
  "attributes": {
    "list": [
      {
        "apiName": "WeatherConditions",
        "value": "Clear and Sunny"
      },
      {
        "apiName": "NumberOfVehicles",
        "value": "2"
      }
    ]
  },
  "items": {
    "list": [
      {
        "instanceKey": "item_vehicle_damage_01",
        "name": "Damaged Rear Bumper and Trunk",
        "productCode": "AUTO-SEDAN-2023",
        "category": "Auto Physical Damage",
        "insuredItemId": "02ixx0000004l5sAAA",
        "insurancePolicyCoverageId": "0cvxx000000AbCdEfG",
        "attributes": {
          "list": [
            {
              "apiName": "DamageSeverity",
              "value": "Moderate"
            }
          ]
        },
        "additionalFields": {
          "RepairEstimate": 2750,
          "Date_Damage_First_Noticed__c": "2025-09-15"
        },
        "relatedObjects": {
          "list": [
            {
              "relatedRecordId": "001xx000003DGQzAAP",
              "relatedRecordObjName": "Account"
            }
          ]
        },
        "participantInstanceKey": "participant_driver_01"
      }
    ]
  },
  "participants": {
    "list": [
      {
        "instanceKey": "participant_driver_01",
        "contactId": "003xx000003DGQyAAO",
        "accountId": "001xx000003DGQyAAO",
        "insurancePolicyParticipantId": "0pPxx000000001qEAA",
        "isInjured": false,
        "roles": [
          "Driver",
          "Claimant"
        ],
        "additionalFields": {
          "StatementTaken": true
        }
      }
    ]
  }
}
```

## Related Topics

- Claim Attribute Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_claim_attribute_input.htm)
- Claim Item Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_claim_item_input.htm)
- Claim Options Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_claim_options_input.htm)
- Claim Participant Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_claim_participant_input.htm)
- Claim Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_create_claim_output.htm)
