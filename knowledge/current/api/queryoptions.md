---
title: "QueryOptions"
domain: api
topic: queryoptions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.748Z
estimatedTokens: 359
keywords: [QueryOptions, preferred, batch, size, queries, system, sometimes, creates, batches, larger, smaller, maximize, performance, Associated, API]
---

# QueryOptions

> Specifies the preferred batch size for queries. The system sometimes creates batches
    that are larger or smaller than the specified size to maximize performance.

# QueryOptions

Specifies the preferred batch size for queries. The system sometimes creates batches that are larger or smaller than the specified size to maximize performance.

## Associated API Calls

[query()](atlas.en-us.api.meta/api/sforce_api_calls_query.htm "Executes a query against the specified object and returns data that matches the stated conditions."), [queryMore()](atlas.en-us.api.meta/api/sforce_api_calls_querymore.htm "Retrieves the next batch of query results."), [retrieve()](atlas.en-us.api.meta/api/sforce_api_calls_retrieve.htm "Retrieves one or more records based on the specified IDs.")

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| batchSize | int | The batch size for the number of records returned in a query() or queryMore() call. Child objects count toward the number of records for the batch size. For example, in relationship queries, multiple child objects are returned per parent row returned.The default and the maximum are 2,000; the minimum is 200. There is no guarantee that the requested batch size is the actual batch size. To maximize performance, the number of results returned can vary based on the size and complexity of the records.. |

## Sample Code

For code examples, see Change the Batch Size in Queries in the [Salesforce SOQL and SOSL Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

## Related Topics

- query() (atlas.en-us.api.meta/api/sforce_api_calls_query.htm)
- queryMore() (atlas.en-us.api.meta/api/sforce_api_calls_querymore.htm)
- retrieve() (atlas.en-us.api.meta/api/sforce_api_calls_retrieve.htm)
