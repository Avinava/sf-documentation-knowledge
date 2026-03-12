---
title: "Merchant Credential Fields"
domain: blng-dev
topic: merchant-credential-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.958Z
estimatedTokens: 353
keywords: [Merchant, Credential, payment, gateway, package, installs, Salesforce, Billing, provide, making, transaction]
---

# Merchant Credential Fields

> Each payment gateway package installs merchant credential fields on the Salesforce
  Billing payment gateway object. You can use these fields to  provide merchant information when
  making a transaction request to the payment gateway.

# Merchant Credential Fields

Each payment gateway package installs merchant credential fields on the Salesforce Billing payment gateway object. You can use these fields to provide merchant information when making a transaction request to the payment gateway.

| Attribute Name | API Name | Required | Type |
| --- | --- | --- | --- |
| APILoginId | adnblng__APILoginId__c | No | Text |
| APITransactionKey | adnblng__APITransactionKey__c | No | Text |
| TestMode | adnblng__TestMode__c | No | Checkbox |

| Attribute Name | API Name | Required | Type |
| --- | --- | --- | --- |
| Merchant ID | csblng__MerchantId__c | No | Text |
| Merchant Reference | csblng__MerchantReference__c | No | Text |
| Test Mode | csblng__TestMode__c | No | Checkbox |
| Transaction Security Key | csblng__TransactionSecurityKey__c | No | Text |

| Attribute Name | API Name | Required | Type |
| --- | --- | --- | --- |
| APIKey | pzyblng__APIKey__c | No | Text |
| APILoginId | pyzblng__APILoginId__c | No | Text |
| APISecret | pyzblng__APISecret__c | No | Text |
| APITransactionKey | pyzblng__APITransactionKey__c | No | Text |
| Enable User Identification | pyzblng__EnableUserIdentification__c | No | Checkbox |
| JSSecurityKey | pyzblng__JSSecurityKey__c | No | Text |
| TestMode | pyzblng__TestMode__c | No | Text |
| Token | pyzblng__Token__c | No | Text |
| TransarmorToken | pyzblng__TransarmorToken__c | No | Text |
