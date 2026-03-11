---
title: "PaymentMethodTokenizationResponse Class"
domain: apex-reference
topic: paymentmethodtokenizationresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.073Z
keywords: [PaymentMethodTokenizationResponse, Class, Sets, Salesforce-specific, result, code, information., Payment, gateways, many, response, codes, payment, calls., Salesforce, uses, information, map, gateway, predefined]
---

# PaymentMethodTokenizationResponse Class

> Sets the Salesforce-specific result code information. Payment
      gateways have many response codes for payment calls. Salesforce uses the result code
      information to map payment gateway codes to a predefined set of standard Salesforce result
      codes.

### setSalesforceResultCodeInfo(salesforceResultCodeInfo)

Sets the Salesforce-specific result code information. Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

#### Signature

global void setSalesforceResultCodeInfo(commercepayments.SalesforceResultCodeInfo salesforceResultCodeInfo)

#### Parameters

salesforceResultCodeInfo

Type: [SalesforceResultCodeInfo](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_class_commerce_payments_SalesforceResultCodeInfo "Stores Salesforce result code information from payment gateway adapters.")

Description of the Salesforce result code value.

#### Return Value

Type: void