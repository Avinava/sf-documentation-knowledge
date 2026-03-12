---
title: "Extending a Class"
domain: apex-guide
topic: extending-a-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.611Z
estimatedTokens: 978
keywords: [Extending, extend, provide, specialized, behavior, Versioned, Changes]
---

# Extending a Class

> You can extend a class to provide more specialized behavior.

# Extending a Class

You can extend a class to provide more specialized behavior.

A class that extends another class inherits all the methods and properties of the extended class. In addition, the extending class can override the existing virtual methods by using the override keyword in the method definition. Overriding a virtual method allows you to provide a different implementation for an existing method. This means that the behavior of a particular method is different based on the object you’re calling it on. This is referred to as polymorphism.

A class extends another class using the extends keyword in the class definition. A class can only extend one other class, but it can implement more than one interface.

This example shows how the YellowMarker class extends the Marker class. To run the inheritance examples in this section, first create the Marker class.

```

```

Then create the YellowMarker class, which extends the Marker class.

```

```

This code segment shows polymorphism. The example declares two objects of the same type (Marker). Even though both objects are markers, the second object is assigned to an instance of the YellowMarker class. Hence, calling the write method on it yields a different result than calling this method on the first object, because this method has been overridden. However, you can call the discount method on the second object even though this method isn't part of the YellowMarker class definition. But it’s part of the extended class, and hence, is available to the extending class, YellowMarker. Run this snippet in the Execute Anonymous window of the Developer Console.

```

```

The extending class can have more method definitions that aren't common with the original extended class. In this example, the RedMarker class extends the Marker class and has one extra method, computePrice, that isn't available for the Marker class. To call the extra methods, the object type must be the extending class.

Before running the next snippet, create the RedMarker class, which requires the Marker class in your org.

```

```

This snippet shows how to call the additional method on the RedMarker class. Run this snippet in the Execute Anonymous window of the Developer Console.

```

```

Extensions also apply to interfaces—an interface can extend another interface. As with classes, when an interface extends another interface, all the methods and properties of the extended interface are available to the extending interface.

## Versioned Behavior Changes

In API version 65.0 and later, an abstract or override method requires a protected, public, or global access modifier. If one of these access modifiers isn’t explicitly included in the method declaration, then method access defaults to private. Private access is invalid for these method types because the implementing class can’t access the abstract method. Therefore, if you attempt to declare an abstract or override method without an allowed access modifier, you get the compilation error Abstract methods require at least one of the following: global, public, protected.

In API version 50.0 and later, scope and accessibility rules are enforced on Apex variables, methods, inner classes, and interfaces that are annotated with @namespaceAccessible. For accessibility considerations, see [NamespaceAccessible Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm). For more information on namespace-based visibility, see [Namespace-Based Visibility for Apex Classes in Second-Generation Packages](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_namespace_visibility.htm "HTML (New Window)").

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_properties.htm "Apex Properties")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_example.htm "Extended Class Example")

## Code Examples

```apex
public virtual class Marker {
    public virtual void write() {
        System.debug('Writing some text.');
    }

    public virtual Double discount() {
        return .05;
    }
}
```

```apex
// Extension for the Marker class
public class YellowMarker extends Marker {
    public override void write() {
        System.debug('Writing some text using the yellow marker.');
    } 
}
```

```
Marker obj1, obj2;
obj1 = new Marker();
// This outputs 'Writing some text.'
obj1.write();

obj2 = new YellowMarker();
// This outputs 'Writing some text using the yellow marker.'
obj2.write();
// We get the discount method for free
// and can call it from the YellowMarker instance.
Double d = obj2.discount();
```

```apex
// Extension for the Marker class
public class RedMarker extends Marker {
    public override void write() {
        System.debug('Writing some text in red.');
    } 

    // Method only in this class
    public Double computePrice() {
        return 1.5;
    }
}
```

```
RedMarker obj = new RedMarker();
// Call method specific to RedMarker only
Double price = obj.computePrice();
```

## Related Topics

- NamespaceAccessible
                    Annotation (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_properties.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_example.htm)
