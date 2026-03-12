---
title: "percentile_cont()"
domain: bi-dev-guide-saql
topic: percentilecont
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.332Z
estimatedTokens: 360
keywords: [percentile_cont, Calculates, percentile, continuous, distribution, column, _cont, Display, Interpolated, Bottom, 15%, Deals]
---

# percentile_cont()

> Calculates a percentile based on a continuous distribution of the column
            value.

# percentile\_cont()

Calculates a percentile based on a continuous distribution of the column value.

```

```

percentile\_cont() accepts a numeric grouped expression expr and sorts it in the specified order. If order is not specified, the default order is ascending. It returns the value behind which (100\*p)% of values in the group fall in the sorted order, ignoring null values.

p can be any real numeric value between 0 and 1. expr can be any identifier, such as 'xInt' or 'price', but cannot be a complex expression, such as price/100 or ceil(distance), or a literal, such as 2.5.

If expr contains no value that falls exactly at the 100\*p-th percentile mark, percentile\_cont() returns a value interpolated from the two closest values in expr.

For example, if Mea1 contains the values \[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13\] then:

```

```

## Example - Display the Interpolated Value of the Bottom 15% of Deals

Suppose that you want to see the bottom 15% of deals for each rep. You don't need to see the actual deal size - just the 'average' size of the bottom 15%. Use percentile\_cont(.15).

![Diagram showing percentile continuous.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_fn_agg_perc.png&folder=bi_dev_guide_saql)

#### See Also

-   [percentile\_disc()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_pd.htm "Returns the value corresponding to the specified percentile.")

## Code Examples

```
percentile_cont(p) within group (order by expr [asc | desc])
```

```
percentile_cont(0.25) within group (order by Mea1 asc) = 3.25
percentile_cont(0.25) within group (order by Mea1 desc) = 9.75
percentile_cont(0) within group (order by Mea1 asc) = 0
percentile_cont(1) within group (order by Mea1 asc) = 13
```

## Related Topics

- percentile_disc() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_pd.htm)
