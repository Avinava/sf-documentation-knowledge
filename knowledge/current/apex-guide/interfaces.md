---
title: "Interfaces"
domain: apex-guide
topic: interfaces
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.584Z
estimatedTokens: 1024
keywords: [Interfaces, which, none, implemented—the, signatures, there, body, empty., another, must, implement, providing, contained, interface., Note, Versioned, Behavior, Changes]
---

# Interfaces

> An interface is like a class in which none of the methods have been
        implemented—the method signatures are there, but the body of each method is empty. To
        use an interface, another class must implement it by providing a body for all of the methods
        contained in the interface.

# Interfaces

An interface is like a class in which none of the methods have been implemented—the method signatures are there, but the body of each method is empty. To use an interface, another class must implement it by providing a body for all of the methods contained in the interface.

Interfaces can provide a layer of abstraction to your code. They separate the specific implementation of a method from the declaration for that method. This way you can have different implementations of a method based on your specific application.

Defining an interface is similar to defining a new class. For example, a company can have two types of purchase orders, ones that come from customers, and others that come from their employees. Both are a type of purchase order. Suppose you needed a method to provide a discount. The amount of the discount can depend on the type of purchase order.

You can model the general concept of a purchase order as an interface and have specific implementations for customers and employees. In the following example the focus is only on the discount aspect of a purchase order.

Here’s the definition of the PurchaseOrder interface.

```

```

This class implements the PurchaseOrder interface for customer purchase orders.

```

```

This class implements the PurchaseOrder interface for employee purchase orders.

```

```

Note the following about the example:

-   The interface PurchaseOrder is defined as a general prototype. Methods defined within an interface have no access modifiers and contain just their signature.
-   The CustomerPurchaseOrder class implements this interface; therefore, it must provide a definition for the discount method. Any class that implements an interface must define all the methods contained in the interface.

When you define a new interface, you’re defining a new data type. You can use an interface name in any place you can use another data type name. Any object assigned to a variable of type interface must be an instance of a class that implements the interface, or a sub-interface data type.

See also [Classes and Casting](atlas.en-us.apexcode.meta/apexcode/apex_classes_casting.htm "In general, all type information is available at run time. This means that Apex enables casting, that is, a data type of one class can be assigned to a data type of another class, but only if one class is a subclass of the other class. Use casting when you want to convert an object from one data type to another.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

You can’t add a method to a global interface after the class has been uploaded in a Managed - Released package version.

## Versioned Behavior Changes

In API version 50.0 and later, scope and accessibility rules are enforced on Apex variables, methods, inner classes, and interfaces that are annotated with @namespaceAccessible. For accessibility considerations, see [NamespaceAccessible Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm). For more information on namespace-based visibility, see [Namespace-Based Visibility for Apex Classes in Second-Generation Packages](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_namespace_visibility.htm "HTML (New Window)").

In API version 61.0 and later, private methods are no longer overridden by an instance method with the same signature in a subclass. This change is versioned, so to prevent the override, update your abstract or virtual classes that contain private methods to API version 61.0 or later. In API version 60.0 and earlier, if a subclass declares an instance method with the same signature as a private method in one of its superclasses, the subclass method overrides the private method.

1.  [Custom Iterators](atlas.en-us.apexcode.meta/apexcode/apex_classes_iterable.htm)


-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_understanding.htm "Classes")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords.htm "Keywords")

## Code Examples

```apex
// An interface that defines what a purchase order looks like in general
public interface PurchaseOrder {
    // All other functionality excluded
    Double discount();
}
```

```apex
// One implementation of the interface for customers
public class CustomerPurchaseOrder implements PurchaseOrder {
    public Double discount() {
        return .05;  // Flat 5% discount
    }
}
```

```apex
// Another implementation of the interface for employees
public class EmployeePurchaseOrder implements PurchaseOrder {
      public Double discount() {
        return .10;  // It’s worth it being an employee! 10% discount
      } 
}
```

## Related Topics

- Classes and Casting (atlas.en-us.apexcode.meta/apexcode/apex_classes_casting.htm)
- NamespaceAccessible
                    Annotation (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm)
- Custom Iterators (atlas.en-us.apexcode.meta/apexcode/apex_classes_iterable.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_understanding.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords.htm)
