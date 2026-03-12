---
title: "Collection Casting"
domain: apex-guide
topic: collection-casting
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:32.511Z
estimatedTokens: 407
keywords: [Collection, Casting, Because, collections, Apex, declared, runtime, allows, collection, casting., Note]
---

# Collection Casting

> Because collections in Apex have a declared type at runtime, Apex allows collection casting.

# Collection Casting

Because collections in Apex have a declared type at runtime, Apex allows collection casting.

Collections can be cast in a similar manner that arrays can be cast in Java. For example, a list of CustomerPurchaseOrder objects can be assigned to a list of PurchaseOrder objects if class CustomerPurchaseOrder is a child of class PurchaseOrder.

```

```

Once the CustomerPurchaseOrder list is assigned to the PurchaseOrder list variable, it can be cast back to a list of CustomerPurchaseOrder objects, but only because that instance was originally instantiated as a list of CustomerPurchaseOrder objects. A list of PurchaseOrder objects that is instantiated as such cannot be cast to a list of CustomerPurchaseOrder objects, even if the list of PurchaseOrder objects contains only CustomerPurchaseOrder objects.

If the user of a PurchaseOrder list that only includes CustomerPurchaseOrders objects tries to insert a non-CustomerPurchaseOrder subclass of PurchaseOrder (such as InternalPurchaseOrder), a runtime exception results. This is because Apex collections have a declared type at runtime.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Maps behave in the same way as lists with regards to the value side of the Map. If the value side of map A can be cast to the value side of map B, and they have the same key type, then map A can be cast to map B. A runtime error results if the casting is not valid with the particular map at runtime.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_collections.htm "Classes and Collections")

## Code Examples

```apex
public virtual class PurchaseOrder {

    Public class CustomerPurchaseOrder extends PurchaseOrder {

    }
    {
        List<PurchaseOrder> POs = new PurchaseOrder[] {};
        List<CustomerPurchaseOrder> CPOs = new CustomerPurchaseOrder[]{};
        POs = CPOs;
    }
}
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_collections.htm)
