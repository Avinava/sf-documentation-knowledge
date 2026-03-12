---
title: "Create Claim Action"
domain: insurance-developer-guide
topic: create-claim-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.508Z
estimatedTokens: 169
keywords: [Claim, Action, REST, HTTP, Inputs, Outputs]
---

# Create Claim Action

> Create a claim.

# Create Claim Action

Create a claim.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createClaim

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| createClaimInputRepresentation | TypeApex-definedDescriptionRequired.An Apex ConnectApi.CreateClaimInputRepresentation record that contains the details of the claim to be created. |

## Outputs

| Output | Details |
| --- | --- |
| claimId | TypestringDescriptionID of the claim that's created. |

## Example

Sample Request

```

```

Sample Response

```

```

## Code Examples

```
{
  "inputs": [
    {
      "createClaimInputRepresentation": {
        "name": "Claim for Auto Accident",
        "lossDate": "2025-09-15",
        "claimType": "Auto",
        "incidentTypeId": "0itxx000000001dEAA",
        "claimReason": "Rear-end collision",
        "claimReasonType": "Accident",
        "lossType": "Accident",
        "insurancePolicyId": "0YTx0000000001qEAA",
        "accountId": "001xx000003DGQyAAO",
        "additionalFields": {
          "key": "RepairShop",
          "value": "NY"
        },
        "attributes": [
          {
            "apiName": "WeatherConditions",
            "value": "Clear and Sunny"
          },
          {
            "apiName": "NumberOfVehicles",
            "value": "2"
          }
        ],
        "items": [
          {
            "instanceKey": "item_vehicle_damage_01",
            "name": "Damaged Rear Bumper and Trunk",
            "productCode": "AUTO-SEDAN-2023",
            "category": "Auto Physical Damage",
            "insuredItemId": "02ixx0000004l5sAAA",
            "insurancePolicyCoverageId": "0cvxx000000AbCdEfG",
            "attributes": [
              {
                "apiName": "DamageSeverity",
                "value": "Moderate"
              }
            ],
            "additionalFields": {
              "key": "RepairEstimate",
              "value": 2750
            },
            "relatedObjects": [
              {
                "relatedRecordId": "001xx000003DGQzAAP",
                "relatedRecordObjName": "Account"
              }
            ],
            "participantInstanceKey": "participant_driver_01"
          }
        ],
        "participants": [
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
  ]
}
```

```
[
  {
    "actionName": "createClaim",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "claimId": "0Z1S70000004oVfIAI"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```

## Related Topics

- ConnectApi.CreateClaimInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_create_claim.htm)
