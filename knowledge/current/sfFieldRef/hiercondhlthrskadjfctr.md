---
title: "HierCondHlthRskAdjFctr"
domain: sfFieldRef
topic: hiercondhlthrskadjfctr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.507Z
estimatedTokens: 558
keywords: [HierCondHlthRskAdjFctr, Stores, risk, adjustment, factor, patients, members, Hierarchical, Condition, Category, HCC, codes, apply, status, their]
---

# HierCondHlthRskAdjFctr

> Stores the risk adjustment factor for patients and members based on the set
         of Hierarchical Condition Category (HCC) codes that apply to them and the status of their
         benefits eligibility. This object is available in API version 61.0 and later.

# HierCondHlthRskAdjFctr

Stores the risk adjustment factor for patients and members based on the set of Hierarchical Condition Category (HCC) codes that apply to them and the status of their benefits eligibility. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see HierCondHlthRskAdjFctr in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CmnyFullBnftDualDisabled | Community Full-Benefit-Dual Disabled | double |  |  | 18 | 0 |
| CmnyPartialBenefitDualAged | Community Partial-Benefit-Dual Aged | double |  |  | 18 | 0 |
| CmnyPartialBnftDualDsbl | Community Partial-Benefit-Dual Disabled | double |  |  | 18 | 0 |
| Community | Community | double |  |  | 18 | 0 |
| CommunityFullBnftDualAged | Community Full-Benefit-Dual Aged | double |  |  | 18 | 0 |
| CommunityNonDualAged | Community Non-Dual Aged | double |  |  | 18 | 0 |
| CommunityNonDualDisabled | Community Non-Dual Disabled | double |  |  | 18 | 0 |
| Condition | Condition | string |  | 40 |  |  |
| ConditionCategory | Condition Category | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| HierCondCategoryCodeId | Code Set ID | reference |  | 18 |  |  |
| Id | Hierarchical Condition Health Risk Adjustment Factor ID | id |  | 18 |  |  |
| Institutional | Institutional | double |  |  | 18 | 0 |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OverriddenCodes | Overridden Codes | textarea |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PublishedYear | Published Year | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
