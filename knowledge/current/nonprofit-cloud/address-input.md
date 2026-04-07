---
title: "Address Input"
domain: nonprofit-cloud
topic: address-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:20.383Z
estimatedTokens: 180
keywords: [Address, account, party, relationship, group]
---

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
