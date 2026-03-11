---
title: "Map Methods"
domain: apex-reference
topic: map-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.463Z
keywords: [Map, Methods, Removes, key-value, mappings, map., clear, Signature, Return, Value, clone, Usage, Example, containsKey, key, Parameters, deepClone, equals, map2, get]
---

# Map Methods

> Removes all of the key-value mappings from the map.

## Map Methods

The following are methods for Map. All are instance methods.

-   **[clear()](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_clear)**  
    Removes all of the key-value mappings from the map.
-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_clone)**  
    Makes a duplicate copy of the map.
-   **[containsKey(key)](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_containsKey)**  
    Returns true if the map contains a mapping for the specified key.
-   **[deepClone()](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_deepClone)**  
    Makes a duplicate copy of a map, including sObject records if this is a map with sObject record values.
-   **[equals(map2)](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_equals)**  
    Compares this map with the specified map and returns true if both maps are equal; otherwise, returns false.
-   **[get(key)](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_get)**  
    Returns the value to which the specified key is mapped, or null if the map contains no value for this key.
-   **[getSObjectType()](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_getSObjectType)**  
    Returns the token of the sObject type that makes up the map values.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_hashCode)**  
    Returns the hashcode corresponding to this map.
-   **[isEmpty()](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_isEmpty)**  
    Returns true if the map has zero key-value pairs.
-   **[keySet()](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_keySet)**  
    Returns a set that contains all of the keys in the map.
-   **[put(key, value)](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_put)**  
    Associates the specified value with the specified key in the map.
-   **[putAll(fromMap)](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_putAll)**  
    Copies all of the mappings from the specified map to the original map.
-   **[putAll(sobjectArray)](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_putAll_2)**  
    Adds the list of sObject records to a map declared as Map<ID, sObject> or Map<String, sObject>.
-   **[remove(key)](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_remove)**  
    Removes the mapping for the specified key from the map, if present, and returns the corresponding value.
-   **[size()](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_size)**  
    Returns the number of key-value pairs in the map.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_toString)**  
    Returns the string representation of the map.
-   **[values()](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_values)**  
    Returns a list that contains all the values in the map.

### clear()

Removes all of the key-value mappings from the map.

#### Signature

public Void clear()

#### Return Value

Type: Void

### clone()

Makes a duplicate copy of the map.

#### Signature

public Map<Object, Object\> clone()

#### Return Value

Type: [Map](#apex_methods_system_map "Contains methods for the Map collection type.") (of same type)

#### Usage

If this is a map with sObject record values, the duplicate map will only be a shallow copy of the map. That is, the duplicate will have references to each sObject record, but the records themselves are not duplicated. For example:

To also copy the sObject records, you must use the deepClone method.

#### Example

```

```

### containsKey(key)

Returns true if the map contains a mapping for the specified key.

#### Signature

public Boolean containsKey(Object key)

#### Parameters

key

Type: Object

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If the key is a string, the key value is case-sensitive.

#### Example

```

```

### deepClone()

Makes a duplicate copy of a map, including sObject records if this is a map with sObject record values.

#### Signature

public Map<Object, Object\> deepClone()

#### Return Value

Type: [Map](#apex_methods_system_map "Contains methods for the Map collection type.") (of the same type)

#### Usage

To make a shallow copy of a map without duplicating the sObject records it contains, use the clone() method.

#### Example

```

```

### equals(map2)

Compares this map with the specified map and returns true if both maps are equal; otherwise, returns false.

#### Signature

public Boolean equals(Map map2)

#### Parameters

map2

Type: [Map](#apex_methods_system_map "Contains methods for the Map collection type.")

The map2 argument is the map to compare this map with.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Two maps are equal if their key/value pairs are identical, regardless of the order of those pairs. The \== operator is used to compare the map keys and values.

The \== operator is equivalent to calling the equals method, so you can call map1.equals(map2); instead of map1 == map2;.

### get(key)

Returns the value to which the specified key is mapped, or null if the map contains no value for this key.

#### Signature

public Object get(Object key)

#### Parameters

key

Type: Object

#### Return Value

Type: Object

#### Usage

If the key is a string, the key value is case-sensitive.

#### Example

```

```

### getSObjectType()

Returns the token of the sObject type that makes up the map values.

#### Signature

public Schema.SObjectType getSObjectType()

#### Return Value

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

#### Usage

Use this method with describe information, to determine if a map contains sObjects of a particular type.

Note that this method can only be used with maps that have sObject values.

For more information, see [Understanding Apex Describe Information](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_describe_objects_understanding.htm).

#### Example

```

```

### hashCode()

Returns the hashcode corresponding to this map.

#### Signature

public Integer hashCode()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### isEmpty()

Returns true if the map has zero key-value pairs.

#### Signature

public Boolean isEmpty()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### keySet()

Returns a set that contains all of the keys in the map.

#### Signature

public Set<Object\> keySet()

#### Return Value

Type: [Set](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_methods_system_set "Represents a collection of unique elements with no duplicate values.") (of key type)

The returned keySet is backed by the map, so the keySet reflects any changes made to the map, and vice-versa.

#### Example

```

```

### put(key, value)

Associates the specified value with the specified key in the map.

#### Signature

public Object put(Object key, Object value)

#### Parameters

key

Type: Object

value

Type: Object

#### Return Value

Type: Object

#### Usage

If the map previously contained a mapping for this key, the old value is returned by the method and then replaced.

If the key is a string, the key value is case-sensitive.

#### Example

```

```

### putAll(fromMap)

Copies all of the mappings from the specified map to the original map.

#### Signature

public Void putAll(Map fromMap)

#### Parameters

fromMap

Type: [Map](#apex_methods_system_map "Contains methods for the Map collection type.")

#### Return Value

Type: Void

#### Usage

The new mappings from fromMap are merged with any mappings that existed in the original map. If any of the keys match, the original map values are replaced by corresponding values in the new mapping.

#### Example

```

```

### putAll(sobjectArray)

Adds the list of sObject records to a map declared as Map<ID, sObject> or Map<String, sObject>.

#### Signature

public Void putAll(sObject\[\] sobjectArray)

#### Parameters

sobjectArray

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\[\]

#### Return Value

Type: Void

#### Usage

This method is similar to calling the Map constructor with the same input.

#### Example

```

```

### remove(key)

Removes the mapping for the specified key from the map, if present, and returns the corresponding value.

#### Signature

public Object remove(Key key)

#### Parameters

key

Type: Key

#### Return Value

Type: Object

#### Usage

If the key is a string, the key value is case-sensitive.

#### Example

```

```

### size()

Returns the number of key-value pairs in the map.

#### Signature

public Integer size()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### toString()

Returns the string representation of the map.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

When used in cyclic references, the output is truncated to prevent infinite recursion. When used with large collections, the output is truncated to avoid exceeding total heap size and maximum CPU time.

-   Up to 10 items per collection are included in the output, followed by an ellipsis (…).
-   If the same object is included multiple times in a collection, it’s shown in the output only once; subsequent references are shown as (already output).

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