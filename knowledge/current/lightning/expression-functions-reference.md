---
title: "Expression Functions Reference"
domain: lightning
topic: expression-functions-reference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.975Z
estimatedTokens: 1314
keywords: [Expression, Functions, language, math, array, comparison, conditional, case-sensitive, Label, Informational, Function]
---

# Expression Functions Reference

> The expression language contains math, string, array, comparison, boolean, and
  conditional functions. All functions are case-sensitive.

# Expression Functions Reference

The expression language contains math, string, array, comparison, boolean, and conditional functions. All functions are case-sensitive.

## Math Functions

The math functions perform math operations on numbers. They take numerical arguments. The Corresponding Operator column lists equivalent operators, if any.

| Function | Alternative | Usage | Description | Corresponding Operator |
| --- | --- | --- | --- | --- |
| add | concat | add(1,2) | Adds the first argument to the second. | + |
| sub | subtract | sub(10,2) | Subtracts the second argument from the first. | - |
| mult | multiply | mult(2,10) | Multiplies the first argument by the second. | * |
| div | divide | div(4,2) | Divides the first argument by the second. | / |
| mod | modulus | mod(5,2) | Returns the integer remainder resulting from dividing the first argument by the second. | % |
| abs |  | abs(-5) | Returns the absolute value of the argument: the same number if the argument is positive, and the number without its negative sign if the number is negative. For example, abs(-5) is 5. | None |
| neg | negate | neg(100) | Reverses the sign of the argument. For example, neg(100) is -100. | - (unary) |

## String Functions

| Function | Alternative | Usage | Description | Corresponding Operator |
| --- | --- | --- | --- | --- |
| concat | add | concat('Hello ', 'world')add('Walk ', 'the dog') | Concatenates the two arguments. | + |
| format |  | format($Label.ns.labelName, v.myVal)NoteThis function works for arguments of type String, Decimal, Double, Integer, Long, Array, String[], List, and Set. | Replaces any parameter placeholders with comma-separated attribute values. |  |
| join |  | join(separator, subStr1, subStr2, subStrN)join(' ','class1', 'class2', v.class) | Joins the substrings adding the separator String (first argument) between each subsequent argument. |  |

## Label Functions

| Function | Usage | Description |
| --- | --- | --- |
| format | format($Label.np.labelName, v.attribute1 , v.attribute2)format($Label.np.hello, v.name) | Outputs a label and updates it. Replaces any parameter placeholders with comma-separated attribute values. Supports ternary operators in labels and attributes. |

## Informational Functions

| Function | Usage | Description |
| --- | --- | --- |
| length | myArray.length | Returns the length of an array or a string. |
| empty | empty(v.attributeName)NoteThis function works for arguments of type String, Array, Object, List, Map, or Set. | Returns true if the argument is empty. An empty argument is undefined, null, an empty array, or an empty string. An object with no properties is not considered empty.Tip{! !empty(v.myArray)} evaluates faster than {!v.myArray && v.myArray.length > 0} so we recommend empty() to improve performance.The $A.util.isEmpty() method in JavaScript is equivalent to the empty() expression in markup. |

## Comparison Functions

Comparison functions take two number arguments and return true or false depending on the comparison result. The eq and ne functions can also take other data types for their arguments, such as strings.

| Function | Usage | Description | Corresponding Operator |
| --- | --- | --- | --- |
| equals | equals(1,1) | Returns true if the specified arguments are equal. The arguments can be any data type. | == or eq |
| notequals | notequals(1,2) | Returns true if the specified arguments are not equal. The arguments can be any data type. | != or ne |
| lessthan | lessthan(1,5) | Returns true if the first argument is numerically less than the second argument. | < or lt |
| greaterthan | greaterthan(5,1) | Returns true if the first argument is numerically greater than the second argument. | > or gt |
| lessthanorequal | lessthanorequal(1,2) | Returns true if the first argument is numerically less than or equal to the second argument. | <= or le |
| greaterthanorequal | greaterthanorequal(2,1) | Returns true if the first argument is numerically greather than or equal to the second argument. | >= or ge |

## Boolean Functions

Boolean functions operate on Boolean arguments. They are equivalent to logical operators.

| Function | Usage | Description | Corresponding Operator |
| --- | --- | --- | --- |
| and | and(isEnabled, hasPermission) | Returns true if both arguments are true.NoteThis function supports only two arguments. Any arguments after the first two are ignored. | &amp;&amp;This syntax is awkward in markup so we recommend using the and() function instead when you have two arguments. If you have more than two arguments, you can chain multiple &amp;&amp; operations. |
| or | or(hasPermission, hasVIPPass) | Returns true if either one of the arguments is true.This function supports only two arguments. Any arguments after the first two are ignored. | \|\|If you have more than two arguments, you can chain multiple \|\| operations. |
| not | not(isNew) | Returns true if the argument is false. | ! |

## Conditional Function

| Function | Usage | Description | Corresponding Operator |
| --- | --- | --- | --- |
| if | if(isEnabled, 'Enabled', 'Not enabled') | Evaluates the first argument as a boolean. If true, returns the second argument. Otherwise, returns the third argument. | ?: (ternary) |
