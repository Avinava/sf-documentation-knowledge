---
title: "ApexMap(key, value)"
domain: apex-reference
topic: apexmapkey-value
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.444Z
keywords: [ApexMap, key, value, Initializes, new, instance, class, assigning, specified, value., constructor, creates, single, key–value, entry, included, embedded, Apex, map, passing]
---

# ApexMap(key, value)

> Initializes a new instance of the ApexMap class by assigning the specified key and value.
    This constructor creates a single key–value entry that can be included in an embedded AI Apex
    map for passing contextual data to embedded AI logic.

### ApexMap(key, value)

Initializes a new instance of the ApexMap class by assigning the specified key and value. This constructor creates a single key–value entry that can be included in an embedded AI Apex map for passing contextual data to embedded AI logic.

#### Signature

public ApexMap(String key, String value)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique identifier for an entry in the embedded AI Apex map. This key references and retrieves the associated value during embedded AI processing.

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The data associated with the specified key in the embedded AI Apex map. This value stores the contextual information consumed by embedded AI logic.