---
title: "getErrorMessage()"
domain: apex-reference
topic: geterrormessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:26.360Z
estimatedTokens: 107
keywords: [getErrorMessage, error, message, Usage]
---

# getErrorMessage()

> Returns a String that contains an error
message.

# getErrorMessage()

Returns a String that contains an error message.

## Signature

public String getErrorMessage()

## Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Usage

The error message doesn’t make a round trip through a Visualforce view state, because exceptions can’t be serialized.

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
