---
title: "Set Methods"
domain: apex-reference
topic: set-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.609Z
keywords: [Set, Methods, Adds, element, set, already, present., add, setElement, Signature, Parameters, Return, Value, Usage, addAll, fromList, fromSet, Example, clear, clone]
---

# Set Methods

> Adds an element to the set if it is not already present.

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