---
title: "coalesce"
domain: bi-dev-guide-saql
topic: coalesce
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.369Z
estimatedTokens: 376
keywords: [coalesce, non-null, replace, nulls, different, Left, Outer, Cogroup]
---

# coalesce

> Use coalesce() to get the first non-null value
        from a list of parameters, or to replace nulls with a different value.

# coalesce

Use coalesce() to get the first non-null value from a list of parameters, or to replace nulls with a different value.

```

```

The arguments must all be convertible to a common data type, which will be the type of the result.

This function is often used to substitute a default value for null values when data is retrieved for display. For example:

SELECT COALESCE(description, short\_description, '(none)') ...

The above example  returns description if it is not null, otherwise short\_description if it is not null, otherwise (none).

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

## Code Examples

```
coalesce(value1 , value2 , value3 , ... )
```

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
