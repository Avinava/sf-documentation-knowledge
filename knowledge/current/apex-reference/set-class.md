---
title: "Set Class"
domain: apex-reference
topic: set-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.999Z
estimatedTokens: 4316
namespace: System
keywords: [Set, Represents, collection, unique, elements, duplicate, values., Usage, Note, Set<T>, Example, setToCopy, listToCopy, add, setElement, addAll, fromList, fromSet, clear, clone]
---

# Set Class

> Represents a collection of unique elements with no duplicate values.

**Namespace:** `System`

# Set Class

Represents a collection of unique elements with no duplicate values.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

The Set methods work on a set, that is, an unordered collection of elements that was initialized using the set keyword. Set elements can be of any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types. Set methods are all instance methods, that is, they all operate on a particular instance of a Set. The following are the instance methods for sets.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

-   Uniqueness of set elements of user-defined types is determined by the [equals and hashCode methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_collections_maps_keys_userdefined.htm), which you provide in your classes. Uniqueness of all other non-primitive types is determined by comparing the objects’ fields.
-   If the set contains String elements, the elements are case-sensitive. Two set elements that differ only by case are considered distinct.

For more information on sets, see [Sets](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_collections_sets.htm).

-   **[Set Constructors](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_constructors)**

-   **[Set Methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_methods)**


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

## Set Methods

The following are methods for Set. All are instance methods.

-   **[add(setElement)](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_add)**
    Adds an element to the set if it is not already present.
-   **[addAll(fromList)](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_addAll)**
    Adds all of the elements in the specified list to the set if they are not already present.
-   **[addAll(fromSet)](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_addAll_2)**
    Adds all of the elements in the specified set to the set that calls the method if they are not already present.
-   **[clear()](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_clear)**
    Removes all of the elements from the set.
-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_clone)**
    Makes a duplicate copy of the set.
-   **[contains(setElement)](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_contains)**
    Returns true if the set contains the specified element.
-   **[containsAll(listToCompare)](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_containsAll)**
    Returns true if the set contains all of the elements in the specified list. The list must be of the same type as the set that calls the method.
-   **[containsAll(setToCompare)](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_containsAll_2)**
    Returns true if the set contains all of the elements in the specified set. The specified set must be of the same type as the original set that calls the method.
-   **[equals(set2)](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_equals)**
    Compares this set with the specified set and returns true if both sets are equal; otherwise, returns false.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_hashCode)**
    Returns the hashcode corresponding to this set and its contents.
-   **[isEmpty()](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_isEmpty)**
    Returns true if the set has zero elements.
-   **[remove(setElement)](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_remove)**
    Removes the specified element from the set if it is present.
-   **[removeAll(listOfElementsToRemove)](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_removeAll)**
    Removes the elements in the specified list from the set if they are present.
-   **[removeAll(setOfElementsToRemove)](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_removeAll_2)**
    Removes the elements in the specified set from the original set if they are present.
-   **[retainAll(listOfElementsToRetain)](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_retainAll)**
    Retains only the elements in this set that are contained in the specified list.
-   **[retainAll(setOfElementsToRetain)](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_retainAll_2)**
    Retains only the elements in the original set that are contained in the specified set.
-   **[size()](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_size)**
    Returns the number of elements in the set (its cardinality).
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_System_Set_toString)**
    Returns the string representation of the set.

### add(setElement)

Adds an element to the set if it is not already present.

#### Signature

public Boolean add(Object setElement)

#### Parameters

setElement

Type: Object

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

This method returns true if the original set changed as a result of the call. For example:

```

```

### addAll(fromList)

Adds all of the elements in the specified list to the set if they are not already present.

#### Signature

public Boolean addAll(List<Object\> fromList)

#### Parameters

fromList

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Returns true if the original set changed as a result of the call.

#### Usage

This method results in the *union* of the list and the set. The list must be of the same type as the set that calls the method.

### addAll(fromSet)

Adds all of the elements in the specified set to the set that calls the method if they are not already present.

#### Signature

public Boolean addAll(Set<Object\> fromSet)

#### Parameters

fromSet

