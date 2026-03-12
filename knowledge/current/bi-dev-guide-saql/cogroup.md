---
title: "cogroup"
domain: bi-dev-guide-saql
topic: cogroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.751Z
estimatedTokens: 1910
keywords: [cogroup, combine, data, two, streams, stream, least, common, Inner, Left, Outer, coalesce, Right, Full]
---

# cogroup

> Use cogroup to combine data from two or more data
    streams into a single data stream. The data streams must have at least one common
    field.

# cogroup

Use cogroup to combine data from two or more data streams into a single data stream. The data streams must have at least one common field.

cogroup is similar to relational database joins, but with some important differences. Unlike a relational database join, in a cogroup the datasets are grouped first, and then the groups are joined. You can use cogroup in these ways:

-   inner cogroup
-   left outer cogroup
-   right outer cogroup
-   full outer cogroup

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

The statements cogroup and group are interchangeable. For clarity, we use group for statements involving one data stream and cogroup for statements involving two or more data streams.

## Inner cogroup

Inner cogroup combines data from two or more data streams into a resulting data stream. The resulting data stream only contains values that exist in both data streams. That is, unmatched records are dropped.

**Syntax**

```

```

field1 and field2 must be the same type, but can have different names. For example, q=group ops by 'Owner', quota by 'Name';

## Example - Inner cogroup

Suppose that you want to understand how much time your reps spend meeting with each account. Is there a relationship between spending more time and winning an account? Are some reps spending much more or much less time than average? To answer these questions, first combine meeting data with account data using cogroup.

Suppose that you have a dataset of meeting information from the Salesforce Event object. In this example, your reps have had six meetings with four different companies. The Meetings dataset has a MeetingDuration column, which contains the meeting duration in hours.

![Diagram showing the meeting dataset.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_cogroup_ds_meeting.png&folder=bi_dev_guide_saql)

The account data exists in the Salesforce Opportunity object. The Ops dataset has an Account, Won, and Amount column. The Amount column contains the dollar value of the opportunity, in millions.

![Diagram showing the Ops datasets.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_cogroup_ds_account.png&folder=bi_dev_guide_saql)

To see the effect of meeting duration on opportunities, you start by combining these two datasets into a single data stream using cogroup.

```

```

Internally (you cannot see these results yet), the resulting cogrouped data stream contains the following data. Note how the data streams are rolled up on one or more dimensions.

```

```

Now the datasets are combined. To see the data, you create a projection using foreach:

```

```

The resulting data stream contains the sum of amount and total meeting time for each company. The sum of amount is the sum of the dollar value for every opportunity for the company.

![Diagram showing the combined dataset.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_cogroup_ds_result.png&folder=bi_dev_guide_saql)

Now that you have combined the data into a single data stream, you can analyze the effects that total meeting time has on your opportunities.

## Left Outer cogroup

Left outer cogroup combines data from the right data stream with the left data stream. The resulting data stream only contains values that exist in the left data stream. If the left data stream has a value that the right data stream does not, the missing value is null in the resulting data stream.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=bi_dev_guide_saql)

#### Tip

Use coalesce to replace a null value with the value of your choice.

**Syntax**

```

```

field1 and field2 must be the same type, but can have different names. For example, q=group ops by 'Owner' left, quota by 'Name';

## Example - Left Outer cogroup With coalesce

Suppose that you want to see what percentage of quota that your reps have obtained. Your quota dataset shows each employee's quota (notice that Farah does not have a quota):

![Quota dataset.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_cogroup_ds_quota.png&folder=bi_dev_guide_saql)

Your opportunities data shows the opportunity amount that each employee has won (notice that Jonathan does not have a won opportunity).

![Opportunities dataset.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_cogroup_ds_ops.png&folder=bi_dev_guide_saql)

Use a left outer cogroup to show only employees that have quotas. Also show the percentage of quota attained.

```

```

Jonathan has not won any opportunities yet, so his percent attained is null.

![Opportunities dataset.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_cogroup_ds_jonNull.png&folder=bi_dev_guide_saql)

Use coalesce to replace the null opportunities with a zero.

```

```

Now Jonathan's percent attained is displayed as zero.

![Opportunities dataset.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_cogroup_jonzero.png&folder=bi_dev_guide_saql)

## Right Outer cogroup

Right outer cogroup combines data from the left data stream with the right data stream. The resulting data stream only contains values that exist in the right data stream. If the right data stream has a value that the left data stream does not, the missing value is null in the resulting data stream.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=bi_dev_guide_saql)

#### Tip

Use coalesce to replace a null value with the value of your choice.

**Syntax**

```

```

field1 and field2 must be the same type, but can have different names. For example, q=group ops by 'Owner' right, quota by 'Name';

## Full Outer cogroup

Full outer cogroup combines data from the left and right data streams. The resulting data stream contains all values. If one data stream has a value that the other data stream does not, the missing value is null in the resulting data stream.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=bi_dev_guide_saql)

#### Tip

Use coalesce to replace a null value with the value of your choice.

**Syntax**

```

```

field1 and field2 must be the same type, but can have different names. For example, q=group ops by 'Owner' full, quota by 'Name';

#### See Also

-   [union](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_union.htm "Combines multiple result sets into one result set. The result sets must have the same field names and structure. You can use a different dataset to create each result set, or you can use the same dataset.")

-   [join semi and anti](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_join_semi_anti.htm "Use the join statement with the join_type to create semi-join or anti-join results.")

-   [Combine Data from Multiple Data Streams with cogroup](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_cogroup.htm "You can combine data from two or more data streams into a single data stream using cogroup. The data streams must have at least one common field.")

-   [Replace Null Values with coalesce()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_coalesce.htm "When you use a left outer or full outer cogroup, unmatched data comes through as null. Use coalesce() to replace null values with the value of your choice.")

-   [group-by](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby.htm "Organizes the rows returned from a query into groups. Within each group, you can apply an aggregate function, such as count() or sum() to get the number of items or sum, respectively.")

## Code Examples

```
result = cogroup data_stream_1 by field1, data_stream_2 by field2;
```

```
q = cogroup ops by 'Account', meetings by 'Company';
```

```
(1,{(Shoes2Go,2),(Shoes2Go,5)},{(Shoes2Go,1,1.5),(Shoes2Go,0,3})

(2,{(FreshMeals,3),(FreshMeals, 1)},{(FreshMeals,1,2) (FreshMeals,1,1.4)})

(3,{(ZipBikeShare,4)},{(ZipBikeShare,1,1.1)})

(4,{(ZenRetreats,6)},{(ZenRetreats,0,2)})
```

```
ops = load "Ops";
meetings = load "Meetings";
q = cogroup ops by 'Account', meetings by 'Company';
q = foreach q generate ops.'Account' as 'Account', sum(ops.'Amount') as 'Sum of Amount', sum(meetings.'MeetingDuration') as 'TimeSpent';
```

```
result = cogroup data_stream_1 by field1 left, data_stream_2 by field2;
```

## Related Topics

- union (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_union.htm)
- join semi and anti (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_join_semi_anti.htm)
- Combine Data from Multiple Data Streams with cogroup (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_cogroup.htm)
- Replace Null Values with coalesce() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_coalesce.htm)
- group-by (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby.htm)
