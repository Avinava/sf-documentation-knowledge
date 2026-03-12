---
title: "LoanApplicationLiability"
domain: sfFieldRef
topic: loanapplicationliability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.822Z
estimatedTokens: 517
keywords: [LoanApplicationLiability, borrower, co-borrower, current, liabilities, API, version, 47.0, later]
---

# LoanApplicationLiability

> Represents details about the borrower and co-borrower current
			liabilities. This object is available in API version 47.0 and later.

# LoanApplicationLiability

Represents details about the borrower and co-borrower current liabilities. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoanApplicationLiability in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountNumber | Account Number | string |  | 255 |  |  |
| AccountType | Account Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditLimitAmount | Credit Limit | currency |  |  | 18 | 2 |
| CreditorName | Creditor Name | string |  | 255 |  |  |
| Id | Loan Application Liability ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsJointLiability | Joint Liability | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LiabilityClass | Liability Class | picklist |  | 40 |  |  |
| LiabilityExtIdentifier | Loan Application Liability External ID | string |  | 255 |  |  |
| LoanApplicationAssetId | Loan Application Asset ID | reference |  | 18 |  |  |
| LoanApplicationId | Residential Loan Application ID | reference |  | 18 |  |  |
| LoanType | Real Estate Loan Type | picklist |  | 40 |  |  |
| MonthlyPaymentAmount | Monthly Payment | currency |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| OtherLiabilityType | Other Liability or Expense Type | picklist |  | 40 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ShouldBePaidInFull | Paid in Full | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnpaidBalanceAmount | Unpaid Balance | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
