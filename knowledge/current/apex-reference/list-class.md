---
title: "List Class"
domain: apex-reference
topic: list-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.863Z
estimatedTokens: 5210
namespace: System
keywords: [collection, Usage, List<T>, listToCopy, setToCopy, add, listElement, index, addAll, fromList, fromSet, clear, clone, deepClone, preserveId]
---

# List Class

> Contains methods for the List collection type.

**Namespace:** `System`

# List Class

Contains methods for the List collection type.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

The list methods are all instance methods, that is, they operate on a particular instance of a list. For example, the following removes all elements from myList:

```

```

Even though the clear method does not include any parameters, the list that calls it is its implicit parameter.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

-   When using a custom type for the list elements, provide an equals method in your class. Apex uses this method to determine equality and uniqueness for your objects. For more information on providing an equals method, see [Using Custom Types in Map Keys and Sets](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_collections_maps_keys_userdefined.htm).
-   If the list contains String elements, the elements are case-sensitive. Two list elements that differ only by case are considered distinct.

For more information on lists, see [Lists](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_collections_lists.htm).

-   **[List Constructors](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_constructors)**

-   **[List Methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_methods)**


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

## List Methods

The following are methods for List. All are instance methods.

-   **[add(listElement)](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_add)**
    Adds an element to the end of the list.
-   **[add(index, listElement)](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_add_2)**
    Inserts an element into the list at the specified index position and shifts all subsequent elements one index position to the right.
-   **[addAll(fromList)](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_addAll)**
    Adds all of the elements in the specified list to the list that calls the method. Both lists must be of the same type.
-   **[addAll(fromSet)](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_addAll_2)**
    Add all of the elements in specified set to the list that calls the method. The set and the list must be of the same type.
-   **[clear()](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_clear)**
    Removes all elements from a list, consequently setting the list's length to zero.
-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_clone)**
    Makes a duplicate copy of a list.
-   **[contains(listElement)](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_contains)**
    Returns true if the list contains the specified element.
-   **[deepClone(preserveId, preserveReadonlyTimestamps, preserveAutonumber)](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_deepClone)**
    Makes a duplicate copy of a list of sObject records, including the sObject records themselves.
-   **[equals(list2)](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_equals)**
    Compares this list with the specified list and returns true if both lists are equal; otherwise, returns false.
-   **[get(index)](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_get)**
    Returns the list element stored at the specified index.
-   **[getSObjectType()](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_getSObjectType)**
    Returns the token of the sObject type that makes up a list of sObjects.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_hashCode)**
    Returns the hashcode corresponding to this list and its contents.
-   **[indexOf(listElement)](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_indexOf)**
    Returns the index of the first occurrence of the specified element in this list. If this list does not contain the element, returns -1.
-   **[isEmpty()](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_isEmpty)**
    Returns true if the list has zero elements.
-   **[iterator()](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_iterator)**
    Returns an instance of an iterator for this list.
-   **[remove(index)](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_remove)**
    Removes the list element stored at the specified index, returning the element that was removed.
-   **[set(index, listElement)](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_set)**
    Sets the specified value for the element at the given index.
-   **[size()](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_size)**
    Returns the number of elements in the list.
-   **[sort()](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_sort)**
    Sorts the items in the list in ascending order.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_toString)**
    Returns the string representation of the list.

### add(listElement)

Adds an element to the end of the list.

#### Signature

public Void add(Object listElement)

#### Parameters

listElement

Type: Object

#### Return Value

Type: Void

#### Example

```

```

### add(index, listElement)

Inserts an element into the list at the specified index position and shifts all subsequent elements one index position to the right.

#### Signature

public Void add(Integer index, Object listElement)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

listElement

Type: Object

#### Return Value

Type: Void

#### Example

In this example, a list with six elements is created. Integers are added to the first and second index positions, and the subsequent elements are shifted to the right. After the two methods are called, the list has eight total elements.

```

```

### addAll(fromList)

Adds all of the elements in the specified list to the list that calls the method. Both lists must be of the same type.

#### Signature

public Void addAll(List fromList)

#### Parameters

fromList

