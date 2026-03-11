---
title: "AlternativePaymentMethodRequest(gatewayToken)"
domain: apex-reference
topic: alternativepaymentmethodrequestgatewaytoken
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.817Z
keywords: [AlternativePaymentMethodRequest, gatewayToken, Creates, new, instance, CommercePayments.AlternativePaymentMethodRequest, class., Signature, Parameters]
---

# AlternativePaymentMethodRequest(gatewayToken)

> Creates a new instance of the CommercePayments.AlternativePaymentMethodRequest class.

### AlternativePaymentMethodRequest(gatewayToken)

Creates a new instance of the CommercePayments.AlternativePaymentMethodRequest class.

#### Signature

public AlternativePaymentMethodRequest(String gatewayToken)

#### Parameters

gatewayToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A unique, alphanumeric ID, called a token, that a payment gateway generates when it first processes a payment. The token replaces the actual payment data so that the data is kept secure. This token is stored as encrypted text, and can be used for recurring payments.