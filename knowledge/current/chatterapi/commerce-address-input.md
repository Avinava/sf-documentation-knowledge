---
title: "Commerce Address Input"
domain: chatterapi
topic: commerce-address-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.316Z
estimatedTokens: 452
keywords: [Commerce, Address, Input]
---

# Commerce Address Input

> Commerce address input.

# Commerce Address Input

Commerce address input.

Root XML tag

<address>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addressType | String | Type of address, for example, Shipping or Billing. | Optional | 54.0 |
| city | String | The address city. | Optional | 54.0 |
| commerceAddress​FieldInput​List | Commerce Address Field Input[] | A list of custom address fields, if any. | Optional | 54.0 |
| companyName | String | The address company name. | Optional | 57.0 |
| country | String | The address country, specified using the ISO country code. For example, US for United States. | Optional | 54.0 |
| countryCode | String | Two-character country code. For example, US for United States. | Optional | 54.0–58.0 |
| firstName | String | The address first name. | Optional | 57.0 |
| isDefault | Boolean | Indicates whether a contact’s address is the preferred method of communication (true) or not (false). The default value is false. | Optional | 54.0 |
| lastName | String | The address last name. | Optional | 57.0 |
| middleName | String | The address middle name. | Optional | 57.0 |
| name | String | Name of the contact. | Required | 54.0 |
| phoneNumber | String | The phone number associated with the address, including a valid country code. For example, +1xxxxxxxxxx (for a US number). | Optional | 57.0 |
| postalCode | String | Zip code or postal code for the address. | Optional | 54.0 |
| region | String | The address state, specified using the ISO state code. For example, CA for California state. | Optional | 54.0 |
| regionCode | String | The address state code. For example, CA for California state. | Optional | 54.0–58.0 |
| street | String | The address street. | Optional | 54.0 |

## Code Examples

```
{
  "addressId":"81Wxx0000000001EAA",
  "city":"Boston",
  "country":"US",
  "isDefault":true,
  "name":"Home Address",
  "postalCode":"01234",
  "region":"MA",
  "street":"1 Milk Street",
  “addressType”: “Billing”,
  "commerceAddressFieldInputList": {
                 "fields" : [ {
                            "dataName" : "options__c",
                            "text" : "alpha"
                            } ]
  }
}
```

## Related Topics

- Commerce Address Field Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_commerce_address_field_input.htm)
