---
title: "ConnectApi.AlternativePaymentMethod"
domain: apex-reference
topic: connectapialternativepaymentmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.765Z
keywords: [ConnectApi.AlternativePaymentMethod]
---

# ConnectApi.AlternativePaymentMethod

# ConnectApi.AlternativePaymentMethod

A payment method that doesn't have a defined Salesforce entity such as CardPaymentMethod or DigitalWallet. Common examples of alternative payment methods include CashOnDeliver, Klarna, and Direct Debit. AlternativePaymentMethod functions the same as any other type of payment method for processing transactions in the payment gateway.

Subclass of [ConnectApi.BasePaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_base_payment_method.htm "Base payment method input representation.")

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Salesforce Payments account to which this payment method is linked. | Required | 54.0 |
| comments | String | Details about a record added by a user. Maximum of 1,000 characters. | Optional | 54.0 |
| email | String | Email address of the card holder. | Optional | 54.0 |
| gatewayToken | String | A unique, alphanumeric ID, called a token, that a payment gateway generates when it first processes a payment. The token replaces the actual payment data so that the data is kept secure. This token is stored as encrypted text, and can be used for recurring payments. | Required | 54.0 |
| gatewayToken​Details | String | Detailed information about the gateway token. | Required | 54.0 |
| name | String | Name that you assign to the payment method object. | Optional | 54.0 |