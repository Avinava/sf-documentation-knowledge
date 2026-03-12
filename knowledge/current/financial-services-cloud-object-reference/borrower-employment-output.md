---
title: "Borrower Employment Output"
domain: financial-services-cloud-object-reference
topic: borrower-employment-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.522Z
estimatedTokens: 965
keywords: [Borrower, Employment, Output, borrower's, co-borrower's, current, past]
---

# Borrower Employment Output

> Represents details about the borrower's or co-borrower's current and
      past employment.

# Borrower Employment Output

Represents details about the borrower's or co-borrower's current and past employment.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdById | String | ID of the user who created this record. | Small, 48.0 | 48.0 |
| createdDate | String | Date and time when this record was created. | Small, 48.0 | 48.0 |
| currentJobAdditionalMonthCount | Integer | Additional number of months employed at this job (less than 12). | Small, 48.0 | 48.0 |
| currentJobYearCount | Integer | Number of full years employed at this job. | Small, 48.0 | 48.0 |
| employerAddress | Address Output[] | Address of borrower's employer or business. | Small, 48.0 | 48.0 |
| employerName | String | Name of borrower's employer or business. | Small, 48.0 | 48.0 |
| employerPhone | String | Employer's phone number. | Small, 48.0 | 48.0 |
| endDate | String | Borrower's last date of employment at this job. | Small, 48.0 | 48.0 |
| extendedFields | Extended Fields Output[] | Custom fields related to the borrower’s employment. | Big, 48.0 | 48.0 |
| externalId | String | Identifier assigned to imported employer data by external data source (if applicable). | Small, 48.0 | 48.0 |
| id | String | ID of the borrower’s employment. | Small, 48.0 | 48.0 |
| isDeleted | Boolean | Indicates whether the employment record is deleted. | Small, 48.0 | 48.0 |
| isLessThanQuarterShare | Boolean | Indicates whether borrower owns less than 25% of this business (if applicable). | Small, 48.0 | 48.0 |
| isRelToTransactionParty | Boolean | Indicates whether borrower is employed by a family member, property seller, real estate agent, or other person party to the loan application transaction. | Small, 48.0 | 48.0 |
| isSelfEmployed | Boolean | Indicates whether borrower is self-employed or owns the business. | Small, 48.0 | 48.0 |
| jobTitle | String | Borrower's job title or employer's business or industry type. | Small, 48.0 | 48.0 |
| lastModifiedBy | String | ID of the user who last modified this record. | Small, 48.0 | 48.0 |
| lastModifiedDate | String | Date and time when a user last modified this record. | Small, 48.0 | 48.0 |
| lastReferencedDate | String | Date and time when a user last referenced this record. | Small, 48.0 | 48.0 |
| lastViewedDate | String | Date and time when a user last viewed this record. | Small, 48.0 | 48.0 |
| loanApplicantId | String | ID of the borrower record. | Small, 48.0 | 48.0 |
| loanApplicationId | String | ID of the loan application record. | Small, 48.0 | 48.0 |
| monthlyBaseIncomeAmount | Double | Borrower's monthly bonus from this job. | Small, 48.0 | 48.0 |
| monthlyBonusAmount | Double | Borrower's monthly bonus from this job. | Small, 48.0 | 48.0 |
| monthlyCommissionAmount | Double | Borrower's monthly commission from this job. | Small, 48.0 | 48.0 |
| monthlyIncome | Double | Borrower's monthly income or loss from this business. | Small, 48.0 | 48.0 |
| monthlyMilitaryEntitlementAmt | Double | Borrower's monthly military entitlement from this job. | Small, 48.0 | 48.0 |
| monthlyOtherIncomeAmount | Double | Borrower's other monthly income from this job. | Small, 48.0 | 48.0 |
| monthlyOvertimeAmount | Double | Borrower's monthly overtime income from this job. | Small, 48.0 | 48.0 |
| monthlyTotalIncomeAmount | Double | Borrower's monthly total income from this job. | Total Monthly Income | Small, 48.0 | 48.0 |
| name | String | Name of the loan applicant employment. | Small, 48.0 | 48.0 |
| ownerId | String | ID of the user who owns this record. | Small, 48.0 | 48.0 |
| startDate | String | Name of the loan applicant employment. | Small, 48.0 | 48.0 |
| systemModstamp | String | Date and time when a user or automated process (such as a trigger) last modified this record. | Small, 48.0 | 48.0 |

## Related Topics

- Address Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_address_output.htm)
- Extended Fields Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_extended_fields_output.htm)
