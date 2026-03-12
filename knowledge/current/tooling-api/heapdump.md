---
title: "HeapDump"
domain: tooling-api
topic: heapdump
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:45.831Z
estimatedTokens: 183
keywords: [HeapDump, complex, represents, heap, dump, ApexExecutionOverlayResult, object., API, version, 28.0, later., Fields, Usage]
---

# HeapDump

> A complex type that represents a heap dump in an
   ApexExecutionOverlayResult object. Available from API version 28.0 or later.

# HeapDump

A complex type that represents a heap dump in an ApexExecutionOverlayResult object. Available from API version 28.0 or later.

## Fields

| Field | Details |
| --- | --- |
| className | TypestringDescriptionThe name of the Apex class or trigger. |
| extents | Typearray of TypeExtentDescriptionTypeExtent includes the following fields:collectionTypecountdefinition (array of AttributeDefinition)extent (array of HeapAddress)totalSizetypeName |
| heapDumpDate | TypedateTimeDescriptionThe date and time that the heap dump was captured. |
| namespace | TypestringDescriptionThe namespace of the Apex class or trigger. Null if there is no namespace. |

## Usage

Use heap dumps to capture structured debugging information.
