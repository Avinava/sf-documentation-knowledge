---
title: "first()"
domain: bi-dev-guide-saql
topic: first
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.312Z
estimatedTokens: 410
keywords: [Industry, Account, Owner, Any]
---

# first()

> Returns the first value for the specified field.

# first()

Returns the first value for the specified field.

Use first() to return the first value of a measure or dimension. You can also use first() used to return the value of a field without grouping by that field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

If the values are not sorted, the 'first' value could be any value in the tuple.

## Example - Return the First Industry for an Account Owner

Your reps own opportunities in several industries. You need a list of rep names with their first industry, where industry is sorted alphabetically. Group by account owner and industry, sort by industry, then use first() to get the first industry.

```

```

![Diagram showing first function with sorted field.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_fn_agg_1_sort.png&folder=bi_dev_guide_saql)

## Example - Return Any Industry for an Account Owner

Your reps own opportunities in several industries. You need a list of rep names with any one of a rep's industry - it doesn't matter which one. In this case. Group by account owner then use first() to get the first industry from an unsorted collection.

```

```

The resulting table displays each rep along with one of their industries (basically the first industry from an unsorted collection).

![Diagram showing first function.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_fn_agg_1st.png&folder=bi_dev_guide_saql)

#### See Also

-   [last()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_last.htm "Returns the last value in the tuple for the specified field.")

## Code Examples

```
q = load "DTC_Opportunity_SAMPLE";
q = group q by ('Account_Owner', 'Industry');
q = foreach q generate 'Account_Owner' as 'Account_Owner', 'Industry' as 'Industry';
q = order q by 'Industry';

q = foreach q generate 'Account_Owner' as 'Account_Owner', first('Industry') as 'One Industry';
```

```
q = load "DTC_Opportunity_SAMPLE";
q = group q by 'Account_Owner';
q = foreach q generate 'Account_Owner' as 'Account_Owner', first('Industry') as 'One Industry';
```

## Related Topics

- last() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_last.htm)
