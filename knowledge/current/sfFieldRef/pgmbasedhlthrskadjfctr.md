---
title: "PgmBasedHlthRskAdjFctr"
domain: sfFieldRef
topic: pgmbasedhlthrskadjfctr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.239Z
estimatedTokens: 539
keywords: [PgmBasedHlthRskAdjFctr, Stores, risk, adjustment, factor, patients, members, their, eligibility, certain, benefits, programs, instance, Medicaid, API]
---

# PgmBasedHlthRskAdjFctr

> Stores the risk adjustment factor for patients and members based on their
         eligibility for certain benefits programs. For instance, Medicaid in the US. This
      object is available in API version 61.0 and later.

# PgmBasedHlthRskAdjFctr

Stores the risk adjustment factor for patients and members based on their eligibility for certain benefits programs. For instance, Medicaid in the US. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PgmBasedHlthRskAdjFctr in the Salesforce Health Cloud Developer Guide.

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
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Gender | Gender | picklist |  | 40 |  |  |
| Id | Program Based Risk Health Adjustment Factor ID | id |  | 18 |  |  |
| Institutional | Institutional | double |  |  | 10 | 4 |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsDisabled | Disabled | boolean |  |  |  |  |
| IsOriginallyDisabled | Originally Disabled | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProgramType | Program Type | picklist |  | 40 |  |  |
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
