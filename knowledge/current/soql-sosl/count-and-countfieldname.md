---
title: "COUNT() and COUNT(fieldName)"
domain: soql-sosl
topic: count-and-countfieldname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.661Z
estimatedTokens: 480
keywords: [COUNT, fieldName, discover, number, rows, query, aggregate, function, SELECT, statement, SOQL]
---

# COUNT() and COUNT(fieldName)

> To discover the number of rows that a query returns, use the aggregate function
			COUNT() in a SELECT statement of a SOQL query.

# COUNT() and COUNT(fieldName)

To discover the number of rows that a query returns, use the aggregate function COUNT() in a SELECT statement of a SOQL query.

## COUNT()

COUNT() returns the number of rows that match the filtering conditions.

For example:

```

```

```

```

For COUNT(), the size field of the QueryResult object returns the number of rows retrieved in the query. The records field returns null.

Note the following when using COUNT():

-   COUNT() must be the only element in the SELECT list.
-   The number of rows returned by COUNT() includes null values that match the filtering conditions of the query.
-   You can use COUNT() with a LIMIT clause.
-   You can't use COUNT() with an ORDER BY clause.

## COUNT(fieldName)

COUNT(fieldName) returns the number of rows that match the filtering conditions and have a non-null value for fieldName.

For example:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

COUNT() and COUNT(Id) in SOQL are similar to COUNT(\*) in SQL.

For COUNT(fieldName), the object in the records field returns the number of rows. The size field does not reflect the count. For example:

```

```

The count is returned in expr0, which is the implied alias for the aggregated field.

You can include multiple COUNT(fieldName) items in a SELECT clause. For example, the following query returns the number of opportunities, and the number of opportunities associated with a campaign.

```

```

You can use GROUP BY clause with COUNT(fieldName) to analyze your records and return summary reporting information. For example, the following query returns the number of leads for each LeadSource value:

```

```

#### See Also

-   [*Apex Reference Guide*: countQuery(query)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_countQuery)

## Code Examples

```
SELECT COUNT()
FROM Account
WHERE Name LIKE 'a%'
```

```
SELECT COUNT()
FROM Contact, Contact.Account
WHERE Account.Name = 'MyriadPubs'
```

```
SELECT COUNT(Id)
FROM Account
WHERE Name LIKE 'a%'
```

```
SELECT COUNT(Id)
FROM Account
WHERE Name LIKE 'a%'
```

```
SELECT COUNT(Id), COUNT(CampaignId)
FROM Opportunity
```
