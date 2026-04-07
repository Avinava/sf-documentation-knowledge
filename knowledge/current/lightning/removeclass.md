---
title: "removeClass()"
domain: lightning
topic: removeclass
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:38:05.678Z
estimatedTokens: 69
keywords: [removeClass, Removes, CSS, Sample, Code]
---

> Removes a CSS class from a component.

# removeClass()

Removes a CSS class from a component.

## Signature

removeClass(Object element, String newClass)

## Parameters

element

Type: Object

The component to remove the class from.

newClass

Type: String

The CSS class to be removed.

## Sample Code

```

```

## Code Examples

```
//find a component with aura:id="myCmp" in markup
var myCmp = component.find("myCmp");
$A.util.removeClass(myCmp, "myClass");
```
