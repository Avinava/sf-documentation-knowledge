---
title: "Claim Details"
domain: insurance-developer-guide
topic: claim-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.404Z
estimatedTokens: 415
keywords: [Claim, Output, representation, record]
---

# Claim Details

> Output representation for the details of a claim record.

# Claim Details

Output representation for the details of a claim record.

JSON example

```

```

| Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account that's associated with the claim. | Big, 65.0 | 65.0 |
| attributes | Claim Attribute [] | Attributes of the claim product. | Big, 65.0 | 65.0 |
| claimId | String | ID of the claim. | Big, 65.0 | 65.0 |
| claimLossDate | String | Date when the loss occurred.This parameter doesn't show the time of incident. | Big, 66.0 | 66.0 |
| claimReason | String | Reason for the claim. | Big, 65.0 | 65.0 |
| claimReasonType | String | Category that the claim reason belongs to. | Big, 65.0 | 65.0 |
| claimType | String | Type of the claim. | Big, 65.0 | 65.0 |
| contextId | String | ID of the context. | Big, 65.0 | 65.0 |
| errors | Error Detail [] | List of errors, including detailed information about each error. | Big, 65.0 | 65.0 |
| incidentTypeId | String | ID for the type of incident in the claim. | Big, 65.0 | 65.0 |
| insurancePolicyId | String | ID of the insurance policy on which the claim is raised. | Big, 65.0 | 65.0 |
| items | Claim Item [] | Details of the claim items. | Big, 65.0 | 65.0 |
| lossDate | Date | Date and time when the loss occurred. | Big, 65.0 | 65.0 |
| lossType | String | Type of loss for which the claim is initiated. | Big, 65.0 | 65.0 |
| name | String | Name of the claim. | Big, 65.0 | 65.0 |
| participants | Claim Participant [] | Details of the claim participants. | Big, 65.0 | 65.0 |
| productCode | String | Product code of the claim product. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "claimId": "0Zkxx000000001dEAA",
  "name": "Claim for Auto Accident",
  "accountId": "001xx000003DGQyAAO",
  "insurancePolicyId": "0YTx0000000001qEAA",
  "lossDate": "2025-09-13",
  "claimAttributes": [
    {
      "apiName": "PoliceReportNumber",
      "value": "SF-2025-09-13-00123"
    }
  ],
  "participants": [
    {
      "id": "0kaxx000000001dEAA",
      "instanceKey": "part1",
      "contactId": "003xx000003DGQyAAO",
      "roles": [
        "Driver"
      ]
    }
  ],
  "items": [
    {
      "id": "0koxx000000001dEAA",
      "instanceKey": "item_vehicle_bumper_01",
      "name": "Damaged Front Bumper",
      "productCode": "AUTO-BUMPER-SEDAN",
      "category": "Auto Physical Damage",
      "insuredItemId": "02ixx0000004l5sAAA",
      "insurancePolicyCoverageId": "0cvxx000000AbCdEfG",
      "attributes": [
        {
          "apiName": "DamageSeverity",
          "value": "Severe"
        }
      ],
      "additionalFields": {
        "RepairEstimate": 1575.50,
        "IsDrivable": false
      },
      "relatedObjects": [
          {
            "relatedRecordId": "500xx000000OpQrStU",
            "relatedRecordObjName": "Police_Report__c"
          }
        ],
      "participantInstanceKey": "participant_driver_1"
    }
  ],
  "errors": []
}
```

## Related Topics

- Claim Attribute [] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_claim_attribute_output.htm)
- Error
                  Detail [] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_details.htm)
- Claim
                  Item [] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_claim_item_output.htm)
- Claim Participant [] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_claim_participant_output.htm)
