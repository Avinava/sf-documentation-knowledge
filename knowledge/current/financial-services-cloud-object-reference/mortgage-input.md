---
title: "Mortgage Input"
domain: financial-services-cloud-object-reference
topic: mortgage-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.399Z
estimatedTokens: 1702
keywords: [Mortgage, Input, POST, PATCH]
---

# Mortgage Input

> Represents the input for mortgage POST or PATCH
    method.

# Mortgage Input

Represents the input for mortgage POST or PATCH method.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Account associated with the application. | Required if opportunityId isn’t provided | 48.0 |
| amortizationTerm | Integer | Duration of the amortization in months. | Optional | 48.0 |
| amortizationType | String | Amortization type for loan. | Optional | 48.0 |
| assets | Asset Input[] | Represents details about the borrower's and co-borrower's current personal and real property. | Optional | 48.0 |
| balloonTermMonths | Integer | Number of months during which the cumulative loan must be repaid. | Optional | 48.0 |
| borrowers | Borrower Input[] | List of borrowers for a loan application. | Optional | 48.0 |
| estateHoldType | String | Lender's lien is on both land and structure (fee simple) or just structure (leasehold). | Optional | 48.0 |
| extendedFields | Extended Fields Input[] | Represents custom fields related to a loan application. | Optional | 48.0 |
| externalId | String | Identifier assigned to imported data by external data source (if applicable). | Optional | 48.0 |
| financials | Financial Input[] | Represents transaction details for a loan application. | Optional | 48.0 |
| hasOtherLoanFeature | Boolean | Indicates whether loan has other amortization feature. | Optional | 48.0 |
| hasPrepaymentPenalty | Boolean | Indicates whether penalty is incurred if borrower pays off loan balance before the loan term expires. | Optional | 48.0 |
| improvementCost | Double | Construction costs for a construction loan or home improvement costs for a renovation loan. | Optional | 48.0 |
| initialBuydownRate | Double | Initial lesser interest rate for the loan. | Optional | 48.0 |
| interestOnlyMonthCount | Integer | Number of months that loan payments are interest only. | Optional | 48.0 |
| interestRate | Double | Interest rate for loan. | Optional | 48.0 |
| isBalloon | Boolean | Indicates whether borrower is applying for a balloon payment mortgage. | Optional | 48.0 |
| isBorrowerInCommunityPropState | Boolean | Indicates whether borrower lives in community property state. | Optional | 48.0 |
| isConstructionToPermanent | Boolean | Indicates whether at least one borrower lives in a community property state. | Optional | 48.0 |
| isContractForDeed | Boolean | Indicates whether loan proceeds are to pay off balance due on a contract for deed or land contract. | Optional | 48.0 |
| isEnergyRelatedImprovement | Boolean | Indicates whether loan is to finance energy-related improvements. | Optional | 48.0 |
| isInterestOnly | Boolean | Indicates whether borrower is applying for an interest-only mortgage. | Optional | 48.0 |
| isNegativeAmortization | Boolean | Indicates whether loan allows for negative amortization where shortfalls in interest payments are added to the outstanding loan balance. | Optional | 48.0 |
| isPropInCommunityPropState | Boolean | Indicates whether property is located in a community property state. | Optional | 48.0 |
| isRenovation | Boolean | Indicates whether loan proceeds to finance cost of renovations to the property, and renovation value is included in the property's appraised value. | Optional | 48.0 |
| isSingleClosing | Boolean | Indicates whether construction and permanent loans have a single combined closing. Once construction is complete, loan converts to a traditional mortgage. | Optional | 48.0 |
| isSubjectToPriorityLien | Boolean | Indicates whether property is currently subject to an energy-related lien that could take priority over the first mortgage lien. | Optional | 48.0 |
| isTempIntRateBuydown | Boolean | Indicates whether borrower is applying for loan with an initially reduced interest payment in exchange for an up-front cash deposit. | Optional | 48.0 |
| leaseHoldExpirationDate | String | Date when leasehold expires if land is leased. | Optional | 48.0 |
| liabilities | Liability Input[] | Represents details about the borrower and co-borrower current liabilities. | Optional | 48.0 |
| loanPurpose | String | Purpose of the loan. | Optional | 48.0 |
| lotAcquiredDate | String | Month and year property or land was purchased. | Optional | 48.0 |
| lotOriginalCost | Double | Original property cost (refinance) or original land cost (construction). | Optional | 48.0 |
| monthsBeforeFirstAdj | Integer | Initial period prior to first adjustment in months. | Optional | 48.0 |
| monthsBetweenAdjustments | Integer | Number of months before the first rate adjustment for an adjustable rate loan. | Optional | 48.0 |
| mortgageLienType | String | Type of mortgage lien associated with this loan application. | Optional | 48.0 |
| mortgageProgramType | String | Type of mortgage program applied for. | Optional | 48.0 |
| name | String | Name of the residential loan application. | Required | 48.0 |
| nativeLandTenure | String | Property is located on an area reserved by or for an Indian land, village, or tribe to live on and use. | Optional | 48.0 |
| opportunityId | String | Opportunity associated with the application. | Required if accountId isn’t provided | 48.0 |
| otherAmortizationType | String | Description of other amortization type for government loans. | Optional | 48.0 |
| otherLoanFeature | String | Description of other loan amortization feature. | Optional | 48.0 |
| otherLoanPurpose | String | What the borrower will use the loan for if other was specified. | Optional | 48.0 |
| otherMortgageProgramType | String | Description of the other mortgage type. | Optional | 48.0 |
| otherRefinanceProgType | String | Refinance program name if other was specified. | Optional | 48.0 |
| prepayPenaltyTermMonth | Integer | Number of months during which borrower incurs a penalty for early payoff of the loan balance. | Optional | 48.0 |
| projectType | String | Specifies the type of project that the property belongs to. | Optional | 48.0 |
| properties | Property Input[] | Represents details of the property the loan application finances. | Optional | 48.0 |
| refinanceProgramType | String | The applicable refinance program type based on the investor, guarantor, or lender guidelines. | Optional | 48.0 |
| refinanceType | String | Refinance loan type. | Optional | 48.0 |
| status | String | Indicates the current status of the loan application. | Optional | 48.0 |
| titleHolders | Title Holder Input[] | Represents details of borrowers who are applying to hold title to the property the loan application finances. | Optional | 48.0 |
| titleType | String | Way the borrower or borrowers take title for the loan. | Optional | 48.0 |
| trustTitleType | String | Title to be held in a living trust or a land trust. | Optional | 48.0 |

