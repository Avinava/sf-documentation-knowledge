---
title: "Unsupported PushTopic Queries"
domain: api-streaming
topic: unsupported-pushtopic-queries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.496Z
estimatedTokens: 621
keywords: [Unsupported, PushTopic, Queries, SOQL, statements, aren’t]
---

# Unsupported PushTopic Queries

> These SOQL statements aren’t supported in PushTopic queries.

# Unsupported PushTopic Queries

These SOQL statements aren’t supported in PushTopic queries.

-   Queries without an Id in the selected fields list
-   Semi-joins and anti-joins
    -   Example query: SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE Title = 'CEO')
    -   Error message: INVALID\_FIELD, semi/anti join sub-selects are not supported
-   Aggregate queries (queries that use AVG, MAX, MIN, and SUM)
    -   Example query: SELECT Id, AVG(AnnualRevenue) FROM Account
    -   Error message: INVALID\_FIELD, Aggregate queries are not supported
-   COUNT
    -   Example query: SELECT Id, Industry, Count(Name) FROM Account
    -   Error message: INVALID\_FIELD, Aggregate queries are not supported
-   LIMIT
    -   Example query: SELECT Id, Name FROM Contact LIMIT 10
    -   Error message: INVALID\_FIELD, 'LIMIT' is not allowed
-   Relationships aren’t supported, but you can reference an ID:
    -   Example query: SELECT Id, Contact.Account.Name FROM Contact
    -   Error message: INVALID\_FIELD, relationships are not supported
-   Searching for values in Text Area fields.
-   ORDER BY
    -   Example query: SELECT Id, Name FROM Account ORDER BY Name
    -   Error message: INVALID\_FIELD, 'ORDER BY' clause is not allowed
-   GROUP BY
    -   Example query: SELECT Id, AccountId FROM Contact GROUP BY AccountId
    -   Error message: INVALID\_FIELD, 'Aggregate queries are not supported'
-   Formula fields in WHERE clauses (But formula fields are supported in SELECT clauses.)
-   NOT

    -   Example query: SELECT Id FROM Account WHERE NOT Name = 'Salesforce.com'
    -   Error message: INVALID\_FIELD, 'NOT' is not supported

    To make this a valid query, change it to SELECT Id FROM Account WHERE Name != 'Salesforce.com'.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

    #### Note

    The NOT IN phrase is supported in PushTopic queries.

-   OFFSET
    -   Example query: SELECT Id, Name FROM Account WHERE City = 'New York' OFFSET 10
    -   Error message: INVALID\_FIELD, 'OFFSET' clause is not allowed
-   TYPEOF
    -   Example query: SELECT TYPEOF Owner WHEN User THEN LastName ELSE Name END FROM Case
    -   Error message: INVALID\_FIELD, 'TYPEOF' clause is not allowed
-   Roll-up summary fields. If a PushTopic query contains a roll-up summary field for an object, notifications aren’t be sent for changes (create, update, delete, and undelete) in that field.
