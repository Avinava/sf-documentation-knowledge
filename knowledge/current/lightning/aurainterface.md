---
title: "aura:interface"
domain: lightning
topic: aurainterface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.439Z
estimatedTokens: 301
keywords: [aura, Interfaces, determine, component's, shape, defining, attributes, Implement, allow, component, different, contexts, record, Lightning, App]
---

# aura:interface

> Interfaces determine a component's shape by defining its attributes. Implement an
  interface to allow a component to be used in different contexts, such as on a record page or in
  Lightning App Builder.

# aura:interface

Interfaces determine a component's shape by defining its attributes. Implement an interface to allow a component to be used in different contexts, such as on a record page or in Lightning App Builder.

The aura:interface tag has the following optional attributes.

| Attribute | Type | Description |
| --- | --- | --- |
| access | String | Indicates whether the interface can be extended or used outside of its own namespace. Possible values are public (default), and global. |
| description | String | A description of the interface. |
| extends | Component | The comma-separated list of interfaces to be extended. For example, extends="namespace:intfB". |

#### See Also

-   [Interfaces](atlas.en-us.lightning.meta/lightning/oo_interfaces.htm "Interfaces define a component’s shape by defining attributes, events, or methods that any implementing component contains. To use an interface, a component must implement it. An interface can’t be used directly in markup.")

-   [Interface Access Control](atlas.en-us.lightning.meta/lightning/access_intf.htm "The access attribute on the aura:interface tag controls whether the interface can be used outside of the interface’s namespace.")

## Related Topics

- Interfaces (atlas.en-us.lightning.meta/lightning/oo_interfaces.htm)
- Interface Access Control (atlas.en-us.lightning.meta/lightning/access_intf.htm)
