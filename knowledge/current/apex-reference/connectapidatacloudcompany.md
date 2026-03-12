---
title: "ConnectApi.DatacloudCompany"
domain: apex-reference
topic: connectapidatacloudcompany
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.973Z
estimatedTokens: 845
keywords: [ConnectApi.DatacloudCompany, Information, Data.com, company.]
---

# ConnectApi.DatacloudCompany

> Information about a Data.com company.

# ConnectApi.DatacloudCompany

Information about a Data.com company.

All company information is visible for companies that you purchased and own. If you haven’t purchased a company, some of the fields are hidden. Hidden fields are fully or partially hidden by asterisks “\*\*\*.”

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| activeContacts | Integer | The number of active Data.com contacts who work in the company. | 32.0 |
| address | ConnectApi.Address | The postal address for the company. This is typically a physical address that can include the city, state, street, and postal code. | 32.0 |
| annualRevenue | Double | The amount of money that the company makes in one year. Annual revenue is measured in US dollars. | 32.0 |
| companyId | String | A unique numerical identifier for the company. This is the Data.com identifier for a company. | 32.0 |
| description | String | A brief synopsis of the company that provides a general overview of the company and what it does. | 32.0 |
| dunsNumber | String | A randomly generated nine-digit number that’s assigned by Dun & Bradstreet (D&B) to identify unique business establishments. | 32.0 |
| industry | String | A description of the type of industry such as “Telecommunications,” “Agriculture,” or “Electronics.” | 32.0 |
| isInactive | Boolean | Indicates whether this company is active (true) or not (false). Inactive companies have out-of-date information in Data.com. | 32.0 |
| isOwned | Boolean | True: You or your organization owns this company.False: Neither you nor your organization owns this company. | 32.0 |
| naicsCode | String | North American Industry Classification System (NAICS) codes were created to provide more details about a business’s service orientation. The code descriptions are focused on what a business does. | 32.0 |
| naicsDescription | String | A description of the NAICS classification. | 32.0 |
| name | String | The name of the company. | 32.0 |
| numberOf​Employees | Integer | The number of employees who are working for the company. | 32.0 |
| ownership | String | The type of ownership of the company:PublicPrivateGovernmentOther | 32.0 |
| phoneNumbers | ConnectApi.PhoneNumber | The list of telephone numbers for the company, including the type. Here are some possible types of telephone numbers.MobileWorkFax | 32.0 |
| sic | String | Standard Industrial Codes (SIC) is a numbering convention that indicates what type of service a business provides. It’s a four-digit value. | 32.0 |
| sicDescription | String | A description of the SIC classification. | 32.0 |
| site | String | Company’s site. For example, HQ, Single Location, or Branch.An organization status of the company.Branch: a secondary location to a headquarter location.Headquarter: the parent company has branches or subsidiaries.Single Location: a single business with no subsidiaries or branches. | 32.0 |
| tickerSymbol | String | The symbol that uniquely identifies companies that are traded on public stock exchanges. | 32.0 |
| tradeStyle | String | A legal name under which a company conducts business. | 32.0 |
| updatedDate | Datetime | The date of the most recent change to this company’s information. | 32.0 |
| website | String | The standard URL for the company’s home page. | 32.0 |
| yearStarted | String | The year when the company was founded. | 32.0 |

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.Address (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_address.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.PhoneNumber (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_phone_Num.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
