---
title: "Borrower Income Output"
domain: financial-services-cloud-object-reference
topic: borrower-income-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.531Z
estimatedTokens: 478
keywords: [Borrower, Income, Output, co-borrower, current, monthly]
---

# Borrower Income Output

> Represents details about the borrower and co-borrower current
      monthly income.

# Borrower Income Output

Represents details about the borrower and co-borrower current monthly income.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdById | String | ID of the user who created this record. | Small, 48.0 | 48.0 |
| createdDate | String | Date and time when this record was created. | Small, 48.0 | 48.0 |
| extendedFields | Extended Fields Output[] | Custom fields related to the income. | Big, 48.0 | 48.0 |
| externalId | String | Identifier assigned to imported income data by external data source (if applicable). | Small, 48.0 | 48.0 |
| id | String | ID of the income. | Small, 48.0 | 48.0 |
| incomeSourceType | String | Source of borrower's monthly non-employment income. | Small, 48.0 | 48.0 |
| isDeleted | Boolean | Indicates whether the income record is deleted. | Small, 48.0 | 48.0 |
| lastModifiedById | String | ID of the user who last modified this record. | Small, 48.0 | 48.0 |
| lastModifiedDate | String | Date and time when a user last modified this record. | Small, 48.0 | 48.0 |
| lastReferencedDate | String | Date and time when a user last referenced this record. | Small, 48.0 | 48.0 |
| lastViewedDate | String | Date and time when a user last viewed this record. | Small, 48.0 | 48.0 |
| loanApplicantId | String | ID of the loan applicant record. | Small, 48.0 | 48.0 |
| loanApplicationId | String | ID of the loan application record. | Small, 48.0 | 48.0 |
| monthlyIncomeAmount | Double | Amount of borrower's monthly non-employment income from this source. | Small, 48.0 | 48.0 |
| name | String | Name of the other monthly income. | Small, 48.0 | 48.0 |
| ownerId | String | ID of the user who owns this record. | Small, 48.0 | 48.0 |
| systemModstamp | String | Date and time when a user or automated process (such as a trigger) last modified this record. | Small, 48.0 | 48.0 |

## Related Topics

- Extended Fields Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_extended_fields_output.htm)
