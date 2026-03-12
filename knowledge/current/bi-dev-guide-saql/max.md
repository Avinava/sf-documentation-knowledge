---
title: "max()"
domain: bi-dev-guide-saql
topic: max
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.324Z
estimatedTokens: 120
keywords: [max, maximum, dimension, measure, Largest, Opportunity, Account, Airline, Destinations, per, Origin]
---

# max()

> Returns the maximum value of a dimension or measure field.

# max()

Returns the maximum value of a dimension or measure field.

## Example - Find the Largest Opportunity for Each Account

```

```

## Example - Find the Last Value in List of Airline Destinations per Origin

For dimensions, max() sorts the values alphabetically and the last value is returned.

```

```

#### See Also

-   [min()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_min.htm "Returns the minimum value of a dimension or measure field.")

## Code Examples

```
q = load "Ops";
q = group q by 'Account_Name';
q = foreach q generate 'Company' as 'Company', max('Amount') as 'Largest Deal';
```

```
q = load "Airlines";
q = group q by 'origin';
q = foreach q generate 'origin' as 'Origin', max('dest') as 'Max Destination';
```

## Related Topics

- min() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_min.htm)
