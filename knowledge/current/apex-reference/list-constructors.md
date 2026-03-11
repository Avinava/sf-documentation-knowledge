---
title: "List Constructors"
domain: apex-reference
topic: list-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.435Z
keywords: [List, Constructors, Creates, new, instance, class., list, hold, elements, any, data, type, List<T>, Signature, Example, listToCopy, Parameters, setToCopy]
---

# List Constructors

> Creates a new instance of the List class. A list can hold elements of any data type T.

## List Constructors

The following are constructors for List.

-   **[List<T>()](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_ctor_2)**  
    Creates a new instance of the List class. A list can hold elements of any data type T.
-   **[List<T>(listToCopy)](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_ctor)**  
    Creates a new instance of the List class by copying the elements from the specified list. T is the data type of the elements in both lists and can be any data type.
-   **[List<T>(setToCopy)](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_ctor_3)**  
    Creates a new instance of the List class by copying the elements from the specified set. T is the data type of the elements in the set and list and can be any data type.

### List<T>()

Creates a new instance of the List class. A list can hold elements of any data type T.

#### Signature

public List<T>()

#### Example

```

```

### List<T>(listToCopy)

Creates a new instance of the List class by copying the elements from the specified list. T is the data type of the elements in both lists and can be any data type.

#### Signature

public List<T>(List<T> listToCopy)

#### Parameters

listToCopy

Type: List<T>

The list containing the elements to initialize this list from. T is the data type of the list elements.

#### Example

```

```

### List<T>(setToCopy)

Creates a new instance of the List class by copying the elements from the specified set. T is the data type of the elements in the set and list and can be any data type.

#### Signature

public List<T>(Set<T> setToCopy)

#### Parameters

setToCopy

Type: Set<T>

The set containing the elements to initialize this list with. T is the data type of the set elements.

#### Example

```

```