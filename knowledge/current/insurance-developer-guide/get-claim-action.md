---
title: "Get Claim Action"
domain: insurance-developer-guide
topic: get-claim-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.606Z
estimatedTokens: 274
keywords: [Claim, Action, REST, HTTP, Inputs, Outputs]
---

# Get Claim Action

> Get the details of a claim.

# Get Claim Action

Get the details of a claim.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getClaim

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| getClaimInputRepresentation | TypeApex-definedDescriptionRequired.An Apex ConnectApi.GetClaimInputRepresentation record that contains the details of the claim to be retrieved. |

## Outputs

| Output | Details |
| --- | --- |
| getClaimOutputRepresentation | TypeApex-definedDescriptionAn Apex ConnectApi.GetClaimOutputRepresentation record that contains the details of the claim that's retrieved. |
| claimItemOutputs | TypeApex-definedDescriptionA collection of Apex ConnectApi.ClaimItemOutputs records that contain the list of claim items. |
| claimParticipantOutputs | TypeApex-definedDescriptionA collection of Apex ConnectApi.ClaimParticipantOutputs records that contain the list of claim participants. |

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
      "getClaimInputRepresentation": {
        "claimId": "0Z1S70000004oVfIAI"
      }
    }
  ]
}
```

```
[
  {
    "actionName": "getClaim",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "getClaimOutputRepresentation": {
        "claimDetails": {
          "accountId": "001xx000003DGQyAAO",
          "attributes": [
            {
              "apiName": "PoliceReportNumber",
              "value": "SF-2025-09-13-00123"
            }
          ],
          "claimReason": "Auto accident",
          "claimReasonType": "AUTO_ACCIDENT",
          "claimType": "AUTO_ACCIDENT",
          "lossType": "Front bumper damaged"
        },
        "claimId": "0Z1S70000004oVfIAI",
        "contextId": "C-000123",
        "insurancePolicyId": "0e9S70000004oVfIAI",
        "lossDate": "2025-07-22",
        "name": "Claim for Auto Accident",
        "productCode": "AUTO-ACCIDENT"
      },
      "claimItemOutputs": [
        {
          "claimItems": [
            {
              "category": "Auto Physical Damage",
              "claimDetails": {
                "accountId": "001xx000003DGQyAAO",
                "attributes": [
                  {
                    "apiName": "DamageSeverity",
                    "value": "Severe"
                  }
                ],
                "claimReason": "Auto accident",
                "claimReasonType": "AUTO_ACCIDENT",
                "claimType": "AUTO_ACCIDENT",
                "lossType": "Front bumper damaged"
              },
              "id": "0koxx000000001dEAA",
              "instanceKey": "item_vehicle_bumper_01",
              "name": "Damaged Front Bumper",
              "productCode": "AUTO-BUMPER-SEDAN",
              "insuredItemId": "02ixx0000004l5sAAA"
            }
          ]
        }
      ],
      "claimParticipantOutputs": [
        {
          "claimParticipants": [
            {
              "id": "0kaxx000000001dEAA",
              "instanceKey": "participant_driver_1",
              "accountId": "001xx000003DGQyAAO",
              "contactId": "003xx000003DGQyAAO",
              "insurancePolicyParticipantId": "0pPxx000000001qEAA",
              "roles": [
                "Driver",
                "Claimant"
              ]
            }
          ]
        }
      ],
      "sortOrder": -1,
      "version": 1
    }
  }
]
```

## Related Topics

- ConnectApi.GetClaimInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_get_claim.htm)
- ConnectApi.GetClaimOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_get_claim_output.htm)
- ConnectApi.ClaimItemOutputs (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_item_outputs.htm)
- ConnectApi.ClaimParticipantOutputs (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_participant_outputs.htm)