Type: [Set](#apex_methods_system_set "Represents a collection of unique elements with no duplicate values.")<Object>

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

This method returns true if the original set changed as a result of the call.

#### Usage

This method results in the *union* of the two sets. The specified set must be of the same type as the original set that calls the method.

#### Example

```

```

### clear()

Removes all of the elements from the set.

#### Signature

public Void clear()

#### Return Value

Type: Void

### clone()

Makes a duplicate copy of the set.

#### Signature

public Set<Object\> clone()

#### Return Value

Type: [Set](#apex_methods_system_set "Represents a collection of unique elements with no duplicate values.") (of same type)

### contains(setElement)

Returns true if the set contains the specified element.

#### Signature

public Boolean contains(Object setElement)

#### Parameters

setElement

Type: Object

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### containsAll(listToCompare)

Returns true if the set contains all of the elements in the specified list. The list must be of the same type as the set that calls the method.

#### Signature

public Boolean containsAll(List<Object\> listToCompare)

#### Parameters

listToCompare

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<Object>

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### containsAll(setToCompare)

Returns true if the set contains all of the elements in the specified set. The specified set must be of the same type as the original set that calls the method.

#### Signature

public Boolean containsAll(Set<Object\> setToCompare)

#### Parameters

setToCompare

Type: [Set](#apex_methods_system_set "Represents a collection of unique elements with no duplicate values.")<Object>

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### equals(set2)

Compares this set with the specified set and returns true if both sets are equal; otherwise, returns false.

#### Signature

public Boolean equals(Set<Object\> set2)

#### Parameters

set2

Type: [Set](#apex_methods_system_set "Represents a collection of unique elements with no duplicate values.")<Object>

The set2 argument is the set to compare this set with.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Two sets are equal if their elements are equal, regardless of their order. The \== operator is used to compare the elements of the sets.

The \== operator is equivalent to calling the equals method, so you can call set1.equals(set2); instead of set1 == set2;.

### hashCode()

Returns the hashcode corresponding to this set and its contents.

#### Signature

public Integer hashCode()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### isEmpty()

Returns true if the set has zero elements.

#### Signature

public Boolean isEmpty()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### remove(setElement)

Removes the specified element from the set if it is present.

#### Signature

public Boolean remove(Object setElement)

#### Parameters

setElement

Type: Object

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Returns true if the original set changed as a result of the call.

### removeAll(listOfElementsToRemove)

Removes the elements in the specified list from the set if they are present.

#### Signature

public Boolean removeAll(List<Object\> listOfElementsToRemove)

#### Parameters

listOfElementsToRemove

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<Object>

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Returns true if the original set changed as a result of the call.

#### Usage

This method results in the relative complement of the two sets. The list must be of the same type as the set that calls the method.

#### Example

```

```

### removeAll(setOfElementsToRemove)

Removes the elements in the specified set from the original set if they are present.

#### Signature

public Boolean removeAll(Set<Object\> setOfElementsToRemove)

#### Parameters

setOfElementsToRemove

Type: [Set](#apex_methods_system_set "Represents a collection of unique elements with no duplicate values.")<Object>

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

This method returns true if the original set changed as a result of the call.

#### Usage

This method results in the relative complement of the two sets. The specified set must be of the same type as the original set that calls the method.

### retainAll(listOfElementsToRetain)

Retains only the elements in this set that are contained in the specified list.

#### Signature

public Boolean retainAll(List<Object\> listOfElementsToRetain)

#### Parameters

listOfElementsToRetain

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<Object>

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

This method returns true if the original set changed as a result of the call.

#### Usage

This method results in the *intersection* of the list and the set. The list must be of the same type as the set that calls the method.

#### Example

```

```

### retainAll(setOfElementsToRetain)

Retains only the elements in the original set that are contained in the specified set.

#### Signature

public Boolean retainAll(Set setOfElementsToRetain)

#### Parameters

setOfElementsToRetain

Type: [Set](#apex_methods_system_set "Represents a collection of unique elements with no duplicate values.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Returns true if the original set changed as a result of the call.

#### Usage

This method results in the *intersection* of the two sets. The specified set must be of the same type as the original set that calls the method.

### size()

Returns the number of elements in the set (its cardinality).

#### Signature

public Integer size()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

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

## Code Examples

```
// Create a set of strings
Set<String> s1 = new Set<String>();
// Add two strings to it
s1.add('item1');
s1.add('item2');
```

```apex
Set<String> s1 = new Set<String>();
s1.add('item1');
s1.add('item2');
Set<String> s2 = new Set<String>(s1);
// The set elements in s2 are copied from s1
System.debug(s2);
```

```apex
List<Integer> ls = new List<Integer>();
ls.add(1);
ls.add(2);
// Create a set based on a list
Set<Integer> s1 = new Set<Integer>(ls);
// Elements are copied from the list to this set
System.debug(s1);// DEBUG|{1, 2}
```

```apex
Set<String> myString = new Set<String>{'a', 'b', 'c'};
Boolean result = myString.add('d');
System.assertEquals(true, result);
```

```apex
Set<String> myString = new Set<String>{'a', 'b'};
Set<String> sString = new Set<String>{'c'};

Boolean result1 = myString.addAll(sString);
System.assertEquals(true, result1);
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- Set Constructors (atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm)
- Set Methods (atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm)
- Set<T>() (atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm)
- Set<T>(setToCopy) (atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm)
- Set<T>(listToCopy) (atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- add(setElement) (atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm)
- addAll(fromList) (atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm)
- addAll(fromSet) (atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm)
