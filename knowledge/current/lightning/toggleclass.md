---
title: "toggleClass()"
domain: lightning
topic: toggleclass
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.830Z
estimatedTokens: 78
keywords: [toggleClass, Toggles, adds, removes, CSS, component, Sample, Code]
---

# toggleClass()

> Toggles (adds or removes) a CSS class from a
  component.

# toggleClass()

Toggles (adds or removes) a CSS class from a component.

## Signature

toggleClass(Object element, String className)

## Parameters

element

Type: Object

The component to add or remove the class from.

className

Type: String

The CSS class to be added or removed.

## Sample Code

```

```

## Code Examples

```
// find a component with aura:id="toggleMe" in markup
var toggleText = component.find("toggleMe");
$A.util.toggleClass(toggleText, "toggle");
```
