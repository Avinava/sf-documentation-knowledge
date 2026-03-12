---
title: "setGatewayResultCodeDescription(gatewayResultCodeDescription)"
domain: apex-reference
topic: setgatewayresultcodedescriptiongatewayresultcodedescription
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.143Z
estimatedTokens: 169
keywords: [setGatewayResultCodeDescription, gatewayResultCodeDescription, description, gateway-specific, result, code, payment, gateway, returned., Maximum, length, 1000, characters.]
---

# setGatewayResultCodeDescription(gatewayResultCodeDescription)

> Sets a description of the gateway-specific result code that a payment gateway returned.
    Maximum length of 1000 characters.

# setGatewayResultCodeDescription(gatewayResultCodeDescription)

Sets a description of the gateway-specific result code that a payment gateway returned. Maximum length of 1000 characters.

## Signature

public void setGatewayResultCodeDescription(String gatewayResultCodeDescription)

## Parameters

gatewayResultCodeDescription

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Provides additional information about the result code and why the gateway returned the specific code. Descriptions will vary between different gateways.

## Return Value

Type: void

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
