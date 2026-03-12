---
title: "Financial Output"
domain: financial-services-cloud-object-reference
topic: financial-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.638Z
estimatedTokens: 1724
keywords: [Financial, Output, transaction]
---

# Financial Output

> Output details for the financial transaction.

# Financial Output

Output details for the financial transaction.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| borrowerClosingCostAmt | Double | Total closing costs due from borrower, including prepaid and initial escrow payments. | Small, 48.0 | 48.0 |
| cashFromOrToBorrowerAmt | Double | Cash the borrower pays or receives at closing, not including reserves or other funds that may still require lender verification. | Small, 48.0 | 48.0 |
| counselingAgencyName | String | Counseling provider's name if agency isn't HUD approved or if Housing Counseling Agency ID is unknown. | Small, 48.0 | 48.0 |
| counselingAgencyProviderName | String | Education provider's name if agency isn't HUD-approved or if Housing Counseling Agency ID is unknown. | Small, 48.0 | 48.0 |
| counselingCompleteBorrName | String | Name of borrower or borrowers who completed housing counseling. | Small, 48.0 | 48.0 |
| counselingCompletionDate | String | Date borrower completed housing counseling. | Small, 48.0 | 48.0 |
| createdById | String | ID of the user who created this record. | Small, 48.0 | 48.0 |
| createdDate | String | Date and time when this record was created. | Small, 48.0 | 48.0 |
| creditFromSeller | Double | Total amount of closing costs due from seller. | Small, 48.0 | 48.0 |
| discountPointCostAmount | Double | Total cost of discount points purchased by the borrower due at closing. | Small, 48.0 | 48.0 |
| estFirstMortgagePayment | Double | Proposed monthly first mortgage payment for loan application property, including principal and interest. | Small, 48.0 | 48.0 |
| estHomeownerInsurancePayment | Double | Proposed monthly payment for homeowners insurance on application property. | Small, 48.0 | 48.0 |
| estMortgageInsurancePayment | Double | Proposed monthly mortgage insurance payment on application property. | Small, 48.0 | 48.0 |
| estOtherDuesPayment | Double | Proposed total monthly payment on application property for payments like homeowners association, co-op, condo, or planned unit development dues. | Small, 48.0 | 48.0 |
| estOtherPayment | Double | Proposed total monthly payment for other housing expenses on application property. | Small, 48.0 | 48.0 |
| estPropertyTaxesPayment | Double | Proposed monthly payment for real estate taxes on application property. | Small, 48.0 | 48.0 |
| estSubordinateLienPayment | Double | Proposed total monthly payment for other mortgages or liens on loan application property, including principal and interest. | Small, 48.0 | 48.0 |
| estSuppPropInsurancePayment | Double | Proposed monthly payment for supplemental property insurance like flood, earthquake, or umbrella policies on application property. | Small, 48.0 | 48.0 |
| extendedFields | Extended Fields Output[] | Custom fields related to the transaction. | Big, 48.0 | 48.0 |
| externalId | String | Identifier assigned to imported financial data by external data source (if applicable). | Small, 48.0 | 48.0 |
| financeMortgageInsuranceAmt | Double | Total amount of financed mortgage insurance or financed mortgage insurance equivalent. | Small, 48.0 | 48.0 |
| hasCompletedCounseling | Boolean | Indicates whether one or more borrowers completed housing counseling within the last 12 months. | Small, 48.0 | 48.0 |
| hasHomeownerEducation | Boolean | Indicates whether one or more borrowers completed homeownership education within the last 12 months. | Small, 48.0 | 48.0 |
| homeEdCompletedBorrowerName | String | Name of borrower or borrowers who completed homeownership education. | Small, 48.0 | 48.0 |
| homeownerEdCompleteDate | String | Date borrower completed homeownership education. | Small, 48.0 | 48.0 |
| homeownerEdFormat | String | Indicates the format of homeownership education attended by borrower. | Small, 48.0 | 48.0 |
| housingCounselingFormat | String | Indicates the format of the housing counseling completed by borrower. | Small, 48.0 | 48.0 |
| hudApproveAgencyId | String | Home counseling provider's Housing Counseling Agency ID if agency is HUD-approved. | Small, 48.0 | 48.0 |
| hudApprovedProviderId | String | Homeownership education provider's Housing Counseling Agency ID if agency is HUD-approved. | Small, 48.0 | 48.0 |
| id | String | ID of the loan application financial. | Small, 48.0 | 48.0 |
| isDeleted | Boolean | Indicates whether the financial record is deleted. | Small, 48.0 | 48.0 |
| landAcquiredSeparatelyCost | Double | Price of land if purchased separately from the building or structure. | Small, 48.0 | 48.0 |
| lastModifiedById | String | ID of the user who last modified this record. | Small, 48.0 | 48.0 |
| lastModifiedDate | String | Date and time when a user last modified this record. | Small, 48.0 | 48.0 |
| lastReferencedDate | String | Date and time when a user last referenced this record. | Small, 48.0 | 48.0 |
| lastViewedDate | String | Date and time when a user last viewed this record. | Small, 48.0 | 48.0 |
| loanAmount | Double | Total loan amount. | Small, 48.0 | 48.0 |
| loanAmtExclFinMortgageInsurance | Double | Loan amount excluding financed mortgage insurance or financed mortgage insurance equivalent. | Small, 48.0 | 48.0 |
| loanApplicationId | String | ID of the loan application record. | Small, 48.0 | 48.0 |
| name | String | Name of the loan application financial. | Small, 48.0 | 48.0 |
| otherCredit | Double | Total amount of all purchase credits like borrower credits, credits from third parties, and non-cash seller credits. | Small, 48.0 | 48.0 |
| otherNewMortgageLoanAmt | Double | Total amount of other new borrower mortgages, both first lien and subordinate lien, on the application property. | Small, 48.0 | 48.0 |
| outstandingLoanAmount | Double | Total amount of all mortgage loans on application property to be paid off by refinance loan. | Small, 48.0 | 48.0 |
| purchasePriceAmount | Double | Purchase price for the property. | Small, 48.0 | 48.0 |
| remodelAndRepairsAmount | Double | Cost of any alterations, improvements, and repairs on the property. | Small, 48.0 | 48.0 |
| systemModstamp | String | Date and time when a user or automated process (such as a trigger) last modified this record. | Small, 48.0 | 48.0 |
| totalCashDueFromBorrower | Double | Total cash due from borrower at closing. | Small, 48.0 | 48.0 |
| totalCredit | Double | Total borrower credits. | Small, 48.0 | 48.0 |
| totalDebtPaidOffAmount | Double | Total amount of all non-application property liabilities borrower indicated would be paid off on or before closing. | Small, 48.0 | 48.0 |
| totalEstPaymentAmt | Double | Proposed total monthly payment for application property. | Small, 48.0 | 48.0 |
| totalMortgageLoanAndCreditAmt | Double | Total mortgage loans plus total credits. | Small, 48.0 | 48.0 |
| totalMortgageLoansAmount | Double | Total amount of loan. | Small, 48.0 | 48.0 |

## Related Topics

- Extended Fields Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_extended_fields_output.htm)
