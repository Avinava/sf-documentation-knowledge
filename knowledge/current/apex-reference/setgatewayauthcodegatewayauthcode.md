---
title: "setGatewayAuthCode(gatewayAuthCode)"
domain: apex-reference
topic: setgatewayauthcodegatewayauthcode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.656Z
keywords: [setGatewayAuthCode, gatewayAuthCode, Signature, Parameters, Return, Value]
---

# setGatewayAuthCode(gatewayAuthCode)

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