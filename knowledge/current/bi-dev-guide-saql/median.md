---
title: "median()"
domain: bi-dev-guide-saql
topic: median
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:00.432Z
estimatedTokens: 97
keywords: [median, measure, Time, Close, Case]
---

> Returns the median value of a measure field.

# median()

Returns the median value of a measure field.

## Example - Find the Median Time to Close a Case

Use median() to find the median amount of time it takes to resolve a case, grouped by company.

```

```

#### See Also

-   [avg() or average()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_avg.htm "Returns the average of the values of a measure field.")

## Code Examples

```
q = load "Case";
q = group q by 'Account_Name';
q = foreach q generate 'Account_Name' as 'Account_Name', median('CallDuration') as 'median_CallDuration';
q = order q by 'Account_Name' asc;
```

## Related Topics

- avg() or average() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_avg.htm)
