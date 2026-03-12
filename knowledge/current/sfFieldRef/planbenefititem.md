---
title: "PlanBenefitItem"
domain: sfFieldRef
topic: planbenefititem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.370Z
estimatedTokens: 557
keywords: [PlanBenefitItem, benefit, under, purchaser’s, plan, offered, their, members]
---

# PlanBenefitItem

> Represents the details of a benefit available under a purchaser’s
			plan that is offered to their members.

# PlanBenefitItem

Represents the details of a benefit available under a purchaser’s plan that is offered to their members.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PlanBenefitItem in the Life Sciences Cloud Developer Guide and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BenefitCategory | Benefit Category | string |  | 255 |  |  |
| CoverageLevel | Coverage Level | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Plan Benefit Item ID | id |  | 18 |  |  |
| InNetworkCoverage | In-Network Coverage | currency |  |  | 18 | 2 |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsInPlanNetwork | In-Plan Network | boolean |  |  |  |  |
| ItemCodeId | Item Code ID | reference |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Notes | Notes | textarea |  | 32000 |  |  |
| OutofNetworkCoverage | Out-of-Network Coverage | currency |  |  | 18 | 2 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PauthRequirementEndDate | Preauthorization Requirement End Date | datetime |  |  |  |  |
| PauthRequirementStartDate | Preauthorization Requirement Start Date | datetime |  |  |  |  |
| PlanBenefitId | Plan Benefit ID | reference |  | 18 |  |  |
| PreauthorizationTypeCodeId | Code Set ID | reference |  | 18 |  |  |
| ServiceType | Service Type | string |  | 64 |  |  |
| ServiceTypeCode | Service Type Code | string |  | 64 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimePeriod | Time Period | string |  | 32 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
