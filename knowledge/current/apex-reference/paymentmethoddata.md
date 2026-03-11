---
title: "paymentMethodData"
domain: apex-reference
topic: paymentmethoddata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.145Z
keywords: [paymentMethodData, Payment, method, data, used, sale, request., Signature, Property, Value]
---

# paymentMethodData

> Payment method data used in the sale request.

### paymentMethodData

Payment method data used in the sale request.

This field is populated when SaleInput specifies a saved payment method. Accessible using paymentMethodData on SaleRequest. The map contains these fields from SavedPaymentMethod: GatewayToken, Type, GatewayReference, and StandardEntryCode for direct gateway interaction without querying the database.

#### Signature

public Map<String,String> paymentMethodData {get; set;}

#### Property Value

Type: Map<String,[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>