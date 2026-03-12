---
title: "DatacloudCompany"
domain: object-reference
topic: datacloudcompany
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:07.872Z
estimatedTokens: 2009
keywords: [DatacloudCompany, Data.com, company, records, API, version, 30.0, later, Calls, Usage]
---

# DatacloudCompany

> Represents the
				fields for Data.com company records. This object is available in API
		version 30.0 or later.

# DatacloudCompany

Represents the fields for Data.com company records. This object is available in API version 30.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields are removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

## Supported Calls

describeLayout(), describeSObjects(), query()

## Fields

| Field Name | Details |
| --- | --- |
| ActiveContacts | TypeintPropertiesNillableDescriptionThe number of active contacts that are associated with a company. |
| AnnualRevenue | TypecurrencyPropertiesFilter, NillableDescriptionThe amount of money that the company makes in 1 year. Annual revenue is measured in US dollars. |
| City | TypestringPropertiesFilter, Nillable, SortDescriptionThe name of the city where the company is located. |
| CompanyId | TypestringPropertiesFilter, NillableDescriptionA unique numerical identifier for the company and theData.com identifier for a company. |
| Country | TypestringPropertiesFilter, Nillable, SortDescriptionA string that represents the standard abbreviation for the country where the company is located. |
| CountryCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklistDescriptionA standardized name for countries of the world. |
| Description | TypestringPropertiesNillableDescriptionA brief synopsis of the company that provides a general overview of the company and what it does. |
| DunsNumber | TypestringPropertiesFilter, NillableDescriptionA randomly generated nine-digit number that’s assigned by Dun & Bradstreet (D&B) to identify unique business establishments. |
| EmployeeQuantityGrowthRate | TypedoublePropertiesNillableDescriptionThe yearly growth rate of the number of employees in a company expressed as a decimal percentage. The data includes the total employee growth rate for the past two years. |
| ExternalId | TypestringPropertiesFilter, Nillable, SortDescriptionA unique numerical identifier for the company. The ExternalId is a system-generated number. |
| Fax | TypephonePropertiesNillableDescriptionThe telephone number that’s used to send and receive faxes. |
| FortuneRank | TypeintPropertiesDefaulted on create, Group, NillableDescriptionThe numeric value of the company’s Fortune 1000 ranking. A null or blank value means that the company isn’t ranked as a Fortune 1000 company. |
| FullAddress | TypestringPropertiesGroup, NillableDescriptionThe complete address of a company, including Street, City, State, and Zip. |
| IncludedInSnP500 | TypestringPropertiesGroup, NillableDescriptionA true or false value. If true, the company is listed in the S&P 500 Index. If false, the company isn’t listed in the S&P 500 Index. |
| Industry | TypestringPropertiesNillableDescriptionA description of the type of industry such as Telecommunications, Agriculture, or Electronics. |
| IsInCrm | TypebooleanPropertiesDefaulted on create, GroupDescriptionWhether the record is in Salesforce (true) or not (false). |
| IsInactive | TypebooleanPropertiesDefaulted on create, FilterDescriptionA true or false response. True, the company record is not active. False, the company record is active. |
| IsOwned | TypebooleanPropertiesDefaulted on createDescriptionA true or false value. True, your organization owns the record. False, your organization doesn’t own the record. |
| NaicsCode | TypestringPropertiesFilter, NillableDescriptionA value that represents the North American Industry Classification System (NAICS) code. NAICS was created to provide details about a business’s service orientation. The code descriptions are focused on what a business does. |
| NaicsDesc | TypestringPropertiesNillableDescriptionA description of the NAICS classification. |
| Name | TypestringPropertiesFilter, Nillable, SortDescriptionThe company’s name. |
| NumberOfEmployees | TypeintPropertiesFilter, NillableDescriptionThe number of employees working for the company. |
| Ownership | TypestringPropertiesFilter, NillableDescriptionThe type of ownership of the company:PublicPrivateGovernmentOther |
| Phone | TypephonePropertiesNillableDescriptionA numeric string containing the primary telephone number for the company. |
| PremisesMeasure | TypeintPropertiesGroup, NillableDescriptionA numeric value for the measurement of the premises. |
| PremisesMeasureReliability | TypestringPropertiesGroup, NillableDescriptionA descriptive accuracy of the measurement such as actual, estimated, or modeled. |
| PremisesMeasureUnit | TypestringPropertiesGroup, NillableDescriptionA descriptive measurement unit such as acres, square meters, or square feet. |
| PriorYearEmployees | TypeintPropertiesGroup, NillableDescriptionThe total number of employees for the prior year. |
| PriorYearRevenue | TypedoublePropertiesNillableDescriptionThe annual revenue for the prior year. |
| SalesTurnoverGrowthRate | TypedoublePropertiesNillableDescriptionThe increase in annual revenue from the previous value for an equivalent period expressed as a decimal percentage. |
| Sic | TypestringPropertiesFilter, NillableDescriptionA numeric value that represents the Standard Industrial Codes (SIC). SIC is a numbering convention that indicates what type of service a business provides. It is a four-digit value. |
| SicCodeDesc | TypestringPropertiesGroup, NillableDescriptionThe SIC numeric code and descsciption for a company. |
| SicDesc | TypestringPropertiesNillableDescriptionA description of the SIC classification. |
| Site | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklistDescriptionAn organizational status of the company.Branch: a secondary location to a headquarter locationHeadquarter: a parent company with branches or subsidiariesSingle Location: a single business with no subsidiaries or branches |
| State | TypestringPropertiesFilter, Nillable, SortDescriptionThe two-letter standard abbreviation for a state. |
| StateCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklistDescriptionA standard two-letter abbreviation for states and territories of the United States. The state where the company is located. The abbreviation can also be a province or other equivalent to a state, depending on the country where the company is located. |
| Street | TypestringPropertiesNillableDescriptionA postal address for the company. |
| TickerSymbol | TypestringPropertiesNillableDescriptionThe symbol that uniquely identifies companies that are traded on public stock exchanges. |
| TradeStyle | TypestringPropertiesNillableDescriptionA legal name under which a company conducts business. |
| UpdatedDate | TypedateTimePropertiesNillable, SortDescriptionThe last date and time when the information for this company was updated. |
| Website | TypeurlPropertiesNillableDescriptionThe standard URL for the company’s home page. |
| YearStarted | TypestringPropertiesNillableDescriptionThe year when the company was founded. |
| Zip | TypestringPropertiesFilter, NillableDescriptionA numeric postal code that’s designated for the address. |

## Usage

Use the DatacloudCompany object to search the Data.com database for companies with the specific criteria that you enter. Use this object to find company records that you are interested in purchasing for your organization. Data.com APIs use the term “company,” which is similar to Salesforce term “accounts.”

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

DatacloudCompany can’t be used in Apex test methods, because an external web service call is required to access it. These calls are not allowed in Apex test methods.
