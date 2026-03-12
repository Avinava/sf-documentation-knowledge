---
title: "Alternative Payment Method Input"
domain: chatterapi
topic: alternative-payment-method-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:10.963Z
estimatedTokens: 274
keywords: [Alternative, Payment, Input]
---

# Alternative Payment Method Input

> Alternative payment method input.

# Alternative Payment Method Input

Alternative payment method input.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Salesforce Payments account to which this payment method is linked. | Required | 54.0 |
| comments | String | Details about a record added by a user. Maximum of 1,000 characters.Users can add comments to provide additional details about a record. Maximum of 1000 characters. | Optional | 54.0 |
| email | String | Email address of the card holder. | Optional | 54.0 |
| gatewayToken | String | A unique, alphanumeric ID, called a token, that a payment gateway generates when it first processes a payment. The token replaces the actual payment data so that the data is kept secure. This token is stored as encrypted text, and can be used for recurring payments. | Required | 54.0 |
| gateway​TokenDetails | String | Information about the gateway token. | Required | 54.0 |
| name | String | Name that you assign to the payment method object. | Optional | 54.0 |

## Code Examples

```
{
  "name": "John Doe",
  "accountId": "001000000000000xyz",
  "gatewayToken": "test token",
  "gatewayTokenDetails": "test token details",
  "comments": "sample request",
  "email": "jdoe@salesforce.com"
}
```
