---
title: "Datacloud Company"
domain: chatterapi
topic: datacloud-company
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.205Z
estimatedTokens: 802
keywords: [Datacloud, Company, Data.com, record, own, don’t, hidden, asterisks, ***]
---

# Datacloud Company

> The Data.com company record. If you own a company record, you see all
      the fields. If you don’t own the company record, some fields are hidden by asterisks
      (***).

# Datacloud Company

The Data.com company record. If you own a company record, you see all the fields. If you don’t own the company record, some fields are hidden by asterisks (\*\*\*).

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| active​Contacts | Integer | The number of active contacts that the company has. | Small, 32.0 | 32.0 |
| address | Address | The address of the company. | Small, 32.0 | 32.0 |
| annual​Revenue | Double | The amount of money that the company makes in one year. | Small, 32.0 | 32.0 |
| companyId | String | The unique numerical identifier for the company. | Small, 32.0 | 32.0 |
| description | String | The description of the company. | Small, 32.0 | 32.0 |
| dunsNumber | String | A randomly generated nine-digit number that’s assigned by Dun & Bradstreet (D&B) to identify unique business establishments. | Small, 32.0 | 32.0 |
| industry | String | A description for the area of focus in which the company does business. | Small, 32.0 | 32.0 |
| isInactive | Boolean | Whether the company information is no longer accurate (true) or the company information is up to date (false). | Small, 32.0 | 32.0 |
| isOwned | Boolean | Whether the company has been purchased by you or your organization (true) or not (false). | Small, 32.0 | 32.0 |
| naicsCode | String | North American Industry Classification System (NAICS) codes were created to provide details about a business’s service orientation. The code descriptions are focused on what a business does. | Small, 32.0 | 32.0 |
| naics​Description | String | A description of the NAICS classification. | Small, 32.0 | 32.0 |
| name | String | The company’s name. | Small, 32.0 | 32.0 |
| numberOf​Employees | Integer | The number of employees who are working for the company. | Small, 32.0 | 32.0 |
| ownership | String | The type of ownership of the company:PublicPrivateGovernmentOther | Small, 32.0 | 32.0 |
| phoneNumbers | Phone Number[] | A numerical string that contains a corporate phone number for the company. | Small, 32.0 | 32.0 |
| sic | String | Standard Industrial Codes (SIC) is a numbering convention that indicates what type of service a business provides. | Small, 32.0 | 32.0 |
| sic​Description | String | A description of the SIC classification. | Small, 32.0 | 32.0 |
| site | String | The type of location of the company, such as “Headquarters.” | Small, 32.0 | 32.0 |
| tickerSymbol | String | The symbol that uniquely identifies companies that are traded on public stock exchanges. | Small, 32.0 | 32.0 |
| tradeStyle | String | A legal name under which a company conducts business. | Small, 32.0 | 32.0 |
| updatedDate | String | The date when the information was last updated for this company in ISO 8601 format. | Small, 32.0 | 32.0 |
| website | String | The URL to the company’s website. | Small, 32.0 | 32.0 |
| yearStarted | String | The year when the company was founded. | Small, 32.0 | 32.0 |

#### See Also

-   [Datacloud Company Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_company_collection.htm "Purchase details for all companies that were purchased for a specific order.")

## Related Topics

- Address (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_address.htm)
- Phone Number (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_phone_number.htm)
- Datacloud Company Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_company_collection.htm)
