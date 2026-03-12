---
title: "Financial Input"
domain: financial-services-cloud-object-reference
topic: financial-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.383Z
estimatedTokens: 1252
keywords: [Financial, Input, transaction]
---

# Financial Input

> Input details for the financial transaction.

# Financial Input

Input details for the financial transaction.

Root XML tag

<financials>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| borrowerClosingCostAmt | Double | Total closing costs due from borrower, including prepaid and initial escrow payments. | Optional | 48.0 |
| counselingAgencyName | String | Counseling provider's name if agency isn't HUD approved or if Housing Counseling Agency ID is unknown. | Optional | 48.0 |
| counselingAgencyProviderName | String | Education provider's name if agency isn't HUD-approved or if Housing Counseling Agency ID is unknown. | Optional | 48.0 |
| counselingCompleteBorrName | String | Name of borrower or borrowers who completed housing counseling. | Optional | 48.0 |
| counselingCompletionDate | String | Date borrower completed housing counseling. | Optional | 48.0 |
| creditFromSeller | Double | Total amount of closing costs due from seller. | Optional | 48.0 |
| discountPointCostAmount | Double | Total cost of discount points purchased by the borrower due at closing. | Optional | 48.0 |
| estFirstMortgagePayment | Double | Proposed monthly first mortgage payment for loan application property, including principal and interest. | Optional | 48.0 |
| estHomeownerInsurancePayment | Double | Proposed monthly payment for homeowners insurance on application property. | Optional | 48.0 |
| estMortgageInsurancePayment | Double | Proposed monthly mortgage insurance payment on application property. | Optional | 48.0 |
| estOtherDuesPayment | Double | Proposed total monthly payment on application property for payments like homeowners association, co-op, condo, or planned unit development dues. | Optional | 48.0 |
| estOtherPayment | Double | Proposed total monthly payment for other housing expenses on application property. | Optional | 48.0 |
| estPropertyTaxesPayment | Double | Proposed monthly payment for real estate taxes on application property. | Optional | 48.0 |
| estSubordinateLienPayment | Double | Proposed total monthly payment for other mortgages or liens on loan application property, including principal and interest. | Optional | 48.0 |
| estSuppPropInsurancePayment | Double | Proposed monthly payment for supplemental property insurance like flood, earthquake, or umbrella policies on application property. | Optional | 48.0 |
| extendedFields | Extended Fields Input[] | Custom fields related to the transaction. | Optional | 48.0 |
| externalId | String | Identifier assigned to imported financial data by external data source (if applicable). | Optional | 48.0 |
| financeMortgageInsuranceAmt | Double | Total amount of financed mortgage insurance or financed mortgage insurance equivalent. | Optional | 48.0 |
| hasCompletedCounseling | Boolean | Indicates whether one or more borrowers completed housing counseling within the last 12 months. | Optional | 48.0 |
| hasHomeownerEducation | Boolean | Indicates whether one or more borrowers completed homeownership education within the last 12 months. | Optional | 48.0 |
| homeEdCompletedBorrowerName | String | Name of borrower or borrowers who completed homeownership education. | Optional | 48.0 |
| homeownerEdCompleteDate | String | Date borrower completed homeownership education. | Optional | 48.0 |
| homeownerEdFormat | String | Indicates the format of homeownership education attended by borrower. | Optional | 48.0 |
| housingCounselingFormat | String | Indicates the format of the housing counseling completed by borrower. | Optional | 48.0 |
| hudApproveAgencyId | String | Home counseling provider's Housing Counseling Agency ID if agency is HUD-approved. | Optional | 48.0 |
| hudApprovedProviderId | String | Homeownership education provider's Housing Counseling Agency ID if agency is HUD-approved. | Optional | 48.0 |
| id | String | ID of the loan application financial. | Optional | 48.0 |
| landAcquiredSeparatelyAmount | Double | Price of land if purchased separately from the building or structure. | Optional | 48.0 |
| loanAmtExclFinMortgageInsurance | Double | Loan amount excluding financed mortgage insurance or financed mortgage insurance equivalent. | Optional | 48.0 |
| name | String | Name of the loan application financial. | Optional | 48.0 |
| otherCredit | Double | Total amount of all purchase credits like borrower credits, credits from third parties, and non-cash seller credits. | Optional | 48.0 |
| otherNewMortgageLoanAmt | Double | Total amount of other new borrower mortgages, both first lien and subordinate lien, on the application property. | Optional | 48.0 |
| outstandingLoanAmount | Double | Total amount of all mortgage loans on application property to be paid off by refinance loan. | Optional | 48.0 |
| purchasePriceAmount | Double | Purchase price for the property. | Optional | 48.0 |
| remodelAndRepairsAmount | Double | Cost of any alterations, improvements, and repairs on the property. | Optional | 48.0 |

## Code Examples

```
{
  "financials": [
    {
      "borrowerClosingCostAmt": 95956,
      "counselingAgencyProviderName": "Test provider",
      "counselingCompleteBorrName": "BR1",
      "counselingCompletionDate": "2019-10-31T19:00:00.000Z",
      "creditFromSeller": 33342,
      "discountPointCostAmount": 59586,
      "estFirstMortgagePayment": 459677,
      "estHomeownerInsurancePayment": 35521,
      "estMortgageInsurancePayment": 2424555,
      "estOtherDuesPayment": 24354,
      "estOtherPayment": 323231,
      "estPropertyTaxesPayment": 422556,
      "estSubordinateLienPayment": 35453,
      "estSuppPropInsurancePayment": 44959,
      "extendedFields": [],
      "externalId": "af7e7c76-33ac-4005-b377-4b4663a49ec9",
      "financeMortgageInsuranceAmt": 353,
      "hasCompletedCounseling": true,
      "hasHomeownerEducation": true,
      "homeEdCompletedBorrowerName": "BR1",
      "homeownerEdCompleteDate": "2019-10-24T19:00:00.000Z",
      "homeownerEdFormat": "Attended Workshop in Person",
      "housingCounselingFormat": "Face-to-Face",
      "hudApproveAgencyId": "12344",
      "hudApprovedProviderId": "3532",
      "landAcquiredSeparatelyAmount": 2040,
      "loanAmtExclFinMortgageInsurance": 33345,
      "name": "Fin1",
      "otherCredit": 2242,
      "otherNewMortgageLoanAmt": 253535,
      "outstandingLoanAmount": 24505056,
      "purchasePriceAmount": 150000,
      "remodelAndRepairsAmount": 3040
    }
  ]
}
```

## Related Topics

- Extended Fields Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_extended_fields_input.htm)
