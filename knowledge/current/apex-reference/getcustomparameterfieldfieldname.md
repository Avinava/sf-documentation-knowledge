---
title: "getCustomParameterField(fieldName)"
domain: apex-reference
topic: getcustomparameterfieldfieldname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.428Z
keywords: [getCustomParameterField, fieldName, Returns, custom, parameter, field, value, available, extension, context., Signature, Parameters, Return, Value]
---

# getCustomParameterField(fieldName)

> Returns a custom parameter field value, if available, for the extension context.

### getCustomParameterField(fieldName)

Returns a custom parameter field value, if available, for the extension context.

#### Signature

public static String getCustomParameterField(String fieldName)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Custom parameter field name.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Custom parameter field value for the extension context.