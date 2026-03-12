---
title: "Borrower Input"
domain: financial-services-cloud-object-reference
topic: borrower-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.277Z
estimatedTokens: 884
keywords: [Borrower, Input, co-borrower, loan, application]
---

# Borrower Input

> Represents details of the borrower or co-borrower for the loan
      application.

# Borrower Input

Represents details of the borrower or co-borrower for the loan application.

Root XML tag

<borrowers>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addresses | Borrower Address Input[] | Borrower’s addresses. | Optional | 48.0 |
| asianRaceSubType | String | Borrower's Asian race. | Optional | 48.0 |
| borrowerType | String | Applicant's borrower type. | Optional | 48.0 |
| citizenshipStatus | String | Borrower's citizenship status. | Optional | 48.0 |
| contactId | String | Contact associated with this borrower. | Optional | 48.0 |
| declarations | Borrower Declaration Input[] | Borrower’s declarations. | Optional | 48.0 |
| dependentCount | Integer | Borrower's number of dependents. | Optional | 48.0 |
| dependentsAge | String | Ages of borrower's dependents in a comma-separated list. | Optional | 48.0 |
| employments | Borrower Employment Input[] | Borrower’s employments. | Optional | 48.0 |
| ethnicitySubType | String | Borrower's ethnicity. | Optional | 48.0 |
| ethnicityType | String | Borrower's ethnicity origin. | Optional | 48.0 |
| extendedFields | Extended Fields Input[] | Custom fields. | Optional | 48.0 |
| externalId | String | ID that uniquely identifies imported data in an external data source (if applicable). | Optional | 48.0 |
| genderType | String | Borrower's gender. | Optional | 48.0 |
| hasMilitaryService | Boolean | Indicates whether the borrower is serving in the United States Armed Forces or the borrower or the borrower's deceased spouse served in the past. | Optional | 48.0 |
| id | String | ID of the borrower. | Optional | 48.0 |
| incomes | Borrower Income Input[] | Borrower’s incomes. | Optional | 48.0 |
| isActiveMilitary | Boolean | Indicates whether borrower is currently on active duty with the United States Armed Forces. | Optional | 48.0 |
| isJointCredit | Boolean | Indicates whether borrower is applying for joint credit. | Optional | 48.0 |
| isSurvivingMilitarySpouse | Boolean | Indicates whether borrower is a surviving spouse of a veteran. | Optional | 48.0 |
| maritalStatus | String | Borrower's marital status. | Optional | 48.0 |
| militaryTourExpirationMonth | Integer | Month that borrower's tour of service expires. | Optional | 48.0 |
| militaryTourExpirationYear | Integer | Year that borrower's tour of service expires. | Optional | 48.0 |
| name | String | Name of the borrower. | Optional | 48.0 |
| otherAsianRaceSubType | String | Borrower's Asian race if other is specified. | Optional | 48.0 |
| otherEthnicitySubType | String | Borrower’s ethnicity if other is specified. | Optional | 48.0 |
| otherPacIslandSubType | String | Borrower's native Hawaiian or Pacific Islander race if other is specified. | Optional | 48.0 |
| pacificIslanderSubType | String | Borrower's native Hawaiian or Pacific Islander race. | Optional | 48.0 |
| preferredLanguage | String | Borrower's preferred communication language. | Optional | 48.0 |
| raceType | String | Borrower's race. | Optional | 48.0 |
| tribeName | String | Name of borrower's enrolled or principal tribe. | Optional | 48.0 |
| wasActiveMilitary | Boolean | Indicates whether borrower is currently retired, discharged, or separated from active military duty. | Optional | 48.0 |
| wasNonActivatedService | Boolean | Indicates whether borrower's only military service was as a non-activated Reserve soldier or as a non-activated member of the National Guard. | Optional | 48.0 |

## Code Examples

```
{
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
  ]
}
```

## Related Topics

- Borrower Address Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_borrower_address_input.htm)
- Borrower Declaration Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_borrower_declaration_input.htm)
- Borrower Employment Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_borrower_employment_input.htm)
- Extended Fields Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_extended_fields_input.htm)
- Borrower Income Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_borrower_income_input.htm)
