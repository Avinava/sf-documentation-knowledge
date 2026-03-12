---
title: "Address Input"
domain: chatterapi
topic: address-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:10.945Z
estimatedTokens: 147
keywords: [Address, Input, representation, payment, intent, card]
---

# Address Input

> Address input representation for a payment method, payment intent, or
      card payment method.

# Address Input

Address input representation for a payment method, payment intent, or card payment method.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| city | String | City | Optional | 49.0 |
| companyName | String | Company name | Optional | 49.0 |
| country | String | Country, specified using the ISO country code. | Optional | 49.0 |
| postalCode | String | Postal code | Optional | 49.0 |
| state | String | State | Optional | 49.0 |
| street | String | Street | Optional | 49.0 |

## Code Examples

```
{
"city":"San Francisco",
"companyName":"Salesforce",
"country":"US",
"postalCode":"94105",
"state":"CA"
"street":"415 Mission Street"
}
```
