---
title: "Lists"
domain: apex-guide
topic: lists
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:48.018Z
keywords: [Lists, Array, Notation, One-Dimensional]
---

# Lists

# Lists

A list is an ordered collection of elements that are distinguished by their indices. List elements can be of any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types.

This table is a visual representation of a list of Strings:

| Index 0 | Index 1 | Index 2 | Index 3 | Index 4 | Index 5 |
| --- | --- | --- | --- | --- | --- |
| 'Red' | 'Orange' | 'Yellow' | 'Green' | 'Blue' | 'Purple' |

The index position of the first element in a list is always 0.

Lists can contain any collection and can be nested within one another and become multidimensional. For example, you can have a list of lists of sets of Integers. A list can contain up to seven levels of nested collections inside it, that is, up to eight levels overall.

To declare a list, use the List keyword followed by the primitive data, sObject, nested list, map, or set type within <> characters. For example:

```

```

To access elements in a list, use the List methods provided by Apex. For example:

```

```

For more information, including a complete list of all supported methods, see [List Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_list.htm).

## Using Array Notation for One-Dimensional Lists

When using one-dimensional lists of primitives or objects, you can also use more traditional array notation to declare and reference list elements. For example, you can declare a one-dimensional list of primitives or objects by following the data type name with the \[\] characters:

```

```

These two statements are equivalent to the previous:

```

```

```

```

To reference an element of a one-dimensional list, you can also follow the name of the list with the element's index position in square brackets. For example:

```

```

Even though the size of the previous String array is defined as one element (the number between the brackets in new String\[1\]), lists are elastic and can grow as needed provided that you use the List add method to add new elements. For example, you can add two or more elements to the colors list. But if you’re using square brackets to add an element to a list, the list behaves like an array and isn’t elastic, that is, you won’t be allowed to add more elements than the declared array size.

All lists are initialized to null. Lists can be assigned values and allocated memory using literal notation. For example:

| Example | Description |
| --- | --- |
| List<Integer> ints = new Integer[0]; | Defines an Integer list of size zero with no elements |
| List<Integer> ints = new Integer[6]; | Defines an Integer list with memory allocated for six Integers |

-   **[List Sorting](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_lists_sorting.htm)**  
    You can sort list elements and the sort order depends on the data type of the elements.