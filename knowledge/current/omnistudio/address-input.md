---
title: "Address Input"
domain: omnistudio
topic: address-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.022Z
estimatedTokens: 180
keywords: [Address, Input, representation, account, party, relationship, group]
---

# Address Input

> Input representation of an account address.

# Address Input

Input representation of an account address.

Root XML tag

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| city | String | City of the account. | Optional | 61.0 |
| country | String | Country of the account. | Optional | 61.0 |
| countryCode | String | Country code of the account. | Optional | 61.0 |
| latitude | Double | Latitude of the account. | Optional | 61.0 |
| longitude | Double | Longitude of the account. | Optional | 61.0 |
| postalCode | String | Postal code of the account. | Optional | 61.0 |
| state | String | State of the account. | Optional | 61.0 |
| stateCode | String | State code of the account. | Optional | 61.0 |
| street | String | Street address of the account. | Optional | 61.0 |

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