## Code Examples

```
{
  "accountId": "001RM000004XraFYAS",
  "amortizationTerm": 30,
  "amortizationType": "Adjustable Rate",
  "assets": [
    {
      "accountNumber": "849393",
      "accountType": "Checking",
      "assetClass": "Financial",
      "assetType": "Earnest Money",
      "borrowersExternalIds": [
        "0fc5e4d6-de5d-4954-9d21-3c628ad8809a",
        "732c3d7e-78ae-4b5e-944d-f411fb4011d4"
      ],
      "cashOrMarketValue": 434934903,
      "dispositionType": "Pending Sale",
      "extendedFields": [],
      "externalId": "df126729-19c0-4dc9-80c6-322bc6fb994c",
      "financialInstitutionName": "BOFA",
      "grossMonthlyRentalIncome": 355395355,
      "name": "Asset1",
      "netMonthlyRentalIncome": 2535345,
      "presentMarketValue": 7937399,
      "realEstateAddress": {
        "city": "San Francisco",
        "country": "CA",
        "street": "234 1st Street"
      },
      "realEstateMonthlyExpense": 3413131
    },
    {
      "accountNumber": "2424242424",
      "accountType": "Checking",
      "assetClass": "Real Estate",
      "assetType": "Earnest Money",
      "borrowersExternalIds": [
        "0fc5e4d6-de5d-4954-9d21-3c628ad8809a",
        "732c3d7e-78ae-4b5e-944d-f411fb4011d4"
      ],
      "cashOrMarketValue": 24424525,
      "dispositionType": "Sold",
      "extendedFields": [],
      "externalId": "a57f5b81-477b-41a3-a647-5852562913e5",
      "financialInstitutionName": "wells",
      "grossMonthlyRentalIncome": 24242224,
      "name": "Asset2",
      "netMonthlyRentalIncome": 242424234,
      "presentMarketValue": 2423131313,
      "realEstateAddress": {
        "city": "San Francisco",
        "country": "CA",
        "street": "123 2nd Street"
      },
      "realEstateMonthlyExpense": 2242423424
    }
  ],
  "balloonTermMonths": 3,
  "borrowers": [
    {
      "addresses": [
        {
          "addressOwnership": "Own",
          "extendedFields": [],
          "externalId": "e8d51e2a-7d97-4da0-8356-ca86995d3d39",
          "monthlyRentPayment": 2300,
          "name": "Addr1",
          "residenceAdditionalMonthCount": 23,
          "residenceAddress": {
            "city": "San Francisco",
            "country": "United States",
            "postalCode": "94105",
            "state": "CA",
            "street": "50 Fremont Street"
          },
          "residenceYearCount": 3,
          "residencyType": "Former Residence"
        }
      ],
      "asianRaceSubType": "Asian Indian",
      "borrowerType": "Borrower",
      "citizenshipStatus": "U.S. Citizen",
      "declarations": [
        {
          "bankruptcyType": "Chapter 11",
          "borrowedAmount": 20000,
          "extendedFields": [],
          "externalId": "be71c372-8290-44dc-bb73-6f6d1ce7e9a9",
          "hasBorrowedMoney": true,
          "hasCoSignerUndisclosedDebt": true,
          "hasDeclaredBankruptcy": true,
          "hasDeedSurrender": true,
          "hasOutstandingJudgement": true,
          "hasOwnershipInterest": true,
          "hasPastShortSale": true,
          "hasPropertyForeclosed": true,
          "hasUndisclosedAddCreditApp": true,
          "hasUndisclosedOtherPropLoan": true,
          "isPartyToLawsuit": true,
          "isPresentlyDelinquent": true,
          "isPrimaryResidence": true,
          "isRelatedToSeller": true,
          "name": "Decl1",
          "priorPropertyTitleType": "Yourself",
          "priorPropertyUsageType": "Secondary Residence"
        }
      ],
      "dependentCount": 2,
      "dependentsAge": "25,34",
      "employments": [
        {
          "currentJobAdditionalMonthCount": 24,
          "currentJobYearCount": 4,
          "employerAddress": {
            "city": "Fresno",
            "country": "United States",
            "postalCode": "93721",
            "state": "CA",
            "street": "1500 Divisadero Street"
          },
          "extendedFields": [],
          "externalId": "2a9460d0-3194-449a-8bf0-488a6cbaed0a",
          "isRelToTransactionParty": true,
          "isLessThanQuarterShare": true,
          "isSelfEmployed": true,
          "jobTitle": "developer",
          "monthlyBaseIncomeAmount": 2300,
          "monthlyBonusAmount": 100,
          "monthlyCommissionAmount": 10,
          "monthlyIncome": 5000,
          "monthlyMilitaryEntitlementAmt": 20,
          "monthlyOtherIncomeAmount": 10,
          "monthlyOvertimeAmount": 200,
          "name": "Empl1",
          "startDate": "2019-10-10T03:11:27.000Z"
        }
      ],
      "ethnicitySubType": "Mexican",
      "ethnicityType": "Not Hispanic or Latino",
      "extendedFields": [],
      "externalId": "0fc5e4d6-de5d-4954-9d21-3c628ad8809a",
      "genderType": "Female",
      "hasMilitaryService": true,
      "incomes": [
        {
          "extendedFields": [],
          "externalId": "b19d9372-df99-4eec-9de0-ad785503992d",
          "incomeSourceType": "Capital Gains",
          "monthlyIncomeAmount": 100,
          "name": "Income1"
        }
      ],
      "isActiveMilitary": true,
      "isJointCredit": true,
      "isSurvivingMilitarySpouse": true,
      "maritalStatus": "Married",
      "militaryTourExpirationMonth": 2,
      "militaryTourExpirationYear": 2027,
      "name": "BR1",
      "otherAsianRaceSubType": "Indian",
      "otherEthnicitySubType": "Mexico",
      "otherPacIslandSubType": "Test Pacific Islander",
      "pacificIslanderSubType": "Native Hawaiian",
      "preferredLanguage": "English",
      "raceType": "Asian",
      "tribeName": "Pacific Islander",
      "wasActiveMilitary": true,
      "wasNonActivatedService": true
    },
    {
      "addresses": [
        {
          "addressOwnership": "Rent",
          "extendedFields": [],
          "externalId": "86c168dd-a29c-4c0b-b366-51a40cd66c4b",
          "monthlyRentPayment": 5000,
          "name": "Addr2",
          "residenceAdditionalMonthCount": 24,
          "residenceAddress": {
            "city": "San Francisco",
            "country": "United States",
            "postalCode": "94115",
            "state": "CA",
            "street": "1500 Divisadero Street"
          },
          "residenceYearCount": 3,
          "residencyType": "Present Address"
        }
      ],
      "asianRaceSubType": "Asian Indian",
      "borrowerType": "CoBorrower",
      "citizenshipStatus": "U.S. Citizen",
      "declarations": [
        {
          "bankruptcyType": "Chapter 12",
          "borrowedAmount": 657575,
          "extendedFields": [],
          "externalId": "704e7cfd-932c-4a17-81ad-844fe1a007c6",
          "hasBorrowedMoney": true,
          "hasCoSignerUndisclosedDebt": true,
          "hasDeclaredBankruptcy": true,
          "hasDeedSurrender": true,
          "hasOutstandingJudgement": true,
          "hasOwnershipInterest": true,
          "hasPastShortSale": true,
          "hasPropertyForeclosed": true,
          "hasUndisclosedAddCreditApp": true,
          "hasUndisclosedOtherPropLoan": true,
          "isPartyToLawsuit": true,
          "isPresentlyDelinquent": true,
          "isPrimaryResidence": true,
          "isRelatedToSeller": true,
          "name": "Decl1",
          "priorPropertyTitleType": "Yourself",
          "priorPropertyUsageType": "Primary Residence"
        }
      ],
      "dependentCount": 2,
      "dependentsAge": "34,35",
      "employments": [
        {
          "currentJobAdditionalMonthCount": 24,
          "currentJobYearCount": 3,
          "employerAddress": {
            "city": "Fresno",
            "country": "United States",
            "postalCode": "93721",
            "state": "CA",
            "street": "2300 Stockton Street"
          },
          "extendedFields": [],
          "externalId": "34380cb7-95ca-4867-9a74-972af1be22db",
          "isRelToTransactionParty": true,
          "isLessThanQuarterShare": true,
          "isSelfEmployed": true,
          "jobTitle": "developer",
          "monthlyBaseIncomeAmount": 2400,
          "monthlyBonusAmount": 234,
          "monthlyCommissionAmount": 10,
          "monthlyIncome": 45668,
          "monthlyMilitaryEntitlementAmt": 20,
          "monthlyOtherIncomeAmount": 394,
          "monthlyOvertimeAmount": 123,
          "name": "Empl2",
          "startDate": "2019-10-10T03:11:27.000Z"
        }
      ],
      "ethnicitySubType": "Mexican",
      "ethnicityType": "Hispanic or Latino",
      "extendedFields": [],
      "externalId": "732c3d7e-78ae-4b5e-944d-f411fb4011d4",
      "genderType": "Female",
      "hasMilitaryService": true,
      "incomes": [
        {
          "extendedFields": [],
          "externalId": "91027067-09d3-45f2-a0fc-217ce1f63458",
          "incomeSourceType": "Child Support",
          "monthlyIncomeAmount": 200,
          "name": "Income1"
        }
      ],
      "isActiveMilitary": true,
      "isJointCredit": true,
      "isSurvivingMilitarySpouse": true,
      "maritalStatus": "Married",
      "militaryTourExpirationMonth": 3,
      "militaryTourExpirationYear": 2029,
      "name": "COB1",
      "otherAsianRaceSubType": "South india",
      "otherEthnicitySubType": "Mexico",
      "otherPacIslandSubType": "Test pacific Islander",
      "pacificIslanderSubType": "Guamanian or Chamorro",
      "preferredLanguage": "English",
      "raceType": "American Indian or Alaska Native",
      "tribeName": "Pacific Islander",
      "wasActiveMilitary": true,
      "wasNonActivatedService": true
    }
  ],
  "estateHoldType": "Fee Simple",
  "extendedFields": [],
  "externalId": "0c4a3933-47d3-43d5-a2e6-09ae10e11a5e",
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
  ],
  "hasOtherLoanFeature": true,
  "hasPrepaymentPenalty": true,
  "improvementCost": 100,
  "initialBuydownRate": 401,
  "interestOnlyMonthCount": 4,
  "interestRate": 4,
  "isBalloon": true,
  "isBorrowerInCommunityPropState": true,
  "isConstructionToPermanent": true,
  "isContractForDeed": true,
  "isEnergyRelatedImprovement": true,
  "isInterestOnly": true,
  "isNegativeAmortization": true,
  "isPropInCommunityPropState": true,
  "isRenovation": true,
  "isSingleClosing": true,
  "isSubjectToPriorityLien": true,
  "isTempIntRateBuydown": true,
  "leaseHoldExpirationDate": "2019-10-31T19:00:00.000Z",
  "liabilities": [
    {
      "accountNumber": "134234242",
      "accountType": "Revolving",
      "borrowersExternalIds": [
        "0fc5e4d6-de5d-4954-9d21-3c628ad8809a",
        "732c3d7e-78ae-4b5e-944d-f411fb4011d4"
      ],
      "creditLimitAmount": 34353,
      "creditorName": "BOFA",
      "extendedFields": [],
      "externalId": "df126729-19c0-4dc9-80c6-322bc6fb994c",
      "isJointLiability": true,
      "liabilityClass": "Financial",
      "loanType": "Conventional",
      "monthlyPaymentAmount": 35353,
      "name": "Liab1",
      "otherLiabilityType": "Child Support",
      "shouldBePaidInFull": true,
      "unpaidBalanceAmount": 242
    },
    {
      "accountNumber": "464634123",
      "accountType": "Revolving",
      "borrowersExternalIds": [
        "0fc5e4d6-de5d-4954-9d21-3c628ad8809a",
        "732c3d7e-78ae-4b5e-944d-f411fb4011d4"
      ],
      "creditLimitAmount": 423465356,
      "creditorName": "CHase",
      "extendedFields": [],
      "externalId": "194bcc9c-7b86-4a49-9d17-fad0e4d205a3",
      "isJointLiability": true,
      "liabilityClass": "Financial",
      "loanType": "Conventional",
      "monthlyPaymentAmount": 2423535,
      "name": "Liab2",
      "otherLiabilityType": "Alimony",
      "shouldBePaidInFull": true,
      "unpaidBalanceAmount": 553
    }
  ],
  "loanPurpose": "Purchase",
  "lotAcquiredDate": "2019-10-31T19:00:00.000Z",
  "lotOriginalCost": 200.3,
  "monthsBeforeFirstAdj": 2,
  "monthsBetweenAdjustments": 3,
  "mortgageLienType": "First Lien",
  "mortgageProgramType": "Conventional",
  "name": "Loan1",
  "nativeLandTenure": "Fee Simple (On a Reservation)",
  "otherAmortizationType": "Test Amortization type",
  "otherLoanFeature": "Test Loan Feature",
  "otherLoanPurpose": "Test Loan Purpose",
  "otherMortgageProgramType": "Test program",
  "otherRefinanceProgType": "Test Refinance",
  "prepayPenaltyTermMonth": 5,
  "projectType": "Cooperative",
  "properties": [
    {
      "esMonthlyRentalIncome": 400506,
      "esNetMonthlyRentalIncome": 304056,
      "extendedFields": [],
      "externalId": "a57f5b81-477b-41a3-a647-5852562913e5",
      "isManufacturedHome": true,
      "isMixedUseProperty": true,
      "loanPurposeType": "Purchase",
      "name": "Prop1",
      "propertyUseType": "Primary Residence",
      "propertyValue": 50500555,
      "requestedLoanAmount": 5005000,
      "unitsFinancedCount": 5
    }
  ],
  "refinanceProgramType": "Full Documentation",
  "refinanceType": "No Cash Out",
  "status": "New",
  "titleHolders": [
    {
      "extendedFields": [],
      "externalId": "e8d51e2a-7d97-4da0-8356-ca86995d3d39",
      "isCurrentTitleHolder": true,
      "name": "T1",
      "titleHolderName": "Times"
    }
  ],
  "titleType": "Joint Tenancy with Right of Survivorship",
  "trustTitleType": "Title Will be Held by an Inter Vivos (Living) Trust"
}
```

## Related Topics

- Asset Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_mortgage_asset_input.htm)
- Borrower Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_borrower_input.htm)
- Extended Fields Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_extended_fields_input.htm)
- Financial Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_mortgage_financial_input.htm)
- Liability Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_mortgage_liability_input.htm)
- Property Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_mortgage_property_input.htm)
- Title Holder Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_mortgage_title_holder_input.htm)
