---
title: "gatewayToken"
domain: apex-reference
topic: gatewaytoken
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.817Z
keywords: [gatewayToken, unique, alphanumeric, payment, gateway, generates, first, processes, payment., Signature, Property, Value]
---

# gatewayToken

> A unique, alphanumeric ID, that a payment gateway generates when it first processes a
    payment.

### gatewayToken

A unique, alphanumeric ID, that a payment gateway generates when it first processes a payment.

The token replaces the actual payment data so that the data is kept secure. This token is stored as encrypted text, and can be used for recurring payments.

#### Signature

public String gatewayToken {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")