---
title: "Map Class"
domain: apex-reference
topic: map-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.463Z
keywords: [Map, Class, Returns, list, contains, values, map., Signature, Return, Value, Usage, Example]
---

# Map Class

> Returns a list that contains all the values in the map.

### values()

Returns a list that contains all the values in the map.

#### Signature

public List<Object\> values()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<Object>

#### Usage

The order of map elements is deterministic. You can rely on the order being the same in each subsequent execution of the same code. For example, suppose the values() method returns a list containing value1 and index 0 and value2 and index 1. Subsequent runs of the same code result in those values being returned in the same order.

#### Example

```

```