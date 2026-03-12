---
title: "Aggregate Functions"
domain: soql-sosl
topic: aggregate-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.622Z
estimatedTokens: 614
keywords: [Aggregate, Functions, GROUP, clause, SOQL, queries, generate, reports, analysis, include, AVG, COUNT, MIN, MAX, SUM]
---

# Aggregate Functions

> Use aggregate functions in a GROUP BY
				clause in SOQL queries to generate reports for analysis. Aggregate
		functions include AVG(), COUNT(), MIN(), MAX(), SUM(), and more.

# Aggregate Functions

Use aggregate functions in a GROUP BY clause in SOQL queries to generate reports for analysis. Aggregate functions include AVG(), COUNT(), MIN(), MAX(), SUM(), and more.

You can also use aggregate functions *without* using a GROUP BY clause. For example, you could use the AVG() aggregate function to find the average Amount for all your opportunities.

```

```

However, these functions become a more powerful tool to generate reports when you use them with a GROUP BY clause. For example, you could find the average Amount for all your opportunities by campaign.

```

```

This table lists all the aggregate functions supported by SOQL.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

All aggregate functions ignore null values, except for COUNT() and COUNT(Id).

COUNT(fieldname) is different from COUNT(). COUNT(fieldname) does ignore null values.

| Aggregate Function | Description |
| --- | --- |
| AVG() | Returns the average value of a numeric field. For example:SELECT CampaignId, AVG(Amount) FROM Opportunity GROUP BY CampaignId |
| COUNT() and COUNT(fieldName) | Returns the number of rows matching the query criteria. For example using COUNT():SELECT COUNT() FROM Account WHERE Name LIKE 'a%'For example using COUNT(fieldName):SELECT COUNT(Id) FROM Account WHERE Name LIKE 'a%'NoteCOUNT() and COUNT(Id) in SOQL are similar to COUNT(*) in SQL. |
| COUNT_DISTINCT() | Returns the number of distinct non-null field values matching the query criteria. For example:SELECT COUNT_DISTINCT(Company) FROM Lead NoteCOUNT_DISTINCT(fieldName) in SOQL is equivalent to COUNT(DISTINCT fieldName) in SQL. . |
| MIN() | Returns the minimum value of a field. For example:SELECT MIN(CreatedDate), FirstName, LastName FROM Contact GROUP BY FirstName, LastNameIf you use the MIN() or MAX() functions on a picklist field, the function uses the sort order of the picklist values instead of alphabetical order. |
| MAX() | Returns the maximum value of a field. For example:SELECT Name, MAX(BudgetedCost) FROM Campaign GROUP BY NameAvailable in API version 18.0 and later. |
| SUM() | Returns the total sum of a numeric field. For example:SELECT SUM(Amount) FROM Opportunity WHERE IsClosed = false AND Probability > 60 |

You can't use a LIMIT clause in a query that uses an aggregate function, but does not use a GROUP BY clause. For example, the following query is invalid:

```

```

## Code Examples

```
SELECT AVG(Amount)
FROM Opportunity
```

```
SELECT CampaignId, AVG(Amount)
FROM Opportunity
GROUP BY CampaignId
```

```
SELECT CampaignId, AVG(Amount)
FROM Opportunity
GROUP BY CampaignId
```

```
SELECT COUNT()
FROM Account
WHERE Name LIKE 'a%'
```

```
SELECT COUNT(Id)
FROM Account
WHERE Name LIKE 'a%'
```
