---
title: "regr_slope()"
domain: bi-dev-guide-saql
topic: regrslope
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.344Z
estimatedTokens: 485
keywords: [regr_slope, Uses, two, numerical, calculate, trend, line, slope, function, relationship, regr, _slope, Number, Activities, Deal]
---

# regr_slope()

> Uses two numerical fields to calculate a trend line, then returns the slope. Use
            this function to learn more about the relationship between two numerical
            fields.

# regr\_slope()

Uses two numerical fields to calculate a trend line, then returns the slope. Use this function to learn more about the relationship between two numerical fields.

```

```

field\_y is a grouped dependent numeric expression and field\_x is a grouped independent numeric expression. regr\_slope(field\_y, field\_x) uses simple linear regression to calculate the trend line. The input fields (field\_y, field\_x) must contain at least two pairs of non-null values. This function works with simple grouped values but not with cogroups.

## Example - Calculate the Relationship Between Number of Activities and Deal Amount

Suppose that you have a dataset that includes the number of activities (such as meetings) and the won opportunity amount.

![Sample scatter plot.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_fn_agg_regint.png&folder=bi_dev_guide_saql)

How much bigger will the deal size be for each extra activity? regr\_slope performs a linear analysis on your data then calculates the slope (that is, the increased amount you win for each extra activity).

```

```

Based on your existing data, every extra activity that you have tends to increase the deal size by $1.45 million, on average.

![Diagram showing slope of a regression line.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_fn_agg_slope.png&folder=bi_dev_guide_saql)

#### See Also

-   [regr\_intercept()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_ri.htm "Uses two numerical fields to calculate a trend line, then returns the y-intercept value. Use this function to find out the likely value of field_y when field_x is zero.")

-   [Calculate the Slope of the Regression Line](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_stats.htm "Use SAQL to perform linear analysis on your data to find the line that best fits the data. Then use .regr_slope to return the slope of this line.")

## Code Examples

```
regr_slope(field_y, field_x)
```

```
q = load "data/sales";
q = group q by all;

--trunc() truncates the result to two decimal places
q = foreach q generate trunc(regr_slope('Amount', 'NumActivities'),2) as 'Gain per Activity';
```

## Related Topics

- regr_intercept() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_ri.htm)
- Calculate the Slope of the Regression Line (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_stats.htm)
