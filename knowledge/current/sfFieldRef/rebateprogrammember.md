---
title: "RebateProgramMember"
domain: sfFieldRef
topic: rebateprogrammember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.586Z
estimatedTokens: 401
keywords: [RebateProgramMember, member, rebate, program, virtue, partner, business, account, eligible, payments, ABC, Enterprises, HVAC, Corp, members]
---

# RebateProgramMember

> The member of a rebate program. By virtue of being a member, the partner or
      business account is eligible to get rebate payments. For example, ABC Enterprises and HVAC
      Corp are members of GoldStone Volume Rebate Program.

# RebateProgramMember

The member of a rebate program. By virtue of being a member, the partner or business account is eligible to get rebate payments. For example, ABC Enterprises and HVAC Corp are members of GoldStone Volume Rebate Program.

For more information, see RebateProgramMember in the Rebate Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CumulativePayoutAmount | Cumulative Payout Amount | currency |  |  | 18 | 2 |
| Id | Rebate Program Member ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPayoutCalcSkipped | Skip Payout Calculation | boolean |  |  |  |  |
| LastActivationDate | Last Activation Date | date |  |  |  |  |
| LastDeactivationDate | Last Deactivation Date | date |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MemberStatus | Status | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RebateProgramId | Rebate Program ID | reference |  | 18 |  |  |
| ShipToAccountId | Account ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
