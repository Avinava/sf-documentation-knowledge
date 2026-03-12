---
title: "Comparison Operators"
domain: soql-sosl
topic: comparison-operators
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:19.648Z
estimatedTokens: 2376
keywords: [Comparison, Operators, SOQL, queries, include, expression, clause, SELECT, statement, complex, semi-joins, anti-joins, Considerations, Semi-Join, Anti-Join]
---

# Comparison Operators

> SOQL queries can include comparison operators, such as =, <, >, IN, and LIKE in the field expression of a WHERE clause, which you use in a SELECT statement. You can also use comparison operators to create complex queries with semi-joins and anti-joins.

# Comparison Operators

SOQL queries can include comparison operators, such as =, <, >, IN, and LIKE in the field expression of a WHERE clause, which you use in a SELECT statement. You can also use comparison operators to create complex queries with semi-joins and anti-joins.

The following table lists the comparisonOperator values that are used in fieldExpression syntax.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

Comparisons on strings are case-sensitive for unique case-sensitive fields and case-insensitive for all other fields.

| Operator | Name | Description |
| --- | --- | --- |
| = | Equals | Expression is true if the value in the fieldName equals the value in the expression. |
| != | Not equals | Expression is true if the value in the fieldName doesn’t equal the specified value. |
| < | Less than | Expression is true if the value in the fieldName is less than the specified value. |
| <= | Less or equal | Expression is true if the value in the fieldName is less than or equal to the specified value. |
| > | Greater than | Expression is true if the value in the fieldName is greater than the specified value. |
| >= | Greater or equal | Expression is true if the value in the fieldName is greater than or equal to the specified value. |
| LIKE | Like | Expression is true if the value in the fieldName matches the characters of the text string in the specified value. The text string in the specified value must be enclosed in single quotes.The LIKE operator is supported for string fields only. The operator provides a mechanism for matching partial text strings and includes support for:.The % and _ wildcards.The % wildcard matches zero or more characters.The _ wildcard matches exactly one character.The escaping of special characters % or _.NoteDon’t use the backslash (\) character in a search except to escape a special character. See Quoted String Escape Sequences.This example query matches Appleton, Apple, and Appl, but not Bappl.SELECT AccountId, FirstName, lastname FROM Contact WHERE lastname LIKE 'appl%' |
| IN | IN | If the value equals any one of the values in a WHERE clause. The string values for IN must be in parentheses and surrounded by single quotes.You can query values in a field where another field on the same object has a specified set of values, using IN. For example:SELECT Name FROM Account WHERE BillingState IN ('California', 'New York')You can also use IN and NOT IN for semi-joins and anti-joins when querying on ID (primary key) or reference (foreign key) fields. |
| NOT IN | NOT IN | If the value doesn’t equal any of the values in a WHERE clause. The string values for NOT IN must be in parentheses and surrounded by single quotes. For example:SELECT Name FROM Account WHERE BillingState NOT IN ('California', 'New York')NoteThe logical operator NOT is unrelated to this comparison operator. |
| INCLUDES EXCLUDES |  | Applies only to multi-select picklists. See Query Multi-Select Picklists. |

## Semi-Joins with IN and Anti-Joins with NOT IN

A semi-join is a subquery on another object in an IN clause to restrict the records returned. An anti-join is a subquery on another object in a NOT IN clause to restrict the records returned. You can create more complex queries by replacing the list of values in the IN or NOT IN clause with a subquery. The subquery can filter by ID (primary key) or reference (foreign key) fields.

Sample uses of semi-joins and anti-joins include:

-   Get all contacts for accounts that have an opportunity with a particular record type.
-   Get all open opportunities for accounts that have active contracts.
-   Get all open cases for contacts that are the decision maker on an opportunity.
-   Get all accounts that don’t have any open opportunities.

If you filter by an ID field, you can create parent-to-child semi- or anti-joins, such as Account to Contact. If you filter by a reference field, you can create child-to-child semi- or anti-joins, such as Contact to Opportunity, or child-to-parent semi- or anti-joins, such as Opportunity to Account.

ID Field Semi-Join

You can include a semi-join in a WHERE clause. For example, this query returns account IDs if an associated opportunity is lost:

```

```

