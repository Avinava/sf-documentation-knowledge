---
title: "DatacloudDandBCompany"
domain: object-reference
topic: dataclouddandbcompany
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:07.938Z
estimatedTokens: 5428
keywords: [DatacloudDandBCompany, read-only, D&B, company, data, Data.com, API, calls, version, 30.0, later, Usage]
---

# DatacloudDandBCompany

> Represents a
				set of read-only fields that are used to return D&B company data from Data.com
				API calls.
		This object is available in API version 30.0 or later.

# DatacloudDandBCompany

Represents a set of read-only fields that are used to return D&B company data from Data.com API calls. This object is available in API version 30.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields will be removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

## Supported Calls

describeSObjects(), query()

## Fields

| Field Name | Details |
| --- | --- |
| City | TypestringPropertiesNillableDescriptionThe name of the city where the company is physically located. |
| CompanyCurrencyIsoCode | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe code used to represent a company’s local currency. This data is provided by the International Organization for Standardization (ISO) and is based on their three-letter currency codes. For example, USD is the ISO code for United States Dollar. |
| CompanyId | TypestringPropertiesFilter, Nillable, SortDescriptionA unique numeric identifier for a company. |
| Country | TypestringPropertiesNillableDescriptionThe country where a company is physically located. |
| CountryAccessCode | TypestringPropertiesNillableDescriptionThe required code for international calls. |
| CurrencyCode | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe currency in which the company’s sales volume is expressed. |
| Description | TypestringPropertiesNillableDescriptionA brief description of the company, which may include information about its history, its products and services, and its influence on a particular industry. |
| DomesticUltimateBusinessName | TypestringPropertiesNillableDescriptionThe primary name of the Domestic Ultimate, which is the highest ranking subsidiary, specified by country, within an organization’s corporate structure. |
| DomesticUltimateDunsNumber | TypestringPropertiesNillableDescriptionThe D-U-N-S number for the Domestic Ultimate, which is the highest-ranking subsidiary, specified by country, within an organization’s corporate structure. |
| DunsNumber | TypestringPropertiesFilter, NillableDescriptionThe Data Universal Numbering System (D-U-N-S) number is a unique, nine-digit number assigned to every business location in the Dun & Bradstreet database that has a unique, separate, and distinct operation. D-U-N-S numbers are used by industries and organizations around the world as a global standard for business identification and tracking. |
| EmployeeQuantityGrowthRate | TypedoublePropertiesNillableDescriptionThe yearly growth rate of the number of employees in a company expressed as a decimal percentage. The data includes the total employee growth rate for the past two years. |
| EmployeesHere | TypedoublePropertiesNillableDescriptionThe number of employees at a specified location, such as a branch location. |
| EmployeesHereReliability | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe reliability of the EmployeesHere figure. Available values are Actual number, Low, Estimated (for all records), Modeled (for non-US records). A blank value indicates this data is unavailable. |
| EmployeesTotal | TypedoublePropertiesNillableDescriptionThe total number of employees in the company, including all subsidiary and branch locations. This data is available only on records that have a value of Headquarters/Parent in the LocationStatus field. |
| EmployeesTotalReliability | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe reliability of the EmployeesTotal figure. Available values are Actual number, Low, Estimated (for all records), Modeled (for non-US records). A blank value indicates this data is unavailable. |
| ExternalId | TypestringPropertiesFilter, Nillable, SortDescriptionA system generated numeric identification. |
| FamilyMembers | TypeintPropertiesNillableDescriptionThe total number of family members, worldwide, within an organization, including the Global Ultimate, its subsidiaries (if any), and its branches (if any). |
| Fax | TypephonePropertiesNillableDescriptionThe company’s facsimile number. |
| FifthNaics | TypestringPropertiesNillableDescriptionA NAICS code that’s used to further classify an organization by industry. |
| FifthNaicsDesc | TypestringPropertiesNillableDescriptionA brief description of an organization’s line of business, based on the corresponding NAICS code. |
| FifthSic | TypestringPropertiesNillableDescriptionA Standard Industrial Classification (SIC) code that’s used to further classify an organization by industry. |
| FifthSic8 | TypestringPropertiesGroup, NillableDescriptionAn additional SIC code used to further classify an organization by industry. Maximum size is 8 characters. |
| FifthSic8Desc | TypestringPropertiesGroup, NillableDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. Maximum size is 80 characters. |
| FifthSicDesc | TypestringPropertiesNillableDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. |
| FipsMsaCode | TypestringPropertiesNillableDescriptionThe Federal Information Processing Standards (FIPS) and the Metropolitan Statistical Area (MSA) codes identify the organization’s location. The MSA codes are defined by the US Office of Management and Budget. |
| FipsMsaDesc | TypestringPropertiesNillableDescriptionA brief description of an organization’s FIPS MSA code. |
| FortuneRank | TypeintPropertiesDefaulted on create, Group, NillableDescriptionThe numeric value of the company’s Fortune 1000 ranking. A null or blank value means that the company isn’t ranked as a Fortune 1000 company. |
| FourthNaics | TypestringPropertiesNillableDescriptionA NAICS code used to further classify an organization by industry. |
| FourthNaicsDesc | TypestringPropertiesNillableDescriptionA brief description of an organization’s line of business, based on the corresponding NAICS code. |
| FourthSic | TypestringPropertiesGroup, NillableDescriptionA SIC code used to further classify an organization by industry. |
| FourthSic8 | TypestringPropertiesGroup, NillableDescriptionAn additional SIC code used to further classify an organization by industry. Maximum size is 8 characters. |
| FourthSic8Desc | TypestringPropertiesGroup, NillableDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. Maximum size is 80 characters. |
| FourthSicDesc | TypestringPropertiesNillableDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. |
| GeoCodeAccuracy | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. Available values include Rooftop level, Street level, Block level, Census tract level, Mailing address level, ZIP code level, Geocode could not be assigned, Places the address in the correct city, Not matched, State or Province Centroid, Street intersection, PO BOX location, Non-US rooftop accuracy, County Centroid, Sub Locality-Street Level, and Locality Centroid |
| GlobalUltimateBusinessName | TypestringPropertiesNillableDescriptionThe primary name of the Global Ultimate, which is the highest entity within an organization’s corporate structure and may oversee branches and subsidiaries. |
| GlobalUltimateDunsNumber | TypestringPropertiesFilter, NillableDescriptionThe D-U-N-S number of the Global Ultimate, which is the highest-ranking entity within an organization’s corporate structure and can oversee branches and subsidiaries. |
| GlobalUltimateTotalEmployees | TypedoublePropertiesNillableDescriptionThe total number of employees at the Global Ultimate, which is the highest entity within an organization’s corporate structure and may oversee branches and subsidiaries. |
| ImportExportAgent | TypepicklistPropertiesNillable, Restricted picklistDescriptionIdentifies whether a business imports goods or services, exports goods or services, and/or is an agent for goods. |
| IncludedInSnP500 | TypestringPropertiesGroup, NillableDescriptionA true or false value. If true, the company is listed in the S&P 500 Index. If false, the company isn’t listed in the S&P 500 Index. |
| Industry | TypestringPropertiesGroup, NillableDescriptionA description of the type of industry such as Telecommunications, Agriculture, or Electronics. |
| IsOwned | TypebooleanPropertiesDefaulted on createDescriptionA true or false value. True, your organization owns the record. False, your organization doesn’t own the record. |
| IsParent | TypebooleanPropertiesDefaulted on create,DescriptionA true or false value. True, the company is a parent company. False, the company isn’t a parent company. A parent company owns other companies. |
| Latitude | TypestringPropertiesNillableDescriptionUsed with longitude to specify a precise location, which is used to assess the Geocode Accuracy. |
| LegalStatus | TypepicklistPropertiesNillable, Restricted picklistDescriptionIdentifies the legal structure of an organization. Available values include Cooperative, Nonprofit organization, Local government body, Partnership of unknown type, and Foreign company. |
| LocationStatus | TypepicklistPropertiesFilter, Nillable, Restricted picklistDescriptionIdentifies the organizational status of a company. A numeric value represents each value.Organizational statusNumeric valueSingle location: The business has no branches or subsidiaries.0Headquarters/Parent: A parent company that owns more than 50 percent of another company. When the company also has branches, it’s the headquarters.1Branch: A secondary location of a business.2NoteOnly the numeric value is accepted in an API request. | Organizational status | Numeric value | Single location: The business has no branches or subsidiaries. | 0 | Headquarters/Parent: A parent company that owns more than 50 percent of another company. When the company also has branches, it’s the headquarters. | 1 | Branch: A secondary location of a business. | 2 |
| Organizational status | Numeric value |
| Single location: The business has no branches or subsidiaries. | 0 |
| Headquarters/Parent: A parent company that owns more than 50 percent of another company. When the company also has branches, it’s the headquarters. | 1 |
| Branch: A secondary location of a business. | 2 |
| Longitude | TypestringPropertiesNillableDescriptionUsed with latitude to specify a precise location, which is used to assess the Geocode Accuracy. |
| MailingCity | TypestringPropertiesNillableDescriptionThe city where a company has its mail delivered. |
| MailingCountry | TypestringPropertiesNillableDescriptionThe country where a company has its mail delivered. |
| MailingState | TypestringPropertiesNillableDescriptionThe state where a company has its mail delivered. |
| MailingStreet | TypestringPropertiesNillableDescriptionThe street address where a company has its mail delivered. |
| MailingZip | TypestringPropertiesNillableDescriptionThe postal zip code for the company. |
| MarketingPreScreen | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe probability that a company pays with a significant delay compared to the agreed terms. The risk level is based on the standard Commercial Credit Score, and ranges from low risk to high risk. Available values are High risk of delinquency, Low risk of delinquency, and Moderate risk of delinquency.ImportantUse this information for marketing pre-screening purposes only. |
| MarketingSegmentationCluster | TypepicklistPropertiesNillable, Restricted picklistDescriptionTwenty-two distinct, mutually exclusive profiles, created as a result of cluster analysis of Dun & Bradstreet data for US organizations. Available values include High-Tension Branches of Insurance/Utility Industries, Rapid-Growth Large Businesses, Labor-Intensive Giants, Spartans, Main Street USA. |
| MinorityOwned | TypepicklistPropertiesNillable, Restricted picklistDescriptionIndicates whether an organization is owned or controlled by a member of a minority group. |
| Name | TypestringPropertiesFilter, NillableDescriptionThe primary or registered name of a company. |
| NationalId | TypestringPropertiesNillableDescriptionThe identification number used in some countries for business registration and tax collection. |
| NationalIdType | TypepicklistPropertiesNillable, Restricted picklistDescriptionA code value that identifies the type of national identification number that’s used. |
| OutOfBusiness | TypepicklistPropertiesNillable, Restricted picklistDescriptionIndicates whether the company at the specified address has discontinued operations. |
| OwnOrRent | TypepicklistPropertiesNillable, Restricted picklistDescriptionIndicates whether a company owns or rents the building it occupies. |
| ParentOrHqBusinessName | TypestringPropertiesNillableDescriptionThe primary name of the parent or headquarters company. |
| ParentOrHqDunsNumber | TypestringPropertiesFilter, NillableDescriptionThe D-U-N-S number for the parent or headquarters. |
| Phone | TypephonePropertiesNillableDescriptionA company’s primary telephone number. |
| PremisesMeasure | TypeintPropertiesGroup, NillableDescriptionA numeric value for the measurement of the premises. |
| PremisesMeasureReliability | TypestringPropertiesGroup, NillableDescriptionA descriptive accuracy of the measurement such as actual, estimated, or modeled. |
| PremisesMeasureUnit | TypestringPropertiesGroup, NillableDescriptionA descriptive measurement unit such as acres, square meters, or square feet. |
| PrimaryNaics | TypestringPropertiesNillableDescriptionThe six-digit North American Industry Classification System (NAICS) code is the standard used by business and government to classify business establishments according to their economic activity for the purpose of collecting, analyzing, and publishing statistical data related to the US business economy. |
| PrimaryNaicsDesc | TypestringPropertiesNillableDescriptionA brief description of an organization’s line of business, based on its NAICS code. |
| PrimarySic | TypestringPropertiesNillableDescriptionThe four-digit SIC code that’s used to categorize business establishments by industry. |
| PrimarySic8 | TypestringPropertiesGroup, NillableDescriptionThe eight-digit Standard Industrial Classification (SIC) code is used to categorize business establishments by industry. The full list of values can be found at the Optimizer Resources page maintained by Dun & Bradstreet. Maximum size is 8 characters. |
| PrimarySic8Desc | TypestringPropertiesGroup, NillableDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. Maximum size is 80 characters. |
| PrimarySicDesc | TypestringPropertiesNillableDescriptionA brief description of an organization’s line of business, based on its SIC code. |
| PriorYearEmployees | TypeintPropertiesGroup, NillableDescriptionThe total number of employees for the prior year. |
| PriorYearRevenue | TypedoublePropertiesNillableDescriptionThe annual revenue for the prior year. |
| PublicIndicator | TypepicklistPropertiesNillable, Restricted picklistDescriptionIndicates whether ownership of the company is public or private. |
| Revenue | TypedoublePropertiesNillableDescriptionThe annual revenue of a company in US dollars. |
| SalesTurnoverGrowthRate | TypedoublePropertiesNillableDescriptionThe increase in annual revenue from the previous value for an equivalent period expressed as a decimal percentage. |
| SalesVolume | TypedoublePropertiesNillableDescriptionThe total annual sales revenue in the headquarters’ local currency. Dun & Bradstreet tracks revenue data for publicly traded companies, Global Ultimates, Domestic Ultimates, and some headquarters. |
| SalesVolumeReliability | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe reliability of the SalesVolume figure. |
| SecondNaics | TypestringPropertiesNillableDescriptionA NAICS code used to further classify an organization by industry. |
| SecondNaicsDesc | TypestringPropertiesNillableDescriptionA brief description of an organization’s line of business, based on the corresponding NAICS code. |
| SecondSic | TypestringPropertiesNillableDescriptionA SIC code used to further classify an organization by industry. |
| SecondSic8 | TypestringPropertiesGroup, NillableDescriptionAn additional SIC code used to further classify an organization by industry. Maximum size is 8 characters. |
| SecondSic8Desc | TypestringPropertiesGroup, NillableDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. Maximum size is 80 characters. |
| SecondSicDesc | TypestringPropertiesNillableDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. |
| SixthNaics | TypestringPropertiesNillableDescriptionA NAICS code used to further classify an organization by industry. |
| SixthNaicsDesc | TypestringPropertiesNillableDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. |
| SixthSic | TypestringPropertiesNillableDescriptionA SIC code used to further classify an organization by industry. |
| SixthSic8 | TypestringPropertiesGroup, NillableDescriptionAn additional SIC code used to further classify an organization by industry. Maximum size is 8 characters. |
| SixthSic8Desc | TypestringPropertiesGroup, NillableDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. Maximum size is 80 characters. |
| SixthSicDesc | TypestringPropertiesNillableDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. |
| SmallBusiness | TypepicklistPropertiesNillable, Restricted picklistDescriptionIndicates whether the company is designated a small business as defined by the Small Business Administration of the US government. |
| State | TypestringPropertiesNillableDescriptionThe state where a company is physically located. |
| StockExchange | TypestringPropertiesNillableDescriptionThe corresponding exchange for a company’s stock symbol, for example, NASDAQ or NYSE. |
| StockSymbol | TypestringPropertiesNillableDescriptionThe abbreviation that’s used to identify publicly traded shares of a particular stock. |
| Street | TypestringPropertiesNillableDescriptionThe street address where a company is physically located. |
| Subsidiary | TypepicklistPropertiesNillable, Restricted picklistDescriptionIndicates whether a company is more than 50 percent owned by another organization. |
| ThirdNaics | TypestringPropertiesNillableDescriptionA NAICS code used to further classify an organization by industry. |
| ThirdNaicsDesc | TypestringPropertiesNillableDescriptionA brief description of an organization’s line of business, based on the corresponding NAICS code. |
| ThirdSic | TypestringPropertiesNillableDescriptionA SIC code used to further classify an organization by industry. |
| ThirdSic8 | TypestringPropertiesGroup, NillableDescriptionAn additional SIC code used to further classify an organization by industry. Maximum size is 8 characters. |
| ThirdSic8Desc | TypestringPropertiesGroup, NillableDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. Maximum size is 80 characters. |
| ThirdSicDesc | TypestringPropertiesNillableDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. |
| TradeStyle1 | TypestringPropertiesNillableDescriptionA name, different from its legal name, that an organization may use for conducting business. Similar to “Doing business as” or “DBA”. |
| TradeStyle2 | TypestringPropertiesNillableDescriptionA tradestyle used by the organization. |
| TradeStyle3 | TypestringPropertiesNillableDescriptionA tradestyle used by the organization. |
| TradeStyle4 | TypestringPropertiesNillableDescriptionA tradestyle used by the organization. |
| TradeStyle5 | TypestringPropertiesNillableDescriptionA tradestyle used by the organization. |
| UsTaxId | TypestringPropertiesNillableDescriptionThe identification number for the company used by the Internal Revenue Service (IRS) in the administration of tax laws. Also referred to as Federal Taxpayer Identification Number. |
| Website | TypeurlPropertiesFilter, Group, NillableDescriptionAn organization’s primary website address. |
| WomenOwned | TypepicklistPropertiesNillable, Restricted picklistDescriptionIndicates whether a company is more than 50 percent owned or controlled by a woman. |
| YearStarted | TypestringPropertiesNillableDescriptionThe year when the company was established or the year when current ownership or management assumed control of the company. |
| Zip | TypestringPropertiesNillableDescriptionA five or nine-digit code that’s used to help sort mail. |

## Usage

Use this object to return D&B Company information. These fields are read-only.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

DatacloudDandBCompany can’t be used in Apex test methods, because an external web service call is required to access it. These calls are not allowed in Apex test methods.
