---
title: "CoverageBenefit"
domain: sfFieldRef
topic: coveragebenefit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.730Z
estimatedTokens: 1507
keywords: [CoverageBenefit, benefits, provided, covered, member, purchaser’s, plan]
---

# CoverageBenefit

> Represents the benefits provided to a covered member by a
			purchaser’s plan.

# CoverageBenefit

Represents the benefits provided to a covered member by a purchaser’s plan.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CoverageBenefit in the Life Sciences Cloud Developer Guide and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BenefitNotes | Benefit Notes | textarea |  | 32000 |  |  |
| BenefitPeriodEndDate | Benefit Period End Date | date |  |  |  |  |
| BenefitPeriodStartDate | Benefit Period Start Date | date |  |  |  |  |
| CareBenefitVerifyRequestId | Care Benefit Verify Request ID | reference |  | 18 |  |  |
| CoinsuranceNotes | Coinsurance Notes | textarea |  | 32000 |  |  |
| CopayNotes | Copay Notes | textarea |  | 32000 |  |  |
| CoverageType | Coverage Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeductibleNotes | Deductible Notes | textarea |  | 32000 |  |  |
| Disclaimer | Disclaimers | string |  | 255 |  |  |
| EmergencyDepartmentCopay | Emergency Department Copay | currency |  |  | 18 | 2 |
| FamilyInNetworkDeductibleApplied | Family In-Network Deductible Applied | currency |  |  | 18 | 2 |
| FamilyInNetworkDeductibleLimit | Family In-Network Deductible Limit | currency |  |  | 18 | 2 |
| FamilyInNetworkDeductibleRemaining | Family In-Network Deductible Remaining | currency |  |  | 18 | 2 |
| FamilyInNetworkOutofPocketApplied | Family In-Network Out-of-Pocket Applied | currency |  |  | 18 | 2 |
| FamilyInNetworkOutofPocketLimit | Family In-Network Out-of-Pocket Limit | currency |  |  | 18 | 2 |
| FamilyInNetworkOutofPocketRemaining | Family In-Network Out-of-Pocket Remaining | currency |  |  | 18 | 2 |
| FamilyOutofNetworkDeductibleApplied | Family Out-of-Network Deductible Applied | currency |  |  | 18 | 2 |
| FamilyOutofNetworkDeductibleLimit | Family Out-of-Network Deductible Limit | currency |  |  | 18 | 2 |
| FamilyOutofNetworkDeductibleRemaining | Family Out-of-Network Deductible Remaining | currency |  |  | 18 | 2 |
| FamilyOutofNetworkOutofPocketApplied | Family Out-of-Network Out-of-Pocket Applied | currency |  |  | 18 | 2 |
| FamilyOutofNetworkOutofPocketLimit | Family Out-of-Network Out-of-Pocket Limit | currency |  |  | 18 | 2 |
| FamilyOutofNetworkOutofPocketRemaining | Family Out-of-Network Out-of-Pocket Remaining | currency |  |  | 18 | 2 |
| FinalCoverageStatusCodeId | Code Set ID | reference |  | 18 |  |  |
| Id | Coverage Benefit ID | id |  | 18 |  |  |
| InNetworkCoinsuranceAmount | In-Network Coinsurance (Amount) | currency |  |  | 18 | 2 |
| InNetworkCoinsurancePercentage | In-Network Coinsurance (Percentage) | percent |  |  | 3 | 0 |
| InNetworkLifetimeMaximum | In-Network Lifetime Maximum | currency |  |  | 18 | 2 |
| IndividualInNetworkDeductibleApplied | Individual In-Network Deductible Applied | currency |  |  | 18 | 2 |
| IndividualInNetworkDeductibleLimit | Individual In-Network Deductible Limit | currency |  |  | 18 | 2 |
| IndividualInNetworkDeductibleRemaining | Individual In-Network Deductible Remaining | currency |  |  | 18 | 2 |
| IndividualInNetworkOutofPocketApplied | Individual In-Network Out-of-Pocket Applied | currency |  |  | 18 | 2 |
| IndividualInNetworkOutofPocketLimit | Individual In-Network Out-of-Pocket Limit | currency |  |  | 18 | 2 |
| IndividualInNetworkOutofPocketRemaining | Individual In-Network Out-of-Pocket Remaining | currency |  |  | 18 | 2 |
| IndividualOutofNetworkDeductibleApplied | Individual Out-of-Network Deductible Applied | currency |  |  | 18 | 2 |
| IndividualOutofNetworkDeductibleLimit | Individual Out-of-Network Deductible Limit | currency |  |  | 18 | 2 |
| IndividualOutofNetworkDeductibleRemain | Individual Out-of-Network Deductible Remaining | currency |  |  | 18 | 2 |
| IndividualOutofNetworkOutofPocketApplied | Individual Out-of-Network Out-of-Pocket Applied | currency |  |  | 18 | 2 |
| IndividualOutofNetworkOutofPocketLimit | Individual Out-of-Network Out-of-Pocket Limit | currency |  |  | 18 | 2 |
| IndividualOutofNetworkOutofPocketRemain | Individual Out-of-Network Out-of-Pocket Remaining | currency |  |  | 18 | 2 |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LifetimeMaximumNotes | Lifetime Maximum Notes | textarea |  | 32000 |  |  |
| MemberId | Account ID | reference |  | 18 |  |  |
| MemberPlanId | Member Plan ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OutcomeStatusCodeId | Code Set ID | reference |  | 18 |  |  |
| OutofNetworkCoinsuranceAmount | Out-of-Network Coinsurance (Amount) | currency |  |  | 18 | 2 |
| OutofNetworkCoinsurancePercentage | Out-of-Network Coinsurance (Percentage) | percent |  |  | 3 | 0 |
| OutofNetworkLifetimeMaximum | Out-of-Network Lifetime Maximum | currency |  |  | 18 | 2 |
| OutofPocketNotes | Out-of-Pocket Notes | textarea |  | 32000 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PharmaCopayAmount | Pharma Copay Amount | currency |  |  | 18 | 2 |
| PrimaryCareCopay | Primary Care Copay | currency |  |  | 18 | 2 |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| SpecialistCopay | Specialist Copay | currency |  |  | 18 | 2 |
| StatusCodeId | Code Set ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UrgentCareCopay | Urgent Care Copay | currency |  |  | 18 | 2 |
| VerificationDate | Verification Date | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
