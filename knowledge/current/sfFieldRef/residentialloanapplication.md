---
title: "ResidentialLoanApplication"
domain: sfFieldRef
topic: residentialloanapplication
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:12.554Z
estimatedTokens: 1199
keywords: [ResidentialLoanApplication, loan, application, lender, API, version, 47.0, later]
---

# ResidentialLoanApplication

> Represents details about a loan application from the lender. This
		object is available in API version 47.0 and later.

# ResidentialLoanApplication

Represents details about a loan application from the lender. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ResidentialLoanApplication in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AmortizationTerm | Loan Duration in Months | double |  |  | 18 | 0 |
| AmortizationType | Amortization Type | picklist |  | 40 |  |  |
| ApplicationExtIdentifier | External Application ID | string |  | 255 |  |  |
| BalloonTermMonths | Balloon Term Months | double |  |  | 18 | 0 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EstateHoldType | Lender's Lien Type | picklist |  | 40 |  |  |
| HasOtherLoanFeature | Other Loan Feature | boolean |  |  |  |  |
| HasPrepaymentPenalty | Penalty for Prepayment | boolean |  |  |  |  |
| Id | Residential Loan Application ID | id |  | 18 |  |  |
| ImprovementCost | Cost of Construction or Improvement | currency |  |  | 18 | 2 |
| InitialBuydownRate | Initial Buydown Rate | double |  |  | 18 | 3 |
| IntOnlyTermMonthCount | Interest-Only Term Months | double |  |  | 18 | 0 |
| InterestRate | Interest Rate | double |  |  | 18 | 3 |
| IsBalloon | Balloon | boolean |  |  |  |  |
| IsBorrowerCommPropState | Borrower Lives in Community Property State | boolean |  |  |  |  |
| IsConstructionConversion | Construction-Conversion or Construction-to-Permanent | boolean |  |  |  |  |
| IsContractConversion | Conversion of Contract for Deed or Land Contract | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsEnergyRelImprovement | Energy-Related Improvement | boolean |  |  |  |  |
| IsInterestOnly | Interest Only | boolean |  |  |  |  |
| IsNegativeAmortization | Allows Negative Amortization | boolean |  |  |  |  |
| IsPropertyCommPropState | Property in Community Property State | boolean |  |  |  |  |
| IsRenovation | Renovation | boolean |  |  |  |  |
| IsSingleClosing | Single Closing | boolean |  |  |  |  |
| IsSubjectToPriorityLien | Subject to Priority Lien | boolean |  |  |  |  |
| IsTempIntRateBuydown | Temporary Interest Rate Buydown | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LeaseHoldExpirationDate | Leasehold Expiration | datetime |  |  |  |  |
| LoanPurpose | Loan Purpose | picklist |  | 255 |  |  |
| LotAcquiredDate | Date Acquired | datetime |  |  |  |  |
| LotOriginalCost | Original Cost | currency |  |  | 18 | 2 |
| MonthsBeforeFirstAdj | Initial Period Prior to First Adjustment in months | double |  |  | 18 | 0 |
| MonthsBetweenAdjustments | Subsequent Adjustment Period in months | double |  |  | 18 | 0 |
| MortgageLienType | Mortgage Lien Type | picklist |  | 40 |  |  |
| MortgageProgramType | Mortgage Program Type | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| NativeLandTenure | Indian Country Land Tenure | picklist |  | 40 |  |  |
| OpportunityId | Opportunity ID | reference |  | 18 |  |  |
| OtherAmortizationType | Other Amortization Type Description | string |  | 255 |  |  |
| OtherLoanFeature | Other Loan Feature Description | string |  | 255 |  |  |
| OtherLoanPurpose | Other Loan Purpose | string |  | 255 |  |  |
| OtherMortgageProgramType | Other Mortgage Program Type Description | string |  | 255 |  |  |
| OtherRefinanceProgType | Other Refinance Program Type | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PrepayPenaltyTermMonth | Prepayment Penalty Term Months | double |  |  | 18 | 0 |
| ProjectType | Project Type | picklist |  | 40 |  |  |
| RefinanceProgramType | Refinance Program Type | picklist |  | 40 |  |  |
| RefinanceType | Refinance Type | picklist |  | 40 |  |  |
| Status | Application Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TitleType | Title Hold Method | picklist |  | 40 |  |  |
| TotalFinLiabilityMonthlyAmt | Total Monthly Financial Liabilities | currency |  |  | 18 | 2 |
| TotalFinancialAssetAmount | Total Financial Assets | currency |  |  | 18 | 2 |
| TotalOtherAssetAmount | Total Other Assets | currency |  |  | 18 | 2 |
| TotalOtherFinLiabilityMonthlyAmt | Total Monthly Other Liabilities | currency |  |  | 18 | 2 |
| TrustTitleType | Title Held in Trust | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
