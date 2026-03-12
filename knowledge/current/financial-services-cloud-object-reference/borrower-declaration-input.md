---
title: "Borrower Declaration Input"
domain: financial-services-cloud-object-reference
topic: borrower-declaration-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.253Z
estimatedTokens: 890
keywords: [Borrower, Declaration, Input, representation, declarations]
---

# Borrower Declaration Input

> Input representation for Borrower declarations

# Borrower Declaration Input

Input representation for Borrower declarations

Root XML tag

<declarations>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| bankruptcyType | String | Bankruptcy type or types (if applicable). | Optional | 48.0 |
| borrowedAmount | Double | Amount of money borrowed for loan application transaction. | Optional | 48.0 |
| extendedFields | Extended Fields Input[] | Custom fields related to the declaration. | Optional | 48.0 |
| externalId | String | Identifier assigned to imported financial data by external data source (if applicable). | Optional | 48.0 |
| hasBorrowedMoney | Boolean | Indicates whether borrower is borrowing money for loan application transaction. | Optional | 48.0 |
| hasCoSignerUndisclosedDebt | Boolean | Indicates whether borrower is co-signer or guarantor on debt or loan that's not disclosed on loan application. | Optional | 48.0 |
| hasDeclaredBankruptcy | Boolean | Indicates whether borrower declared bankruptcy within the past seven years. | Optional | 48.0 |
| hasDeedSurrender | Boolean | Indicates whether borrower conveyed title to a property in lieu of foreclosure in past seven years. | Optional | 48.0 |
| hasOutstandingJudgement | Boolean | Indicates whether there are one or more outstanding judgments against the borrower. | Optional | 48.0 |
| hasOwnershipInterest | Boolean | Indicates whether borrower had ownership interest in a property in the last three years. | Optional | 48.0 |
| hasPastShortSale | Boolean | Indicates whether borrower sold a property to a third party where lender agreed to accept amount less than total outstanding mortgage balance due within past seven years. | Optional | 48.0 |
| hasPropertyForeclosed | Boolean | Indicates whether borrower had property foreclosed upon in last seven years. | Optional | 48.0 |
| hasUndisclosedAddCreditApp | Boolean | Indicates whether, on or before closing, borrower applied for new undisclosed credit like a credit card or installment loan. | Optional | 48.0 |
| hasUndisclosedOtherPropLoan | Boolean | Indicates whether, on or before closing, borrower applied for an undisclosed mortgage loan on a property other than the application property. | Optional | 48.0 |
| id | String | ID of the borrower declaration. | Optional | 48.0 |
| isPartyToLawsuit | Boolean | Indicates whether borrower is party to lawsuit with potential personal financial liability. | Optional | 48.0 |
| isPresentlyDelinquent | Boolean | Indicates whether borrower is currently delinquent or in default on any federal debt or other loan, mortgage, financial obligation, bond, or loan guarantee. | Optional | 48.0 |
| isPrimaryResidence | Boolean | Indicates whether property to be borrower's primary residence. | Optional | 48.0 |
| isRelatedToSeller | Boolean | Indicates whether borrower has family or business relationship with seller of property (for purchase transaction). | Optional | 48.0 |
| isSubjectToPriorityLien | Boolean | Indicates whether application property is to have a priority clean energy lien like Property Assessed Clean Energy Program financing that takes priority over the first mortgage lien. | Optional | 48.0 |
| name | String | Name of the declaration. | Optional | 48.0 |
| priorPropertyTitleType | String | Identifies how borrower held title in the ownership interest property. | Optional | 48.0 |
| priorPropertyUsageType | String | Identifies type of property borrower held ownership interest in. | Optional | 48.0 |

## Code Examples

```
{
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
  ]
}
```

## Related Topics

- Extended Fields Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_extended_fields_input.htm)
