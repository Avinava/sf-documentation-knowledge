---
title: "Filter by a Custom Fiscal Year"
domain: bi-dev-guide-saql
topic: filter-by-a-custom-fiscal-year
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.257Z
estimatedTokens: 46
keywords: [Filter, Custom, Fiscal, Year, Here’s, how, date]
---

# Filter by a Custom Fiscal Year

> Here’s how to filter by a custom fiscal year date.

# Filter by a Custom Fiscal Year

Here’s how to filter by a custom fiscal year date.

## Example

```

```

Here’s the query output.

| Fiscal Year | Count |
| --- | --- |
| 2020 | 1 |

## Code Examples

```
q = load "opportunities";
q = filter q by date('CreatedDate_Year', 'CreatedDate_Month', 'CreatedDate_Day') in ["current fiscal_year".."current_fiscal_year"];
q = group q by 'CreatedDate_Year_Fiscal';
q = foreach q generate
   'CreatedDate_Year_Fiscal' as 'Fiscal Year',
   count() as 'count';
q = order q by 'CreatedDate_Year_Fiscal' asc;
q = limit q 2000;
```
