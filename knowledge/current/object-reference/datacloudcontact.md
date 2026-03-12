---
title: "DatacloudContact"
domain: object-reference
topic: datacloudcontact
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:07.885Z
estimatedTokens: 1138
keywords: [DatacloudContact, Data.com, contact, records, API, version, 30.0, later, Calls, Usage]
---

# DatacloudContact

> The fields and
				properties for Data.com contact records. This object is available in API
		version 30.0 or later.

# DatacloudContact

The fields and properties for Data.com contact records. This object is available in API version 30.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields are removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

## Supported Calls

describeSObjects(), query()

## Fields

| Field Name | Details |
| --- | --- |
| City | TypestringPropertiesFilter, Nillable, SortDescriptionThe city where the company is located. |
| CompanyId | TypestringPropertiesFilter, NillableDescriptionThe unique numerical identifier for the company and the Data.com company identification number or Data.com Key. |
| CompanyName | TypestringPropertiesFilter, Group, SortDescriptionThe name of the company. |
| ContactId | TypestringPropertiesFilter, NillableDescriptionThe unique numeric identifier for this contact. |
| Country | TypestringPropertiesFilter, Nillable, SortDescriptionThe standard abbreviation or name for the country where the company is located.NoteYou can enter a comma-separated list of countries; however, for a country that uses a comma in its name, leave out the comma. For example, enter “Taiwan, ROC” as Taiwan ROC. |
| Department | TypepicklistPropertiesFilter, Group, Restricted picklistDescriptionThe department in the company that the contact is affiliated with. The values of this field are fixed enumerated values.EngineeringFinanceHuman ResourcesITMarketingOperationsOtherSalesSupport |
| Email | TypeemailPropertiesFilter, NillableDescriptionA business email address for the contact. |
| ExternalId | TypestringPropertiesFilter, Nillable, SortDescriptionA unique system-generated numerical identifier for the contact. |
| FirstName | TypestringPropertiesFilter, NillableDescriptionThe first name of the contact. |
| IsInCrm | TypebooleanPropertiesDefaulted on create, GroupDescriptionWhether the record is in Salesforce (true) or not (false). |
| IsInactive | TypebooleanPropertiesDefaulted on create, FilterDescriptionWhether the record is active (false) or not (true). |
| IsOwned | TypebooleanPropertiesDefaulted on createDescriptionTrue: You own this record.False: You do not own this record. |
| LastName | TypestringPropertiesFilter, Nillable, SortDescriptionThe last name of the contact. |
| Level | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklistDescriptionA human resource label that designates a person’s level in the company. The values of this field are fixed enumerated values.C-LevelVPDirectorManagerStaffOther |
| Phone | TypephonePropertiesNillableDescriptionThe direct-dial telephone number for the contact. |
| SocialHandles | TypestringDescriptionThe social handles for this contact. Social handles are a normalized URL and user name for social media accounts such as, LinkedIn, Facebook, and Twitter. This field is response-only.The DatacloudSocialHandles object is a child of the DatacloudContact object. |
| State | TypestringPropertiesFilter, Nillable, SortDescriptionThe state where the company is located, which can also be a province or other equivalent to a state, depending on the country where the company is located. |
| Street | TypestringPropertiesNillableDescriptionThe street address for the company where the contact works. |
| Title | TypestringPropertiesFilter, Group, Nillable, SortDescriptionTitle of the contact such as CEO or Vice President. |
| UpdatedDate | TypedateTimePropertiesNillable, SortDescriptionThe last date and time when the information for a contact was updated. |
| Zip | TypestringPropertiesFilter, NillableDescriptionThe postal or zip code for the address. |

## Usage

This object searches the Data.com database for contacts with the specific criteria that you enter. Use this object to find contact records that you are interested in purchasing for your organization.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

DatacloudContact can’t be used in Apex test methods, because an external web service call is required to access it. These calls are not allowed in Apex test methods.
