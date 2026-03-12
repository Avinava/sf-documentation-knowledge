---
title: "Show the Top and Bottom Quartile"
domain: bi-dev-guide-saql
topic: show-the-top-and-bottom-quartile
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.302Z
estimatedTokens: 214
keywords: [Show, Top, Bottom, Quartile, SAQL, calculate, percentiles, data, Deal, Size, Country]
---

# Show the Top and Bottom Quartile

> Use SAQL to calculate percentiles, like the top and bottom quartile of your
            data.

# Show the Top and Bottom Quartile

Use SAQL to calculate percentiles, like the top and bottom quartile of your data.

## Example - Show Top Quartile and Bottom Quartile Deal Size by Country

Suppose that you want to see the top and bottom quartile deal size, by country. You want to see the size of the actual deal, not the interpolated (or 'average') deal size. Use percentile\_disc(.25) and percentile\_disc(.75).

```

```

Use a bar chart and select **Axis Mode** > **Single Axis** to show the top and bottom quartiles together.

![Diagram showing percentile continuous.](/docs/resources/img/en-us/260.0?doc_id=images%2Ftopandbottomquartile.png&folder=bi_dev_guide_saql)

#### See Also

-   [percentile\_disc()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_pd.htm "Returns the value corresponding to the specified percentile.")

## Code Examples

```
q = load "Data";
q = group q by 'Billing_Country';
q = foreach q generate 'Billing_Country' as 'Billing_Country', percentile_disc(0.25) within group (order by 'Amount' desc) as '25th Percentile', percentile_disc(0.75) within group (order by 'Amount' desc) as '75th Percentile';
q = order q by '25th Percentile' asc;
```

## Related Topics

- percentile_disc() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_pd.htm)
