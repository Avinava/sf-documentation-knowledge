---
title: "setGatewayAvsCode(gatewayAvsCode)"
domain: apex-reference
topic: setgatewayavscodegatewayavscode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.657Z
keywords: [setGatewayAvsCode, gatewayAvsCode, Signature, Parameters, Return, Value]
---

# setGatewayAvsCode(gatewayAvsCode)

# setGatewayAvsCode(gatewayAvsCode)

Sets the AVS (address verification system) result code information that the gateway returned. Maximum length of 64 characters.

## Signature

public void setGatewayAvsCode(String gatewayAvsCode)

## Parameters

gatewayAvsCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Used to verify the address mapped to a payment method when the payments platform requests tokenization from the payment gateway.

## Return Value

Type: void