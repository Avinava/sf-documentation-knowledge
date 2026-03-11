---
title: "fromString(str)"
domain: apex-reference
topic: fromstringstr
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.545Z
keywords: [fromString, str, Converts, character, hexadecimal, string, representation, UUID, instance., Signature, Parameters, Return, Value, Example]
---

# fromString(str)

> Converts a 32 character hexadecimal string representation of a UUID to a UUID
    instance.

### fromString(str)

Converts a 32 character hexadecimal string representation of a UUID to a UUID instance.

#### Signature

public static System.UUID fromString(String str)

#### Parameters

str

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: System.UUID

#### Example

String uuidStr = '707b2538-98bb-41e7-95e3-1d77bf42b102'; UUID fromStr = UUID.fromString(uuidStr); UUID.fromString(null); // Throws NullPointerException UUID.fromString(‘not a uuid’); // Throws IllegalArgumentException