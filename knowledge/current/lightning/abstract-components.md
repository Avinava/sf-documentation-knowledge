---
title: "Abstract Components"
domain: lightning
topic: abstract-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.332Z
estimatedTokens: 271
keywords: [Abstract, Components, Object-oriented, languages, Java, support, concept, partial, implementation, leaves, remaining, concrete, sub-classes, can't, instantiated]
---

# Abstract Components

> Object-oriented languages, such as Java, support the concept of
an abstract class that provides a partial implementation for an object
but leaves the remaining implementation to concrete sub-classes. An
abstract class in Java can't be instantiated directly, but a non-abstract
subclass can.

# Abstract Components

Object-oriented languages, such as Java, support the concept of an abstract class that provides a partial implementation for an object but leaves the remaining implementation to concrete sub-classes. An abstract class in Java can't be instantiated directly, but a non-abstract subclass can.

Similarly, the Aura Components programming model supports the concept of abstract components that have a partial implementation but leave the remaining implementation to concrete sub-components.

To use an abstract component, you must extend it and fill out the remaining implementation. An abstract component can't be used directly in markup.

The <aura:component> tag has a boolean abstract attribute. Set abstract="true" to make the component abstract.

#### See Also

-   [Interfaces](atlas.en-us.lightning.meta/lightning/oo_interfaces.htm "Interfaces define a component’s shape by defining attributes, events, or methods that any implementing component contains. To use an interface, a component must implement it. An interface can’t be used directly in markup.")

## Related Topics

- Interfaces (atlas.en-us.lightning.meta/lightning/oo_interfaces.htm)
