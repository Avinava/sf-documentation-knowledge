---
title: "Address Input"
domain: psc-api
topic: address-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.813Z
estimatedTokens: 180
keywords: [Address, Input, representation, account, party, relationship, group]
---

# Address Input

> Input representation of an account address or a party relationship
      group address.

# Address Input

Input representation of an account address or a party relationship group address.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| city | String | City of the account or the party relationship group. | Optional | 58.0 |
| country | String | Country of the account or the party relationship group. | Optional | 58.0 |
| postalCode | String | Postal code of the account or the party relationship group. | Optional | 58.0 |
| state | String | State of the account or the party relationship group. | Optional | 58.0 |
| street | String | Street of the account or the party relationship group. | Optional | 58.0 |

## Code Examples

```
"billingAddress":{
          "street":"",
          "city":"Los Angeles",
          "state":"California",
          "country":"USA",
          "postalCode":"94263"
       },
       "shippingAddress":{
          "street":"",
          "city":"Los Angeles",
          "state":"California",
          "country":"USA",
          "postalCode":"94263"
       },
```
