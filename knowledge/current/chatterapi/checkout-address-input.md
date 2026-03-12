---
title: "Checkout Address Input"
domain: chatterapi
topic: checkout-address-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.248Z
estimatedTokens: 360
keywords: [Checkout, Address, Input]
---

# Checkout Address Input

> Checkout address input.

# Checkout Address Input

Checkout address input.

Root XML tag

<address>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| city | String | The address city. | Optional | 55.0 |
| country | String | ISO code of the address country. Must match one of the valid ISO codes defined within the org’s State-Country picklist. | Required | 55.0 |
| firstName | String | First name of the contact. | Optional | 57.0 |
| isDefault | Boolean | Indicates whether a contact’s address is the default address (true) or not (false). The default value is false. | Optional | 55.0 |
| lastName | String | Last name of the contact. | Optional | 57.0 |
| name | String | Name of the contact. | Required | 55.0 |
| postalCode | String | Zip code or postal code for the address. | Optional | 55.0 |
| shipToPhoneNumber | String | Phone number of the contact. Don't include a value for this field when submitting an address to the payment API. All default payment components strip phone numbers from the address before submitting to the payment API. If you specify a value, it must be a valid phone number with a country code. | Optional | 63.0 |
| region | String | ISO code of the address region. Must match one of the valid ISO codes defined within the org’s State-Country picklist. | Optional | 55.0 |
| street | String | The address street. | Required | 55.0 |

## Code Examples

```
{
   "name": "Alan Johnson",
   "firstName": "Alan",
   "lastName": "Johnson",
   "region":"CA",
   "country":"US",
   "city":"San Francisco",
   "street":"415 Mission St",
   "postalCode":"94105",
   "shipToPhoneNumber": "+16175551212"
}
```
