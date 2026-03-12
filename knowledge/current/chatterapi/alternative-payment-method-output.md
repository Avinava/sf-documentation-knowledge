---
title: "Alternative Payment Method Output"
domain: chatterapi
topic: alternative-payment-method-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.156Z
estimatedTokens: 249
keywords: [Alternative, Payment, Output]
---

# Alternative Payment Method Output

> Alternative payment method details.

# Alternative Payment Method Output

Alternative payment method details.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Salesforce Payments account to which this payment method is linked. | Big, 48.0 | 56.0 |
| comments | String | Details about a record added by a user. Maximum of 1,000 characters. | Big, 48.0 | 56.0 |
| email | String | Email address of the card holder. | Big, 48.0 | 56.0 |
| gatewayToken | String | A unique, alphanumeric ID, called a token, that a payment gateway generates when it first processes a payment. The token replaces the actual payment data so that the data is kept secure. This token is stored as encrypted text, and can be used for recurring payments. | Big, 48.0 | 56.0 |
| gateway​TokenDetails | String | Detailed information about the gateway token. | Big, 48.0 | 56.0 |
| name | String | Name that you assign to the payment method object. | Big, 48.0 | 56.0 |
