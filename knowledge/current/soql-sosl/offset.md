---
title: "OFFSET"
domain: soql-sosl
topic: offset
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:19.778Z
estimatedTokens: 1097
keywords: [OFFSET, expecting, records, query’s, results, display, multiple, pages, clause, SOQL, query, 51–75, jump, displaying, 301–350]
---

# OFFSET

> When expecting many records in a query’s results, you can display the results in
        multiple pages by using the OFFSET clause on a SOQL
        query. For example, you can use OFFSET to display records
        51–75 and then jump to displaying records 301–350. Using OFFSET is an efficient way to handle large results sets.

# OFFSET

When expecting many records in a query’s results, you can display the results in multiple pages by using the OFFSET clause on a SOQL query. For example, you can use OFFSET to display records 51–75 and then jump to displaying records 301–350. Using OFFSET is an efficient way to handle large results sets.

Use OFFSET to specify a starting row in the result set returned by a query. Because the offset calculation is done on the server and only the result subset is returned, using OFFSET is more efficient than retrieving the full result set and then filtering the results locally. OFFSET is available in API version 24.0 and later.

```

```

As an example, if a SOQL query normally returned 100 rows, you could use OFFSET 10 in your query to skip the first 10 rows. The result set for the example query would be a subset of the full result set, returning rows 11 through 110 of the full set.

```

```

## Considerations When Using OFFSET

Here are a few points to consider when using OFFSET in your queries:

-   The maximum offset is 2,000 rows. Requesting an offset greater than 2,000 results in a NUMBER\_OUTSIDE\_VALID\_RANGE error.
-   The OFFSET clause is allowed in SOQL used in SOAP API, REST API, and Apex. It’s not allowed in SOQL used within Bulk APIs or Streaming API.
-   OFFSET is intended to be used in a top-level query, and is not allowed in most subqueries, so the following query is invalid and returns a MALFORMED\_QUERY error:

    ```

    ```

    A subquery can use OFFSET only if the parent query has a LIMIT 1 clause. The following query is a valid use of OFFSET in a subquery:

    ```

    ```

    OFFSET cannot be used as a subquery in the WHERE clause, even if the parent query uses LIMIT 1.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

    #### Note

    Using OFFSET in subqueries is a pilot feature that is subject to change in future releases, and is not intended for use in a production setting. There is no support associated with this pilot feature. For more information, contact Salesforce

-   We recommend using an ORDER BY clause when you use OFFSET to ensure that the result set ordering is consistent. The row order of a result set that does not have an ORDER BY clause has a stable ordering, however the ordering key is subject to change and should not be relied on.
-   We recommend using a LIMIT clause with OFFSET if you need to retrieve subsequent subsets of the same result set. For example, you could retrieve the first 100 rows of a query using the following:

    ```

    ```

    You could then retrieve the next 100 rows, 101 through 201, using the following query:

    ```

    ```

-   OFFSET is applied to the result set returned at the time of the query. No server-side cursor and query locator are created to cache and find the full result set for future OFFSET queries. The page results may change if the underlying data is modified during multiple queries using OFFSET into the same result set. As an example, suppose that the following query normally returns a full result set of 50 rows, and the first 10 rows are skipped using an OFFSET clause:

    ```

    ```

    After the query is run, 10 new rows are then inserted into Merchandise\_\_c with Name values that come early in the sort order. If the query is run again, with the same OFFSET value, a different set of rows is skipped. If you need to query multiple pages of records and consistently locate specific records in the database, use the [queryMore()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_querymore.htm "HTML (New Window)") call.
-   Offsets are not intended to be used as a replacement for using [queryMore()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_querymore.htm "HTML (New Window)"), given the maximum offset size and lack of a server-side cursor. Multiple queries with offsets into a large result set has a higher performance impact than using [queryMore()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_querymore.htm "HTML (New Window)") against a server-side cursor.
-   When using OFFSET, only the first batch of records is returned for a given query. If you want to retrieve the next batch, you’ll need to re-execute the query with a higher offset value.

## Code Examples

```
SELECT fieldList
FROM objectType
[WHERE conditionExpression] 
ORDER BY fieldOrderByList
LIMIT numberOfRowsToReturn
OFFSET numberOfRowsToSkip
```

```
SELECT Name
FROM Merchandise__c
WHERE Price__c > 5.0
ORDER BY Name
LIMIT 100
OFFSET 10
```

```
SELECT Name, Id
FROM Merchandise__c
WHERE Id IN 
   (
     SELECT Id
     FROM Discontinued_Merchandise__c
     LIMIT 100
     OFFSET 20
   )
ORDER BY Name
```

```
SELECT Name, Id,
    (
        SELECT Name FROM Opportunities LIMIT 10 OFFSET 2
    )
FROM Account
ORDER BY Name
LIMIT 1
```

```
SELECT Name, Id
FROM Merchandise__c
ORDER BY Name
LIMIT 100
OFFSET 0
```
