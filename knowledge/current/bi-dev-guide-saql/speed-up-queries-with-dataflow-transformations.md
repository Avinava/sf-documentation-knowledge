---
title: "Speed Up Queries with Dataflow Transformations"
domain: bi-dev-guide-saql
topic: speed-up-queries-with-dataflow-transformations
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.692Z
estimatedTokens: 504
keywords: [Speed, Queries, Dataflow, Transformations, reduce, number, network, round, trips, perform, data, ELT, process, instead, query]
---

# Speed Up Queries with Dataflow Transformations

> To speed up your queries and reduce the number of network round trips, perform data
        transformations in the ELT process instead of in the query.

# Speed Up Queries with Dataflow Transformations

To speed up your queries and reduce the number of network round trips, perform data transformations in the ELT process instead of in the query.

## Example: GEO Field

Let’s say you have a dataset with the GEO field that contains the value JP, and you want to replace this value with Japan. One solution is to add a case statement to your query.

```

```

Running this query on each row in a dataset is time-consuming. A faster approach is to add the case statement to the saqlExpression field in the dataflow’s computeExpression transformation. Moving the case statement from the query to the ELT process reduces the query’s network round trips.

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=bi_dev_guide_saql)

#### Tip

You can also improve query performance by shortening decimal values in your dataflow. For example, if the numbers in your dataset have a single decimal digit, such as 9.1 or 924.3, set scale to 1 rather than 4 in the computeExpression transformation. Restricting the decimal value only impacts storage only. SAQL performs query calculations with all decimal values intact.

## Example: Date Format

To change the date format, you can add an intermediate query to filter the stream based on the list selector values. Adding an extra filter creates another network trip. Instead, transform the values in the computeExpression transformation, which you can use with SAQL date functions.

```

```

#### See Also

-   [Simple case Operator](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_operators_case.htm "Use case in a foreach statement to assign different field values in different situations. case supports two syntax forms: searched case and simple case. This section explains simple case.")

-   [https://help.salesforce.com/s/articleView?id=bi\_integrate\_saql\_transformation.htm](https://help.salesforce.com/s/articleView?id=bi_integrate_saql_transformation.htm&language=en_US)

## Code Examples

```
q = foreach q1 generate (case when 'GEO' == "JP" then "Japan" else 'GEO' end) as 'GEO;'
```

```
"parameters": {
    "source": "Opportunity_Data", 
    "mergeWithSource": true,
    "computedFields": [{
        "name": "GEO", 
        "type": "Text", 
        "label": "GEO"
        "saqlExpression": "case when 'GEO' == "JP" then "Japan" else 'GEO' end"}
]}
```

```
"parameters":{
    "source":"Opportunity_Data",
    "mergeWithSource":true,
    "computedFields":[ { 
        "name":"UIFormattedDate",
        "type": "Text",  
        "saqlExpression":"date_to_string(toDate(Date_sec_epoch), "yyyy-MM-dd")" } ] }}
```

## Related Topics

- Simple case Operator (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_operators_case.htm)
