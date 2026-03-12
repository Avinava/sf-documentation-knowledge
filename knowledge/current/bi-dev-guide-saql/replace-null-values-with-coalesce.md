---
title: "Replace Null Values with coalesce()"
domain: bi-dev-guide-saql
topic: replace-null-values-with-coalesce
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.279Z
estimatedTokens: 420
keywords: [Replace, coalesce, left, outer, full, cogroup, unmatched, data, comes, choice]
---

# Replace Null Values with coalesce()

> When you use a left outer or full outer cogroup, unmatched data comes through as null. Use coalesce() to replace null values with the value of
            your choice.

# Replace Null Values with coalesce()

When you use a left outer or full outer cogroup, unmatched data comes through as null. Use coalesce() to replace null values with the value of your choice.

For information about how to use the coalesce() function, see [coalesce](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_coalesce.htm "Use coalesce() to get the first non-null value from a list of parameters, or to replace nulls with a different value.")

## Example: Left Outer Cogroup with coalesce()

A left outer cogroup combines the right data stream with the left data stream. If a record on the left stream does not have a match on the right stream, the missing right value comes through as null. To replace null values with a different value, use coalesce().

For example, suppose that you have a dataset of meeting information from the Salesforce Event object, and you join it with data from the Salesforce Opportunity object. This shows amount won with the total time spent in meetings.

```

```

It looks like we had no meetings with Zen Retreats.

![Diagram showing the meeting dataset.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_coalesce_1.png&folder=bi_dev_guide_saql)

Let’s use coalesce() to change that null value to a zero.

```

```

![Diagram showing the meeting dataset.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_coalesce_2.png&folder=bi_dev_guide_saql)

#### See Also

-   [cogroup](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_cogroup.htm "Use cogroup to combine data from two or more data streams into a single data stream. The data streams must have at least one common field.")

## Code Examples

```
ops = load "Ops";
meetings = load "Meetings";
q = cogroup ops by 'Account' left, meetings  by 'Company' ;
q = foreach q generate ops.'Account' as 'Account', sum(ops.'Amount') as 'sum_Amount', sum(meetings.'MeetingDuration') as 'TimeSpent';
```

```
ops = load "Ops";
meetings = load "Meetings";
q = cogroup ops by 'Account' left, meetings  by 'Company' ;

–-use coalesce() to replace null values with zero
q = foreach q generate ops.'Account' as 'Account', sum(ops.'Amount') as 'sum_Amount', coalesce(sum(meetings.'MeetingDuration'), 0) as 'TimeSpent';
```

## Related Topics

- coalesce (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_coalesce.htm)
- cogroup (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_cogroup.htm)
