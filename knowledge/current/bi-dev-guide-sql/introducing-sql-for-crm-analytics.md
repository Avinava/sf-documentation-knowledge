---
title: "Introducing SQL for CRM Analytics"
domain: bi-dev-guide-sql
topic: introducing-sql-for-crm-analytics
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.144Z
estimatedTokens: 348
keywords: [Introducing, SQL, CRM, Analytics, query, language, lets, execute, queries, against, datasets, Structured, typically, working, data]
---

# Introducing SQL for CRM Analytics

> SQL for CRM Analytics is a query language that lets you execute queries against your CRM
  Analytics datasets. SQL (Structured Query Language) is typically used for working with data stored
  in relational databases—you might already be familiar with variants like MySQL and PostGreSQL. CRM
  Analytics uses the ANSI SQL interface to access CRM Analytics’s fast in-memory data store. It has
  native support of Salesforce features used in CRM Analytics, including sharing inheritance and
  custom fiscal calendars.

# Introducing SQL for CRM Analytics

SQL for CRM Analytics is a query language that lets you execute queries against your CRM Analytics datasets. SQL (Structured Query Language) is typically used for working with data stored in relational databases—you might already be familiar with variants like MySQL and PostGreSQL. CRM Analytics uses the ANSI SQL interface to access CRM Analytics’s fast in-memory data store. It has native support of Salesforce features used in CRM Analytics, including sharing inheritance and custom fiscal calendars.

SQL for CRM Analytics supports these standard SQL features.

-   SELECT Clause
-   FROM Clause
-   WHERE Clause
-   GROUP BY Clause
-   GROUP BY ROLLUP
-   GROUPING()
-   HAVING Clause
-   ORDER BY Clause
-   LIKE Clause
-   LIMIT Clause
-   FETCH Clause
-   OFFSET Clause
-   CASE statements
-   COALESCE()
-   NULLIF()
-   UNION Operator
-   Aggregate, windowing, math, and string functions
-   Subqueries

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_sql)

#### Note

These features don’t support the full range of cases covered by ANSI SQL. Refer to each statement in the SQL for CRM Analytics reference for more information.

#### See Also

-   [*Add Row-Level Security by Inheriting Sharing Rules*](https://help.salesforce.com/s/articleView?id=bi_security_datasets_sharing_about.htm&language=en_US)
