---
title: "DatacloudCompany"
domain: sfFieldRef
topic: datacloudcompany
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.876Z
estimatedTokens: 787
keywords: [DatacloudCompany, Data.com, company, records, API, version, 30.0, later]
---

# DatacloudCompany

> Represents the
				fields for Data.com company records. This object is available in API
		version 30.0 or later.

# DatacloudCompany

Represents the fields for Data.com company records. This object is available in API version 30.0 or later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DatacloudCompany](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_datacloudcompany.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActiveContacts | Active Contacts | int | 9 |  |  |  |
| AnnualRevenue | Annual Revenue | currency |  |  | 18 | 2 |
| City | City | string |  | 255 |  |  |
| CompanyId | Data.com Company ID | string |  | 25 |  |  |
| Country | Country/Territory | string |  | 50 |  |  |
| CountryCode | Country/Territory | picklist |  | 255 |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Company Synopsis | string |  | 400 |  |  |
| DunsNumber | Duns Number | string |  | 128 |  |  |
| EmployeeQuantityGrowthRate | Employee Quantity Growth Rate | double |  |  | 18 | 6 |
| ExternalId | Data.com Company ID | string |  | 255 |  |  |
| Fax | Fax Number | phone |  | 40 |  |  |
| FortuneRank | Fortune Rank | int | 9 |  |  |  |
| FullAddress | Address | string |  | 255 |  |  |
| Id | System ID | id |  | 18 |  |  |
| IncludedInSnP500 | Included In S&P 500 | string |  | 10 |  |  |
| Industry | Industry | string |  | 128 |  |  |
| IsInCrm | In CRM | boolean |  |  |  |  |
| IsInactive | Inactive Status | boolean |  |  |  |  |
| IsOwned | Owned | boolean |  |  |  |  |
| NaicsCode | NAICS Code | string |  | 128 |  |  |
| NaicsDesc | NAICS Description | string |  | 128 |  |  |
| Name | Company Name | string |  | 128 |  |  |
| NumberOfEmployees | Employee Count | int | 9 |  |  |  |
| Ownership | Ownership Status | string |  | 16 |  |  |
| Phone | Phone Number | phone |  | 40 |  |  |
| PremisesMeasure | Premises Area Measurement | int | 9 |  |  |  |
| PremisesMeasureReliability | Premises Area Measurement Reliability Text | string |  | 64 |  |  |
| PremisesMeasureUnit | Premises Area Unit of Measurement | string |  | 64 |  |  |
| PriorYearEmployees | Prior Year Employee | int | 9 |  |  |  |
| PriorYearRevenue | Prior Year Revenue | currency |  |  | 18 | 0 |
| SalesTurnoverGrowthRate | Sales Turnover Growth Rate | double |  |  | 18 | 6 |
| Sic | SIC Code | string |  | 128 |  |  |
| SicCodeDesc | Industry Codes | string |  | 255 |  |  |
| SicDesc | SIC Description | string |  | 128 |  |  |
| Site | Location Type | picklist |  | 255 |  |  |
| State | State | string |  | 50 |  |  |
| StateCode | State | picklist |  | 255 |  |  |
| Street | Street Address | string |  | 255 |  |  |
| TickerSymbol | Stock Ticker Symbol | string |  | 16 |  |  |
| TradeStyle | Trade Style | string |  | 128 |  |  |
| UpdatedDate | Updated Date | datetime |  |  |  |  |
| Website | Company or Website | url |  | 255 |  |  |
| YearStarted | Company Founding Date | string |  | 4 |  |  |
| Zip | Zip | string |  | 32 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
