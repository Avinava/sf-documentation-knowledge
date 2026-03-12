---
title: "LoanApplicationFinancial"
domain: financial-services-cloud-object-reference
topic: loanapplicationfinancial
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.020Z
estimatedTokens: 2561
keywords: [LoanApplicationFinancial, transaction, loan, application, API, version, 47.0, later, Calls, Associated, Objects]
---

# LoanApplicationFinancial

> Represents transaction details for a loan application. This object is
		available in API version 47.0 and later.

# LoanApplicationFinancial

Represents transaction details for a loan application. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BorrowerClosingCostAmt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal closing costs due from borrower, including prepaid and initial escrow payments. |
| CashFromOrToBorrowerAmt | TypecurrencyPropertiesFilter, Nillable, SortDescriptionCash the borrower pays or receives at closing, not including reserves or other funds that may still require lender verification.FormulaPurchasePriceAmount + RemodelAndRepairsAmount + LandAcquiredSeparatelyAmount + OutstandingLoanAmount + TotalDebtPaidOffAmount + BorrowerClosingCostAmt + DiscountPointCostAmount - LoanExclFinMortInsAmt - FinancedMortgageInsAmt - CreditFromSeller - OtherCredit |
| CounselingAgencyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCounseling provider's name if agency isn't HUD approved or if Housing Counseling Agency ID is unknown |
| CounselingAgencyProvName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEducation provider's name if agency isn't HUD-approved or if Housing Counseling Agency ID is unknown. |
| CounselingComplBorrName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of borrower or borrowers who completed housing counseling. |
| CounselingCompletionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate borrower completed housing counseling. |
| CreditFromSeller | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal amount of closing costs due from seller. |
| DiscountPointCostAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal cost of discount points purchased by the borrower due at closing. |
| EdCompletedBorrowerName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of borrower or borrowers who completed homeownership education. |
| EstFirstMortgagePmtAmt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionProposed monthly first mortgage payment for loan application property, including principal and interest. |
| EstHomeownersInsPmtAmt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionProposed monthly payment for homeowners insurance on application property. |
| EstMortgageInsPmtAmt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionProposed monthly mortgage insurance payment on application property. |
| EstOtherDuesPaymentAmt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionProposed total monthly payment on application property for payments like homeowners association, co-op, condo, or planned unit development dues. |
| EstOtherPaymentAmt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionProposed total monthly payment for other housing expenses on application property. |
| EstPropertyTaxesPmtAmt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionProposed monthly payment for real estate taxes on application property. |
| EstSubordinateLienPmtAmt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionProposed total monthly payment for other mortgages or liens on loan application property, including principal and interest. |
| EstSuppPropertyInsPmtAmt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionProposed monthly payment for supplemental property insurance like flood, earthquake, or umbrella policies on application property. |
| FinancedMortgageInsAmt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal amount of financed mortgage insurance or financed mortgage insurance equivalent. |
| FinancialExtIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies imported data in an external data source (if applicable). This field is unique within your organization. |
| HasCompletedCounseling | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether one or more borrowers completed housing counseling within the last 12 months. |
| HasHoEducation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether one or more borrowers completed homeownership education within the last 12 months. |
| HoEducationCompletedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate borrower completed homeownership education. |
| HoEducationFormat | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the format of homeownership education attended by borrower.Possible values are:Attended Workshop in PersonCompleted Web-Based Workshop |
| HousingCounselingFormat | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the format of the housing counseling completed by borrower.Possible values are:Face-to-FaceInternetTelephone |
| HudApprAgencyIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHome counseling provider's Housing Counseling Agency ID if agency is HUD-approved. |
| HudApprovedProvIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHomeownership education provider's Housing Counseling Agency ID if agency is HUD-approved. |
| LandAcquiredSeparatelyAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPrice of land if purchased separately from the building or structure. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LoanAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of loan including financed mortgage insurance or mortgage insurance equivalent.FormulaLoanExclFinMortInsAmt + FinancedMortgageInsAmt |
| LoanApplicationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the loan application associated with this loan transaction. |
| LoanExclFinMortInsAmt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLoan amount excluding financed mortgage insurance or financed mortgage insurance equivalent. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the loan application financial. |
| OtherCredit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal amount of all purchase credits like borrower credits, credits from third parties, and non-cash seller credits. |
| OtherNewMortgageLoanAmt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal amount of other new borrower mortgages, both first lien and subordinate lien, on the application property. |
| OutstandingLoanAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal amount of all mortgage loans on application property to be paid off by refinance loan. |
| PurchasePriceAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPurchase price for the property. |
| RemodelAndRepairsAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCost of any alterations, improvements, and repairs on the property. |
| TotalCashDueFromBorrower | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal cash due from borrower at closing.FormulaPurchasePriceAmount + RemodelAndRepairsAmount + LandAcquiredSeparatelyAmount + OutstandingLoanAmount + TotalDebtPaidOffAmount + BorrowerClosingCostAmt + DiscountPointCostAmount |
| TotalCredit | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal borrower credits.FormulaCreditFromSeller + OtherCredit |
| TotalDebtPaidOffAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal amount of all non-application property liabilities borrower indicated would be paid off on or before closing. |
| TotalEstPaymentAmt | TypecurrencyPropertiesFilter, Nillable, SortDescriptionProposed total monthly payment for application property.FormulaEstFirstMortgagePmtAmt + EstSubordinateLienPmtAmt + EstHomeownersInsPmtAmt + EstSuppPropertyInsPmtAmt + EstPropertyTaxesPmtAmt + EstMortgageInsPmtAmt + EstOtherDuesPaymentAmt + EstOtherPaymentAmt |
| TotalMortgageLoanAndCreditAmt | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal mortgage loans plus total credits.FormulaLoanExclFinMortInsAmt + FinancedMortgageInsAmt + CreditFromSeller + OtherCredit |
| TotalMortgageLoansAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of loan.FormulaLoanExclFinMortInsAmt + FinancedMortgageInsAmt |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[LoanApplicationFinancialFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LoanApplicationFinancialHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LoanApplicationFinancialFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- LoanApplicationFinancialHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
