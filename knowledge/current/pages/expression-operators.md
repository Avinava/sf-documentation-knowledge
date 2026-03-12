---
title: "Expression Operators"
domain: pages
topic: expression-operators
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.460Z
estimatedTokens: 937
keywords: [Expression, Operators, join, expressions, together, compound, Math, Logical, Text]
---

# Expression Operators

> Use operators to join expressions together to create compound expressions.

# Expression Operators

Use operators to join expressions together to create compound expressions.

Operators must be used within Visualforce expression syntax to be evaluated.Visualforce supports the following operators.

## Math Operators

| Operator | Description | Use |
| --- | --- | --- |
| + | Calculates the sum of two values. | value1 + value2 and replace each value with merge fields, expressions, or other numeric values. |
| - | Calculates the difference of two values. | value1 - value2 and replace each value with merge fields, expressions, or other numeric values. |
| * | Multiplies its values. | value1 * value2 and replace each value with merge fields, expressions, or other numeric values. |
| / | Divides its values. | value1 / value2 and replace each value with merge fields, expressions, or other numeric values. |
| ^ | Raises a number to a power of a specified number. | number^integer and replace number with a merge field, expression, or another numeric value; replace integer with a merge field that contains an integer, expression, or any integer. |
| () | Specifies that the expressions within the open parenthesis and close parenthesis are evaluated first. All other expressions are evaluated using standard operator precedence. | (expression1) expression2... and replace each expression with merge fields, expressions, or other numeric values. |

## Logical Operators

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

You can’t have a relative comparison expression that includes a null value. Doing so results in an exception. Specifically, you can’t have a null value on either side of the following operators:

-   < (less than)
-   <= (less than or equals)
-   \> (greater than)
-   \>= (greater than or equals)

| Operator | Description | Use |
| --- | --- | --- |
| = and == | Evaluates if two values are equivalent. The = and == operators are interchangeable. | expression1=expression2 or expression1 == expression2, and replace each expression with merge fields, expressions, or other numeric values. |
| <> and != | Evaluates if two values aren’t equivalent. | expression1 <> expression2 or expression1 != expression2, and replace each expression with merge fields, expressions, or other numeric values. |
| < | Evaluates if a value is less than the value that follows this symbol. | value1 < value2 and replace each value with merge fields, expressions, or other numeric values. |
| > | Evaluates if a value is greater than the value that follows this symbol. | value1 > value2 and replace each value with merge fields, expressions, or other numeric values. |
| <= | Evaluates if a value is less than or equal to the value that follows this symbol. | value1 <= value2 and replace each value with merge fields, expressions, or other numeric values. |
| >= | Evaluates if a value is greater than or equal to the value that follows this symbol. | value1 >= value2 and replace each value with merge fields, expressions, or other numeric values. |
| && | Evaluates if two values or expressions are both true. Use this operator as an alternative to the logical function AND. | (logical1) && (logical2) and replace logical1 and logical2 with the values or expressions that you want evaluated. |
| \|\| | Evaluates if at least one of multiple values or expressions is true. Use this operator as an alternative to the logical function OR. | (logical1) \|\| (logical2) and replace any number of logical references with the values or expressions you want evaluated. |

## Text Operators

| Operator | Description | Use |
| --- | --- | --- |
| & | Connects two or more strings. | string1&string2 and replace each string with merge fields, expressions, or other values. |
