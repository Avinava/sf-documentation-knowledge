---
title: "Type Class"
domain: apex-reference
topic: type-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.002Z
keywords: [Type, Class, Returns, string, representation, current, type, which, name., toString, Signature, Return, Value, Usage, Example]
---

# Type Class

> Returns a string representation of the current type, which
is the type name.

### toString()

Returns a string representation of the current type, which is the type name.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method returns the same value as getName. String.valueOf and System.debug use this method to convert their Type argument into a String.

#### Example

This example calls toString on the Type corresponding to a list of Integers.

```

```