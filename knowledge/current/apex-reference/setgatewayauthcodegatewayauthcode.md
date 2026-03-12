---
title: "setGatewayAuthCode(gatewayAuthCode)"
domain: apex-reference
topic: setgatewayauthcodegatewayauthcode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.123Z
estimatedTokens: 118
keywords: [setGatewayAuthCode, gatewayAuthCode, authorization, code, gateway, returned., Maximum, length, characters.]
---

# setGatewayAuthCode(gatewayAuthCode)

> Sets the authorization code that the gateway returned. Maximum
      length of 64 characters.

# setGatewayAuthCode(gatewayAuthCode)

Sets the authorization code that the gateway returned. Maximum length of 64 characters.

## Signature

global void setGatewayAuthCode(String gatewayAuthCode)

## Parameters

gatewayAuthCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The authorization code returned by the gateway.

## Return Value

Type: void

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
