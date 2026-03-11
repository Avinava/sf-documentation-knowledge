---
title: "setGatewayResultCode(gatewayResultCode)"
domain: apex-reference
topic: setgatewayresultcodegatewayresultcode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.666Z
keywords: [setGatewayResultCode, gatewayResultCode, Signature, Parameters, Return, Value]
---

# setGatewayResultCode(gatewayResultCode)

# setGatewayResultCode(gatewayResultCode)

Sets a gateway-specific result code. The code may be mapped to a Salesforce-specific result code. Maximum length of 64 characters.

## Signature

public void setGatewayResultCode(String gatewayResultCode)

## Parameters

gatewayResultCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Gateway-specific result code. Must be used to map a Salesforce-specific result code.

## Return Value

Type: void