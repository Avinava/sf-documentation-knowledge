---
title: "DandBCompany"
domain: sfFieldRef
topic: dandbcompany
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.384Z
estimatedTokens: 2086
keywords: [DandBCompany, Dun, Bradstreet®, company, record, associated, account, added, Data.com, API, version, 25.0, later]
---

# DandBCompany

> Represents a Dun & Bradstreet®
    company record, which is associated with an account added from Data.com. This object
  is available in API version 25.0 and later.

# DandBCompany

Represents a Dun & Bradstreet® company record, which is associated with an account added from Data.com. This object is available in API version 25.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DandBCompany](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_dandbcompany.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Address | Primary Address | address |  |  |  |  |
| City | City | string |  | 40 |  |  |
| CompanyCurrencyIsoCode | Local Currency ISO Code | picklist |  | 255 |  |  |
| Country | Country | string |  | 80 |  |  |
| CountryAccessCode | International Dialing Code | string |  | 4 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyCode | Local Currency Code | picklist |  | 255 |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Company Description | textarea |  | 32000 |  |  |
| DomesticUltimateBusinessName | Domestic Ultimate Business Name | string |  | 255 |  |  |
| DomesticUltimateDunsNumber | Domestic Ultimate D-U-N-S Number | string |  | 9 |  |  |
| DunsNumber | D-U-N-S Number | string |  | 9 |  |  |
| EmployeeQuantityGrowthRate | Employee Growth | double |  |  | 18 | 6 |
| EmployeesHere | Number of Employees - Location | double |  |  | 18 | 0 |
| EmployeesHereReliability | Number of Employees - Location Indicator | picklist |  | 255 |  |  |
| EmployeesTotal | Number of Employees - Total | double |  |  | 18 | 0 |
| EmployeesTotalReliability | Number of Employees - Total Indicator | picklist |  | 255 |  |  |
| FamilyMembers | Number of Business Family Members | int | 5 |  |  |  |
| Fax | Facsimile Number | phone |  | 40 |  |  |
| FifthNaics | Fifth NAICS Code | string |  | 6 |  |  |
| FifthNaicsDesc | Fifth NAICS Description | string |  | 120 |  |  |
| FifthSic | Fifth SIC Code | string |  | 4 |  |  |
| FifthSic8 | Fifth SIC8 Code | string |  | 8 |  |  |
| FifthSic8Desc | Fifth SIC8 Description | string |  | 80 |  |  |
| FifthSicDesc | Fifth SIC Description | string |  | 80 |  |  |
| FipsMsaCode | FIPS MSA Code | string |  | 5 |  |  |
| FipsMsaDesc | FIPS MSA Code Description | string |  | 255 |  |  |
| FortuneRank | Fortune 1000 Rank | int | 4 |  |  |  |
| FourthNaics | Fourth NAICS Code | string |  | 6 |  |  |
| FourthNaicsDesc | Fourth NAICS Description | string |  | 120 |  |  |
| FourthSic | Fourth SIC Code | string |  | 4 |  |  |
| FourthSic8 | Fourth SIC8 Code | string |  | 8 |  |  |
| FourthSic8Desc | Fourth SIC8 Description | string |  | 80 |  |  |
| FourthSicDesc | Fourth SIC Description | string |  | 80 |  |  |
| GeoCodeAccuracy | Geocode Accuracy | picklist |  | 255 |  |  |
| GeocodeAccuracyStandard | Geocode Accuracy | picklist |  | 40 |  |  |
| GlobalUltimateBusinessName | Global Ultimate Business Name | string |  | 255 |  |  |
| GlobalUltimateDunsNumber | Global Ultimate D-U-N-S Number | string |  | 9 |  |  |
| GlobalUltimateTotalEmployees | Number of Employees - Global | double |  |  | 18 | 0 |
| Id | D&B Company ID | id |  | 18 |  |  |
| ImportExportAgent | Import/Export | picklist |  | 255 |  |  |
| IncludedInSnP500 | S&P 500 | string |  | 10 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Latitude | Latitude | string |  | 11 |  |  |
| LegalStatus | Legal Structure | picklist |  | 255 |  |  |
| LocationStatus | Location Type | picklist |  | 255 |  |  |
| Longitude | Longitude | string |  | 11 |  |  |
| MailingAddress | Mailing Address | address |  |  |  |  |
| MailingCity | Mailing City | string |  | 40 |  |  |
| MailingCountry | Mailing Country | string |  | 80 |  |  |
| MailingGeocodeAccuracy | Mailing Geocode Accuracy | picklist |  | 40 |  |  |
| MailingPostalCode | Mailing Postal Code | string |  | 20 |  |  |
| MailingState | Mailing State | string |  | 80 |  |  |
| MailingStreet | Mailing Street Address | textarea |  | 255 |  |  |
| MarketingPreScreen | Delinquency Risk | picklist |  | 255 |  |  |
| MarketingSegmentationCluster | Marketing Segmentation Cluster | picklist |  | 255 |  |  |
| MinorityOwned | Minority-Owned Indicator | picklist |  | 255 |  |  |
| Name | Primary Business Name | string |  | 255 |  |  |
| NationalId | National Identification Number | string |  | 255 |  |  |
| NationalIdType | National Identification System | picklist |  | 255 |  |  |
| OutOfBusiness | Out Of Business Indicator | picklist |  | 255 |  |  |
| OwnOrRent | Location Ownership Indicator | picklist |  | 255 |  |  |
| ParentOrHqBusinessName | Parent Company Business Name | string |  | 255 |  |  |
| ParentOrHqDunsNumber | Parent Company D-U-N-S Number | string |  | 9 |  |  |
| Phone | Telephone Number | phone |  | 40 |  |  |
| PostalCode | Postal Code | string |  | 20 |  |  |
| PremisesMeasure | Location Size | int | 9 |  |  |  |
| PremisesMeasureReliability | Location Size Accuracy | string |  | 64 |  |  |
| PremisesMeasureUnit | Location Size Unit of Measure | string |  | 64 |  |  |
| PrimaryNaics | Primary NAICS Code | string |  | 6 |  |  |
| PrimaryNaicsDesc | Primary NAICS Description | string |  | 120 |  |  |
| PrimarySic | Primary SIC Code | string |  | 4 |  |  |
| PrimarySic8 | Primary SIC8 Code | string |  | 8 |  |  |
| PrimarySic8Desc | Primary SIC8 Description | string |  | 80 |  |  |
| PrimarySicDesc | Primary SIC Description | string |  | 80 |  |  |
| PriorYearEmployees | Prior Year Number of Employees - Total | int | 9 |  |  |  |
| PriorYearRevenue | Prior Year Revenue | double |  |  | 18 | 0 |
| PublicIndicator | Ownership Type Indicator | picklist |  | 255 |  |  |
| SalesTurnoverGrowthRate | Annual Revenue Growth | double |  |  | 18 | 6 |
| SalesVolume | Annual Sales Volume | double |  |  | 18 | 0 |
| SalesVolumeReliability | Annual Sales Volume Indicator | picklist |  | 255 |  |  |
| SecondNaics | Second NAICS Code | string |  | 6 |  |  |
| SecondNaicsDesc | Second NAICS Description | string |  | 120 |  |  |
| SecondSic | Second SIC Code | string |  | 4 |  |  |
| SecondSic8 | Second SIC8 Code | string |  | 8 |  |  |
| SecondSic8Desc | Second SIC8 Description | string |  | 80 |  |  |
| SecondSicDesc | Second SIC Description | string |  | 80 |  |  |
| SixthNaics | Sixth NAICS Code | string |  | 6 |  |  |
| SixthNaicsDesc | Sixth NAICS Description | string |  | 120 |  |  |
| SixthSic | Sixth SIC Code | string |  | 4 |  |  |
| SixthSic8 | Sixth SIC8 Code | string |  | 8 |  |  |
| SixthSic8Desc | Sixth SIC8 Description | string |  | 80 |  |  |
| SixthSicDesc | Sixth SIC Description | string |  | 80 |  |  |
| SmallBusiness | Small Business Indicator | picklist |  | 255 |  |  |
| State | State | string |  | 80 |  |  |
| StockExchange | Stock Exchange | string |  | 16 |  |  |
| StockSymbol | Ticker Symbol | string |  | 6 |  |  |
| Street | Street Address | textarea |  | 255 |  |  |
| Subsidiary | Subsidiary Indicator | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
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

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
