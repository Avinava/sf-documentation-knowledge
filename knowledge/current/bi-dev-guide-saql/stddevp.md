---
title: "stddevp()"
domain: bi-dev-guide-saql
topic: stddevp
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.348Z
estimatedTokens: 157
keywords: [stddevp, population, standard, deviation, Accepts, measure, input, expressions, Calculate, Amount]
---

# stddevp()

> Returns the population standard deviation of the values in a field. Accepts measure
            fields as input but not expressions.

# stddevp()

Returns the population standard deviation of the values in a field. Accepts measure fields as input but not expressions.

## Example - Calculate the Population Standard Deviation of Amount

Use stddevp() to calculate the population standard deviation of the amount of each opportunity. Group by product family to see which type of product has the greatest variability in deal size.

```

```

#### See Also

-   [stddev()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_stdev.htm "Returns the standard deviation of the values in a field. Accepts measure fields (but not expressions) as input.")

## Code Examples

```
q = load "DTC_Opportunity_SAMPLE";
q = group q by 'Product_Family';
q = foreach q generate 'Product_Family' as 'Product_Family', stddevp('Amount') as 'stddevp_Amount';
```

## Related Topics

- stddev() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_stdev.htm)
