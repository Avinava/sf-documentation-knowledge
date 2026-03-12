---
title: "Use Time Zone-Enabled Dates in SAQL Projections"
domain: bi-dev-guide-saql
topic: use-time-zone-enabled-dates-in-saql-projections
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.588Z
estimatedTokens: 90
keywords: [Time, Zone-Enabled, Dates, SAQL, Projections, project, exact, date, 2017-3-31, part, year, month, day]
---

# Use Time Zone-Enabled Dates in SAQL Projections

> You can project an exact date such as 2017-3-31 23:59:59 or part of a date such as year,
  month, or day.

# Use Time Zone-Enabled Dates in SAQL Projections

You can project an exact date such as 2017-3-31 23:59:59 or part of a date such as year, month, or day.

Project the entire CloseDate field to see the CloseDate field for a record. CloseDate can be a DateTime or DateOnly type.

```

```

Project the year, month, day, and epoch date for a record.

```

```

## Code Examples

```
q = foreach q generate CloseDate as 'Close Date';
```

```
q = foreach q generate year('CloseDate') as 'Year', month('CloseDate') as 'Month', day('CloseDate') as 'Day', epochSecond('CloseDate') as 'Seconds Epoch';
```
