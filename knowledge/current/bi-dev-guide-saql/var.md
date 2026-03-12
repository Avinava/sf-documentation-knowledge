---
title: "var()"
domain: bi-dev-guide-saql
topic: var
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.354Z
estimatedTokens: 95
keywords: [var, variance, Accepts, measure, input, expressions, Calculate, Deal, Amount]
---

# var()

> Returns the variance of the values in a field. Accepts measure fields as input but
            not expressions.

# var()

Returns the variance of the values in a field. Accepts measure fields as input but not expressions.

## Example - Calculate the Variance of Deal Amount

```

```

#### See Also

-   [varp()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_varp.htm "Returns the variance of the values in a field. Accepts measure fields as input but not expressions.")

## Code Examples

```
q = load "DTC_Opportunity_SAMPLE";
q = group q by all;
q = foreach q generate var('Amount') as 'var_Amount';
```

## Related Topics

- varp() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_varp.htm)
