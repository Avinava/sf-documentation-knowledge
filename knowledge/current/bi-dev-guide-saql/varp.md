---
title: "varp()"
domain: bi-dev-guide-saql
topic: varp
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.356Z
estimatedTokens: 98
keywords: [varp, variance, Accepts, measure, input, expressions, Calculate, Population, Deal, Amount]
---

# varp()

> Returns the variance of the values in a field. Accepts measure fields as input but
            not expressions.

# varp()

Returns the variance of the values in a field. Accepts measure fields as input but not expressions.

## Example - Calculate the Population Variance of Deal Amount

```

```

#### See Also

-   [var()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_var.htm "Returns the variance of the values in a field. Accepts measure fields as input but not expressions.")

## Code Examples

```
q = load "DTC_Opportunity_SAMPLE";
q = group q by all;
q = foreach q generate varp('Amount') as 'var_Amount';
```

## Related Topics

- var() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_var.htm)
