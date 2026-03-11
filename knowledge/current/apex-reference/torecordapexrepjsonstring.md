---
title: "toRecordApexRep(jsonString)"
domain: apex-reference
topic: torecordapexrepjsonstring
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.451Z
keywords: [toRecordApexRep, jsonString, Converts, JSON-formatted, string, RecordApexRepresentation, instance., method, parses, provided, JSON, constructs, structured, record, representation, used, embedded, logic., Signature, Parameters]
---

# toRecordApexRep(jsonString)

> Converts a JSON-formatted string into a RecordApexRepresentation instance. This method
    parses the provided JSON and constructs a structured record representation that can be used by
    embedded AI logic.

### toRecordApexRep(jsonString)

Converts a JSON-formatted string into a RecordApexRepresentation instance. This method parses the provided JSON and constructs a structured record representation that can be used by embedded AI logic.

#### Signature

public static embeddedai.RecordApexRepresentation toRecordApexRep(String jsonString)

#### Parameters

jsonString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The JSON-formatted string containing record data and related record information to be converted into a RecordApexRepresentation object.

#### Return Value

Type: embeddedai.RecordApexRepresentation

Returns a RecordApexRepresentation instance populated with the data parsed from the provided JSON string.