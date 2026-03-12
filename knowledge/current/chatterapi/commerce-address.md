---
title: "Commerce Address"
domain: chatterapi
topic: commerce-address
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.773Z
estimatedTokens: 426
keywords: [Commerce, Address, account]
---

# Commerce Address

> Address for a Commerce account.

# Commerce Address

Address for a Commerce account.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| addressId | String | ID of the address. | Small, 54.0 | 54.0 |
| addressType | String | Type of address (for example, “Shipping” or “Billing”). | Small, 54.0 | 54.0 |
| city | String | The address city. | Small, 54.0 | 54.0 |
| companyName | String | The address company name. | Small, 57.0 | 57.0 |
| country | String | The address country. | Small, 54.0 | 54.0 |
| countryCode | String | Two-character country code. | Small, 54.0 | 54.0–58.0 |
| fields | Map<String, Record Field> | Custom fields for the address. | Small, 54.0 | 54.0 |
| firstName | String | The address first name. | Small, 57.0 | 57.0 |
| isDefault | Boolean | Indicates whether a contact’s address is the preferred method of communication (true) or not (false). The default value is false. | Small, 54.0 | 54.0 |
| lastName | String | The address last name. | Small, 57.0 | 57.0 |
| middleName | String | The address middle name. | Small, 57.0 | 57.0 |
| name | String | Name of the contact. | Small, 54.0 | 54.0 |
| phoneNumber | String | The address phone number. | Small, 57.0 | 57.0 |
| postalCode | String | Zip code or postal code for the address. | Small, 54.0 | 54.0 |
| region | String | The address state. | Small, 54.0 | 54.0 |
| regionCode | String | The address state code. | Small, 54.0 | 54.0–58.0 |
| street | String | The address street. | Small, 54.0 | 54.0 |

#### See Also

-   [Commerce Address Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_address_collection.htm "A collection of commerce addresses.")

## Related Topics

- Record Field (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordField.htm)
- Commerce Address Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_address_collection.htm)
