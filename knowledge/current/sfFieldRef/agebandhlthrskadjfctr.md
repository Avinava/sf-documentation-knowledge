---
title: "AgeBandHlthRskAdjFctr"
domain: sfFieldRef
topic: agebandhlthrskadjfctr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.834Z
estimatedTokens: 534
keywords: [AgeBandHlthRskAdjFctr, Stores, risk, adjustment, factor, patients, members, age, band, they’re, part, status, their, benefits, eligibility]
---

# AgeBandHlthRskAdjFctr

> Stores the risk adjustment factor for patients and members based on the age
         band that they’re a part of and the status of their benefits eligibility. This object
      is available in API version 61.0 and later.

# AgeBandHlthRskAdjFctr

Stores the risk adjustment factor for patients and members based on the age band that they’re a part of and the status of their benefits eligibility. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AgeBandHlthRskAdjFctr in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AgeBandEnd | Age Band End | double |  |  | 10 | 4 |
| AgeBandStart | Age Band Start | double |  |  | 10 | 4 |
| CmnyFullBnftDualDisabled | Community Full-Benefit-Dual Disabled | double |  |  | 10 | 4 |
| CmnyPartialBenefitDualAged | Community Partial-Benefit-Dual Aged | double |  |  | 10 | 4 |
| CmnyPartialBnftDualDsbl | Community Partial-Benefit-Dual Disabled | double |  |  | 10 | 4 |
| Community | Community | double |  |  | 10 | 4 |
| CommunityFullBnftDualAged | Community Full-Benefit-Dual Aged | double |  |  | 10 | 4 |
| CommunityNonDualAged | Community Non-Dual Aged | double |  |  | 10 | 4 |
| CommunityNonDualDisabled | Community Non-Dual Disabled | double |  |  | 10 | 4 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EnrolleeType | Enrollee Type | picklist |  | 255 |  |  |
| Gender | Gender | picklist |  | 40 |  |  |
| Id | Age Band Risk Assessment Factor ID | id |  | 18 |  |  |
| Institutional | Institutional | double |  |  | 10 | 4 |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
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
