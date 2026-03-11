---
title: "Comparable Methods"
domain: apex-reference
topic: comparable-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.678Z
keywords: [Comparable, Methods, Returns, Integer, value, result, comparison., compareTo, objectToCompareTo, Signature, Parameters, Return, Value, Usage]
---

# Comparable Methods

> Returns an Integer value that is the result of the comparison.

## Comparable Methods

The following are methods for Comparable.

-   **[compareTo(objectToCompareTo)](atlas.en-us.apexref.meta/apexref/apex_comparable.htm#apex_System_Comparable_compareTo)**  
    Returns an Integer value that is the result of the comparison.

### compareTo(objectToCompareTo)

Returns an Integer value that is the result of the comparison.

#### Signature

public Integer compareTo(Object objectToCompareTo)

#### Parameters

objectToCompareTo

Type: Object

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

The implementation of this method returns the following values:

-   0 if this instance and objectToCompareTo are equal
-   \> 0 if this instance is greater than objectToCompareTo
-   < 0 if this instance is less than objectToCompareTo

If this object instance and objectToCompareTo are incompatible, a System.TypeException is thrown.