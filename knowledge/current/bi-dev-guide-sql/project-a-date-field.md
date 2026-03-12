---
title: "Project a Date Field"
domain: bi-dev-guide-sql
topic: project-a-date-field
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.078Z
estimatedTokens: 76
keywords: [Project, Date, DateTime, EXTRACT, function, SELECT, statement]
---

# Project a Date Field

> To project a date field of type DateTime, use the
   EXTRACT() function on the date field in the SELECT statement.

# Project a Date Field

To project a date field of type DateTime, use the EXTRACT() function on the date field in the SELECT statement.

```

```

| CloseDate |
| --- |
| 2014-12-30 16:00:00 |

This example projects only the year from the DateTime field.

```

```

| CloseDate_Year |
| --- |
| 2014 |

## Code Examples

```
SELECT CloseDate
FROM "OpportunityFiscalEMTimezoned"
LIMIT 1;
```

```
SELECT EXTRACT(Year FROM CloseDate) As CloseDate_Year
FROM "OpportunityFiscalEMTimezoned"
LIMIT 1;
```
