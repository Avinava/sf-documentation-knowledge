---
title: "Set Class"
domain: apex-reference
topic: set-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.609Z
keywords: [Set, Class, Returns, string, representation, set., toString, Signature, Return, Value, Usage]
---

# Set Class

> Returns the string representation of the set.

### toString()

Returns the string representation of the set.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

When used in cyclic references, the output is truncated to prevent infinite recursion. When used with large collections, the output is truncated to avoid exceeding total heap size and maximum CPU time.

-   Up to 10 items per collection are included in the output, followed by an ellipsis (…).
-   If the same object is included multiple times in a collection, it’s shown in the output only once; subsequent references are shown as (already output).