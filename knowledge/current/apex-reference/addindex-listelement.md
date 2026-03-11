---
title: "add(index, listElement)"
domain: apex-reference
topic: addindex-listelement
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.435Z
keywords: [add, index, listElement, Inserts, element, list, specified, position, shifts, subsequent, elements, right., Signature, Parameters, Return, Value, Example]
---

# add(index, listElement)

> Inserts an element into the list at the specified index position and shifts all
    subsequent elements one index position to the right.

### add(index, listElement)

Inserts an element into the list at the specified index position and shifts all subsequent elements one index position to the right.

#### Signature

public Void add(Integer index, Object listElement)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

listElement

Type: Object

#### Return Value

Type: Void

#### Example

In this example, a list with six elements is created. Integers are added to the first and second index positions, and the subsequent elements are shifted to the right. After the two methods are called, the list has eight total elements.

```

```