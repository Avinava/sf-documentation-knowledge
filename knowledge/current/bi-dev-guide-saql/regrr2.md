---
title: "regr_r2()"
domain: bi-dev-guide-saql
topic: regrr2
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.338Z
estimatedTokens: 326
keywords: [regr_r2, Uses, two, numerical, calculate, R-squared, goodness, fit, understand, how, well, trend, line, fits, data]
---

# regr_r2()

> Uses two numerical fields to calculate R-squared, or goodness of fit. Use regr_r2() to understand how well the trend line fits
            your data.

# regr\_r2()

Uses two numerical fields to calculate R-squared, or goodness of fit. Use regr\_r2() to understand how well the trend line fits your data.

```

```

field\_y is a grouped dependent numeric expression and field\_x is a grouped independent numeric expression. regr\_r2(field\_y, field\_x) uses simple linear regression to calculate a trend line, then calculates R-squared. If the returned value is small, then functions like regr\_slope() and regr\_intercept() are likely to return accurate results.

The input fields (field\_y, field\_x) must contain at least two pairs of non-null values. This function works with simple grouped values but not with cogroups.

## Example - How Well Does the Calculated Trend Line Fit My Data

Suppose that you have a dataset that includes the number of activities (such as meetings) and the won opportunity amount.

![Sample scatter plot.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_fn_agg_regint.png&folder=bi_dev_guide_saql)

You want to check the calculated trend line for 'goodness of fit' to see how accurate the results from other statistical functions are.

```

```

The value of R squared is 0.95.

![Diagram showing R squared result.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_fn_agg_r2.png&folder=bi_dev_guide_saql)

## Code Examples

```
regr_r2(field_y, field_x)
```

```
q = load "regression";
q = group q by all;

q = foreach q generate trunc(regr_r2('Amount', 'NumActivities'),2) as 'R Squared';
```
