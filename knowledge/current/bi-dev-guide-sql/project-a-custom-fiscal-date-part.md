---
title: "Project a Custom Fiscal Date Part"
domain: bi-dev-guide-sql
topic: project-a-custom-fiscal-date-part
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.005Z
estimatedTokens: 123
keywords: [Project, Custom, Fiscal, Date, Part, pass, parts, EXTRACT, function]
---

# Project a Custom Fiscal Date Part

> To project a custom fiscal date part, pass custom fiscal date parts to the EXTRACT() function.

# Project a Custom Fiscal Date Part

To project a custom fiscal date part, pass custom fiscal date parts to the EXTRACT() function.

```

```

| CloseDate_Fiscal_Year | CloseDate_Fiscal_Quarter | CloseDate_Fiscal_Month | CloseDate_Fiscal_Week |
| --- | --- | --- | --- |
| 2015 | 4 | 11 | 49 |
| 2015 | 4 | 11 | 49 |
| 2015 | 4 | 12 | 49 |
| 2015 | 4 | 12 | 53 |
| 2015 | 4 | 12 | 54 |
| 2016 | 1 | 1 | 5 |
| 2016 | 1 | 2 | 9 |
| 2016 | 1 | 2 | 9 |
| 2016 | 1 | 3 | 13 |
| 2016 | 1 | 3 | 13 |

## Code Examples

```
SELECT EXTRACT(FISCAL_YEAR FROM CloseDate) AS CloseDate_Fiscal_Year, EXTRACT(FISCAL_QUARTER FROM CloseDate) AS CloseDate_Fiscal_Quarter, EXTRACT(FISCAL_MONTH FROM CloseDate) AS CloseDate_Fiscal_Month, EXTRACT(FISCAL_WEEK FROM CloseDate) AS CloseDate_Fiscal_Week
FROM "OpportunityFiscalEMTimezoned"
LIMIT 10;
```
