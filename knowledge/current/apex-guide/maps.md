---
title: "Maps"
domain: apex-guide
topic: maps
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:34.624Z
estimatedTokens: 1234
keywords: [Maps, map, collection, key-value, pairs, where, unique, key, maps, single, value., Keys, values, any, data, type—primitive, types, collections, sObjects, user-defined]
---

# Maps

> A map is a collection of key-value pairs where each unique key maps to a single value.
    Keys and values can be any data type—primitive types, collections, sObjects, user-defined
    types, and built-in Apex types.

# Maps

A map is a collection of key-value pairs where each unique key maps to a single value. Keys and values can be any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types.

This table represents a map of countries and currencies:

| Country (Key) | 'United States' | 'Japan' | 'France' | 'England' | 'India' |
| --- | --- | --- | --- | --- | --- |
| Currency (Value) | 'Dollar' | 'Yen' | 'Euro' | 'Pound' | 'Rupee' |

Map keys and values can contain any collection, and can contain nested collections. For example, you can have a map of Integers to maps, which, in turn, map Strings to lists. Map keys can contain up to seven levels of nested collections, that is, up to eight levels overall.

To declare a map, use the Map keyword followed by the data types of the key and the value within <> characters. For example:

```

```

You can use the generic or specific sObject data types with maps. You can also create a generic instance of a map.

As with lists, you can populate map key-value pairs when the map is declared by using curly brace ({}) syntax. Within the curly braces, specify the key first, then specify the value for that key using \=>. For example:

```

```

In the first example, the value for the key a is b, and the value for the key c is D.

To access elements in a map, use the Map methods provided by Apex. This example creates a map of integer keys and string values. It adds two entries, checks for the existence of the first key, retrieves the value for the second entry, and finally gets the set of all keys.

```

```

For more information, including a complete list of all supported Map methods, see [Map Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_map.htm).

## Map Considerations

-   Unlike Java, Apex developers don’t need to reference the algorithm that is used to implement a map in their declarations (for example, HashMap or TreeMap). Apex uses a hash structure for all maps.
-   The iteration order of map elements is deterministic. You can rely on the order being the same in each subsequent execution of the same code. However, we recommend to always access map elements by key.
-   A map key can hold the null value.
-   Adding a map entry with a key that matches an existing key in the map overwrites the existing entry with that key with the new entry.
-   Map keys of type String are case-sensitive. Two keys that differ only by the case are considered unique and have corresponding distinct Map entries. Subsequently, the Map methods, including put, get, containsKey, and remove treat these keys as distinct.
-   Uniqueness of map keys of user-defined types is determined by the [equals and hashCode methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_collections_maps_keys_userdefined.htm), which you provide in your classes. Uniqueness of keys of all other non-primitive types, such as sObject keys, is determined by comparing the objects’ field values. Use caution when you use an sObject as a map key because when the sObject is changed, it no longer maps to the same value. For information and examples, see [https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex\_map\_sobject\_considerations.htm](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_map_sobject_considerations.htm "HTML (New Window)")
-   A Map object is serializable into JSON only if it uses one of the following data types as a key.
    -   [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_boolean.htm)
    -   [Date](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_date.htm)
    -   [DateTime](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_datetime.htm)
    -   [Decimal](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_decimal.htm)
    -   [Double](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_double.htm)
    -   [Enum](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_enum.htm)
    -   [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_id.htm)
    -   [Integer](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_integer.htm)
    -   [Long](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_long.htm)
    -   [String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_string.htm)
    -   [Time](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_time.htm)

## Code Examples

```apex
Map<String, String> country_currencies = new Map<String, String>();
Map<ID, Set<String>> m = new Map<ID, Set<String>>();
```

```apex
Map<String, String> MyStrings = new Map<String, String>{'a' => 'b', 'c' => 'd'.toUpperCase()};
```

```apex
Map<Integer, String> m = new Map<Integer, String>(); // Define a new map
m.put(1, 'First entry');                  // Insert a new key-value pair in the map
m.put(2, 'Second entry');                  // Insert a new key-value pair in the map
System.assert(m.containsKey(1));  // Assert that the map contains a key
String value = m.get(2);               // Retrieve a value, given a particular key
System.assertEquals('Second entry', value);
Set<Integer> s = m.keySet();       // Return a set that contains all of the keys in the map
```
