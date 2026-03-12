---
title: "DandBCompany"
domain: object-reference
topic: dandbcompany
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.798Z
estimatedTokens: 6854
keywords: [DandBCompany, Dun, Bradstreet®, company, record, associated, account, added, Data.com, API, version, 25.0, later, Calls, Special]
---

# DandBCompany

> Represents a Dun & Bradstreet®
    company record, which is associated with an account added from Data.com. This object
  is available in API version 25.0 and later.

# DandBCompany

Represents a Dun & Bradstreet® company record, which is associated with an account added from Data.com. This object is available in API version 25.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields will be removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=object_reference)

#### Warning

You can update fields in the DandBCompany object; however, field changes may be overwritten by Data.com Clean jobs or by using the Data.com Clean button.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Only organizations with Data.com Premium Prospector or Data.com Premium Clean can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the address. Read-only. See Address Compound Fields for details on compound address fields. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city where a company is physically located. Maximum size is 40 characters. |
| CompanyCurrencyIsoCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe code used to represent a company’s local currency. This data is provided by the International Organization for Standardization (ISO) and is based on their three-letter currency codes. For example, USD is the ISO code for United States Dollar. Maximum size is 3 characters. |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where a company is physically located. Maximum size is 40 characters. |
| CountryAccessCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe required code for international calls. Maximum size is 4 characters. |
| CurrencyCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency in which the company’s sales volume is expressed. The full list of values can be found at the Optimizer Resources page maintained by Dun & Bradstreet. Maximum size is 4 characters. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA brief description of the company, which may include information about its history, its products and services, and its influence on a particular industry. Maximum size is 32000 characters. |
| DomesticUltimateBusinessName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary name of the Domestic Ultimate, which is the highest ranking subsidiary, specified by country, within an organization’s corporate structure. Maximum size is 255 characters. |
| DomesticUltimateDunsNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe D-U-N-S Number for the Domestic Ultimate, which is the highest ranking subsidiary, specified by country, within an organization’s corporate structure. Maximum size is 9 characters. |
| DunsNumber | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Data Universal Numbering System (D-U-N-S) number is a unique, nine-digit number assigned to every business location in the Dun & Bradstreet database that has a unique, separate, and distinct operation. D-U-N-S numbers are used by industries and organizations around the world as a global standard for business identification and tracking. Maximum size is 9 characters. |
| EmployeeQuantityGrowthRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe yearly growth rate of the number of employees in a company expressed as a decimal percentage. The data includes the total employee growth rate for the past two years. |
| EmployeesHere | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of employees at a specified location, such as a branch location. Maximum size is 15 characters. |
| EmployeesHereReliability | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe reliability of the EmployeesHere figure. Available values include:0—Actual number1—Low2—Estimated (for all records)3—Modeled (for non-US records) |
| EmployeesTotal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of employees in the company, including all subsidiary and branch locations. This data is only available on records that have a value of Headquarters/Parent in the LocationStatus field. Maximum size is 15 characters. |
| EmployeesTotalReliability | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe reliability of the EmployeesTotal figure. Available values include:0—Actual number1—Low2—Estimated (for all records)3—Modeled (for non-US records)A blank value indicates this data is unavailable. |
| FamilyMembers | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of family members, worldwide, within an organization, including the Global Ultimate, its subsidiaries (if any), and its branches (if any). Maximum size is 5 characters. |
| Fax | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe company’s facsimile number. |
| FifthNaics | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional NAICS code used to further classify an organization by industry. Maximum size is 6 characters. |
| FifthNaicsDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on the corresponding NAICS code. Maximum size is 120 characters. |
| FifthSic | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional SIC code used to further classify an organization by industry. Maximum size is 8 characters. |
| FifthSic8 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional SIC code used to further classify an organization by industry. Maximum size is 8 characters. |
| FifthSic8Desc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. Maximum size is 80 characters. |
| FifthSicDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. Maximum size is 80 characters. |
| FipsMsaCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Federal Information Processing Standards (FIPS) and the Metropolitan Statistical Area (MSA) codes identify the organization’s location. The MSA codes are defined by the US Office of Management and Budget. Maximum size is 5 characters. |
| FipsMsaDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s FIPS MSA code. Maximum size is 255 characters. |
| FortuneRank | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe numeric value of the company’s Fortune 1000 ranking. A null or blank value means that the company isn’t ranked as a Fortune 1000 company. |
| FourthNaics | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional NAICS code used to further classify an organization by industry. Maximum size is 6 characters. |
| FourthNaicsDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on the corresponding NAICS code. Maximum size is 120 characters. |
| FourthSic | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional SIC code used to further classify an organization by industry. Maximum size is 8 characters. |
| FourthSic8 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional SIC code used to further classify an organization by industry. Maximum size is 8 characters. |
| FourthSic8Desc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. Maximum size is 80 characters. |
| FourthSicDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. Maximum size is 80 characters. |
| GeoCodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. Available values include:A – Non-US rooftop accuracyB – Block levelC – Places the address in the correct cityD – Rooftop levelI – Street intersectionM – Mailing address levelN – Not matchedP – PO BOX locationS – Street levelT – Census tract levelZ – ZIP code level0 (zero)– Geocode could not be assigned |
| GlobalUltimateBusinessName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary name of the Global Ultimate, which is the highest entity within an organization’s corporate structure and may oversee branches and subsidiaries. Maximum size is 255 characters. |
| GlobalUltimateDunsNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe D-U-N-S Number of the Global Ultimate, which is the highest entity within an organization’s corporate structure and may oversee branches and subsidiaries. Maximum size is 9 characters. |
| GlobalUltimateTotalEmployees | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of employees at the Global Ultimate, which is the highest entity within an organization’s corporate structure and may oversee branches and subsidiaries. Maximum size is 15 characters. |
| ImportExportAgent | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIdentifies whether a business imports goods or services, exports goods or services, and/or is an agent for goods. Available values include:A—Importer/exporter/agentB—Importer/exporterC—ImporterD—Importer/agentE—Exporter/agentF—Agent (keeps no inventory and does not take title goods)G—None or data not availableH—Exporter |
| IncludedInSnP500 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA true or false value. If true, the company is listed in the S&P 500 Index. If false, the company isn’t listed in the S&P 500 Index. |
| Latitude | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed with longitude to specify a precise location, which is then used to assess the Geocode Accuracy. Maximum size is 11 characters. |
| LegalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIdentifies the legal structure of an organization. |
| LocationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIdentifies the organizational status of a company. Available values are Single location, Headquarters/Parent, and Branch. Available values include:0—Single location (no other entities report to the business)1—Headquarters/parent (branches and/or subsidiaries report to the business)2—Branch (secondary location to a headquarters location) |
| Longitude | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed with latitude to specify a precise location, which is then used to assess the Geocode Accuracy. Maximum size is 11 characters. |
| MailingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the mailing address. Read-only. See Address Compound Fields for details on compound address fields. |
| MailingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city where a company has its mail delivered. Maximum size is 40 characters. |
| MailingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where a company has its mail delivered. Maximum size is 40 characters. |
| MailingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code that a company uses on its mailing address. Maximum size is 20 characters. |
| MailingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state where a company has its mail delivered. Maximum size is 20 characters. |
| MailingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street address where a company has its mail delivered. Maximum size is 255 characters. |
| MarketingPreScreen | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe probability that a company will pay with a significant delay compared to the agreed terms. The risk level is based on the standard Commercial Credit Score, and ranges from low risk to high risk. Available values include:L—Low risk of delinquencyM—Moderate risk of delinquencyH—High risk of delinquencyImportantUse this information for marketing pre-screening purposes only. |
| MarketingSegmentationCluster | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionTwenty-two distinct, mutually exclusive profiles, created as a result of cluster analysis of Dun & Bradstreet data for US organizations. |
| MinorityOwned | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether an organization is owned or controlled by a member of a minority group. Available values include:Y—Minority ownedN—Not minority owned |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe primary or registered name of a company. Maximum size is 255 characters. |
| NationalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identification number used in some countries for business registration and tax collection. Maximum size is 255 characters. |
| NationalIdType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionA code value that identifies the type of national identification number used. The full list of resources can be found at the Optimizer Resources page maintained by Dun & Bradstreet. Maximum size is 5 characters. |
| OutOfBusiness | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether the company at the specified address has discontinued operations. Available values include:Y—Out of businessN—Not out of business |
| OwnOrRent | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether a company owns or rents the building it occupies. Available values include:0—Unknown or not applicable1—Owns2—Rents |
| ParentOrHqBusinessName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary name of the parent or headquarters company. Maximum size is 255 characters. |
| ParentOrHqDunsNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe D-U-N-S Number for the parent or headquarters. Maximum size is 9 characters. |
| Phone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA company’s primary telephone number. |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code that corresponds to a company’s physical location. Maximum size is 20 characters. |
| PremisesMeasure | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA numeric value for the measurement of the premises. |
| PremisesMeasureReliability | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA descriptive accuracy of the measurement such as actual, estimated, or modeled. |
| PremisesMeasureUnit | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA descriptive measurement unit such as acres, square meters, or square feet. |
| PrimaryNaics | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe six-digit North American Industry Classification System (NAICS) code is the standard used by business and government to classify business establishments according to their economic activity for the purpose of collecting, analyzing, and publishing statistical data related to the US business economy. The full list of values can be found at the Optimizer Resources page maintained by Dun & Bradstreet. Maximum size is 6 characters. |
| PrimaryNaicsDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on its NAICS code. Maximum size is 120 characters. |
| PrimarySic | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe four-digit Standard Industrial Classification (SIC) code is used to categorize business establishments by industry. The full list of values can be found at the Optimizer Resources page maintained by Dun & Bradstreet. Maximum size is 4 characters. |
| PrimarySic8 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe eight-digit Standard Industrial Classification (SIC) code is used to categorize business establishments by industry. The full list of values can be found at the Optimizer Resources page maintained by Dun & Bradstreet. Maximum size is 8 characters. |
| PrimarySic8Desc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on its SIC code. The full list of values can be found at the Optimizer Resources page maintained by Dun & Bradstreet. Maximum size is 80 characters. |
| PrimarySicDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on its SIC code. Maximum size is 80 characters. |
| PriorYearEmployees | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of employees for the prior year. |
| PriorYearRevenue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe annual revenue for the prior year. |
| PublicIndicator | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether ownership of the company is public or private. Available values include:Y—PublicN—Private |
| SalesTurnoverGrowthRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe increase in annual revenue from the previous value for an equivalent period expressed as a decimal percentage. |
| SalesVolume | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total annual sales revenue in the headquarters’ local currency. Dun & Bradstreet tracks revenue data for publicly traded companies, Global Ultimates, Domestic Ultimates, and some headquarters. |
| SalesVolumeReliability | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe reliability of the SalesVolume figure. Available values include:0—Actual number1—Low2—Estimated (for all records)3—Modeled (for non-US records) |
| SecondNaics | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional NAICS code used to further classify an organization by industry. Maximum size is 6 characters. |
| SecondNaicsDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on the corresponding NAICS code. Maximum size is 120 characters. |
| SecondSic | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional SIC code used to further classify an organization by industry. Maximum size is 8 characters. |
| SecondSic8 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional SIC code used to further classify an organization by industry. Maximum size is 8 characters. |
| SecondSic8Desc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. Maximum size is 80 characters. |
| SecondSicDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. Maximum size is 80 characters. |
| SixthNaics | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional NAICS code used to further classify an organization by industry. Maximum size is 6 characters. |
| SixthNaicsDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on the corresponding NAICS code. Maximum size is 120 characters. |
| SixthSic | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional SIC code used to further classify an organization by industry. Maximum size is 8 characters. |
| SixthSic8 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional SIC code used to further classify an organization by industry. Maximum size is 8 characters. |
| SixthSic8Desc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. Maximum size is 80 characters. |
| SixthSicDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. Maximum size is 80 characters. |
| SmallBusiness | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether the company is designated a small business as defined by the Small Business Administration of the US government. Available values include:Y—Small business siteN—Not small business site |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state where a company is physically located. Maximum size is 20 characters. |
| StockExchange | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe corresponding exchange for a company’s stock symbol. For example: NASDAQ or NYSE. Maximum size is 16 characters. |
| StockSymbol | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe abbreviation used to identify publicly traded shares of a particular stock. Maximum size is 6 characters. |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street address where a company is physically located. Maximum size is 255 characters. |
| Subsidiary | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether a company is more than 50 percent owned by another organization. Available values include:0—Not subsidiary of another organization3—Subsidiary of another organization |
| ThirdNaics | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional NAICS code used to further classify an organization by industry. Maximum size is 6 characters. |
| ThirdNaicsDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on the corresponding NAICS code. Maximum size is 120 characters. |
| ThirdSic | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional SIC code used to further classify an organization by industry. Maximum size is 8 characters. |
| ThirdSic8 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional SIC code used to further classify an organization by industry. Maximum size is 8 characters. |
| ThirdSic8Desc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. Maximum size is 80 characters. |
| ThirdSicDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an organization’s line of business, based on the corresponding SIC code. Maximum size is 80 characters. |
| TradeStyle1 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA name, different from its legal name, that an organization may use for conducting business. Similar to “Doing business as” or “DBA”. Maximum size is 255 characters. |
| TradeStyle2 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional tradestyle used by the organization. Maximum size is 255 characters. |
| TradeStyle3 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional tradestyle used by the organization. Maximum size is 255 characters. |
| TradeStyle4 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional tradestyle used by the organization. Maximum size is 255 characters. |
| TradeStyle5 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn additional tradestyle used by the organization. Maximum size is 255 characters. |
| URL | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn organization’s primary website address. Maximum size is 104 characters. |
| UsTaxId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identification number for the company used by the Internal Revenue Service (IRS) in the administration of tax laws. Also referred to as Federal Taxpayer Identification Number. Maximum size is 9 characters. |
| WomenOwned | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether a company is more than 50 percent owned or controlled by a woman. Available values include:Y—Owned by a womanN—Not owned by a woman, or unknown |
| YearStarted | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe year the company was established or the year when current ownership or management assumed control of the company. Maximum size is 4 characters. |

## Usage

Use this object to manage D&B Company records in your organization.

## Related Topics

- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
