---
title: "Using Custom Types in Map Keys and Sets"
domain: apex-guide
topic: using-custom-types-in-map-keys-and-sets
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:48.029Z
keywords: [Custom, Types, Map, Keys, Sets, Warning, Adding, equals, hashCode, Methods, Class, Sample]
---

# Using Custom Types in Map Keys and Sets

# Using Custom Types in Map Keys and Sets

You can add instances of your own Apex classes to maps and sets.

For maps, instances of your Apex classes can be added either as keys or values. If you add them as keys, there are some special rules that your class must implement for the map to function correctly; that is, for the key to fetch the right value. Similarly, if set elements are instances of your custom class, your class must follow those same rules.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

If the object in your map keys or set elements changes after being added to the collection, it won’t be found anymore because of changed field values.

When using a custom type (your Apex class) for the map key or set elements, provide equals and hashCode methods in your class. Apex uses these two methods to determine equality and uniqueness of keys for your objects.

## Adding equals and hashCode Methods to Your Class

To ensure that map keys of your custom type are compared correctly and their uniqueness can be determined consistently, provide an implementation of the following two methods in your class:

-   The [equals method](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Object.htm#apex_System_Object_equals) with this signature:
    
    ```
    
    ```
    
-   The [hashCode method](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Object.htm#apex_System_Object_hashCode) with this signature:
    
    ```
    
    ```
    

## Sample

This sample shows how to implement the equals and hashCode methods. The class that provides those methods is listed first. It also contains a constructor that takes two Integers. The second example is a code snippet that creates three objects of the class, two of which have the same values. Next, map entries are added using the pair objects as keys. The sample verifies that the map has only two entries since the entry that was added last has the same key as the first entry, and hence, overwrote it. The sample then uses the \== operator, which works as expected because the class implements equals. Also, some additional map operations are performed, like checking whether the map contains certain keys, and writing all keys and values to the debug log. Finally, the sample creates a set and adds the same objects to it. It verifies that the set size is two, since only two objects out of the three are unique.

```

```

This code snippet makes use of the PairNumbers class.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_list_sorting.htm "Lists of Custom Types and Sorting")