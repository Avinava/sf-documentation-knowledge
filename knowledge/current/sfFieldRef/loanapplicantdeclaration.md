---
title: "LoanApplicantDeclaration"
domain: sfFieldRef
topic: loanapplicantdeclaration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.650Z
estimatedTokens: 704
keywords: [LoanApplicantDeclaration, financial, issues, foreclosure, lawsuits, defaults, applicant, co-applicant, API, version, 47.0, later]
---

# LoanApplicantDeclaration

> Represents financial issues like foreclosure, lawsuits, or defaults of the
			applicant or co-applicant.  This object is available in API version 47.0 and later.

# LoanApplicantDeclaration

Represents financial issues like foreclosure, lawsuits, or defaults of the applicant or co-applicant. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoanApplicantDeclaration in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BankruptcyType | Bankruptcy Type | multipicklist |  | 4099 | 0 |  |
| BorrowedAmount | Amount Borrowed | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeclarationExtIdentifier | Loan Applicant Declaration External ID | string |  | 255 |  |  |
| HasBorrowedMoney | Borrowing Money | boolean |  |  |  |  |
| HasDeclaredBankruptcy | Declared Bankruptcy | boolean |  |  |  |  |
| HasDeedSurrender | Surrendered Deed in Lieu of Foreclosure | boolean |  |  |  |  |
| HasOutstandingJudgement | Outstanding Judgements | boolean |  |  |  |  |
| HasOwnershipInterest | Ownership Interest | boolean |  |  |  |  |
| HasPastShortSale | Short Sale | boolean |  |  |  |  |
| HasPropertyForeclosed | Foreclosed Property | boolean |  |  |  |  |
| HasUndisclAddlCreditApp | Undisclosed New Credit | boolean |  |  |  |  |
| HasUndisclAddlPropApp | Undisclosed Loan on Other Property | boolean |  |  |  |  |
| Id | Loan Applicant Declaration ID | id |  | 18 |  |  |
| IsCoSignerUndisclDebt | Co-Signer or Guarantor on Undisclosed Loan or Debt | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPartyToLawsuit | Party to Lawsuit | boolean |  |  |  |  |
| IsPresentlyDelinquent | Delinquent or in Default on Debt | boolean |  |  |  |  |
| IsPrimaryResidence | Primary Residence | boolean |  |  |  |  |
| IsRelatedToSeller | Relationship or Affiliation with Seller | boolean |  |  |  |  |
| IsSubjectToPriorityLien | Property Subject to Priority Clean Energy Lien | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoanApplicantId | Loan Applicant ID | reference |  | 18 |  |  |
| LoanApplicationId | Residential Loan Application ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PriorPropertyTitleType | Prior Ownership Title Type | picklist |  | 40 |  |  |
| PriorPropertyUsageType | Prior Ownership Type | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
