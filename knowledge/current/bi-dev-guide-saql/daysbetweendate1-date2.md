---
title: "daysBetween(date1,
   date2)"
domain: bi-dev-guide-saql
topic: daysbetweendate1-date2
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.564Z
estimatedTokens: 110
keywords: [daysBetween, date1, date2, number, days, two, dates]
---

# daysBetween(date1,
   date2)

> Returns the number of days between two dates as an integer.

# daysBetween(date1, date2)

Returns the number of days between two dates as an integer.

For example, display the number of days to close a deal. OpenDate and CloseDate fields can be DateTime or DateOnly.

```

```

#### See Also

-   [daysBetween()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_between.htm "Returns the number of days between two dates. This function is only valid in a foreach statement.")

## Code Examples

```
q = foreach q generate daysBetween('OpenDate','CloseDate') as "Days to Close";
```

## Related Topics

- daysBetween() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_between.htm)
