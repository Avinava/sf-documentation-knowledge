---
title: "getRemainingSize()"
domain: apex-reference
topic: getremainingsize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.509Z
keywords: [getRemainingSize, Gets, remaining, size, queueable, job, signature, bytes, after, subtracting, already, used, maximum, allowed, number., Signature, Return, Value]
---

# getRemainingSize()

> Gets the remaining size of the queueable job signature in bytes, after subtracting what
    is already used by the signature from the maximum allowed number.

### getRemainingSize()

Gets the remaining size of the queueable job signature in bytes, after subtracting what is already used by the signature from the maximum allowed number.

#### Signature

public Integer getRemainingSize()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")