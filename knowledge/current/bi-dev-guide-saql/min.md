---
title: "min()"
domain: bi-dev-guide-saql
topic: min
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.329Z
estimatedTokens: 120
keywords: [min, minimum, dimension, measure, Smallest, Opportunity, Account, Airline, Destinations, per, Origin]
---

# min()

> Returns the minimum value of a dimension or measure field.

# min()

Returns the minimum value of a dimension or measure field.

## Example - Find the Smallest Opportunity For Each Account

```

```

## Example - Find the First Value in List of Airline Destinations per Origin

For dimensions, min() sorts the values alphabetically and the first value is returned.

```

```

#### See Also

-   [max()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_max.htm "Returns the maximum value of a dimension or measure field.")

## Code Examples

```
q = load "Ops";
q = group q by 'Account_Name';
q = foreach q generate 'Company' as 'Company', min('Amount') as 'Smallest Deal';
```

```
q = load "Airlines";
q = group q by 'origin';
q = foreach q generate 'origin' as 'Origin', min('dest') as 'Min Destination';
```

## Related Topics

- max() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_max.htm)
