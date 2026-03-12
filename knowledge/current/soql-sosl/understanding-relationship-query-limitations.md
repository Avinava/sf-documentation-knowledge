---
title: "Understanding Relationship Query Limitations"
domain: soql-sosl
topic: understanding-relationship-query-limitations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:19.589Z
estimatedTokens: 807
keywords: [Understanding, Relationship, Query, Limitations, design, SOQL, queries, there, several, consider]
---

# Understanding Relationship Query Limitations

> When you design SOQL relationship queries, there are several limitations to
    consider.

# Understanding Relationship Query Limitations

When you design SOQL relationship queries, there are several limitations to consider.

-   Relationship queries aren’t the same as SQL joins. You must have a relationship between objects to create a join in SOQL.
-   No more than 55 child-to-parent relationships can be specified in a query. A custom object allows up to 40 relationships, so you can reference all the child-to-parent relationships for a custom object in one query.
-   A single query of polymorphic fields can count multiple times against the child-to-parent relationship limit. For example, this query has 3 relationships that count against the limit.

    ```

    ```

    What, Account, and Opportunity count against this limit.

    This query has 1 relationship that counts against the limit because it specifies a single record via ID. Only the specified record is queried.

    ```

    ```

    The same relationship used multiple times in a query also count as 1 relationship.
-   No more than 20 parent-to-child relationships can be specified in a query.
-   In each specified relationship, no more than five levels can be specified in a child-to-parent relationship. For example, Contact.Account.Owner.FirstName (three levels).
-   In API version 57.0 and earlier, only two levels of parent-to-child relationship can be specified in a query.
-   In API version 58.0 and later, up to five levels of parent-to-child relationship can be queried via REST, SOAP, and Apex query calls for standard and custom objects. SOQL queries with five-level parent-to-child relationships aren't supported for big objects, external objects, or Bulk API and Bulk API 2.0.
-   You can query notes and attachments to get information about them, but you can’t filter on the body of the note or attachment. You can’t filter against the content of textarea fields, blobs, or Scontrol components in any object. For example, this query is valid, and it returns all account names and the owner ID for any notes associated with the account.

    ```

    ```

    However, this query isn’t valid, because it attempts to evaluate information stored in the body of the note.

    ```

    ```

    If you remove the WHERE clause, the query is valid and returns the contents of the body of the note.

    ```

    ```

-   You can’t use the USING SCOPE clause to limit the results of a parent-child relationship query to a specified scope.
-   Consider these limitations for external objects.
    -   A subquery that involves external objects or a filter on parent external objects can fetch up to 1,000 rows of data.
    -   Each SOQL query can have up to 4 joins across external objects and other types of objects.

        Each join requires a separate round trip to the external system when executing the query. Expect longer response times for each join in a query.

    -   External objects don’t support the ORDER BY clause in relationship queries. This limit applies only when the external data is accessed via the OData 2.0 adapter for Salesforce Connect.
    -   If the primary or “driving” object for a SELECT statement is an external object, queryMore() supports only that primary object and doesn’t support subqueries.

## Code Examples

```
SELECT 
  TYPEOF What
    WHEN Account THEN Phone, NumberOfEmployees
    WHEN Opportunity THEN Amount, CloseDate
    ELSE Name, Email
  END
FROM Event
```

```
SELECT 
  TYPEOF What
    WHEN Account THEN Phone, NumberOfEmployees
    WHEN Opportunity THEN Amount, CloseDate
    ELSE Name, Email
  END
FROM Event WHERE ID="someId"
```

```
SELECT Account.Name, (SELECT Note.OwnerId FROM Account.Notes) FROM Account
```

```
SELECT Account.Name, (SELECT Note.Body FROM Account.Notes WHERE Note.Body LIKE 'D%') FROM Account
```

```
SELECT Account.Name, (SELECT Note.Body FROM Account.Notes) FROM Account
```
