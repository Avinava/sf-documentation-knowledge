---
title: "getHeaders()"
domain: apex-reference
topic: getheaders
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.045Z
keywords: [getHeaders, Signature, Return, Value, Usage]
---

# getHeaders()

# getHeaders()

Returns a map of the request headers, where the key string contains the name of the header, and the value string contains the value of the header.

## Signature

public Map<String, String\> getHeaders()

## Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

## Usage

This map can be modified and remains in scope for the PageReference object. For instance, you could do:

```

```

For a description of request headers, see [Request Headers](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm#RequestHeadersSection).