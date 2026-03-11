---
title: "Sets"
domain: apex-guide
topic: sets
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:48.034Z
keywords: [Sets]
---

# Sets

# Sets

A set is an unordered collection of elements that do not contain any duplicates. Set elements can be of any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types.

This table represents a set of strings that uses city names:

| 'San Francisco' | 'New York' | 'Paris' | 'Tokyo' |
| --- | --- | --- | --- |

Sets can contain collections that can be nested within one another. For example, you can have a set of lists of sets of Integers. A set can contain up to seven levels of nested collections inside it, that is, up to eight levels overall.

To declare a set, use the Set keyword followed by the primitive data type name within <> characters. For example:

```

```

The following example shows how to create a set with two hardcoded string values.

```

```

To access elements in a set, use the system methods provided by Apex. For example:

```

```

The following example shows how to create a set from elements of another set.

```

```

For more information, including a complete list of all supported set system methods, see [Set Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_set.htm).

Note the following limitations on sets:

-   Unlike Java, Apex developers do not need to reference the algorithm that is used to implement a set in their declarations (for example, HashSet or TreeSet). Apex uses a hash structure for all sets.
-   A set is an unordered collection—you can’t access a set element at a specific index. You can only iterate over set elements.
-   The iteration order of set elements is deterministic, so you can rely on the order being the same in each subsequent execution of the same code.