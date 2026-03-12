---
title: "Order By Date"
domain: bi-dev-guide-saql
topic: order-by-date
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.580Z
estimatedTokens: 98
keywords: [Order, Date, result, SAQL, queries, DateTime, DateOnly]
---

# Order By Date

> You can order the result of your SAQL queries by DateTime or DateOnly.

# Order By Date

You can order the result of your SAQL queries by DateTime or DateOnly.

Use the date part to order by date before the projection. For example, you can order results by the year that they closed.

```

```

To order by date after the projection, use the field you created by projecting a date part. For example, you can order results by the year that they closed.

```

```

## Code Examples

```
q = order q by year('CloseDate');
```

```
q = foreach q generate year('CloseDate') as "Year Closed";
q = order q by 'Year Closed';
```
