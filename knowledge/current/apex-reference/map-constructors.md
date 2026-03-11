---
title: "Map Constructors"
domain: apex-reference
topic: map-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.463Z
keywords: [Map, Constructors, Creates, new, instance, class., data, type, keys, values., Map<T1, T2>, Signature, Example, mapToCopy, Parameters, Map<ID, sObject>, recordList]
---

# Map Constructors

> Creates a new instance of the Map class. T1 is the data type of the keys and T2 is the
data type of the values.

## Map Constructors

The following are constructors for Map.

-   **[Map<T1,T2>()](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_ctor_3)**  
    Creates a new instance of the Map class. T1 is the data type of the keys and T2 is the data type of the values.
-   **[Map<T1,T2>(mapToCopy)](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_ctor_2)**  
    Creates a new instance of the Map class and initializes it by copying the entries from the specified map. T1 is the data type of the keys and T2 is the data type of the values.
-   **[Map<ID,sObject>(recordList)](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_ctor)**  
    Creates a new instance of the Map class and populates it with the passed-in list of sObject records. The keys are populated with the sObject IDs and the values are the sObjects.

### Map<T1,T2>()

Creates a new instance of the Map class. T1 is the data type of the keys and T2 is the data type of the values.

#### Signature

public Map<T1,T2>()

#### Example

```

```

### Map<T1,T2>(mapToCopy)

Creates a new instance of the Map class and initializes it by copying the entries from the specified map. T1 is the data type of the keys and T2 is the data type of the values.

#### Signature

public Map<T1,T2>(Map<T1,T2> mapToCopy)

#### Parameters

mapToCopy

Type: Map<T1, T2>

The map to initialize this map with. T1 is the data type of the keys and T2 is the data type of the values. All map keys and values are copied to this map.

#### Example

```

```

### Map<ID,sObject>(recordList)

Creates a new instance of the Map class and populates it with the passed-in list of sObject records. The keys are populated with the sObject IDs and the values are the sObjects.

#### Signature

public Map<ID,sObject>(List<sObject> recordList)

#### Parameters

recordList

Type: List<sObject>

The list of sObjects to populate the map with.

#### Example

```

```