Type: [List](#apex_methods_system_list "Contains methods for the List collection type.")

#### Return Value

Type: Void

### addAll(fromSet)

Add all of the elements in specified set to the list that calls the method. The set and the list must be of the same type.

#### Signature

public Void addAll(Set fromSet)

#### Parameters

fromSet

Type: [Set](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_methods_system_set "Represents a collection of unique elements with no duplicate values.")

#### Return Value

Type: Void

### clear()

Removes all elements from a list, consequently setting the list's length to zero.

#### Signature

public Void clear()

#### Return Value

Type: Void

### clone()

Makes a duplicate copy of a list.

#### Signature

public List<Object\> clone()

#### Return Value

Type: [List](#apex_methods_system_list "Contains methods for the List collection type.")<Object>

#### Usage

The cloned list is of the same type as the current list.

Note that if this is a list of sObject records, the duplicate list will only be a shallow copy of the list. That is, the duplicate will have references to each object, but the sObject records themselves will not be duplicated. For example:

To also copy the sObject records, you must use the deepClone method.

#### Example

```

```

### contains(listElement)

Returns true if the list contains the specified element.

#### Signature

public Boolean contains(Object listElement)

#### Parameters

listElement

Type: Object

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### deepClone(preserveId, preserveReadonlyTimestamps, preserveAutonumber)

Makes a duplicate copy of a list of sObject records, including the sObject records themselves.

#### Signature

public List<Object\> deepClone(Boolean preserveId, Boolean preserveReadonlyTimestamps, Boolean preserveAutonumber)

#### Parameters

preserveId

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

The optional preserveId argument determines whether the IDs of the original objects are preserved or cleared in the duplicates. If set to true, the IDs are copied to the cloned objects. The default is false, that is, the IDs are cleared.

preserveReadonlyTimestamps

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

The optional preserveReadonlyTimestamps argument determines whether the read-only timestamp and user ID fields are preserved or cleared in the duplicates. If set to true, the read-only fields CreatedById, CreatedDate, LastModifiedById, and LastModifiedDate are copied to the cloned objects. The default is false, that is, the values are cleared.

preserveAutonumber

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

The optional preserveAutonumber argument determines whether the autonumber fields of the original objects are preserved or cleared in the duplicates. If set to true, auto number fields are copied to the cloned objects. The default is false, that is, auto number fields are cleared.

#### Return Value

Type: [List](#apex_methods_system_list "Contains methods for the List collection type.")<Object>

#### Usage

The returned list is of the same type as the current list.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

-   deepClone only works with lists of sObjects, not with lists of primitives.
-   For Apex saved using Salesforce API version 22.0 or earlier, the default value for the preserve\_id argument is true, that is, the IDs are preserved.

To make a shallow copy of a list without duplicating the sObject records it contains, use the clone method.

#### Example

This example performs a deep clone for a list with two accounts.

```

```

This example is based on the previous example and shows how to clone a list with preserved read-only timestamp and user ID fields.

```

```

### equals(list2)

Compares this list with the specified list and returns true if both lists are equal; otherwise, returns false.

#### Signature

public Boolean equals(List list2)

#### Parameters

list2

Type: [List](#apex_methods_system_list "Contains methods for the List collection type.")

The list to compare this list with.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Two lists are equal if their elements are equal and are in the same order. The \== operator is used to compare the elements of the lists.

The \== operator is equivalent to calling the equals method, so you can call list1.equals(list2); instead of list1 == list2;.

### get(index)

Returns the list element stored at the specified index.

#### Signature

public Object get(Integer index)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: Object

#### Usage

To reference an element of a one-dimensional list of primitives or sObjects, you can also follow the name of the list with the element's index position in square brackets as shown in the example.

If the element referenced is out of bounds, this exception is thrown: System.ListException: List index is out of bounds.

#### Example

```

```

```

```

### getSObjectType()

Returns the token of the sObject type that makes up a list of sObjects.

#### Signature

public Schema.SObjectType getSObjectType()

#### Return Value

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

#### Usage

Use this method with describe information to determine if a list contains sObjects of a particular type.

Note that this method can only be used with lists that are composed of sObjects.

For more information, see [Understanding Apex Describe Information](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_describe_objects_understanding.htm).

#### Example

```

```

### hashCode()

Returns the hashcode corresponding to this list and its contents.

#### Signature

public Integer hashCode()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### indexOf(listElement)

Returns the index of the first occurrence of the specified element in this list. If this list does not contain the element, returns -1.

#### Signature

public Integer indexOf(Object listElement)

#### Parameters

listElement

Type: Object

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### isEmpty()

Returns true if the list has zero elements.

#### Signature

public Boolean isEmpty()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### iterator()

Returns an instance of an iterator for this list.

#### Signature

public Iterator iterator()

#### Return Value

Type: Iterator

#### Usage

From the returned iterator, you can use the iterable methods hasNext and next to iterate through the list.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

You don’t have to implement the iterable interface to use the iterable methods with a list.

See [Custom Iterators](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_iterable.htm).

#### Example

```

```

### remove(index)

Removes the list element stored at the specified index, returning the element that was removed.

#### Signature

public Object remove(Integer index)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: Object

#### Example

```

```

### set(index, listElement)

Sets the specified value for the element at the given index.

#### Signature

public Void set(Integer index, Object listElement)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index of the list element to set.

listElement

Type: Object

The value of the list element to set.

#### Return Value

Type: Void

#### Usage

To set an element of a one-dimensional list of primitives or sObjects, you can also follow the name of the list with the element's index position in square brackets.

#### Example

```

```

```

```

### size()

Returns the number of elements in the list.

#### Signature

public Integer size()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### sort()

Sorts the items in the list in ascending order.

#### Signature

public Void sort()

#### Return Value

Type: Void

#### Usage

Using this method, you can sort primitive types, SelectOption elements, and sObjects (standard objects and custom objects). For more information on the sort order used for sObjects, see [Sorting Lists of sObjects](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_list_sorting_sobject.htm). You can sort custom types (your Apex classes) if they implement the [Comparable](atlas.en-us.apexref.meta/apexref/apex_comparable.htm#apex_comparable "Adds sorting support for Lists that contain non-primitive types, that is, Lists of user-defined types. Your implementation must explicitly handle null inputs in the compareTo() method to avoid a null pointer exception.") interface. Alternatively, a class implementing the [Comparator](atlas.en-us.apexref.meta/apexref/apex_interface_System_Comparator.htm#apex_interface_System_Comparator "Implement different sort orders with the Comparator interface’s compare() method, and pass the Comparator as a parameter to List.sort(). Your implementation must explicitly handle null inputs in the compare() method to avoid a null pointer exception.") interface can be passed as a parameter to the List.sort method.

When you use sort() methods on List<Id>s that contain both 15-character and 18-character IDs, IDs for the same record sort together in API version 35.0 and later.

#### Example

In the following example, the list has three elements. When the list is sorted, the first element is null because it has no value assigned. The second element and third element have values of 5 and 10.

```

```

### toString()

Returns the string representation of the list.

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
myList.clear();
```

```apex
// Create a list
List<Integer> ls1 = new List<Integer>();
// Add two integers to the list
ls1.add(1);
ls1.add(2);
```

```apex
List<Integer> ls1 = new List<Integer>();
ls1.add(1);
ls1.add(2);
// Create a list based on an existing one
List<Integer> ls2 = new List<Integer>(ls1);
// ls2 elements are copied from ls1
System.debug(ls2);// DEBUG|(1, 2)
```

```apex
Set<Integer> s1 = new Set<Integer>();
s1.add(1);
s1.add(2);
// Create a list based on a set
List<Integer> ls = new List<Integer>(s1);
// ls elements are copied from s1
Assert.isTrue(ls.contains(2));
Assert.isTrue(ls.contains(1));
```

```apex
List<Integer> myList = new List<Integer>();
myList.add(47);
Integer myNumber = myList.get(0);
system.assertEquals(47, myNumber);
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- List Constructors (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- List Methods (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- List<T>() (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- List<T>(listToCopy) (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- List<T>(setToCopy) (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- add(listElement) (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- add(index, listElement) (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- addAll(fromList) (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- addAll(fromSet) (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
