---
title: "ContextTypeEnum Enum"
domain: apex-reference
topic: contexttypeenum-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.633Z
estimatedTokens: 181
namespace: Canvas
keywords: [ContextTypeEnum, context, data, excluded, canvas, app, specify, exclude, excludeContextTypes, CanvasLifecycleHandler, implementation]
---

# ContextTypeEnum Enum

> Describes context data that can be excluded
from canvas app context data. You specify which context types to exclude
in the excludeContextTypes() method in your CanvasLifecycleHandler implementation.

**Namespace:** `Canvas`

# ContextTypeEnum Enum

Describes context data that can be excluded from canvas app context data. You specify which context types to exclude in the excludeContextTypes() method in your CanvasLifecycleHandler implementation.

## Namespace

[Canvas](atlas.en-us.apexref.meta/apexref/apex_namespace_Canvas.htm "The Canvas namespace provides an interface and classes for canvas apps in Salesforce.")

## Enum Values

| Value | Description |
| --- | --- |
| ORGANIZATION | Exclude context information about the organization in which the canvas app is running. |
| RECORD_DETAIL | Exclude context information about the object record on which the canvas app appears. |
| USER | Exclude context information about the current user. |

## Related Topics

- Canvas (atlas.en-us.apexref.meta/apexref/apex_namespace_Canvas.htm)
