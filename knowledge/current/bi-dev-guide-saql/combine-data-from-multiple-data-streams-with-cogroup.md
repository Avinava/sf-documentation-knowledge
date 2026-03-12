---
title: "Combine Data from Multiple Data Streams with cogroup"
domain: bi-dev-guide-saql
topic: combine-data-from-multiple-data-streams-with-cogroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.282Z
estimatedTokens: 617
keywords: [Combine, Data, Multiple, Streams, cogroup, two, stream, least, common, Inner]
---

# Combine Data from Multiple Data Streams with cogroup

> You can combine data from two or more data streams into a single data stream using
                  cogroup. The data streams must have at least
            one common field.

# Combine Data from Multiple Data Streams with cogroup

You can combine data from two or more data streams into a single data stream using cogroup. The data streams must have at least one common field.

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

#### See Also

-   [cogroup](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_cogroup.htm "Use cogroup to combine data from two or more data streams into a single data stream. The data streams must have at least one common field.")

## Code Examples

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

## Related Topics

- cogroup (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_cogroup.htm)
