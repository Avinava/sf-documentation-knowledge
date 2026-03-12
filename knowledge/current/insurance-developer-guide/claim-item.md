---
title: "Claim Item"
domain: insurance-developer-guide
topic: claim-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.398Z
estimatedTokens: 302
keywords: [Claim, Item, Output, representation]
---

# Claim Item

> Output representation for the details of a claim item.

# Claim Item

Output representation for the details of a claim item.

JSON example

```

```

| Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Object | Additional standard or custom fields that are used to create claim items. | Big, 65.0 | 65.0 |
| attributes | Claim Attribute [] | Attributes of the claim item. | Big, 65.0 | 65.0 |
| category | String | Category of the claim item. | Big, 65.0 | 65.0 |
| id | String | ID of the claim item. | Big, 65.0 | 65.0 |
| instanceKey | String | Unique identifier of the claim item. | Big, 65.0 | 65.0 |
| insurance​Policy​CoverageId | String | ID of the specific policy coverage that applies to the claim item. | Big, 65.0 | 65.0 |
| insuredItemId | String | ID of the insured item. | Big, 65.0 | 65.0 |
| name | String | The name of the claim item. | Big, 65.0 | 65.0 |
| participant​InstanceKey | String | Unique identifier that's used to link a claim item to a specific participant. | Big, 65.0 | 65.0 |
| productCode | String | Product code of the claim product. | Big, 65.0 | 65.0 |
| relatedObjects | Claim Related Object [] | Related claim item records. | Big, 65.0 | 65.0 |

## Code Examples

```
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
        "RepairEstimate": 1575.5,
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
```

## Related Topics

- Claim Attribute [] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_claim_attribute_output.htm)
- Claim Related Object [] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_claim_related_object_output.htm)
