---
title: "Group By Date"
domain: bi-dev-guide-saql
topic: group-by-date
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.572Z
estimatedTokens: 94
keywords: [Group, Date, result, SAQL, query, DateTime, DateOnly]
---

# Group By Date

> You can group the result of your SAQL query by DateTime and DateOnly fields.

# Group By Date

You can group the result of your SAQL query by DateTime and DateOnly fields.

```

```

CloseDate can be DateTime or DateOnly. You can also group by date parts. For example, you can group orders by year and then month.

```

```

You can use the DateTime or DateOnly field to cogroup two datasets. For example, you can group two datasets by year.

```

```

## Code Examples

```
q = group q by 'CloseDate';
```

```
q = group q by year('OrderDate'), month('OrderDate');
```

```
a = load dataset1;
b = load dataset2;
c = group a by year('CloseDate'), b by year('CloseDate');
e = foreach c generate year(a.'CloseDate') as 'CloseDate A', year(b.'CloseDate') as
'Close Date B', sum(a.Amount) as 'Sum of Amount';
```
