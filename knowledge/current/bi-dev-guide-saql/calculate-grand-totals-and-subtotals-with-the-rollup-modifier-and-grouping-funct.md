---
title: "Calculate Grand Totals and Subtotals with the rollup Modifier and grouping() Function"
domain: bi-dev-guide-saql
topic: calculate-grand-totals-and-subtotals-with-the-rollup-modifier-and-grouping-funct
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.291Z
estimatedTokens: 726
keywords: [Calculate, Grand, Totals, Subtotals, rollup, Modifier, grouping, Function, grouped, data, SAQL, query, group, statement, work]
---

# Calculate Grand Totals and Subtotals with the rollup Modifier and grouping() Function

> Calculate subtotals of grouped data in your SAQL query using the
                  rollup modifier on the group
                  by statement, then work with subtotaled data using
                  grouping(). For example, to see the subtotaled value
            of opportunities by type and lead source, roll up the type and lead source groups. Then,
            label the subtotals with the grouping function.

# Calculate Grand Totals and Subtotals with the rollup Modifier and grouping() Function

Calculate subtotals of grouped data in your SAQL query using the rollup modifier on the group by statement, then work with subtotaled data using grouping(). For example, to see the subtotaled value of opportunities by type and lead source, roll up the type and lead source groups. Then, label the subtotals with the grouping function.

Invoking rollup adds rows to your query results with null values for dimensions and subtotaled results for measures. Invoking grouping() returns 1 if null dimension values are due to higher-level aggregates (which usually means the row is a subtotal), otherwise it returns 0.

Using grouping() alongside rollup lets you work with subtotaled data. After subtotaling data, common next steps include logically evaluating subtotaled data with a case statement. Or filtering on subtotaled data with a filter statement.

Suppose that you have an opportunity dataset, and want to see the value of deals by lead source and type. Plus, you want to see the total value of all lead sources and all types. Write a query that returns the sum of opportunity amount grouped by type and lead source. To see the value of all lead sources and all types, use rollup to subtotal opportunities, then use grouping() to label the subtotaled rows.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

All query results for rollup and grouping() display only in the format as shown in the examples below.

## Example: rollup

Open the SAQL editor in the dashboard. Instead of grouping data by a field, specify the rollup modifier as the group and pass the fields you want subtotaled - Type and Lead Source - as parameters. Set q = group q by rollup('Type', 'LeadSource');. Here's the full query.

```

```

The query results show sum of amount by opportunity type and then by lead source. Subtotaled and grand totaled rows have null values for dimensions.

![Subtotals and grand totals calculated with the rollup statement](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_rollup_example.png&folder=bi_dev_guide_saql)

## Example: grouping()

Null values in place of labeled totals can confuse query results. Avoid this confusion by labeling totals as All Types or All Lead Sources using case statements with grouping() functions.

```

```

Now the query results include labeled totals.

![Subtotals and grand totals calculated with the rollup statement and labeled with the grouping statement](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_rollup_grouping_example.png&folder=bi_dev_guide_saql)

To have multiple grouping levels but only display subtotals for one group, add a filter to the end of your query that resembles the following example: q = filter q by 'LeadSource' != "All Lead Sources" || 'Type' == "Existing Business"

## Code Examples

```
q = load "opportunityData";
q = group q by rollup('Type', 'LeadSource');
q = order q by ('Type', 'LeadSource');
q = foreach q generate
    'Type' as 'Type',
    'LeadSource' as 'LeadSource',
    sum('Amount') as 'sum_Amount';
```

```
q = load "opportunityData";
q = group q by rollup('Type', 'LeadSource');
q = order q by ('Type', 'LeadSource');
q = foreach q generate
    (case
        when grouping('Type') == 1 then "All Types"
        else 'Type'
    end) as 'Type',
    (case
        when grouping('LeadSource') == 1 then "All Lead Sources"
        else 'LeadSource'
    end) as 'LeadSource',
    sum('Amount') as 'sum_Amount';
```
