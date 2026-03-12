---
title: "Using Custom Types in Map Keys and Sets"
domain: apex-guide
topic: using-custom-types-in-map-keys-and-sets
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.630Z
estimatedTokens: 678
keywords: [Custom, Types, Map, Keys, add, instances, own, Apex, classes, maps, sets., Warning, Adding, equals, hashCode, Sample]
---

# Using Custom Types in Map Keys and Sets

> You can add instances of your own Apex classes to maps and sets.

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

## Code Examples

```apex
public Boolean equals(Object obj) {
    // Your implementation
}
```

```apex
public Integer hashCode() {
    // Your implementation
}
```

```apex
public class PairNumbers {
    Integer x,y;

    public PairNumbers(Integer a, Integer b) {
        x=a;
        y=b;
    }

    public Boolean equals(Object obj) {
        if (obj instanceof PairNumbers) {
            PairNumbers p = (PairNumbers)obj;
            return ((x==p.x) && (y==p.y));
        }
        return false;
    }

    public Integer hashCode() {
        return (31 * x) ^ y;
    }
}
```

```apex
Map<PairNumbers, String> m = new Map<PairNumbers, String>();
PairNumbers p1 = new PairNumbers(1,2);
PairNumbers p2 = new PairNumbers(3,4);
// Duplicate key
PairNumbers p3 = new PairNumbers(1,2);
m.put(p1, 'first');
m.put(p2, 'second');
m.put(p3, 'third');

// Map size is 2 because the entry with 
// the duplicate key overwrote the first entry.
System.assertEquals(2, m.size());

// Use the == operator
if (p1 == p3) {
    System.debug('p1 and p3 are equal.');
}

// Perform some other operations
System.assertEquals(true, m.containsKey(p1));
System.assertEquals(true, m.containsKey(p2));
System.assertEquals(false, m.containsKey(new PairNumbers(5,6)));

for(PairNumbers pn : m.keySet()) {
    System.debug('Key: ' + pn);
}

List<String> mValues = m.values();
System.debug('m.values: ' + mValues);

// Create a set
Set<PairNumbers> s1 = new Set<PairNumbers>();
s1.add(p1);
s1.add(p2);
s1.add(p3);

// Verify that we have only two elements
// since the p3 is equal to p1.
System.assertEquals(2, s1.size());
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_list_sorting.htm)
