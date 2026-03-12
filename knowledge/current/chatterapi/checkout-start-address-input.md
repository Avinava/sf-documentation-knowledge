---
title: "Checkout Start Address Input"
domain: chatterapi
topic: checkout-start-address-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.284Z
estimatedTokens: 307
keywords: [Checkout, Start, Address, Input]
---

# Checkout Start Address Input

> Checkout start address input.

# Checkout Start Address Input

Checkout start address input.

Root XML tag

<address>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| city | String | The address city. | Optional | 61,0 |
| companyName | String | The address company name. | Required | 61.0 |
| country | String | ISO code of the address country. Must match one of the valid ISO codes defined within the org’s State-Country picklist. | Required | 61.0 |
| firstName | String | First name of the contact. | Optional | 61.0 |
| id | String | ID for the checkout | Optional | 61.0 |
| lastName | String | Last name of the contact. | Optional | 61.0 |
| name | String | Name of the contact. | Required | 61.0 |
| postalCode | String | Zip code or postal code for the address. | Optional | 61.0 |
| region | String | ISO code of the address region. Must match one of the valid ISO codes defined within the org’s State-Country picklist. | Optional | 61.0 |
| shouldUse​DefaultAddress | Boolean | Indicates whether the contact’s default address shoud be used for checkout (true) or not (false). | Optional | 61.0 |
| street | String | Address street. | Required | 61.0 |

## Code Examples

```
{
   "country":"US",
   "city":"San Francisco",
   "city":"Company1",
   "firstName": "Alan",
  "id": "2z9R000000008LfIAI",
   "lastName": "Johnson",
   "name": "Alan Johnson",
   "postalCode":"94105",
   "region":"CA",
   "shouldUseDefaultAddress":false,
   "street":"415 Mission St",
}
```
