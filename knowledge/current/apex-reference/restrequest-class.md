---
title: "RestRequest Class"
domain: apex-reference
topic: restrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.552Z
keywords: [RestRequest, Class, Adds, parameter, request, params, map, Apex, test., addParameter, name, value, Signature, Parameters, Return, Value, Usage]
---

# RestRequest Class

> Adds a parameter to the request params map in an Apex test.

### addParameter(name, value)

Adds a parameter to the request params map in an Apex test.

#### Signature

public Void addParameter(String name, String value)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

#### Usage

This method is intended for unit testing of Apex REST classes.