---
title: "rtrim()"
domain: bi-dev-guide-saql
topic: rtrim
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.509Z
estimatedTokens: 150
keywords: [rtrim, Removes, characters, end, Usage]
---

# rtrim()

> Removes the specified characters from the end of a string.

# rtrim()

Removes the specified characters from the end of a string.

## Syntax

rtrim(string,substr)

## Usage

Removes every instance of each character in substr from the end of string. This function is case-sensitive. To remove trailing spaces, do not specify a value for substr.

## Example

This example shows that rtrim removes the specified characters from the end of a string. This function is case-sensitive.

```

```

![Diagram showing number of close opps, grouped by day of the week they were closed.](/docs/resources/img/en-us/260.0?doc_id=images%2Frtrim.png&folder=bi_dev_guide_saql)

## Code Examples

```
q = load "test";
q = foreach q generate 'Company' as 'Company', rtrim('Company',"abc") as 'rtrim abc',
    rtrim('Company',"cba") as 'rtrim cba', rtrim('Company',"ab") as 'rtrim ab', 
    rtrim('Company',"ac") as 'rtrim ac';
```
