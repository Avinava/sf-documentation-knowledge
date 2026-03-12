---
title: "OFFSET  n"
domain: soql-sosl
topic: offset-n
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:19.883Z
estimatedTokens: 539
keywords: [OFFSET, expecting, records, query’s, results, display, multiple, pages, clause, SOSL, query, jump, displaying, efficient, way]
---

# OFFSET  n

> When expecting many records in a query’s results, you can display the results in
    multiple pages by using the OFFSET clause in a SOSL query.
    For example, you can use OFFSET to display records 51 to 75
    and then jump to displaying records 301 to 350. Using OFFSET
    is an efficient way to handle large results sets.

# OFFSET n

When expecting many records in a query’s results, you can display the results in multiple pages by using the OFFSET clause in a SOSL query. For example, you can use OFFSET to display records 51 to 75 and then jump to displaying records 301 to 350. Using OFFSET is an efficient way to handle large results sets.

Use the optional OFFSET to specify the starting row offset into the result set returned by your query. Because the offset calculation is done on the server and only the result subset is returned, using OFFSET is more efficient than retrieving the full result set and then filtering the results locally. OFFSET can be used only when querying a single object. OFFSET must be the last clause specified in a query. OFFSET is available in API version 30.0 and later.

```

```

As an example, if a query normally returned 50 rows, you could use OFFSET 10 in your query to skip the first 10 rows:

```

```

The result set for the preceding example would be a subset of the full result set, returning rows 11 through 20 of the full set.

## Considerations When Using OFFSET

Consider these points when using OFFSET in your queries:

-   The maximum offset is 2,000 rows. Requesting an offset greater than 2,000 will result in a System.SearchException: SOSL offset should be between 0 to 2000 error.
-   We recommend using a LIMIT clause in combination with OFFSET if you need to retrieve subsequent subsets of the same result set. For example, you could retrieve the first 100 rows of a query using the following:

    ```

    ```

    You could then retrieve the next 100 rows, 101 through 200, using the following query:

    ```

    ```

-   When using OFFSET, only the first batch of records will be returned for a given query. If you want to retrieve the next batch, you’ll need to re-execute the query with a higher offset value.
-   Consecutive SOSL requests for the same search term but with a different OFFSET aren’t guaranteed to return a different subset of the same data if the data being searched has been updated since the previous request.
-   The OFFSET clause is allowed in SOSL used in SOAP API, REST API, and Apex.

## Code Examples

```
FIND {conditionExpression} RETURNING objectType(fieldList ORDER BY fieldOrderByList
LIMIT number_of_rows_to_return
OFFSET number_of_rows_to_skip)
```

```
FIND {test} RETURNING Account(id LIMIT 10 OFFSET 10)
```

```
FIND {test} RETURNING Account(Name, Id ORDER BY Name LIMIT 100)
```

```
FIND {test} RETURNING Account(Name, Id ORDER BY Name LIMIT 100 OFFSET 100)
```
