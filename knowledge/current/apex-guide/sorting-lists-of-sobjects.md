---
title: "Sorting Lists of sObjects"
domain: apex-guide
topic: sorting-lists-of-sobjects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.289Z
keywords: [Sorting, Lists, sObjects, Default, Sort, Order, Custom, Example, See]
---

# Sorting Lists of sObjects

# Sorting Lists of sObjects

Using the List.sort method, you can sort lists of sObjects.

For sObjects, sorting is in ascending order and uses a sequence of comparison steps outlined in the next section. You can create a custom sort order for sObjects by wrapping your sObject in an Apex class that implements the Comparable interface. You can also create a custom sort order by passing a class that implements Comparator as a parameter to the sort method. See [Custom Sort Order of sObjects](#CustomSortSection).

## Default Sort Order of sObjects

The List.sort method sorts sObjects in ascending order and compares sObjects using an ordered sequence of steps that specify the labels or fields used. The comparison starts with the first step in the sequence and ends when two sObjects are sorted using specified labels or fields. The following is the comparison sequence used:

1.  The label of the sObject type.
    
    For example, an Account sObject appears before a Contact.
    
2.  The Name field, if applicable.
    
    For example, if the list contains two accounts named Alpha and Beta, account Alpha comes before account Beta.
    
3.  Standard fields, starting with the fields that come first in alphabetical order, except for the Id and Name fields.
    
    For example, if two accounts have the same name, the first standard field used for sorting is AccountNumber.
    
4.  Custom fields, starting with the fields that come first in alphabetical order.
    
    For example, suppose two accounts have the same name and identical standard fields, and there are two custom fields, FieldA and FieldB, the value of FieldA is used first for sorting.
    

Not all steps in this sequence are necessarily carried out. For example, a list containing two sObjects of the same type and with unique Name values is sorted based on the Name field and sorting stops at step 2. Otherwise, if the names are identical or the sObject doesn’t have a Name field, sorting proceeds to step 3 to sort by standard fields.

For text fields, the sort algorithm uses the Unicode sort order. Also, empty fields precede non-empty fields in the sort order.

Here’s an example of sorting a list of Account sObjects. This example shows how the Name field is used to place the Acme account ahead of the two sForce accounts in the list. Since there are two accounts named sForce, the Industry field is used to sort these remaining accounts because the Industry field comes before the Site field in alphabetical order.

```

```

This example is similar to the previous one, except that it uses the Merchandise\_\_c custom object. This example shows how the Name field is used to place the Notebooks merchandise ahead of Pens in the list. Because there are two merchandise sObjects with the Name field value of Pens, the Description field is used to sort these remaining merchandise items. The Description field is used for sorting because it comes before the Price and Total\_Inventory fields in alphabetical order.

```

```

## Custom Sort Order of sObjects

To create a custom sort order for sObjects in lists, implement the Comparator interface and pass it as a parameter to the List.sort method.

Alternatively, create a wrapper class for the sObject and implement the Comparable interface. The wrapper class contains the sObject in question and implements the Comparable.compareTo method in which you specify the sort logic.

## Example

This example implements the Comparator interface to compare two opportunities based on the Amount field.

public class OpportunityComparator implements Comparator<Opportunity> { public Integer compare(Opportunity o1, Opportunity o2) { // The return value of 0 indicates that both elements are equal. Integer returnValue = 0; if(o1 == null && o2 == null) { returnValue = 0; } else if(o1 == null) { // nulls-first implementation returnValue = -1; } else if(o2 == null) { // nulls-first implementation returnValue = 1; } else if ((o1.Amount == null) && (o2.Amount == null)) { // both have null Amounts returnValue = 0; } else if (o1.Amount == null){ // nulls-first implementation returnValue = -1; } else if (o2.Amount == null){ // nulls-first implementation returnValue = 1; } else if (o1.Amount < o2.Amount) { // Set return value to a negative value. returnValue = -1; } else if (o1.Amount > o2.Amount) { // Set return value to a positive value. returnValue = 1; } return returnValue; } }

This test sorts a list of Comparator objects and verifies that the list elements are sorted by the opportunity amount.

```

```

## Example

This example shows how to create a wrapper Comparable class for Opportunity. The implementation of the compareTo method in this class compares two opportunities based on the Amount field—the class member variable contained in this instance, and the opportunity object passed into the method.

```

```

This test sorts a list of OpportunityWrapper objects and verifies that the list elements are sorted by the opportunity amount.

```

```

#### See Also

-   [*Apex Reference Guide*: Collator Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Collator.htm)
    
-   [*Apex Reference Guide*: Comparable Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_comparable.htm)
    
-   [*Apex Reference Guide*: Comparator Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_System_Comparator.htm)