---
title: "last()"
domain: bi-dev-guide-saql
topic: last
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.322Z
estimatedTokens: 261
keywords: [tuple, Industry, Account, Owner]
---

# last()

> Returns the last value in the tuple for the specified field.

# last()

Returns the last value in the tuple for the specified field.

Use last() to return the last value of a measure or dimension. You can also use last() to return the value of a field without grouping by that field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

If the values are not sorted, the 'last' value could be any value in the tuple.

## Example - Return the Last Industry for an Account Owner

Your reps own opportunities in several industries. You need a list of rep names with their last industry, where industry is sorted alphabetically. Group by account owner and industry, sort by industry, then use first() to get the last industry.

```

```

![Diagram showing first function with sorted field.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_fn_agg_last_image.png&folder=bi_dev_guide_saql)

#### See Also

-   [first()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_1st.htm "Returns the first value for the specified field.")

## Code Examples

```
q = load "DTC_Opportunity_SAMPLE";
q = group q by ('Account_Owner', 'Industry');
q = foreach q generate 'Account_Owner' as 'Account_Owner', 'Industry' as 'Industry';
q = order q by 'Industry';

q = foreach q generate 'Account_Owner' as 'Account_Owner', last('Industry') as 'One Industry';
```

## Related Topics

- first() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_1st.htm)
