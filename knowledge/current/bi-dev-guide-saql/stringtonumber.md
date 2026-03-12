---
title: "string_to_number"
domain: bi-dev-guide-saql
topic: stringtonumber
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.511Z
estimatedTokens: 61
keywords: [string_to_number, Converts, literal, number, _to, _number, Usage]
---

# string_to_number

> Converts a string literal to a number literal.

# string\_to\_number

Converts a string literal to a number literal.

## Syntax

string\_to\_number(string)

## Usage

If the string can't be parsed as a number or contains a separator, such as a comma, the query fails.

## Example

```

```

## Code Examples

```
-- creates a field called "Number" that contains the number 12345

q = foreach q generate string_to_number("12345") as 'Number';
```
