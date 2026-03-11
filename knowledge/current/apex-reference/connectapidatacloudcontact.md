---
title: "ConnectApi.DatacloudContact"
domain: apex-reference
topic: connectapidatacloudcontact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.553Z
keywords: [ConnectApi.DatacloudContact, See]
---

# ConnectApi.DatacloudContact

# ConnectApi.DatacloudContact

Information about a Data.com contact.

All contact information is visible for contacts that you purchased. If you have not purchased a contact, some of the fields will be hidden. Hidden fields are fully or partially hidden by asterisks “\*\*\*.”

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| address | ConnectApi.Address | The contact’s business address. | 32.0 |
| companyId | String | A unique numerical identifier for the company where the contact works. This is the Data.com identifier for a company. | 32.0 |
| companyName | String | The company name where the contact works. | 32.0 |
| contactId | String | A unique numerical identifier for the contact. This is the Data.com identifier for a contact. | 32.0 |
| department | String | The department in the company where the contact works. Here are some possible departments.EngineeringITMarketingSales | 32.0 |
| email | String | The most current business email address for the contact. | 32.0 |
| firstName | String | The first name of the contact. | 32.0 |
| isInactive | Boolean | Whether this contact is active (true) or not (false). Inactive contacts have out-of-date information in Data.com. | 32.0 |
| isOwned | Boolean | Whether this contact is owned (true) or not (false). | 32.0 |
| lastName | String | The last name of the contact. | 32.0 |
| level | String | A human resource label that designates a person’s level in the company. Here are some possible levels.C-LevelDirectorManagerStaff | 32.0 |
| phoneNumbers | ConnectApi.PhoneNumber | Telephone numbers for the contact, which can include direct-dial business telephone numbers, mobile telephone numbers, and business headquarters telephone numbers. The type of telephone number is also indicated. | 32.0 |
| title | String | The title of the contact, such as CEO or Vice President. | 32.0 |
| updatedDate | Datetime | The date of the most recent change to this contact’s information. | 32.0 |

#### See Also

-   [ConnectApi.DatacloudContacts](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_contact_collection.htm "Lists all contacts that were purchased in the specific order, page URLs, and the number of contacts in the order.")