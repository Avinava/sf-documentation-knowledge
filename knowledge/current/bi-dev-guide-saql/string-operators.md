---
title: "String Operators"
domain: bi-dev-guide-saql
topic: string-operators
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.680Z
estimatedTokens: 75
keywords: [Operators, concatenate, strings, plus, sign]
---

# String Operators

> To concatenate strings, use the plus sign (+).

# String Operators

To concatenate strings, use the plus sign (+).

| Operator | Description |
| --- | --- |
| + | Concatenate |

## Example

To combine the year, month, and day into a value that’s called CreatedDate:

q = foreach q generate Id as Id, Year + "-" + Month + "-" + Day as CreatedDate;
