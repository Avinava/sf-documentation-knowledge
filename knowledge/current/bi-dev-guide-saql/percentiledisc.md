---
title: "percentile_disc()"
domain: bi-dev-guide-saql
topic: percentiledisc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.335Z
estimatedTokens: 514
keywords: [percentile_disc, corresponding, percentile, _disc, Rank, Reps, Top, Quartile, Deal, Size]
---

# percentile_disc()

> Returns the value corresponding to the specified percentile.

# percentile\_disc()

Returns the value corresponding to the specified percentile.

```

```

percentile\_disc() accepts a numeric grouped expression expr and sorts it in the specified order. If order is not specified, the default order is ascending. It returns the value behind which (100\*p)% of values in the group fall in the sorted order, ignoring null values.

p can be any real numeric value between 0 and 1, and is accurate to 8 decimal places of precision. expr can be any identifier, such as 'xInt' or 'price', but cannot be a complex expression, such as price/100 or ceil(distance), or a literal, such as 2.5.

If expr contains no value that falls exactly at the 100\*p-th percentile mark, percentile\_disc() returns the next value from expr in the sort order.

For example, if Mea1 contains the values \[54, 35, 15, 15, 76, 87, 78\] then:

```

```

## Example - Rank Your Reps by Top Quartile of Deal Size

Suppose that you want to see which reps close the biggest deals. (The result may be different than the sum of deal amount, if some reps close a lot of smaller deals). You also want the chart to display the size of actual deals, not an average of deal size. Use percentile\_disc(.25) to look at the top quarter of the deal size for each rep.

```

```

You can see that 25% of Julie Chavez's deals are bigger than $2.4 million, and 25% of Kelly Frazier's deals are bigger than $2.2 million. You also know that Julie closed a deal worth$2.4 million, and that number isn't an average.

![Diagram showing percentile continuous.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_fn_agg_perd.png&folder=bi_dev_guide_saql)

#### See Also

-   [percentile\_cont()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_pc.htm "Calculates a percentile based on a continuous distribution of the column value.")

-   [Show the Top and Bottom Quartile](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_topBotQuartile.htm "Use SAQL to calculate percentiles, like the top and bottom quartile of your data.")

## Code Examples

```
percentile_disc(p) within group (order by expr [asc | desc])
```

```
percentile_disc(0.5) within group (order by Mea1) == 54
percentile_disc(0.72) within group (order by Mea1) == 78
```

```
q = load "DTC_Opportunity_SAMPLE";
q = group q by 'Account_Owner';
q = foreach q generate 'Account_Owner' as 'Account_Owner', percentile_disc(0.25) within group (order by 'Amount' desc) as 'Amount';
q = order q by 'Amount' desc;
```

## Related Topics

- percentile_cont() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_pc.htm)
- Show the Top and Bottom Quartile (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_topBotQuartile.htm)
