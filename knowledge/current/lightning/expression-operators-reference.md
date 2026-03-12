---
title: "Expression Operators Reference"
domain: lightning
topic: expression-operators-reference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.997Z
estimatedTokens: 1381
keywords: [Expression, Operators, language, supports, enable, complex, expressions, Arithmetic, Numeric, Literals, Comparison, Logical, Conditional, Operator]
---

# Expression Operators Reference

> The expression language supports operators to enable you to create more complex
  expressions.

# Expression Operators Reference

The expression language supports operators to enable you to create more complex expressions.

## Arithmetic Operators

Expressions based on arithmetic operators result in numerical values.

| Operator | Usage | Description |
| --- | --- | --- |
| + | 1 + 1 | Add two numbers. |
| - | 2 - 1 | Subtract one number from the other. |
| * | 2 * 2 | Multiply two numbers. |
| / | 4 / 2 | Divide one number by the other. |
| % | 5 % 2 | Return the integer remainder of dividing the first number by the second. |
| - | -v.exp | Unary operator. Reverses the sign of the succeeding number. For example if the value of expenses is 100, then -expenses is -100. |

## Numeric Literals

| Literal | Usage | Description |
| --- | --- | --- |
| Integer | 2 | Integers are numbers without a decimal point or exponent. |
| Float | 3.14-1.1e10 | Numbers with a decimal point, or numbers with an exponent. |
| Null | null | A literal null number. Matches the explicit null value and numbers with an undefined value. |

## String Operators

Expressions based on string operators result in string values.

| Operator | Usage | Description |
| --- | --- | --- |
| + | 'Title: ' + v.note.title | Concatenates two strings together. |

## String Literals

String literals must be enclosed in single quotation marks 'like this'.

| Literal | Usage | Description |
| --- | --- | --- |
| string | 'hello world' | Literal strings must be enclosed in single quotation marks. Double quotation marks are reserved for enclosing attribute values, and must be escaped in strings. |
| \<escape> | ' ' | Whitespace characters:\t (tab)(newline)\r (carriage return)Escaped characters:" (literal ")\' (literal ')\\ (literal \) |
| Unicode | '\u####' | A Unicode code point. The # symbols are hexadecimal digits. A Unicode literal requires four digits. |
| null | null | A literal null string. Matches the explicit null value and strings with an undefined value. |

## Comparison Operators

Expressions based on comparison operators result in a true or false value. For comparison purposes, numbers are treated as the same type. In all other cases, comparisons check both value and type.

| Operator | Alternative | Usage | Description |
| --- | --- | --- | --- |
| == | eq | 1 == 11 == 1.01 eq 1Noteundefined==null evaluates to true. | Returns true if the operands are equal. This comparison is valid for all data types.WarningDon’t use the == operator for objects, as opposed to basic types, such as Integer or String. For example, object1==object2 evaluates inconsistently on the client versus the server and isn’t reliable. |
| != | ne | 1 != 21 != true1 != '1'null != false1 ne 2 | Returns true if the operands are not equal. This comparison is valid for all data types. |
| < | lt | 1 < 21 lt 2 | Returns true if the first operand is numerically less than the second. You must escape the < operator to &lt; to use it in component markup. Alternatively, you can use the lt operator. |
| > | gt | 42 > 242 gt 2 | Returns true if the first operand is numerically greater than the second. |
| <= | le | 2 <= 422 le 42 | Returns true if the first operand is numerically less than or equal to the second. You must escape the <= operator to &lt;= to use it in component markup. Alternatively, you can use the le operator. |
| >= | ge | 42 >= 4242 ge 42 | Returns true if the first operand is numerically greater than or equal to the second. |

## Logical Operators

Expressions based on logical operators result in a true or false value.

| Operator | Usage | Description |
| --- | --- | --- |
| &amp;&amp; | isEnabled &amp;&amp; hasPermission | Returns true if both operands are individually true.If you have more than two arguments, you can chain multiple &amp;&amp; operations.This syntax is awkward in markup so we recommend the alternative of using the and() function when you have two arguments. For example, and(isEnabled, hasPermission). The and() function only works with two arguments. |
| \|\| | hasPermission \|\| isRequired | Returns true if either operand is individually true.If you have more than two arguments, you can chain multiple \|\| operations.You can alternatively use the or() function when you have only two arguments. The or() function only works with two arguments. |
| ! | !isRequired | Unary operator. Returns true if the operand is false. This operator should not be confused with the ! delimiter used to start an expression in {!. You can combine the expression delimiter with this negation operator to return the logical negation of a value, for example, {!!true} returns false. |

## Logical Literals

Logical values are never equivalent to non-logical values. That is, only true == true, and only false == false; 1 != true, and 0 != false, and null != false.

| Literal | Usage | Description |
| --- | --- | --- |
| true | true | A boolean true value. |
| false | false | A boolean false value. |

## Conditional Operator

There is only one conditional operator, the traditional ternary operator.

| Operator | Usage | Description |
| --- | --- | --- |
| ? : | (1 != 2) ? "Obviously" : "Black is White" | The operand before the ? operator is evaluated as a boolean. If true, the second operand is returned. If false, the third operand is returned. |

#### See Also

-   [Expression Functions Reference](atlas.en-us.lightning.meta/lightning/expr_functions.htm "The expression language contains math, string, array, comparison, boolean, and conditional functions. All functions are case-sensitive.")

## Related Topics

- Expression Functions Reference (atlas.en-us.lightning.meta/lightning/expr_functions.htm)
