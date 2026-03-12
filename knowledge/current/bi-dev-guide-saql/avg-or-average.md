---
title: "avg() or average()"
domain: bi-dev-guide-saql
topic: avg-or-average
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.315Z
estimatedTokens: 99
keywords: [avg, average, measure, Calculate, Amount, Opportunity, Grouped]
---

# avg() or average()

> Returns the average of the values of a measure field.

# avg() or average()

Returns the average of the values of a measure field.

## Example - Calculate the Average Amount of an Opportunity Grouped by Type

Use avg() to compare the average size of opportunities for each account type.

```

```

#### See Also

-   [median()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_med.htm "Returns the median value of a measure field.")

## Code Examples

```
q = load "DTC_Opportunity";
q = group q by 'Account_Type';
q = foreach q generate 'Account_Type' as 'Account_Type', avg('Amount') as 'avg_Amount';
```

## Related Topics

- median() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_med.htm)
