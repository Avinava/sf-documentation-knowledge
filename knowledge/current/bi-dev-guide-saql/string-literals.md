---
title: "String Literals"
domain: bi-dev-guide-saql
topic: string-literals
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:01.348Z
estimatedTokens: 83
keywords: [Literals, characters, inside, double, quotes]
---

> A string is a set of characters inside double quotes (").

# String Literals

A string is a set of characters inside double quotes (").

Example: "This is a string."

This example uses valid syntax:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

Identifiers are either unquoted or enclosed in single quotation marks.

## Code Examples

```
accounts = load "Data";
opps = load "0Fcyy000000002qCAA/0Fcyy000000002WCAQ";
c = group accounts by 'Year', opps by 'Year';
d = foreach c generate opps.Year as 'Year';
e = filter d by Year == "2002";
```
