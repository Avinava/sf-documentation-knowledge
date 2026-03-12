---
title: "SQL Statements"
domain: bi-dev-guide-sql
topic: sql-statements
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.251Z
estimatedTokens: 183
keywords: [SQL, Statements, statement, access, perform, operations, data, tables, database]
---

# SQL Statements

> Use a SQL statement to access and perform operations on data from one or more tables in
  your database.

# SQL Statements

Use a SQL statement to access and perform operations on data from one or more tables in your database.

A statement is made up of a series of clauses. It must include the keywords SELECT and FROM. SELECT indicates which columns to retrieve, and FROM indicates which tables the columns are in. A statement follows this syntax:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_sql)

#### Note

Einstein Analytics SQL does not support the use of \* with the SELECT clause. You must specify which columns to retrieve.

-   **[SELECT Clause](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_select.htm)**
    The SELECT clause retrieves columns from a table.

## Code Examples

```
SELECT column_name FROM table_name
```

## Related Topics

- SELECT Clause (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_select.htm)
