---
title: "ltrim()"
domain: bi-dev-guide-saql
topic: ltrim
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.493Z
estimatedTokens: 154
keywords: [ltrim, Removes, characters, beginning, Usage]
---

# ltrim()

> Removes the specified characters from the beginning of a string.

# ltrim()

Removes the specified characters from the beginning of a string.

## Syntax

ltrim(string,substr)

## Usage

Removes every instance of each character in substr from the beginning of string. This function is case-sensitive. To remove leading spaces, do not specify a value for substr.

## Example

This example shows that ltrim removes the specified characters from the beginning of a string. This function is case-sensitive.

```

```

![Diagram showing number of close opps, grouped by day of the week they were closed.](/docs/resources/img/en-us/260.0?doc_id=images%2Fltrim.png&folder=bi_dev_guide_saql)

## Code Examples

```
q = load "test";
q = foreach q generate 'Company' as 'Company', ltrim('Company',"abc") as 'ltrim abc',
    ltrim('Company',"cba") as 'ltrim cba', ltrim('Company',"ab") as 'ltrim ab',
    ltrim('Company',"bc") as 'ltrim bc';
```
