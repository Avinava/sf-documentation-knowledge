---
title: "Inheritance Rules"
domain: lightning
topic: inheritance-rules
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.343Z
estimatedTokens: 182
keywords: [Inheritance, Rules, various, elements]
---

# Inheritance Rules

> This table describes the inheritance rules for various elements.

# Inheritance Rules

This table describes the inheritance rules for various elements.

| Element | extends | implements | Default Base Element |
| --- | --- | --- | --- |
| component | one extensible component | multiple interfaces | <aura:component> |
| app | one extensible app | N/A | <aura:application> |
| interface | multiple interfaces using a comma-separated list (extends="ns:intf1,ns:int2") | N/A | N/A |

#### See Also

-   [Interfaces](atlas.en-us.lightning.meta/lightning/oo_interfaces.htm "Interfaces define a component’s shape by defining attributes, events, or methods that any implementing component contains. To use an interface, a component must implement it. An interface can’t be used directly in markup.")

## Related Topics

- Interfaces (atlas.en-us.lightning.meta/lightning/oo_interfaces.htm)
