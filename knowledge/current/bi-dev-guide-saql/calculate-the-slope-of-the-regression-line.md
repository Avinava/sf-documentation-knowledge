---
title: "Calculate the Slope of the Regression Line"
domain: bi-dev-guide-saql
topic: calculate-the-slope-of-the-regression-line
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.294Z
estimatedTokens: 324
keywords: [Calculate, Slope, Regression, Line, SAQL, perform, linear, analysis, data, best, fits, regr_slope, Relationship, Number, Activities]
---

# Calculate the Slope of the Regression Line

> Use SAQL to perform linear analysis on your data to find the line that best fits
            the data. Then use .regr_slope to return the slope
            of this line.

# Calculate the Slope of the Regression Line

Use SAQL to perform linear analysis on your data to find the line that best fits the data. Then use .regr\_slope to return the slope of this line.

## Example - Calculate the Relationship Between Number of Activities and Deal Amount

Suppose that you have a dataset that includes the number of activities (such as meetings) and the won opportunity amount.

![Sample scatter plot.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_fn_agg_regint.png&folder=bi_dev_guide_saql)

How much bigger will the deal size be for each extra activity? regr\_slope performs a linear analysis on your data then calculates the slope (that is, the increased amount you win for each extra activity).

```

```

Based on your existing data, every extra activity that you have tends to increase the deal size by $1.45 million, on average.

![Diagram showing slope of a regression line.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_fn_agg_slope.png&folder=bi_dev_guide_saql)

#### See Also

-   [regr\_slope()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_rs.htm "Uses two numerical fields to calculate a trend line, then returns the slope. Use this function to learn more about the relationship between two numerical fields.")

## Code Examples

```
q = load "data/sales";
q = group q by all;

--trunc() truncates the result to two decimal places
q = foreach q generate trunc(regr_slope('Amount', 'NumActivities'),2) as 'Gain per Activity';
```

## Related Topics

- regr_slope() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_rs.htm)
