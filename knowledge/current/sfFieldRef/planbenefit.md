---
title: "PlanBenefit"
domain: sfFieldRef
topic: planbenefit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.350Z
estimatedTokens: 912
keywords: [PlanBenefit, standard, benefits, under, plan, purchaser, offers, their, members]
---

# PlanBenefit

> Represents the standard benefits available under a plan that the
			purchaser offers to their members.

# PlanBenefit

Represents the standard benefits available under a plan that the purchaser offers to their members.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PlanBenefit in the Life Sciences Cloud Developer Guide and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BenefitNotes | Benefit Notes | textarea |  | 32000 |  |  |
| CoinsuranceNotes | Coinsurance Notes | textarea |  | 32000 |  |  |
| CopayNotes | Copay Notes | textarea |  | 32000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeductibleNotes | Deductible Notes | textarea |  | 32000 |  |  |
| DocumentLocation | Document Location | string |  | 255 |  |  |
| EffectiveDate | Effective Date | date |  |  |  |  |
| EffectiveFrom | Effective From | date |  |  |  |  |
| EffectiveTo | Effective To | date |  |  |  |  |
| EmergencyDepartmentCopay | Emergency Department Copay | currency |  |  | 18 | 2 |
| FamilyInNetworkDeductible | Family In-Network Deductible | currency |  |  | 18 | 2 |
| FamilyInNetworkOutofPocket | Family In-Network Out-of-Pocket | currency |  |  | 18 | 2 |
| FamilyOutofNetworkDeductible | Family Out-of-Network Deductible | currency |  |  | 18 | 2 |
| FamilyOutofNetworkOutofPocket | Family Out-of-Network Out-of-Pocket | currency |  |  | 18 | 2 |
| Id | Plan Benefit ID | id |  | 18 |  |  |
| InNetworkCoinsuranceAmount | In-Network Coinsurance (Amount) | double |  |  | 18 | 0 |
| InNetworkCoinsurancePercentage | In-Network Coinsurance (Percentage) | double |  |  | 18 | 0 |
| InNetworkLifetimeMaximum | In-Network Lifetime Maximum | currency |  |  | 18 | 2 |
| IndividualInNetworkDeductible | Individual In-Network Deductible | currency |  |  | 18 | 2 |
| IndividualInNetworkOutofPocket | Individual In-Network Out-of-Pocket | currency |  |  | 18 | 2 |
| IndividualOutofNetworkDeductible | Individual Out-of-Network Deductible | currency |  |  | 18 | 2 |
| IndividualOutofNetworkOutofPocket | Individual Out-of-Network Out-of-Pocket | currency |  |  | 18 | 2 |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LifetimeMaximumNotes | Lifetime Maximum Notes | textarea |  | 32000 |  |  |
| Name | Name | string |  | 255 |  |  |
| OutofNetworkCoinsuranceAmount | Out-of-Network Coinsurance (Amount) | double |  |  | 18 | 0 |
| OutofNetworkCoinsurancePercentage | Out-of-Network Coinsurance (Percentage) | double |  |  | 18 | 0 |
| OutofNetworkLifetimeMaximum | Out-of-Network Lifetime Maximum | currency |  |  | 18 | 2 |
| OutofPocketNotes | Out-of-Pocket Notes | textarea |  | 32000 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PrimaryCareCopay | Primary Care Copay | currency |  |  | 18 | 2 |
| PurchaserPlanId | Purchaser Plan ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| SpecialistCopay | Specialist Copay | currency |  |  | 18 | 2 |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UrgentCareCopay | Urgent Care Copay | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
