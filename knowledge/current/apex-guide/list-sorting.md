---
title: "List Sorting"
domain: apex-guide
topic: list-sorting
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:48.022Z
keywords: [List, Sorting, Default, Sort, Order, SelectOption]
---

# List Sorting

# List Sorting

You can sort list elements and the sort order depends on the data type of the elements.

Using the List.sort method, you can sort elements in a list. Sorting is in ascending order for elements of primitive data types, such as strings. The sort order of other more complex data types is described in the chapters covering those data types.

You can sort custom types (your Apex classes) if they implement the Comparable interface. Alternatively, a class implementing the Comparator interface can be passed as a parameter to the List.sort method. For more information on the sort order used for sObjects, see [Sorting Lists of sObjects](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_list_sorting_sobject.htm).

This example shows how to sort a list of strings and verifies that the colors are in ascending order in the list.

```

```

For the Visualforce SelectOption control, sorting is in ascending order based on the value and label fields. See this next section for the sequence of comparison steps used for SelectOption.

## Default Sort Order for SelectOption

The List.sort method sorts SelectOption elements in ascending order using the value and label fields, and is based on this comparison sequence.

1.  The value field is used for sorting first.
2.  If two value fields have the same value or are both empty, the label field is used.

The disabled field isn’t used for sorting.

For text fields, the sort algorithm uses the Unicode sort order. Also, empty fields precede non-empty fields in the sort order.

In this example, a list contains three SelectOption elements. Two elements, United States and Mexico, have the same value field (‘A’). The List.sort method sorts these two elements based on the label field, and places Mexico before United States, as shown in the output. The last element in the sorted list is Canada and is sorted on its value field ‘C’, which comes after ‘A’.

```

```

The output of the debug statements shows the contents of the list, both before and after the sort.

```

```