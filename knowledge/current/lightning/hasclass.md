---
title: "hasClass()"
domain: lightning
topic: hasclass
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.809Z
estimatedTokens: 98
keywords: [hasClass, Checks, whether, component, CSS, Sample, Code]
---

# hasClass()

> Checks whether the component has the specified CSS
  class.

# hasClass()

Checks whether the component has the specified CSS class.

## Signature

hasClass(Object element, String className)

## Parameters

element

Type: Object

The component to check.

className

Type: String

The CSS class name to check for.

## Returns

Type: Boolean

Returns true if the specified class is found for the component, or false otherwise.

## Sample Code

```

```

## Code Examples

```
// find a component with aura:id="myCmp" in markup
var myCmp = component.find("myCmp");
$A.util.hasClass(myCmp, "myClass");
```
