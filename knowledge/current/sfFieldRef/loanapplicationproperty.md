---
title: "LoanApplicationProperty"
domain: sfFieldRef
topic: loanapplicationproperty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.848Z
estimatedTokens: 617
keywords: [LoanApplicationProperty, loan, application, finances, API, version, 47.0, later]
---

# LoanApplicationProperty

> Represents details of the property the loan application finances. This
		object is available in API version 47.0 and later.

# LoanApplicationProperty

Represents details of the property the loan application finances. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoanApplicationProperty in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExpMonthlyRentalIncome | Expected Monthly Rental Income | currency |  |  | 18 | 2 |
| ExpNetMonthlyRentalInc | Expected Net Monthly Rental Income | currency |  |  | 18 | 2 |
| Id | Loan Application Property ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsManufacturedHome | Manufactured Home | boolean |  |  |  |  |
| IsMixedUseProperty | Mixed-Use Property | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoanApplicationId | Residential Loan Application ID | reference |  | 18 |  |  |
| LoanPurposeType | Loan Purpose | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| PropertyAddress | Property Address | address |  |  |  |  |
| PropertyCity | Real Estate City | string |  | 40 |  |  |
| PropertyCountry | Real Estate Country | string |  | 80 |  |  |
| PropertyExtIdentifier | Loan Application Property External ID | string |  | 255 |  |  |
| PropertyGeocodeAccuracy | Real Estate Geocode Accuracy | picklist |  | 40 |  |  |
| PropertyLatitude | Real Estate Latitude | double |  |  | 18 | 15 |
| PropertyLongitude | Real Estate Longitude | double |  |  | 18 | 15 |
| PropertyPostalCode | Real Estate Postal Code | string |  | 20 |  |  |
| PropertyState | Real Estate State | string |  | 80 |  |  |
| PropertyStreet | Real Estate Street | textarea |  | 255 |  |  |
| PropertyUseType | Occupancy Type | picklist |  | 40 |  |  |
| PropertyValue | Property Market Value | currency |  |  | 18 | 2 |
| RequestedLoanAmount | Loan Amount | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnitsFinancedCount | Total Units to be Financed | int | 3 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
