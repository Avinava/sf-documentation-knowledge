---
title: "CoverageBenefitItemLimit"
domain: sfFieldRef
topic: coveragebenefititemlimit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.777Z
estimatedTokens: 506
keywords: [CoverageBenefitItemLimit, track, associated, specific, benefit, relates, expenditures, limits, coverage, levels, eligibility, exclusion, API, version, 53.0]
---

# CoverageBenefitItemLimit

> Allows you to track details associated with a specific benefit as it relates to expenditures, limits, coverage levels, eligibility, and exclusion. This object is
		available in API version 53.0 and later.

# CoverageBenefitItemLimit

Allows you to track details associated with a specific benefit as it relates to expenditures, limits, coverage levels, eligibility, and exclusion. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CoverageBenefitItemLimit in the Life Sciences Cloud Developer Guide and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AllowedLimit | Allowed Limit | string |  | 255 |  |  |
| AllowedQuantity | Allowed Quantity | double |  |  | 18 | 0 |
| AllowedQuantityUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| AppliedLimit | Applied Limit | string |  | 255 |  |  |
| AppliedQuantity | Applied Quantity | double |  |  | 18 | 0 |
| AppliedQuantityUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| CareLimitTypeId | Care Limit Type ID | reference |  | 18 |  |  |
| CoverageBenefitItemId | Coverage Benefit Item ID | reference |  | 18 |  |  |
| CoverageLevel | Coverage Level | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Coverage Benefit Item Limit ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LimitNotes | Limit Notes | textarea |  | 32000 |  |  |
| Name | Coverage Benefit Item Limit Name | string |  | 255 |  |  |
| NetworkType | Network Type | picklist |  | 255 |  |  |
| PriorityOrder | Priority Order | double |  |  | 18 | 0 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TermType | Term Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
