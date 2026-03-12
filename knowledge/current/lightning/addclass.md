---
title: "addClass()"
domain: lightning
topic: addclass
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.804Z
estimatedTokens: 65
keywords: [addClass, Adds, CSS, component, Sample, Code]
---

# addClass()

> Adds a CSS class to a component.

# addClass()

Adds a CSS class to a component.

## Signature

addClass(Object element, String newClass)

## Parameters

element

Type: Object

The component to apply the class on.

newClass

Type: String

The CSS class to be applied.

## Sample Code

```

```

## Code Examples

```
// find a component with aura:id="myCmp" in markup
var myCmp = component.find("myCmp");
$A.util.addClass(myCmp, "myClass");
```
