---
title: "Group by a Custom Fiscal Year"
domain: bi-dev-guide-saql
topic: group-by-a-custom-fiscal-year
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.260Z
estimatedTokens: 59
keywords: [Group, Custom, Fiscal, Year, Here’s, how]
---

# Group by a Custom Fiscal Year

> Here’s how to group by a custom fiscal year.

# Group by a Custom Fiscal Year

Here’s how to group by a custom fiscal year.

## Example

```

```

The query returns:

| Fiscal Year | Count |
| --- | --- |
| 2017 | 2 |
| 2018 | 1 |
| 2019 | 1 |
| 2020 | 1 |
| 2021 | 1 |
| 2022 | 1 |

## Code Examples

```
q = load "opportunities";
q = group q by 'CreatedDate_Year_Fiscal';
q = foreach q generate
   'CreatedDate_Year_Fiscal' as 'Fiscal Year',
   count() as 'count';
q = order q by 'CreatedDate_Year_Fiscal' asc;
q = limit q 2000;
```
