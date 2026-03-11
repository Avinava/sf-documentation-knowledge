---
title: "getInstance(developerName)"
domain: apex-reference
topic: getinstancedevelopername
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.935Z
keywords: [getInstance, developerName, Returns, single, custom, metadata, type, record, sObject, specified, field, object., null, matches, parameter., Signature, Parameters, Return, Value, Usage]
---

# getInstance(developerName)

> Returns a single custom metadata type record sObject for a specified developerName field
  of the custom metadata type object. Returns null if no record matches the parameter.

## getInstance(developerName)

Returns a single custom metadata type record sObject for a specified developerName field of the custom metadata type object. Returns null if no record matches the parameter.

### Signature

public CustomMetadataType\_\_mdt getInstance(String developerName)

### Parameters

developerName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### Return Value

Type: CustomMetadataType\_\_mdt

### Usage

Use this method to return a single custom metadata type record for the specified developerName. The developerName is the unique name of the custom metadata type object in the API. Only the first 255 characters of any field in a custom metadata type record are returned. Therefore, fields such as long text fields can be truncated. If you want all the field data from a custom metadata type record, use a SOQL query.

### Example

Returns a single record sObject for the custom metadata type named Games\_mdt with developerName specified as FirstRecord.

```

```