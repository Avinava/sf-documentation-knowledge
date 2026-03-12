---
title: "Liability Output"
domain: financial-services-cloud-object-reference
topic: liability-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.650Z
estimatedTokens: 777
keywords: [Liability, Output, borrower, co-borrower, current, liabilities]
---

# Liability Output

> Details about the borrower and co-borrower current liabilities.

# Liability Output

Details about the borrower and co-borrower current liabilities.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountNumber | String | Borrower's account number with lender or creditor. | Small, 48.0 | 48.0 |
| accountType | String | Personal debt borrower owes like credit card balances, other debts, and leases. | Small, 48.0 | 48.0 |
| borrowersExternalIds | String[] | Identifier assigned to imported borrowers data by external data source (if applicable). | Big, 48.0 | 48.0 |
| borrowersIds | String[] | IDs of the borrowers. | Big, 48.0 | 48.0 |
| createdById | String | ID of the user who created this record. | Small, 48.0 | 48.0 |
| createdDate | String | Date and time when this record was created. | Small, 48.0 | 48.0 |
| creditLimitAmount | Double | Credit limit of real estate loan or line of credit. | Small, 48.0 | 48.0 |
| creditorName | String | Lender or creditor owed the debt. | Small, 48.0 | 48.0 |
| extendedFields | Extended Fields Output[] | Custom fields related to the asset. | Big, 48.0 | 48.0 |
| externalId | String | Identifier assigned to imported liability data by external data source (if applicable). | Small, 48.0 | 48.0 |
| id | String | ID of the liability. | Small, 48.0 | 48.0 |
| isDeleted | Boolean | Indicates whether the liability record is deleted. | Small, 48.0 | 48.0 |
| isJointLiability | Boolean | Indicates whether borrower holds liability jointly. | Small, 48.0 | 48.0 |
| lastModifiedById | String | ID of the user who last modified this record. | Small, 48.0 | 48.0 |
| lastModifiedDate | String | Date and time when a user last modified this record. | Small, 48.0 | 48.0 |
| lastReferencedDate | String | Date and time when a user last referenced this record. | Small, 48.0 | 48.0 |
| lastViewedDate | String | Date and time when a user last viewed this record. | Small, 48.0 | 48.0 |
| liabilityClass | String | Include the liability's monthly payment in this liability class monthly payment total. | Small, 48.0 | 48.0 |
| loanApplicationAssetId | String | ID of the loan application asset record. | Small, 48.0 | 48.0 |
| loanApplicationId | String | ID of the loan application record. | Small, 48.0 | 48.0 |
| loanType | String | Existing real estate loan type. | Small, 48.0 | 48.0 |
| monthlyPaymentAmount | Double | Borrower's monthly payment required to keep debt account current. | Small, 48.0 | 48.0 |
| name | String | Name of the liability. | Small, 48.0 | 48.0 |
| otherLiabilityType | String | Identifies type of other borrower expense or liability. | Small, 48.0 | 48.0 |
| ownerId | String | ID of the user who owns the record. | Small, 48.0 | 48.0 |
| shouldBePaidInFull | Boolean | Indicates whether borrower to pay off debt on or before closing. | Small, 48.0 | 48.0 |
| systemModstamp | String | Date and time when a user or automated process (such as a trigger) last modified this record. | Small, 48.0 | 48.0 |
| unpaidBalanceAmount | Double | Unpaid liability balance when borrower completed loan application. | Small, 48.0 | 48.0 |

## Related Topics

- Extended Fields Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_extended_fields_output.htm)
