---
title: "Lists of Custom Types and Sorting"
domain: apex-guide
topic: lists-of-custom-types-and-sorting
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.599Z
keywords: [Lists, Custom, Types, Sorting, See]
---

# Lists of Custom Types and Sorting

# Lists of Custom Types and Sorting

Lists can hold objects of your user-defined types (your Apex classes). Lists of user-defined types can be sorted.

To sort such a list, your Apex class can implement the Comparator interface and pass it as a parameter to the List.sort method. Alternatively, your Apex class can implement the Comparable interface.

The sort criteria and sort order depend on the implementation that you provide for the Comparable.compareTo or the Comparator.compare method.

To perform locale-sensitive comparisons and sorting, use the Collator class. Because locale-sensitive sorting can produce different results depending on the user running the code, avoid using it in triggers or in code that expects a particular sort order.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_version_settings_intro.htm "Apex Code Versions")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_maps_keys_userdefined.htm "Using Custom Types in Map Keys and Sets")

#### See Also

-   [*Apex Reference Guide*: Collator Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Collator.htm)
    
-   [*Apex Reference Guide*: Comparable Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_comparable.htm)
    
-   [*Apex Reference Guide*: Comparator Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_System_Comparator.htm)