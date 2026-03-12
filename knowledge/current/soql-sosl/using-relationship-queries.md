---
title: "Using Relationship Queries"
domain: soql-sosl
topic: using-relationship-queries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.599Z
estimatedTokens: 646
keywords: [Relationship, Queries, SOQL, query, several, Child-to-Parent, Relationships, Parent-to-Child, Traverse]
---

# Using Relationship Queries

> Use SOQL to query several relationship types.

# Using Relationship Queries

Use SOQL to query several relationship types.

## Query Child-to-Parent Relationships

Query child-to-parent relationships, which are often many-to-one, using the dot (.) operator. Specify these relationships directly in the SELECT, FROM, or WHERE clauses.

```

```

This query returns the ID and name for only the contacts whose related account industry is media, and for each contact returned, the account name.

## Query Parent-to-Child Relationships

Query parent-to-child relationships, which are almost always one-to-many, using subqueries enclosed in parentheses. Specify these relationships in a subquery, where the initial member of the FROM clause in the subquery is related to the initial member of the outer query FROM clause. For standard object subqueries, the name of the relationship is the plural name of the child object.

In API version 58.0 and later, SOQL queries can contain up to five levels of parent-to-child relationships. The ability to query five levels of parent-child relationships is limited to SOQL queries via REST, SOAP, and Apex query calls for standard and custom objects.

In each relationship, the parent is counted as the first level of the query and the child relationships can be up to four levels deep from the parent root. SOQL queries that include more than five levels of parent-to-child relationships result in an error.

This example SOQL query includes five levels of parent-child relationships.

```

```

If you include a WHERE clause in a subquery, the clause filters on any object in the current scope that is reachable from the parent root of the query, via the parent relationships.

This example query returns the name for all accounts whose industry is media. For each account returned, returns the last name of every contact whose created-by alias is 'x.'

```

```

To understand the versioned behavior of SOQL queries that traverse parent-to-child relationships, see [Relationship Query Limitations](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_limits.htm#OneLevelPerQuery).

## Traverse Relationship Queries

Here are some examples of relationship queries that traverse both parent-to-child and child-to-parent relationships.

This example query returns the name of all the accounts in an organization, and for each account, the name of the user who created each note for the account. If there were no notes for the account, the result set is empty.

```

```

Another example query that traverses parent-to-child and child-to-parent relationships.

```

```

## Code Examples

```
SELECT Id, Name, Account.Name
FROM Contact 
WHERE Account.Industry = 'media'
```

```
SELECT Name,
    (SELECT LastName,
        (SELECT AssetLevel,
            (SELECT Description,
                (SELECT LineItemNumber FROM WorkOrderLineItems)    
            FROM WorkOrders)    
        FROM Assets)    
    FROM Contacts)    
FROM Account
```

```
SELECT Name,
  (
    SELECT LastName
    FROM Contacts
    WHERE CreatedBy.Alias = 'x') 
 FROM Account WHERE Industry = 'media'
```

```
SELECT Name,
  (
    SELECT CreatedBy.Name
    FROM Notes
  )
FROM Account
```

```
SELECT Amount, Id, Name, (SELECT Quantity, ListPrice,
  PriceBookEntry.UnitPrice, PricebookEntry.Name,
  PricebookEntry.product2.Family FROM OpportunityLineItems)
  FROM Opportunity
```

## Related Topics

- Relationship Query Limitations (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_limits.htm)
