---
title: "Datacloud Contact"
domain: chatterapi
topic: datacloud-contact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.215Z
estimatedTokens: 500
keywords: [Datacloud, Contact, Data.com, contacts, own, don’t, record, hidden, asterisks, ***]
---

# Datacloud Contact

> Information about Data.com contacts. If you own a contact, you see all
      the fields. If you don’t own the contact record, some fields are hidden by asterisks
      (***).

# Datacloud Contact

Information about Data.com contacts. If you own a contact, you see all the fields. If you don’t own the contact record, some fields are hidden by asterisks (\*\*\*).

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| address | Address | A postal address for the company where this contact works. | Small, 32.0 | 32.0 |
| companyId | String | The unique numerical identifier for the company at which the contact works. | Small, 32.0 | 32.0 |
| companyName | String | The name of the company at which the contact works. | Small, 32.0 | 32.0 |
| contactId | String | The unique numerical identifier for a contact. | Small, 32.0 | 32.0 |
| department | String | The name of the department to which the contact is assigned. | Small, 32.0 | 32.0 |
| email | String | An email address for this contact. | Small, 32.0 | 32.0 |
| firstName | String | The first name of a contact. | Small, 32.0 | 32.0 |
| isInactive | Boolean | A true or false response. True means that the record is no longer active. False means that the contact is still valid and active. | Small, 32.0 | 32.0 |
| isOwned | Boolean | Specifies whether your organization owns this contact. | Small, 32.0 | 32.0 |
| lastName | String | The last name of a contact. | Small, 32.0 | 32.0 |
| level | String | A human resource label designating a person’s level in the company. | Small, 32.0 | 32.0 |
| phoneNumbers | Phone Number[] | A numerical string that contains the direct-dial phone number for the contact. | Small, 32.0 | 32.0 |
| title | String | The job title for a contact. | Small, 32.0 | 32.0 |
| updatedDate | String | The date when the information for this contact was updated in ISO 8601 format. | Small, 32.0 | 32.0 |

#### See Also

-   [Datacloud Contact Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_contact_collection.htm "Purchase details for all contacts that were purchased for a specific order.")

## Related Topics

- Address (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_address.htm)
- Phone Number (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_phone_number.htm)
- Datacloud Contact Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_contact_collection.htm)
