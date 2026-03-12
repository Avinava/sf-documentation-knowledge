---
title: "Asset Output"
domain: financial-services-cloud-object-reference
topic: asset-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.622Z
estimatedTokens: 792
keywords: [Asset, Output, borrower's, co-borrower's, current, personal, real]
---

# Asset Output

> Represents details about the borrower's and co-borrower's current
      personal and real property.

# Asset Output

Represents details about the borrower's and co-borrower's current personal and real property.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountNumber | String | Account number associated with financial institution holding asset. | Small, 48.0 | 48.0 |
| accountType | String | Identifies asset account type. | Small, 48.0 | 48.0 |
| assetClass | String | Identifies which asset class total to include the asset's value in. | Small, 48.0 | 48.0 |
| assetType | String | Identifies type of other asset. | Small, 48.0 | 48.0 |
| borrowersExternalIds | String[] | External IDs of borrower and co-borrowers. | Big, 48.0 | 48.0 |
| borrowersIds | String[] | IDs of borrower and co-borrowers. | Big, 48.0 | 48.0 |
| cashOrMarketValue | Double | Asset's cash or current market value. | Small, 48.0 | 48.0 |
| createdById | String | ID of the user who created this record. | Small, 48.0 | 48.0 |
| createdDate | String | Date and time when this record was created. | Small, 48.0 | 48.0 |
| dispositionType | String | Real estate asset's planned future use. | Small, 48.0 | 48.0 |
| extendedFields | Extended Fields Output[] | Custom fields related to the asset. | Big, 48.0 | 48.0 |
| externalId | String | Identifier assigned to imported asset data by external data source (if applicable). | Small, 48.0 | 48.0 |
| financialInstitutionName | String | Name of financial institution where financial account is held. | Small, 48.0 | 48.0 |
| grossMonthlyRentalIncome | Double | Borrower's monthly rent income collected on real estate asset. | Small, 48.0 | 48.0 |
| id | String | ID of the asset. | Small, 48.0 | 48.0 |
| isDeleted | Boolean | Indicates whether the asset record is deleted. | Small, 48.0 | 48.0 |
| isJointAsset | Boolean | Indicates asset is held jointly. | Small, 48.0 | 48.0 |
| lastModifiedById | String | ID of the user who last modified this record. | Small, 48.0 | 48.0 |
| lastModifiedDate | String | Date and time when a user last modified this record. | Small, 48.0 | 48.0 |
| lastReferencedDate | String | Date and time when a user last referenced this record. | Small, 48.0 | 48.0 |
| lastViewedDate | String | Date and time when a user last viewed this record. | Small, 48.0 | 48.0 |
| loanApplicationId | String | ID of the loan application record. | Small, 48.0 | 48.0 |
| name | String | Name of the loan application asset. | Small, 48.0 | 48.0 |
| netMonthlyRentalIncome | Double | Borrower's net monthly income on real estate asset. | Small, 48.0 | 48.0 |
| ownerId | String | ID of the user who owns this record. | Small, 48.0 | 48.0 |
| presentMarketValue | Double | Cash value of real estate asset if sold today. | Small, 48.0 | 48.0 |
| realEstateAddress | Address Output[] | Real estate asset's address. | Small, 48.0 | 48.0 |
| realEstateMonthlyExpense | Double | Borrower's monthly real estate asset expenses including insurance, maintenance, taxes, and miscellaneous costs. | Small, 48.0 | 48.0 |
| systemModstamp | String | Date and time when a user or automated process (such as a trigger) last modified this record. | Small, 48.0 | 48.0 |

## Related Topics

- Extended Fields Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_extended_fields_output.htm)
- Address Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_address_output.htm)
