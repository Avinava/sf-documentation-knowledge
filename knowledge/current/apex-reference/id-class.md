---
title: "Id Class"
domain: apex-reference
topic: id-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.370Z
keywords: [Class, Converts, specified, String, returns, ID., valueOf, toID, Signature, Parameters, Return, Value, Example, Versioned, Behavior, Changes]
---

# Id Class

> Converts the specified String into an ID and returns the
ID.

### valueOf(toID)

Converts the specified String into an ID and returns the ID.

#### Signature

public static ID valueOf(String toID)

#### Parameters

toID

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [ID](#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Example

```

```

#### Versioned Behavior Changes

In API version 54.0 and later, assignment of an invalid 15 or 18 character ID to a variable results in a System.StringException exception.