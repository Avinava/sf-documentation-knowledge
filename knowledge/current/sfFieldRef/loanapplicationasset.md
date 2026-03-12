---
title: "LoanApplicationAsset"
domain: sfFieldRef
topic: loanapplicationasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.769Z
estimatedTokens: 689
keywords: [LoanApplicationAsset, borrower's, co-borrower's, current, personal, real, API, version, 47.0, later]
---

# LoanApplicationAsset

> Represents details about the borrower's and co-borrower's current personal
			and real property. This object is available in API version 47.0 and later.

# LoanApplicationAsset

Represents details about the borrower's and co-borrower's current personal and real property. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoanApplicationAsset in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountNumber | Financial Account Number | string |  | 255 |  |  |
| AccountType | Account Type | picklist |  | 40 |  |  |
| AssetClass | Asset Class | picklist |  | 40 |  |  |
| AssetExtIdentifier | Loan Application Asset External ID | string |  | 255 |  |  |
| AssetType | Asset Type | picklist |  | 40 |  |  |
| CashOrMarketValue | Cash or Market Value | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DispositionType | Real Estate Status | picklist |  | 40 |  |  |
| FinancialInstitutionName | Financial Institution | string |  | 255 |  |  |
| GrossMonthlyRentalIncome | Gross Rental Income from Real Estate | currency |  |  | 18 | 2 |
| Id | Loan Application Asset ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsJointAsset | Joint Asset | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoanApplicationId | Residential Loan Application ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| NetMonthlyRentalIncome | Net Real Estate Rental Income | currency |  |  | 18 | 2 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PresentMarketValue | Real Estate Value | currency |  |  | 18 | 2 |
| RealEstateAddress | Real Estate Address | address |  |  |  |  |
| RealEstateCity | Real Estate City | string |  | 40 |  |  |
| RealEstateCountry | Real Estate Country | string |  | 80 |  |  |
| RealEstateGeocodeAccuracy | Real Estate Geocode Accuracy | picklist |  | 40 |  |  |
| RealEstateLatitude | Real Estate Latitude | double |  |  | 18 | 15 |
| RealEstateLongitude | Real Estate Longitude | double |  |  | 18 | 15 |
| RealEstateMonthlyExpense | Other Monthly Real Estate Expenses | currency |  |  | 18 | 2 |
| RealEstatePostalCode | Real Estate Postal Code | string |  | 20 |  |  |
| RealEstateState | Real Estate State | string |  | 80 |  |  |
| RealEstateStreet | Real Estate Street | textarea |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
