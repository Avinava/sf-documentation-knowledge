---
title: "AccountCleanInfo"
domain: sfFieldRef
topic: accountcleaninfo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.922Z
estimatedTokens: 2084
keywords: [AccountCleanInfo, Stores, metadata, Data.com, Clean, uses, determine, account, record’s, status, helps, automate, cleaning, processing, records]
---

# AccountCleanInfo

> Stores the metadata Data.com Clean uses to determine an account
            record’s clean status. AccountCleanInfo helps you automate the cleaning or
            related processing of account records.

# AccountCleanInfo

Stores the metadata Data.com Clean uses to determine an account record’s clean status. AccountCleanInfo helps you automate the cleaning or related processing of account records.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AccountCleanInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountcleaninfo.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AccountSite | Account Site | string |  | 80 |  |  |
| Address | Address | address |  |  |  |  |
| AnnualRevenue | Annual Revenue | currency |  |  | 18 | 0 |
| City | City | string |  | 40 |  |  |
| CleanedByJob | Cleaned by Job | boolean |  |  |  |  |
| CleanedByUser | Cleaned by User | boolean |  |  |  |  |
| CompanyName | Company Name | string |  | 255 |  |  |
| CompanyStatusDataDotCom | Company Status per Data.com | picklist |  | 255 |  |  |
| Country | Country | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DandBCompanyDunsNumber | D&B Company D-U-N-S Number | string |  | 9 |  |  |
| DataDotComId | Data.com ID | string |  | 20 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DunsNumber | D-U-N-S Number | string |  | 9 |  |  |
| DunsRightMatchConfidence | DUNSRight™ Match Confidence | int | 9 |  |  |  |
| DunsRightMatchGrade | DUNSRight™ Match Grade | string |  | 255 |  |  |
| Fax | Fax | phone |  | 40 |  |  |
| GeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| Id | Account Clean Info ID | id |  | 18 |  |  |
| Industry | Industry | picklist |  | 40 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsDifferentAccountSite | Account Site is Different | boolean |  |  |  |  |
| IsDifferentAnnualRevenue | Annual Revenue is Different | boolean |  |  |  |  |
| IsDifferentCity | City is Different | boolean |  |  |  |  |
| IsDifferentCompanyName | Company Name is Different | boolean |  |  |  |  |
| IsDifferentCountry | Country is Different | boolean |  |  |  |  |
| IsDifferentCountryCode | Country Code is Different | boolean |  |  |  |  |
| IsDifferentDandBCompanyDunsNumber | D&B Company D-U-N-S Number is Different | boolean |  |  |  |  |
| IsDifferentDescription | Description is Different | boolean |  |  |  |  |
| IsDifferentDunsNumber | D-U-N-S Number is Different | boolean |  |  |  |  |
| IsDifferentFax | Fax is Different | boolean |  |  |  |  |
| IsDifferentIndustry | Industry is Different | boolean |  |  |  |  |
| IsDifferentNaicsCode | NAICS Code is Different | boolean |  |  |  |  |
| IsDifferentNaicsDescription | NAICS Description is Different | boolean |  |  |  |  |
| IsDifferentNumberOfEmployees | Number of Employees is Different | boolean |  |  |  |  |
| IsDifferentOwnership | Ownership is Different | boolean |  |  |  |  |
| IsDifferentPhone | Phone is Different | boolean |  |  |  |  |
| IsDifferentPostalCode | ZIP is Different | boolean |  |  |  |  |
| IsDifferentSic | SIC Code is Different | boolean |  |  |  |  |
| IsDifferentSicDescription | SIC Description is Different | boolean |  |  |  |  |
| IsDifferentState | State is Different | boolean |  |  |  |  |
| IsDifferentStateCode | State Code is Different | boolean |  |  |  |  |
| IsDifferentStreet | Street is Different | boolean |  |  |  |  |
| IsDifferentTickerSymbol | Ticker Symbol is Different | boolean |  |  |  |  |
| IsDifferentTradestyle | Tradestyle is Different | boolean |  |  |  |  |
| IsDifferentWebsite | Website is Different | boolean |  |  |  |  |
| IsDifferentYearStarted | Year Started is Different | boolean |  |  |  |  |
| IsFlaggedWrongAccountSite | Account Site is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongAddress | Address is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongAnnualRevenue | Annual Revenue is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongCompanyName | Company Name is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongDescription | Description is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongDunsNumber | D-U-N-S Number is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongFax | Fax is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongIndustry | Industry is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongNaicsCode | NAICS Code is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongNaicsDescription | NAICS Description is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongNumberOfEmployees | Number of Employees is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongOwnership | Ownership is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongPhone | Phone is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongSic | SIC Code is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongSicDescription | SIC Description is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongTickerSymbol | Ticker Symbol is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongTradestyle | Tradestyle is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongWebsite | Website is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongYearStarted | Year Started is Flagged Wrong | boolean |  |  |  |  |
| IsInactive | Company Status in Salesforce | boolean |  |  |  |  |
| IsReviewedAccountSite | Account Site is Reviewed | boolean |  |  |  |  |
| IsReviewedAddress | Address is Reviewed | boolean |  |  |  |  |
| IsReviewedAnnualRevenue | Annual Revenue is Reviewed | boolean |  |  |  |  |
| IsReviewedCompanyName | Company Name is Reviewed | boolean |  |  |  |  |
| IsReviewedDandBCompanyDunsNumber | D&B Company D-U-N-S Number is Reviewed | boolean |  |  |  |  |
| IsReviewedDescription | Description is Reviewed | boolean |  |  |  |  |
| IsReviewedDunsNumber | D-U-N-S Number is Reviewed | boolean |  |  |  |  |
| IsReviewedFax | Fax is Reviewed | boolean |  |  |  |  |
| IsReviewedIndustry | Industry is Reviewed | boolean |  |  |  |  |
| IsReviewedNaicsCode | NAICS Code is Reviewed | boolean |  |  |  |  |
| IsReviewedNaicsDescription | NAICS Description is Reviewed | boolean |  |  |  |  |
| IsReviewedNumberOfEmployees | Number of Employees is Reviewed | boolean |  |  |  |  |
| IsReviewedOwnership | Ownership is Reviewed | boolean |  |  |  |  |
| IsReviewedPhone | Phone is Reviewed | boolean |  |  |  |  |
| IsReviewedSic | SIC Code is Reviewed | boolean |  |  |  |  |
| IsReviewedSicDescription | SIC Description is Reviewed | boolean |  |  |  |  |
| IsReviewedTickerSymbol | Ticker Symbol is Reviewed | boolean |  |  |  |  |
| IsReviewedTradestyle | Tradestyle is Reviewed | boolean |  |  |  |  |
| IsReviewedWebsite | Website is Reviewed | boolean |  |  |  |  |
| IsReviewedYearStarted | Year Started is Reviewed | boolean |  |  |  |  |
| LastMatchedDate | Last Matched Date | datetime |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastStatusChangedById | User ID | reference |  | 18 |  |  |
| LastStatusChangedDate | Last Status Changed Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| Longitude | Longitude | double |  |  | 18 | 15 |
| NaicsCode | NAICS Code | string |  | 8 |  |  |
| NaicsDescription | NAICS Description | string |  | 120 |  |  |
| Name | Account Clean Info Name | string |  | 255 |  |  |
| NumberOfEmployees | Number of Employees | int | 8 |  |  |  |
| Ownership | Ownership | picklist |  | 40 |  |  |
| Phone | Phone | phone |  | 40 |  |  |
| PostalCode | Zip | string |  | 20 |  |  |
| Sic | SIC Code | string |  | 20 |  |  |
| SicDescription | SIC Description | string |  | 80 |  |  |
| State | State | string |  | 80 |  |  |
| Street | Street | textarea |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TickerSymbol | Ticker Symbol | string |  | 20 |  |  |
| Tradestyle | Tradestyle | string |  | 255 |  |  |
| Website | Website | url |  | 255 |  |  |
| YearStarted | Year Started | string |  | 12 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
