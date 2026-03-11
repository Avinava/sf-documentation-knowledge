---
title: "JSONToken Enum"
domain: apex-reference
topic: jsontoken-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.439Z
keywords: [JSONToken, Enum, Namespace]
---

# JSONToken Enum

# JSONToken Enum

Contains all token values used for parsing JSON content.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

| Enum Value | Description |
| --- | --- |
| END_ARRAY | The ending of an array value. This token is returned when ']' is encountered. |
| END_OBJECT | The ending of an object value. This token is returned when '}' is encountered. |
| FIELD_NAME | A string token that is a field name. |
| NOT_AVAILABLE | The requested token isn't available. |
| START_ARRAY | The start of an array value. This token is returned when '[' is encountered. |
| START_OBJECT | The start of an object value. This token is returned when '{' is encountered. |
| VALUE_EMBEDDED_OBJECT | An embedded object that isn't accessible as a typical object structure that includes the start and end object tokens START_OBJECT and END_OBJECT but is represented as a raw object. |
| VALUE_FALSE | The literal “false” value. |
| VALUE_NULL | The literal “null” value. |
| VALUE_NUMBER_FLOAT | A float value. |
| VALUE_NUMBER_INT | An integer value. |
| VALUE_STRING | A string value. |
| VALUE_TRUE | A value that corresponds to the “true” string literal. |