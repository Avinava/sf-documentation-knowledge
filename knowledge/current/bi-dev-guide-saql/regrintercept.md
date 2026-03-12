---
title: "regr_intercept()"
domain: bi-dev-guide-saql
topic: regrintercept
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.340Z
estimatedTokens: 414
keywords: [regr_intercept, Uses, two, numerical, calculate, trend, line, y-intercept, function, likely, field_y, field_x, zero, regr, _intercept]
---

# regr_intercept()

> Uses two numerical fields to calculate a trend line, then returns the y-intercept
            value. Use this function to find out the likely value of field_y when
                  field_x is zero.

# regr\_intercept()

Uses two numerical fields to calculate a trend line, then returns the y-intercept value. Use this function to find out the likely value of field\_y when field\_x is zero.

```

```

field\_y is a grouped dependent numeric expression and field\_x is a grouped independent numeric expression. regr\_intercept(field\_y, field\_x) uses simple linear regression to calculate the trend line. The input fields (field\_y, field\_x) must contain at least two pairs of non-null values. This function works with simple grouped values but not with cogroups.

## Example - What Is the Likely Amount Won If the Number of Activities Is Zero?

Suppose that you have a dataset that includes the number of activities (such as meetings) and the won opportunity amount.

![Sample scatter plot.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_fn_agg_regint.png&folder=bi_dev_guide_saql)

What size of deal can you expect to win if you don't have any activities with an account? regr\_intercept performs a linear analysis on your data then calculates the y-intercept (that is, the value of Amount Won when Number of Activities is zero).

```

```

The projected deal size with no activities is $15.04 million dollars.

![Diagram showing y intercept of a regression line.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_fn_agg_y_int.png&folder=bi_dev_guide_saql)

#### See Also

-   [regr\_slope()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_rs.htm "Uses two numerical fields to calculate a trend line, then returns the slope. Use this function to learn more about the relationship between two numerical fields.")

## Code Examples

```
regr_intercept(field_y, field_x)
```

```
q = load "Data";
q = group q by all;

--trunc() truncates the result to two decimal places
q = foreach q generate trunc(regr_intercept('Amount', 'NumActivities'),2) as intercept;
```

## Related Topics

- regr_slope() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_rs.htm)
