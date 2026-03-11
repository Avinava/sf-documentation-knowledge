---
title: "JSONGenerator Class"
domain: apex-reference
topic: jsongenerator-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.453Z
keywords: [JSONGenerator, Class, Writes, field, name, value, pair, specified, time, ISO-8601, format., writeTimeField, fieldName, timeValue, Signature, Parameters, Return, Value]
---

# JSONGenerator Class

> Writes a field name and value pair using the specified
field name and time value in the ISO-8601 format.

### writeTimeField(fieldName, timeValue)

Writes a field name and value pair using the specified field name and time value in the ISO-8601 format.

#### Signature

public Void writeTimeField(String fieldName, Time timeValue)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

timeValue

Type: [Time](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Return Value

Type: Void