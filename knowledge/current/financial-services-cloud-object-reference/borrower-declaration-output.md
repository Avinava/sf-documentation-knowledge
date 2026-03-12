---
title: "Borrower Declaration Output"
domain: financial-services-cloud-object-reference
topic: borrower-declaration-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.510Z
estimatedTokens: 1184
keywords: [Borrower, Declaration, Output, financial, issues, foreclosure, lawsuits, defaults, applicant, co-applicant]
---

# Borrower Declaration Output

> Represents financial issues like foreclosure, lawsuits, or defaults
      of the applicant or co-applicant.

# Borrower Declaration Output

Represents financial issues like foreclosure, lawsuits, or defaults of the applicant or co-applicant.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| bankruptcyType | String | Bankruptcy type or types (if applicable). | Small, 48.0 | 48.0 |
| borrowedAmount | Double | Amount of money borrowed for loan application transaction. | Small, 48.0 | 48.0 |
| createdById | String | ID of the user who created this record. | Small, 48.0 | 48.0 |
| createdDate | String | Date and time when this record was created. | Small, 48.0 | 48.0 |
| extendedFields | Extended Fields Output[] | Custom fields related to the financial transaction. | Big, 48.0 | 48.0 |
| externalId | String | Identifier assigned to imported declaration data by external data source (if applicable). | Small, 48.0 | 48.0 |
| hasBorrowedMoney | Boolean | Indicates whether borrower is borrowing money for loan application transaction. | Small, 48.0 | 48.0 |
| hasCoSignerUndisclosedDebt | Boolean | Indicates whether borrower is co-signer or guarantor on debt or loan that's not disclosed on loan application. | Small, 48.0 | 48.0 |
| hasDeclaredBankruptcy | Boolean | Indicates whether borrower declared bankruptcy within the past seven years. | Small, 48.0 | 48.0 |
| hasDeedSurrender | Boolean | Indicates whether borrower conveyed title to a property in lieu of foreclosure in past seven years. | Small, 48.0 | 48.0 |
| hasOutstandingJudgement | Boolean | Indicates whether there are one or more outstanding judgments against the borrower. | Small, 48.0 | 48.0 |
| hasOwnershipInterest | Boolean | Indicates whether borrower had ownership interest in a property in the last ree years. | Small, 48.0 | 48.0 |
| hasPastShortSale | Boolean | Indicates whether borrower sold a property to a third party where lender agreed to accept amount less than total outstanding mortgage balance due within past ven years. | Small, 48.0 | 48.0 |
| hasPropertyForeclosed | Boolean | Indicates whether borrower had property foreclosed upon in last ven years. | Small, 48.0 | 48.0 |
| hasUndisclosedAddCreditApp | Boolean | Indicates whether, on or before closing, borrower applied for new undisclosed credit like a credit card or installment loan. | Small, 48.0 | 48.0 |
| hasUndisclosedOtherPropLoan | Boolean | Indicates whether, on or before closing, borrower applied for an undisclosed mortgage loan on a property other than the application property. | Small, 48.0 | 48.0 |
| id | String | ID of the borrower declaration. | Small, 48.0 | 48.0 |
| isDeleted | Boolean | Indicates whether the declaration record is deleted. | Small, 48.0 | 48.0 |
| isPartyToLawsuit | Boolean | Indicates whether borrower is party to lawsuit with potential personal financial liability. | Small, 48.0 | 48.0 |
| isPresentlyDelinquent | Boolean | Indicates whether borrower is currently delinquent or in default on any federal debt or other loan, mortgage, financial obligation, bond, or loan guarantee. | Small, 48.0 | 48.0 |
| isPrimaryResidence | Boolean | Indicates whether property is to be borrower's primary residence. | Small, 48.0 | 48.0 |
| isRelatedToSeller | Boolean | Indicates whether borrower has family or business relationship with seller of property (for purchase transaction). | Small, 48.0 | 48.0 |
| isSubjectToPriorityLien | Boolean | Indicates whether application property is to have a priority clean energy lien like Property Assessed Clean Energy Program financing that takes priority over the first mortgage lien. | Small, 48.0 | 48.0 |
| lastModifiedById | String | ID of the user who last modified this record. | Small, 48.0 | 48.0 |
| lastModifiedDate | String | Date and time when a user last modified this record. | Small, 48.0 | 48.0 |
| lastReferencedDate | String | Date and time when a user last referenced this record. | Small, 48.0 | 48.0 |
| lastViewedDate | String | Date and time when a user last viewed this record. | Small, 48.0 | 48.0 |
| loanApplicantId | String | ID of the loan applicant record. | Small, 48.0 | 48.0 |
| loanApplicationId | String | ID of the loan application record. | Small, 48.0 | 48.0 |
| name | String | Name of the declaration. | Small, 48.0 | 48.0 |
| ownerId | String | ID of the user who owns the record. | Small, 48.0 | 48.0 |
| priorPropertyTitleType | String | Identifies how borrower held title in the ownership interest property. | Small, 48.0 | 48.0 |
| priorPropertyUsageType | String | Identifies type of property borrower held ownership interest in. | Small, 48.0 | 48.0 |
| systemModstamp | String | Date and time when a user or automated process (such as a trigger) last modified this record. | Small, 48.0 | 48.0 |

## Related Topics

- Extended Fields Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_extended_fields_output.htm)
