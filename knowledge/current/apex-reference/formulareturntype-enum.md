---
title: "FormulaReturnType Enum"
domain: apex-reference
topic: formulareturntype-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.500Z
keywords: [FormulaReturnType, Enum, Values]
---

# FormulaReturnType Enum

# FormulaReturnType Enum

Specifies the return type for the withReturnType(returnType) method.

## Enum Values

The following are the values of the FormulaEval.FormulaReturnType enum.

| Value | Description |
| --- | --- |
| BOOLEAN | A value that can only be assigned true, false, or null. |
| DATE | A value that indicates a particular day. |
| DATETIME | A value that indicates a particular day and time, such as a timestamp. |
| DECIMAL | A number that includes a decimal point. Decimal is an arbitrary precision number. |
| DOUBLE | A 64-bit number that includes a decimal point. |
| ID | Any valid 18-character Lightning Platform record identifier. |
| INTEGER | A 32-bit number that doesn’t include a decimal point. |
| LONG | A 64-bit number that doesn’t include a decimal point. |
| STRING | Any set of characters surrounded by single quotes. |
| TIME | A value that indicates a particular time. |