This example is a parent-to-child semi-join from Account to Opportunity. Notice that the left operand, Id, of the IN clause is an ID field. The subquery returns a single field of the same type as the field to which it’s compared. For restrictions that prevent unnecessary processing of semi-join queries, see [Considerations](#semi_anti_limitations).

Reference Field Semi-Join

The following query returns task IDs for all contacts in Twin Falls:

```

```

Notice that the left operand, WhoId, of the IN clause is a reference field. An interesting aspect of this query is that WhoId is a polymorphic reference field as it can point to a contact or a lead. The subquery restricts the results to contacts.

ID Field Anti-Join

This query returns account IDs for all accounts that don’t have any open opportunities:

```

```

Reference Field Anti-Join

This query returns opportunity IDs for all contacts whose source isn’t Web:

```

```

This example is a child-to-child anti-join from Opportunity to Contact.

Multiple Semi-Joins or Anti-Joins

You can combine semi-join or anti-join clauses in a query. For example, the following query returns account IDs that have open opportunities if the last name of the contact associated with the account is like the last name “Apple”:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

You can use at most two subqueries in a single semi-join or anti-join query. Multiple semi-joins and anti-join queries are also subject to existing limits on subqueries per query.

Semi-Joins or Anti-Joins Evaluating Relationship Queries

You can create a semi-join or anti-join that evaluates a [relationship query](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships.htm "Client applications need to be able to query for more than a single type of object at a time. SOQL provides syntax to support these types of queries, called relationship queries, against standard objects and custom objects. Relationship queries traverse parent-to-child and child-to-parent relationships between objects to filter and return results.") in a SELECT clause. For example, the following query returns opportunity IDs and their related line items if the opportunity's line item total value is more than $10,000:

```

```

## Considerations for Semi-Join and Anti-Join Queries

Because a great deal of processing work is required for semi-join and anti-join queries, Salesforce imposes the following restrictions to maintain the best possible performance:

-   **Basic limits:**
    -   You can’t use more than two IN or NOT IN statements per WHERE clause.
    -   You can’t use the NOT operator as a conjunction with semi-joins and anti-joins. Using it converts a semi-join to an anti-join, and the reverse. Instead of using the NOT operator, write the query in the appropriate semi-join or anti-join form.
-   **Main query limits:**

    The following restrictions apply to the main WHERE clause of a semi-join or anti-join query:

    -   The left operand must query a single ID (primary key) or reference (foreign key) field. The selected field in a subquery can be a reference field. For example:

        ```

        ```

    -   The left operand can't use relationships. For example, the following semi-join query is invalid due to the Account.Id relationship field:

        ```

        ```

-   **Subquery limits:**
    -   A subquery must query a field referencing the same object type as the main query.
    -   There’s no limit on the number of records matched in a subquery. Standard SOQL query limits apply to the main query.
    -   The selected column in a subquery must be a foreign key field, and can’t traverse relationships. This limit means that you can’t use dot notation in a selected field of a subquery. For example, the following query is valid:

        ```

        ```

        Using Account.Id (dot notation) instead of AccountId isn’t supported. Similarly, subqueries like Contact.AccountId FROM Case are invalid.

    -   You can’t query on the same object in a subquery as in the main query. You can write such self semi-join queries without using semi-joins or anti-joins. For example, the following self semi-join query is invalid:

        ```

        ```

        Rewrite the query in a valid form, for example:

        ```

        ```

    -   You can’t nest a semi-join or anti-join statement in another semi-join or anti-join statement.
    -   You can’t use semi-joins and anti-joins in a HAVING clause.
    -   You can use semi-joins and anti-joins in the main WHERE statement, but not in a subquery WHERE statement. For example, the following query is valid:

        ```

        ```

        The following query is invalid since the nested query is an extra level deep:

        ```

        ```

    -   You can’t use subqueries with OR.
    -   COUNT, FOR UPDATE, ORDER BY, and LIMIT aren’t supported in subqueries.
    -   The following objects aren’t currently supported in subqueries:
        -   ActivityHistory
        -   Attachments
        -   Event
        -   Note
        -   OpenActivity
        -   Tags (AccountTag, ContactTag, and all other tag objects)
        -   Task

## Code Examples

```
SELECT AccountId, FirstName, lastname
FROM Contact
WHERE lastname LIKE 'appl%'
```

```
SELECT Name FROM Account
WHERE BillingState IN ('California', 'New York')
```

```
SELECT Name FROM Account
WHERE BillingState NOT IN ('California', 'New York')
```

```
SELECT Id, Name 
FROM Account 
WHERE Id IN 
  ( SELECT AccountId
    FROM Opportunity
    WHERE StageName = 'Closed Lost' 
  )
```

```
SELECT Id
FROM Task 
WHERE WhoId IN 
  (
    SELECT Id
    FROM Contact
    WHERE MailingCity = 'Twin Falls'
  )
```

## Related Topics

- Quoted
									String Escape Sequences (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_quotedstringescapes.htm)
- Query
								Multi-Select Picklists (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_querying_multiselect_picklists.htm)
- relationship query (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships.htm)
