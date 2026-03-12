---
title: "LoanApplicationFinancial"
domain: sfFieldRef
topic: loanapplicationfinancial
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.801Z
estimatedTokens: 1143
keywords: [LoanApplicationFinancial, transaction, loan, application, API, version, 47.0, later]
---

# LoanApplicationFinancial

> Represents transaction details for a loan application. This object is
		available in API version 47.0 and later.

# LoanApplicationFinancial

Represents transaction details for a loan application. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoanApplicationFinancial in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BorrowerClosingCostAmt | Borrower Closing Costs | currency |  |  | 18 | 2 |
| CashFromOrToBorrowerAmt | Cash To or From Borrower | currency |  |  | 18 | 2 |
| CounselingAgencyName | Housing Counseling Provider Name | string |  | 255 |  |  |
| CounselingAgencyProvName | Housing Counseling Provider Name | string |  | 255 |  |  |
| CounselingComplBorrName | Borrowers Who Completed Counseling | string |  | 255 |  |  |
| CounselingCompletionDate | Housing Counseling Completion Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditFromSeller | Closing Costs Paid by Seller | currency |  |  | 18 | 2 |
| DiscountPointCostAmount | Cost of Discount Points Purchased by Borrower | currency |  |  | 18 | 2 |
| EdCompletedBorrowerName | Borrowers Who Completed Homeownership Education | string |  | 255 |  |  |
| EstFirstMortgagePmtAmt | Proposed Monthly First Mortgage Payment | currency |  |  | 18 | 2 |
| EstHomeownersInsPmtAmt | Proposed Monthly Homeowners Insurance Payment | currency |  |  | 18 | 2 |
| EstMortgageInsPmtAmt | Proposed Monthly Mortgage Insurance Payment | currency |  |  | 18 | 2 |
| EstOtherDuesPaymentAmt | Proposed Monthly Dues Payment | currency |  |  | 18 | 2 |
| EstOtherPaymentAmt | Proposed Other Monthly Payment | currency |  |  | 18 | 2 |
| EstPropertyTaxesPmtAmt | Proposed Monthly Property Tax Payment | currency |  |  | 18 | 2 |
| EstSubordinateLienPmtAmt | Proposed Monthly Subordinate Liens Payment | currency |  |  | 18 | 2 |
| EstSuppPropertyInsPmtAmt | Proposed Monthly Supplemental Property Insurance Payment | currency |  |  | 18 | 2 |
| FinancedMortgageInsAmt | Total Financed Mortgage Insurance | currency |  |  | 18 | 2 |
| FinancialExtIdentifier | Loan Application Financial External ID | string |  | 255 |  |  |
| HasCompletedCounseling | Housing Counseling | boolean |  |  |  |  |
| HasHoEducation | Homeowner Education | boolean |  |  |  |  |
| HoEducationCompletedDate | Homeownership Education Completion Date | datetime |  |  |  |  |
| HoEducationFormat | Homeownership Education Format | picklist |  | 40 |  |  |
| HousingCounselingFormat | Housing Counseling Format | picklist |  | 40 |  |  |
| HudApprAgencyIdentifier | Housing Counseling Agency ID | string |  | 255 |  |  |
| HudApprovedProvIdentifier | Housing Counseling Agency ID | string |  | 255 |  |  |
| Id | Loan Application Financial ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LandAcquiredSeparatelyAmount | Cost of Land Acquired Separately | currency |  |  | 18 | 2 |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoanAmount | Total Mortgage Loan | currency |  |  | 18 | 2 |
| LoanApplicationId | Residential Loan Application ID | reference |  | 18 |  |  |
| LoanExclFinMortInsAmt | Loan Amount Excluding Financed Mortgage Insurance | currency |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| OtherCredit | Other Credits | currency |  |  | 18 | 2 |
| OtherNewMortgageLoanAmt | Other New Mortgage Loans | currency |  |  | 18 | 2 |
| OutstandingLoanAmount | Total Outstanding Mortgage Amount | currency |  |  | 18 | 2 |
| PurchasePriceAmount | Purchase Price | currency |  |  | 18 | 2 |
| RemodelAndRepairsAmount | Cost of Alterations, Improvements, and Repairs | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalCashDueFromBorrower | Total Due From Borrower | currency |  |  | 18 | 2 |
| TotalCredit | Total Credits | currency |  |  | 18 | 2 |
| TotalDebtPaidOffAmount | Total Credit Card and Other Debt Paid Off | currency |  |  | 18 | 2 |
| TotalEstPaymentAmt | Proposed Total Monthly Payment | currency |  |  | 18 | 2 |
| TotalMortgageLoanAndCreditAmt | Total Mortgage Loans and Credits | currency |  |  | 18 | 2 |
| TotalMortgageLoansAmount | Total Mortgage Loans | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
