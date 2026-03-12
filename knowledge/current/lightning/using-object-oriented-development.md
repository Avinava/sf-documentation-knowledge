---
title: "Using Object-Oriented Development"
domain: lightning
topic: using-object-oriented-development
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.351Z
estimatedTokens: 453
keywords: [Object-Oriented, Development, framework, basic, constructs, inheritance, encapsulation, programming, presentation, layer]
---

# Using Object-Oriented Development

> The framework provides the basic constructs of inheritance and encapsulation from
    object-oriented programming and applies them to presentation layer development.

# Using Object-Oriented Development

The framework provides the basic constructs of inheritance and encapsulation from object-oriented programming and applies them to presentation layer development.

For example, components are encapsulated and their internals stay private. Consumers of the component can access the public shape (attributes and registered events) of the component, but can't access other implementation details in the component bundle. This separation gives component authors freedom to change the internal implementation details and insulates component consumers from those changes.

Inheritance in Aura components doesn’t work the way it does in Apex or Java. Using inheritance in Aura makes your code harder to understand as the behavior isn’t always intuitive. When possible, use composition instead of inheritance.

-   **[Favor Composition Over Inheritance](atlas.en-us.lightning.meta/lightning/oo_favor_composition.htm)**
    Aura supports inheritance, but it favors composition. When possible, use composition.
-   **[What is Inherited?](atlas.en-us.lightning.meta/lightning/oo_whats_inherited.htm)**

-   **[Inherited Component Attributes](atlas.en-us.lightning.meta/lightning/oo_cmp_attributes.htm)**
    A sub component that extends a super component inherits the attributes of the super component.
-   **[Abstract Components](atlas.en-us.lightning.meta/lightning/oo_abstract_cmp.htm)**

-   **[Interfaces](atlas.en-us.lightning.meta/lightning/oo_interfaces.htm)**
    Interfaces define a component’s shape by defining attributes, events, or methods that any implementing component contains. To use an interface, a component must implement it. An interface can’t be used directly in markup.
-   **[Inheritance Rules](atlas.en-us.lightning.meta/lightning/oo_inheritance_rules.htm)**

## Related Topics

- Favor Composition Over Inheritance (atlas.en-us.lightning.meta/lightning/oo_favor_composition.htm)
- What is Inherited? (atlas.en-us.lightning.meta/lightning/oo_whats_inherited.htm)
- Inherited Component Attributes (atlas.en-us.lightning.meta/lightning/oo_cmp_attributes.htm)
- Abstract Components (atlas.en-us.lightning.meta/lightning/oo_abstract_cmp.htm)
- Interfaces (atlas.en-us.lightning.meta/lightning/oo_interfaces.htm)
- Inheritance Rules (atlas.en-us.lightning.meta/lightning/oo_inheritance_rules.htm)
