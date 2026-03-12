---
title: "Handle Null Dates"
domain: bi-dev-guide-saql
topic: handle-null-dates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.578Z
estimatedTokens: 50
keywords: [Handle, Dates, filter]
---

# Handle Null Dates

> Use is not null to filter out null
  dates.

# Handle Null Dates

Use is not null to filter out null dates.

```

```

Projecting null values does not cause an error. For example, this Date Closed field is empty, but no error occurs.

```

```

## Code Examples

```
q = filter q by 'CloseDate' is not null;
q = foreach q generate 'CloseDate';
```

```
q = filter q by year('CloseDate') is null;
q = foreach q generate year('CloseDate') as "Date Closed";
```
