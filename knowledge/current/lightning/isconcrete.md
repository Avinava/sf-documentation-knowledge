---
title: "isConcrete()"
domain: lightning
topic: isconcrete
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.696Z
estimatedTokens: 197
keywords: [isConcrete, component, concrete, otherwise, sub-component, inheritance, chain]
---

# isConcrete()

> Returns true if the
   component is concrete, or false otherwise. A concrete
   component is a sub-component in an inheritance chain.

# isConcrete()

Returns true if the component is concrete, or false otherwise. A concrete component is a sub-component in an inheritance chain.

## Signature

isConcrete()

## Returns

Type: Boolean

Returns true if the component is concrete, or false otherwise.

#### See Also

-   [getConcreteComponent()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_getConcreteComponent.htm "Gets the concrete implementation of a component. If the component is concrete, the method returns the component itself. For example, call this method to get the concrete component of a super component.")

-   [Favor Composition Over Inheritance](atlas.en-us.lightning.meta/lightning/oo_favor_composition.htm "Aura supports inheritance, but it favors composition. When possible, use composition.")

## Related Topics

- getConcreteComponent() (atlas.en-us.lightning.meta/lightning/ref_jsapi_component_getConcreteComponent.htm)
- Favor Composition Over Inheritance (atlas.en-us.lightning.meta/lightning/oo_favor_composition.htm)
