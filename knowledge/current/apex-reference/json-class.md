---
title: "JSON Class"
domain: apex-reference
topic: json-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.428Z
keywords: [JSON, Class, Suppresses, null, values, serializing, Apex, objects, content, generates, indented, pretty-print, format., serializePretty, objectToSerialize, suppressApexObjectNulls, Signature, Parameters, Note, Return]
---

# JSON Class

> Suppresses null values when
         serializing Apex objects into JSON content and generates indented content using the
         pretty-print format.

### serializePretty(objectToSerialize, suppressApexObjectNulls)

Suppresses null values when serializing Apex objects into JSON content and generates indented content using the pretty-print format.

#### Signature

public static String serializePretty(Object objectToSerialize, Boolean suppressApexObjectNulls)

#### Parameters

objectToSerialize

Type: Object

The Apex object to serialize.

suppressApexObjectNulls

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If true, remove null values before serializing the JSON object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This parameter doesn’t apply to sObjects retrieved via SOQL.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")