---
title: "CondIntrctnHlthRskAdjFctr"
domain: sfFieldRef
topic: condintrctnhlthrskadjfctr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.711Z
estimatedTokens: 543
keywords: [CondIntrctnHlthRskAdjFctr, Stores, risk, adjustment, factor, patients, members, interacting, conditions, they, diagnosed, status, their, benefits, eligibility]
---

# CondIntrctnHlthRskAdjFctr

> Stores the risk adjustment factor for patients and members based on the set
         of interacting conditions they are diagnosed with and the status of their benefits
         eligibility. This object is available in API version 61.0 and later.

# CondIntrctnHlthRskAdjFctr

Stores the risk adjustment factor for patients and members based on the set of interacting conditions they are diagnosed with and the status of their benefits eligibility. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CondIntrctnHlthRskAdjFctr in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CmnyFullBnftDualDisabled | Community Full-Benefit-Dual Disabled | double |  |  | 10 | 4 |
| CmnyPartialBenefitDualAged | Community Partial-Benefit-Dual Aged | double |  |  | 10 | 4 |
| CmnyPartialBnftDualDsbl | Community Partial-Benefit-Dual Disabled | double |  |  | 10 | 4 |
| Community | Community | double |  |  | 10 | 4 |
| CommunityFullBnftDualAged | Community Full-Benefit-Dual Aged | double |  |  | 10 | 4 |
| CommunityNonDualAged | Community Non-Dual Aged | double |  |  | 10 | 4 |
| CommunityNonDualDisabled | Community Non-Dual Disabled | double |  |  | 10 | 4 |
| ConditionCodeList | Condition Code List | string |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Condition Interaction Health Risk Adjustment Factor ID | id |  | 18 |  |  |
| Institutional | Institutional | double |  |  | 10 | 4 |
| InteractingCondCodeList | Interacting Condition Code List | string |  | 40 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsDisabled | Disabled | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PublishedYear | Published Year | int | 8 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
