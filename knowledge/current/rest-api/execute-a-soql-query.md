---
title: "Execute a SOQL Query"
domain: rest-api
topic: execute-a-soql-query
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:24.950Z
keywords: [Execute, SOQL, Query, Retrieving, Remaining, Results]
---

# Execute a SOQL Query

# Execute a SOQL Query

Use the Query resource to execute a SOQL query that returns all the results in a single response, or if needed, returns part of the results and a locator used to retrieve the remaining results.

The following query requests the value from name fields from all Account records.

Example usage for executing a query

```

```

Example request body for executing a query

none required

Example response body for executing a query

```

```

## Retrieving the Remaining SOQL Query Results

If the initial query returns only part of the results, the end of the response contains a field called nextRecordsUrl:

```

```

In such cases, request the next batch of records and repeat until all records have been retrieved. These requests use nextRecordsUrl, and don't include any parameters.

Example usage for retrieving the remaining query results

```

```

Example request body for retrieving the remaining query results

none required

Example response body for retrieving the remaining query results

```

```