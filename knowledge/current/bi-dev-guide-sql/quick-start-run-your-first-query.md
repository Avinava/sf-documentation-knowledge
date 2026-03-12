---
title: "Quick Start: Run Your First Query"
domain: bi-dev-guide-sql
topic: quick-start-run-your-first-query
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.236Z
estimatedTokens: 503
keywords: [Quick, Start, Run, Query, Let’s, write, basic, SQL, CRM, Analytics, Studio]
---

# Quick Start: Run Your First Query

> Let’s write a basic query for SQL for CRM Analytics in Analytics Studio.

# Quick Start: Run Your First Query

Let’s write a basic query for SQL for CRM Analytics in Analytics Studio.

1.  In CRM Analytics Studio, open a Lens on a dataset.
2.  Click the **Query Mode** button.

    ![Query mode icon on a New Lens screen](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_sql_query_mode.png&folder=bi_dev_guide_sql)

3.  SAQL is the default query language. To use SQL, click **Switch to SQL**.![Switch to SQL in Query Mode](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_sql_query_switch.png&folder=bi_dev_guide_sql)
4.  Switching to SQL provides a warning that switching clears your current query. If you don't want to lose the SAQL query, copy it. Then click **Switch to SQL**.![Switch Query Mode modal](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_sql_query_modal.png&folder=bi_dev_guide_sql)

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_sql)

    #### Note

    To return to SAQL query language, click the **Chart Mode** button, then click the **Query Mode** button. If you return to SAQL, you lose any SQL query changes that you made.

5.  The default query for SQL is the row count in your dataset. Let's update the query to count the number of times a category occurs for each city. To run the query, click the **Run Query** button. Because we limit the results to 10 rows, the results display the first 10 cities in the furniture category.![Run SQL query](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_sql_run_query.png&folder=bi_dev_guide_sql)

    ```

    ```

    | Category | City | count |
    | --- | --- | --- |
    | Furniture | Akron | 2 |
    |  | Alexandria | 3 |
    |  | Allen | 1 |
    |  | Allentown | 1 |
    |  | Amarillo | 4 |
    |  | Anaheim | 8 |
    |  | Andover | 1 |
    |  | Apopka | 1 |
    |  | Apple Valley | 2 |
    |  | Arlington | 13 |


#### See Also

-   [*View the Query Behind Your Lens*](https://help.salesforce.com/s/articleView?id=bi_explorer_view_saql.htm&language=en_US)

## Code Examples

```
SELECT Category, City, count(*) as "count" FROM "Superstore"
GROUP BY Category, City
LIMIT 10;
```
