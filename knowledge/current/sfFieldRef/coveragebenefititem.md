---
title: "CoverageBenefitItem"
domain: sfFieldRef
topic: coveragebenefititem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.756Z
estimatedTokens: 561
keywords: [CoverageBenefitItem, Specific, service, covered, insurance, plan, API, version, 53.0, later]
---

# CoverageBenefitItem

> Specific service covered by the insurance plan. This object is available in API version 53.0 and later.

# CoverageBenefitItem

Specific service covered by the insurance plan. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CoverageBenefitItem in the Life Sciences Cloud Developer Guide and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BenefitCategory | Benefit Category | string |  | 64 |  |  |
| CodeSetServiceTypeId | Code Set ID | reference |  | 18 |  |  |
| CoverageBenefitId | Coverage Benefit ID | reference |  | 18 |  |  |
| CoverageLevel | Coverage Level | string |  | 64 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DoesDeductibleApply | Deductible Applies | boolean |  |  |  |  |
| Id | Coverage Benefit Item ID | id |  | 18 |  |  |
| InNetworkCoverage | In-Network Coverage | textarea |  | 32000 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsInPlanNetwork | In-Plan Network | boolean |  |  |  |  |
| IsPreauthorizationRequired | Requires Preauthorization | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MemberId | Account ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| Notes | Notes | textarea |  | 32000 |  |  |
| OutofNetworkCoverage | Out-of-Network Coverage | textarea |  | 32000 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ServiceType | Service Type | string |  | 64 |  |  |
| ServiceTypeCode | Service Type Code | string |  | 64 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimePeriod | Time Period | string |  | 64 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
