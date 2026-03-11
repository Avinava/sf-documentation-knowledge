---
title: "compare(var1, var2)"
domain: apex-reference
topic: comparevar1-var2
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.691Z
keywords: [compare, var1, var2, Compares, two, arguments, returns, negative, integer, zero, positive, depending, whether, first, argument, less, equal, greater, second, argument.]
---

# compare(var1, var2)

> Compares the two arguments and returns a negative integer, zero, or a positive integer
    depending on whether  the first argument is less than, equal to, or greater than the second
    argument.

### compare(var1, var2)

Compares the two arguments and returns a negative integer, zero, or a positive integer depending on whether the first argument is less than, equal to, or greater than the second argument.

#### Signature

public Integer compare(T var1, T var2)

#### Parameters

var1

Type: T

T - The type determined by the parameterized type of the Comparator. For example, if the class implements Comparator<Account> then var1 and var2 are of type Account .

var2

Type: T

T - The type determined by the parameterized type of the Comparator. For example, if the class implements Comparator<Account> then var1 and var2 are of type Account .

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")