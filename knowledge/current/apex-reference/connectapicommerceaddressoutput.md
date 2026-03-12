---
title: "ConnectApi.CommerceAddressOutput"
domain: apex-reference
topic: connectapicommerceaddressoutput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:26.678Z
estimatedTokens: 320
keywords: [ConnectApi.CommerceAddressOutput, Address, Commerce, account.]
---

# ConnectApi.CommerceAddressOutput

> Address for a Commerce account.

# ConnectApi.CommerceAddressOutput

Address for a Commerce account.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| addressId | String | ID of the address. | 54.0 |
| addressType | String | Type of address (for example, “Shipping” or “Billing”). | 54.0 |
| city | String | The address city. | 54.0 |
| companyName | String | The address company name. | 57.0 |
| country | String | The address country. | 54.0 |
| countryCode | String | Two-character country code. | 54.0–58.0 |
| fields | Map<String, Record Field> | A list of custom address fields, if any. | 54.0 |
| firstName | String | The address first name. | 57.0 |
| isDefault | Boolean | Indicates whether a contact’s address is the preferred method of communication (true) or not (false). The default value is false. | 54.0 |
| lastName | String | The address last name. | 57.0 |
| middleName | String | The address middle name. | 57.0 |
| name | String | Name of the contact. | 54.0 |
| phoneNumber | String | The address phone number. | 57.0 |
| postalCode | String | Zip code or postal code for the address. | 54.0 |
| region | String | The address state. | 54.0 |
| regionCode | String | The address state code. | 54.0–58.0 |
| street | String | The address street. | 54.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- Record
                  Field (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_labeledRecordField.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
