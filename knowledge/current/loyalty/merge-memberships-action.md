---
title: "Merge Memberships Action"
domain: loyalty
topic: merge-memberships-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.005Z
estimatedTokens: 785
keywords: [Merge, Memberships, Action, Merges, two, active, loyalty, program, member, records, belong, source, membership, target, status]
---

# Merge Memberships Action

> Merges two active loyalty program member records that belong to the
   same loyalty program. Out of the two memberships, one is source membership and the other is
  the target membership. After the merge is complete, the status of the source membership is changed
  to Merged and the status of the target membership remains active.

# Merge Memberships Action

Merges two active loyalty program member records that belong to the same loyalty program. Out of the two memberships, one is source membership and the other is the target membership. After the merge is complete, the status of the source membership is changed to Merged and the status of the target membership remains active.

By default, all the transaction journals and points of the source member are transferred to the target member after the merge. Optionally, you can:

-   Transfer all the vouchers of source member to the target member.
-   Assign the higher current tier between the source and target members to the target member.

For more information about how the mergeLoyaltyProgramMembership action merges loyalty program memberships, see [Merge Memberships](https://help.salesforce.com/articleView?id=merge_membership_merge_action.htm&language=en_US "HTML (New Window)") in Salesforce Help.

This action is available in API version 56.0 and later for users in orgs where Loyalty Management is enabled.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/mergeLoyaltyProgramMembership

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| reasonForMergingMemberships | TypeStringDescriptionRequired.The reason why the source loyalty program member is to be merged with the target loyalty program member. |
| shouldSetHigherCurrentTierForTargetMember | TypeBooleanDescriptionIndicates whether the tier for the target record is set to the source record's tier when the source tier is higher than the target record's current tier across all groups (true) or not (false).The default value is false. |
| shouldTransferVouchers | TypeBooleanDescriptionIndicates whether all vouchers that belong to the source loyalty program member must be transferred to the target loyalty program member (true) or not (false).The default value is false. |
| sourceLoyaltyProgramMemberId | TypeIDDescriptionRequired.The ID of the loyalty program member record to be merged with the target loyalty program member record. The status of the source loyalty program member record is set to Merged after the merge is complete. |
| targetLoyaltyProgramMemberId | TypeIDDescriptionRequired.The ID of the loyalty program member record to remain active for the member after the merge is complete. The qualifying and non-qualifying points accrued by the source member are added to the respective points balances of the target member record. |

## Outputs

| Output | Details |
| --- | --- |
| errors | TypeList<String>DescriptionA list of error messages if the operation fails. |
| isSuccess | TypeBooleanDescriptionIndicates whether the operation is successful or not. |

## Examples

**Sample Request**

```

```

**Sample Response**

```

```

#### See Also

-   [SOAP API Developer Guide: Core Data Types Used in API Calls](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm "SOAP API Developer Guide: Core Data Types Used in API Calls - HTML (New Window)")

## Code Examples

```
{
   "inputs": [ {
      "reasonForMergingMemberships": "Test Merge",
      "shouldSetHigherCurrentTierForTargetMember": true,
      "shouldTransferVouchers": true,
      "sourceLoyaltyProgramMemberId":"0lMT100000001JnMAK",
      "targetLoyaltyProgramMemberId":"0lMT100000001JnMAI"
   } ]
}
```

```
[ {
  "actionName" : "mergeLoyaltyProgramMembership",
  "errors" : null,
  "isSuccess" : true
} ]
```
