---
title: "InsurancePolicyCoverage"
domain: sfFieldRef
topic: insurancepolicycoverage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.440Z
estimatedTokens: 943
keywords: [InsurancePolicyCoverage, junction, associates, InsurancePolicy, ProductCoverage]
---

# InsurancePolicyCoverage

> A junction object that associates the InsurancePolicy object with the
      ProductCoverage object.

# InsurancePolicyCoverage

A junction object that associates the InsurancePolicy object with the ProductCoverage object.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InsurancePolicyCoverage in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BenefitPaymentFrequency | Benefit Payment Frequency | picklist |  | 40 |  |  |
| Category | Category | picklist |  | 40 |  |  |
| CategoryCode | Category Code | string |  | 255 |  |  |
| CategoryGroup | Category Group | picklist |  | 40 |  |  |
| CategoryGroupType | Category Group Type | picklist |  | 40 |  |  |
| ContractGroupPlanId | Contract Group Plan ID | reference |  | 18 |  |  |
| CoverageCode | Coverage Code | string |  | 255 |  |  |
| CoverageName | Coverage Name | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeathBenefitOptionType | Death Benefit Option Type | picklist |  | 40 |  |  |
| DeductibleAmount | Deductible Amount | currency |  |  | 18 | 2 |
| Description | Description | textarea |  | 32000 |  |  |
| Discount | Discount | currency |  |  | 18 | 2 |
| EffectiveDate | Effective Date | datetime |  |  |  |  |
| EffectiveFromDate | Effective From Date | date |  |  |  |  |
| EffectiveToDate | Effective To Date | date |  |  |  |  |
| EmployeeContribution | Employee Contribution | currency |  |  | 18 | 2 |
| EmployerContribution | Employer Contribution | currency |  |  | 18 | 2 |
| ExpirationDate | Expiration Date | datetime |  |  |  |  |
| Id | Insurance Policy Coverage ID | id |  | 18 |  |  |
| IncomeOptionType | Income Option Type | picklist |  | 40 |  |  |
| InsurancePolicyAssetId | Insurance Policy Asset ID | reference |  | 18 |  |  |
| InsurancePolicyId | Insurance Policy ID | reference |  | 18 |  |  |
| InsurancePolicyParticipantId | Insurance Policy Participant ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LimitAmount | Limit Amount | currency |  |  | 18 | 2 |
| LimitDate | Limit Date | date |  |  |  |  |
| LimitPercentage | Limit Percentage | percent |  |  | 3 | 0 |
| LimitRange | Limit Range | picklist |  | 40 |  |  |
| Name | Name | string |  | 255 |  |  |
| OriginalCoverageId | Insurance Policy Coverage ID | reference |  | 18 |  |  |
| PremiumAmount | Premium Amount | currency |  |  | 18 | 2 |
| PriorCoverageId | Insurance Policy Coverage ID | reference |  | 18 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| StandardCommissionAmount | Standard Commission | currency |  |  | 18 | 2 |
| StandardFeeAmount | Standard Fee | currency |  |  | 18 | 2 |
| StandardPremiumAmount | Standard Premium | currency |  |  | 18 | 2 |
| StandardTaxAmount | Standard Tax | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TermCommissionAmount | Term Commission | currency |  |  | 18 | 2 |
| TermFeeAmount | Term Fee | currency |  |  | 18 | 2 |
| TermPremiumAmount | Term Premium | currency |  |  | 18 | 2 |
| TermTaxAmount | Term Tax | currency |  |  | 18 | 2 |
| TotalStandardAmount | Total Standard Amount | currency |  |  | 18 | 2 |
| TotalTermAmount | Total Term Amount | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
