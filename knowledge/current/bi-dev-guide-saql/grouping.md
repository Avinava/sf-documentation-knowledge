---
title: "grouping()"
domain: bi-dev-guide-saql
topic: grouping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.319Z
estimatedTokens: 192
keywords: [grouping, dimension, due, higher-level, aggregates, usually, means, row, subtotal, grand, total, otherwise, Label, Subtotaled, Data]
---

# grouping()

> Returns 1 if null dimension values are due to higher-level aggregates (which
            usually means the row is a subtotal or grand total), otherwise returns 0.

# grouping()

Returns 1 if null dimension values are due to higher-level aggregates (which usually means the row is a subtotal or grand total), otherwise returns 0.

The grouping() function is most useful when paired with the rollup modifier on the group statement. Invoking grouping() lets work with subtotaled data.

## Example - Label Subtotaled Data

Suppose that you have a dataset of opportunity information with amounts totaled by lead source and type. Calculate totals with rollup. Then use grouping() with a case statement to check whether a row is a total and if it is then label it as "all" values.

```

```

![Total rows labeled with grouping()](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_rollup_grouping_example.png&folder=bi_dev_guide_saql)

## Code Examples

```
q = load "opportunityData";

--Modify the group statement with rollup to calculate subtotals of grouped measures
q = group q by rollup('Type', 'LeadSource');

q = order q by ('Type', 'LeadSource');

--Determine which rows are totals with grouping(), which returns 1 if a row is a total
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
