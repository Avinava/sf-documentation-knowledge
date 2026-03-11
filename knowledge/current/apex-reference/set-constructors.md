---
title: "Set Constructors"
domain: apex-reference
topic: set-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.609Z
keywords: [Set, Constructors, Creates, new, instance, class., set, hold, elements, any, data, type, Set<T>, Signature, Example, setToCopy, Parameters, listToCopy]
---

# Set Constructors

> Creates a new instance of the Set class. A set can hold elements of any data type T.

## Set Constructors

The following are constructors for Set.

-   **[Set<T>()](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_ctor_3)**  
    Creates a new instance of the Set class. A set can hold elements of any data type T.
-   **[Set<T>(setToCopy)](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_ctor_2)**  
    Creates a new instance of the Set class by copying the elements of the specified set. T is the data type of the elements in both sets and can be any data type.
-   **[Set<T>(listToCopy)](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_ctor)**  
    Creates a new instance of the Set class by copying the list elements. T is the data type of the elements in the set and list and can be any data type.

### Set<T>()

Creates a new instance of the Set class. A set can hold elements of any data type T.

#### Signature

public Set<T>()

#### Example

```

```

### Set<T>(setToCopy)

Creates a new instance of the Set class by copying the elements of the specified set. T is the data type of the elements in both sets and can be any data type.

#### Signature

public Set<T>(Set<T> setToCopy)

#### Parameters

setToCopy

Type: Set<T>

The set to initialize this set with.

#### Example

```

```

### Set<T>(listToCopy)

Creates a new instance of the Set class by copying the list elements. T is the data type of the elements in the set and list and can be any data type.

#### Signature

public Set<T>(List<T> listToCopy)

#### Parameters

listToCopy

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The list to copy the elements of into this set.

#### Example

```

```