---
title: "Write Your First Query"
domain: bi-dev-guide-saql
topic: write-your-first-query
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.308Z
estimatedTokens: 553
keywords: [Write, Query, Let's, walk, part, simple, SAQL]
---

# Write Your First Query

> Let's walk through each part of a simple SAQL query.

# Write Your First Query

Let's walk through each part of a simple SAQL query.

We’ll create a new dashboard in a CRM Analytics org. Then we’ll add a simple chart and look at the resulting SAQL.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

These instructions assume you are using the sample Salesforce Developer org, which includes sample datasets. If you are using a different org, you can still follow the same general instructions with your own dataset.

1.  In your CRM Analytics org, create a new dashboard:
    1.  Click **Create**.
    2.  Click **Dashboard**.
2.  In the window Choose a dashboard template, click **Blank Dashboard**, then click **Continue**.
3.  Drag a chart widget to the dashboard canvas.
4.  In the chart widget, click **Chart**, then select **DTC Opportunity** dataset.
5.  Click the **SAQL Mode** button to launch the SAQL editor.

    ![SAQL Mode button](/docs/resources/img/en-us/260.0?doc_id=images%2Fwave_saql_saql_mode_button.png&folder=bi_dev_guide_saql)


The SAQL editor displays the SAQL query used to fetch the data and render the chart:

```

```

Let’s take a look at each line in the query.

| Line Number | Description |
| --- | --- |
| 1 | q = load "DTC_Opportunity_SAMPLE";This loads the dataset that you chose when you created the chart widget. You can use the variable q to access the dataset in the rest of your SAQL statements. |
| 2 | q = group q by all;In some queries, you want to group by a certain field, for example Account ID. In our case we didn’t specify a grouping when we created the chart. Use group by all when you don’t want to group data. |
| 3 | q = foreach q generate count() as 'count';This generates the output for our query. In this simple example, we just count the number of lines in the DTC Opportunity dataset. |
| 4 | q = limit q 2000This limits the number of results that are returned to 2000. Limiting the number of results can improve performance. However if you want q to contain more than 2000 results, you can increase this number. |

You can click **Back** to go back to the chart. You can use the UI to make modifications to the chart, then view the resulting SAQL.

## Code Examples

```
1   q = load "DTC_Opportunity_SAMPLE";
2   q = group q by all;
3   q = foreach q generate count() as 'count';
4   q = limit q 2000;
```
