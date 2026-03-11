---
title: "AbstractTransactionResponse Class"
domain: apex-reference
topic: abstracttransactionresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.801Z
keywords: [AbstractTransactionResponse, Class, Sets, Salesforce-specific, result, code, information., setSalesforceResultCodeInfo, salesforceResultCodeInfo, Signature, Parameters, Return, Value]
---

# AbstractTransactionResponse Class

> Sets the Salesforce-specific result code information.

### setSalesforceResultCodeInfo(salesforceResultCodeInfo)

Sets the Salesforce-specific result code information.

#### Signature

global void setSalesforceResultCodeInfo(commercepayments.SalesforceResultCodeInfo salesforceResultCodeInfo)

#### Parameters

salesforceResultCodeInfo

Type: [commercepayments.SalesforceResultCodeInfo](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_class_commerce_payments_SalesforceResultCodeInfo "Stores Salesforce result code information from payment gateway adapters.")

Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

#### Return Value

Type: void