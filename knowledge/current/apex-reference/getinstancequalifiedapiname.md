---
title: "getInstance(qualifiedApiName)"
domain: apex-reference
topic: getinstancequalifiedapiname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.935Z
keywords: [getInstance, qualifiedApiName, Returns, single, custom, metadata, type, record, sObject, qualified, API, name., null, matches, parameter., Signature, Parameters, Return, Value, Usage]
---

# getInstance(qualifiedApiName)

> Returns a single custom metadata type record sObject for a qualified API name. Returns
    null if no record matches the parameter.

## getInstance(qualifiedApiName)

Returns a single custom metadata type record sObject for a qualified API name. Returns null if no record matches the parameter.

### Signature

public CustomMetadataType\_\_mdt getInstance(String qualifiedApiName)

### Parameters

qualifiedApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### Return Value

Type: CustomMetadataType\_\_mdt

### Usage

Use this method to return a single custom metadata type record for the specified qualifiedApiName. The qualifiedApiName is a concatenation of the namespace prefix and developerName, and has this format: namespacePrefix\_\_developerName. The developerName is the unique name of the custom metadata type object in the API. Only the first 255 characters of any field in a custom metadata type record are returned. Therefore, fields such as long text fields can be truncated. If you want all the field data from a custom metadata type record, use a SOQL query.

### Example

This sample returns a single record sObject for the custom metadata type named Games\_mdt with qualifiedApiName specified as MyNamespace\_\_FirstRecord.

```

```