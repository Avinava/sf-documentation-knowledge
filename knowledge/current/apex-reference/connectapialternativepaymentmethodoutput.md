---
title: "ConnectApi.AlternativePaymentMethodOutput"
domain: apex-reference
topic: connectapialternativepaymentmethodoutput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.925Z
keywords: [ConnectApi.AlternativePaymentMethodOutput]
---

# ConnectApi.AlternativePaymentMethodOutput

# ConnectApi.AlternativePaymentMethodOutput

Alternative payment method details output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| accountId | String | Salesforce Payments account to which this payment method is linked. | 56.0 |
| comments | String | Details about a record added by a user. Maximum of 1,000 characters. | 56.0 |
| email | String | Email address of the card holder. | 56.0 |
| gatewayToken | String | A unique, alphanumeric ID, called a token, that a payment gateway generates when it first processes a payment. The token replaces the actual payment data so that the data is kept secure. This token is stored as encrypted text, and can be used for recurring payments. | 56.0 |
| gatewayToken​Details | String | Detailed information about the gateway token. | 56.0 |
| name | String | Name that you assign to the payment method object. | 56.0 |