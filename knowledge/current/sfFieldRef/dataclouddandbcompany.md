---
title: "DatacloudDandBCompany"
domain: sfFieldRef
topic: dataclouddandbcompany
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.918Z
estimatedTokens: 2080
keywords: [DatacloudDandBCompany, read-only, D&B, company, data, Data.com, API, calls, version, 30.0, later]
---

# DatacloudDandBCompany

> Represents a
				set of read-only fields that are used to return D&B company data from Data.com
				API calls.
		This object is available in API version 30.0 or later.

# DatacloudDandBCompany

Represents a set of read-only fields that are used to return D&B company data from Data.com API calls. This object is available in API version 30.0 or later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DatacloudDandBCompany](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_dataclouddandbcompany.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| City | City | string |  | 255 |  |  |
| CompanyCurrencyIsoCode | Local Currency ISO Code | picklist |  | 255 |  |  |
| CompanyId | D&B Company ID | string |  | 25 |  |  |
| Country | Country | string |  | 50 |  |  |
| CountryAccessCode | International Dialing Code | string |  | 4 |  |  |
| CountryCode | Country Code | string |  | 50 |  |  |
| CurrencyCode | Local Currency Code | picklist |  | 255 |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Company Description | string |  | 1000 |  |  |
| DomesticUltimateBusinessName | Domestic Ultimate Business Name | string |  | 255 |  |  |
| DomesticUltimateDunsNumber | Domestic Ultimate D-U-N-S Number | string |  | 9 |  |  |
| DunsNumber | D-U-N-S Number | string |  | 9 |  |  |
| EmployeeQuantityGrowthRate | Employee Quantity Growth Rate | double |  |  | 18 | 6 |
| EmployeesHere | Number of Employees - Location | double |  |  | 18 | 0 |
| EmployeesHereReliability | Number of Employees - Location Indicator | picklist |  | 255 |  |  |
| EmployeesTotal | Number of Employees - Total | double |  |  | 18 | 0 |
| EmployeesTotalReliability | Number of Employees - Total Indicator | picklist |  | 255 |  |  |
| ExternalId | D&B Company ID | string |  | 255 |  |  |
| FamilyMembers | Number of Business Family Members | int | 5 |  |  |  |
| Fax | Facsimile Number | phone |  | 40 |  |  |
| FifthNaics | Fifth NAICS Code | string |  | 6 |  |  |
| FifthNaicsDesc | Fifth NAICS Description | string |  | 120 |  |  |
| FifthSic | Fourth SIC Description | string |  | 4 |  |  |
| FifthSic8 | Fifth SIC8 Code | string |  | 8 |  |  |
| FifthSic8Desc | Fifth SIC8 Description | string |  | 80 |  |  |
| FifthSicDesc | Fifth SIC Description | string |  | 80 |  |  |
| FipsMsaCode | FIPS MSA Code | string |  | 5 |  |  |
| FipsMsaDesc | FIPS MSA Code Description | string |  | 255 |  |  |
| FortuneRank | Fortune Rank | int | 9 |  |  |  |
| FourthNaics | Fourth NAICS Code | string |  | 6 |  |  |
| FourthNaicsDesc | Fourth NAICS Description | string |  | 120 |  |  |
| FourthSic | Fourth SIC Code | string |  | 4 |  |  |
| FourthSic8 | Fourth SIC8 Code | string |  | 8 |  |  |
| FourthSic8Desc | Fourth SIC8 Description | string |  | 80 |  |  |
| FourthSicDesc | Fourth SIC Description | string |  | 80 |  |  |
| FullAddress | Address | string |  | 255 |  |  |
| GeoCodeAccuracy | Geocode Accuracy | picklist |  | 255 |  |  |
| GlobalUltimateBusinessName | Global Ultimate Business Name | string |  | 255 |  |  |
| GlobalUltimateDunsNumber | Global Ultimate D-U-N-S Number | string |  | 9 |  |  |
| GlobalUltimateTotalEmployees | Number of Employees - Global | double |  |  | 18 | 0 |
| Id | D&B Company ID | id |  | 18 |  |  |
| ImportExportAgent | Import/Export | picklist |  | 255 |  |  |
| IncludedInSnP500 | Included In S&P 500 | string |  | 10 |  |  |
| Industry | Industry | string |  | 80 |  |  |
| IsInCrm | In CRM | boolean |  |  |  |  |
| IsOwned | Owned Status | boolean |  |  |  |  |
| IsParent | Parent | boolean |  |  |  |  |
| Latitude | Latitude | string |  | 11 |  |  |
| LegalStatus | Legal Structure | picklist |  | 255 |  |  |
| LocationStatus | Location Type | picklist |  | 255 |  |  |
| Longitude | Longitude | string |  | 11 |  |  |
| MailingCity | Mailing City | string |  | 255 |  |  |
| MailingCountry | Mailing Country | string |  | 50 |  |  |
| MailingCountryCode | Mailing Country Code | string |  | 50 |  |  |
| MailingState | Mailing State | string |  | 50 |  |  |
| MailingStateCode | Mailing State Code | string |  | 50 |  |  |
| MailingStreet | Mailing Street Address | string |  | 255 |  |  |
| MailingZip | Mailing Postal Code | string |  | 32 |  |  |
| MarketingPreScreen | Delinquency Risk | picklist |  | 255 |  |  |
| MarketingSegmentationCluster | Marketing Segmentation Cluster | picklist |  | 255 |  |  |
| MinorityOwned | Minority-Owned Indicator | picklist |  | 255 |  |  |
| Name | D&B Company Name | string |  | 255 |  |  |
| NationalId | National Identification Number | string |  | 255 |  |  |
| NationalIdType | National Identification System | picklist |  | 255 |  |  |
| OutOfBusiness | Out Of Business Indicator | picklist |  | 255 |  |  |
| OwnOrRent | Location Ownership Indicator | picklist |  | 255 |  |  |
| ParentOrHqBusinessName | Parent Company Business Name | string |  | 255 |  |  |
| ParentOrHqDunsNumber | Parent Company D-U-N-S Number | string |  | 9 |  |  |
| Phone | Telephone Number | phone |  | 40 |  |  |
| PremisesMeasure | Premises Area Measurement | int | 9 |  |  |  |
| PremisesMeasureReliability | Premises Area Measurement Reliability Text | string |  | 64 |  |  |
| PremisesMeasureUnit | Premises Area Unit of Measurement | string |  | 64 |  |  |
| PrimaryNaics | Primary NAICS Code | string |  | 6 |  |  |
| PrimaryNaicsDesc | Primary NAICS Description | string |  | 120 |  |  |
| PrimarySic | Primary SIC Code | string |  | 4 |  |  |
| PrimarySic8 | SIC8 Code | string |  | 8 |  |  |
| PrimarySic8Desc | SIC8 Description | string |  | 80 |  |  |
| PrimarySicDesc | Primary SIC Description | string |  | 80 |  |  |
| PriorYearEmployees | Prior Year Employee | int | 9 |  |  |  |
| PriorYearRevenue | Prior Year Revenue | double |  |  | 18 | 0 |
| PublicIndicator | Ownership Type Indicator | picklist |  | 255 |  |  |
| Revenue | Revenue | double |  |  | 18 | 0 |
| SalesTurnoverGrowthRate | Sales Turnover Growth Rate | double |  |  | 18 | 6 |
| SalesVolume | Annual Sales Volume | double |  |  | 18 | 2 |
| SalesVolumeReliability | Annual Sales Volume Indicator | picklist |  | 255 |  |  |
| SecondNaics | Second NAICS Code | string |  | 6 |  |  |
| SecondNaicsDesc | Second NAICS Description | string |  | 120 |  |  |
| SecondSic | Second SIC Code | string |  | 4 |  |  |
| SecondSic8 | Second SIC8 Code | string |  | 8 |  |  |
| SecondSic8Desc | Second SIC8 Description | string |  | 80 |  |  |
| SecondSicDesc | Second SIC Description | string |  | 80 |  |  |
| SicCodeDesc | Industry Codes | string |  | 255 |  |  |
| SixthNaics | Sixth NAICS Code | string |  | 6 |  |  |
| SixthNaicsDesc | Sixth NAICS Description | string |  | 120 |  |  |
| SixthSic | Sixth SIC Code | string |  | 4 |  |  |
| SixthSic8 | Sixth SIC8 Code | string |  | 8 |  |  |
| SixthSic8Desc | Sixth SIC8 Description | string |  | 80 |  |  |
| SixthSicDesc | Sixth SIC Description | string |  | 80 |  |  |
| SmallBusiness | Small Business Indicator | picklist |  | 255 |  |  |
| State | State | string |  | 50 |  |  |
| StateCode | State Code | string |  | 50 |  |  |
| StockExchange | Stock Exchange | string |  | 16 |  |  |
| StockSymbol | Ticker Symbol | string |  | 6 |  |  |
| Street | Street Address | string |  | 255 |  |  |
| Subsidiary | Subsidiary Indicator | picklist |  | 255 |  |  |
| ThirdNaics | Third NAICS Code | string |  | 6 |  |  |
| ThirdNaicsDesc | Third NAICS Description | string |  | 120 |  |  |
| ThirdSic | Third SIC Code | string |  | 4 |  |  |
| ThirdSic8 | Third SIC8 Code | string |  | 8 |  |  |
| ThirdSic8Desc | Third SIC8 Description | string |  | 80 |  |  |
| ThirdSicDesc | Third SIC Description | string |  | 80 |  |  |
| TradeStyle1 | Primary Tradestyle | string |  | 255 |  |  |
| TradeStyle2 | Second Tradestyle | string |  | 255 |  |  |
| TradeStyle3 | Third Tradestyle | string |  | 255 |  |  |
| TradeStyle4 | Fourth Tradestyle | string |  | 255 |  |  |
| TradeStyle5 | Fifth Tradestyle | string |  | 255 |  |  |
| URL | URL | url |  | 255 |  |  |
| UsTaxId | US Tax ID Number | string |  | 9 |  |  |
| WomenOwned | Woman-Owned Indicator | picklist |  | 255 |  |  |
| YearStarted | Year Started | string |  | 4 |  |  |
| Zip | Postal Code | string |  | 32 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
