---
title: "stddev()"
domain: bi-dev-guide-saql
topic: stddev
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.346Z
estimatedTokens: 202
keywords: [stddev, standard, deviation, Accepts, measure, expressions, input, Look, Variability, Amount, stddevp]
---

# stddev()

> Returns the standard deviation of the values in a field. Accepts measure fields
            (but not expressions) as input.

# stddev()

Returns the standard deviation of the values in a field. Accepts measure fields (but not expressions) as input.

## Example - Look at Variability in Amount

Use stddev() to get a feel for the amount of spread, or dispersion, in the size of your deals.

```

```

## Should I Use stddev() or stddevp()?

Use stddev() when the values in your field are a partial sample of the entire set of values (that is, a partial sampling of the whole population). Use stddevp() when your field contains the complete set of values (that is, the entire population of values).

#### See Also

-   [stddevp()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_stdevp.htm "Returns the population standard deviation of the values in a field. Accepts measure fields as input but not expressions.")

## Code Examples

```
q = load "DTCOpps";
q = group q by all;
q = foreach q generate stddev('Amount') as 'stddev_Amount';
```

## Related Topics

- stddevp() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_stdevp.htm)
