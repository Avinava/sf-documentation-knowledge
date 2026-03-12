---
title: "Understanding Bulk API 2.0 Query"
domain: api-asynch
topic: understanding-bulk-api-20-query
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:59.513Z
estimatedTokens: 796
keywords: [Understanding, Bulk, API, 2.0, Query, availability, SOQL, considerations, URIs, Chunking, Jobs]
---

# Understanding Bulk API 2.0 Query

> Learn about Bulk API 2.0 query availability, supported methods, and SOQL
		considerations.

# Understanding Bulk API 2.0 Query

Learn about Bulk API 2.0 query availability, supported methods, and SOQL considerations.

Bulk API 2.0 query jobs enable asynchronous processing of SOQL queries. There is always an empty “parent” batch which is related to the initial upload, followed by sub-batches for processing the upload in parallel. The API automatically handles retries. If you receive a message that the API retried more than 15 times, apply a filter criteria and try again. When you get the results of a query job, the response body is always compressed.

## Availability

Query jobs in Bulk API 2.0 are available in API version 47.0 and later.

## Supported URIs and Methods

This table lists the URIs and methods supported by queries in Bulk API 2.0.

| URI | HTTP Method | Description |
| --- | --- | --- |
| /services/data/vXX.X/jobs/query | POST | Creates a query job. |
| /services/data/vXX.X/jobs/query | GET | Gets information about all query jobs in the org. |
| /services/data/vXX.X/jobs/query/queryJobId | GET | Gets information about one query job. |
| /services/data/vXX.X/jobs/query/queryJobId/results | GET | Gets the results for a query job. |
| /services/data/vXX.X/jobs/query/queryJobId | PATCH | Aborts a query job. |
| /services/data/vXX.X/jobs/query/queryJobId | DELETE | Deletes a query job. |

## Chunking Query Jobs

Bulk API 2.0 is optimized to chunk large query jobs if the object being queried supports chunking. This optimization includes custom objects, and any Sharing and History tables that support standard objects. Instead of manually configuring batches, Bulk API 2.0 query jobs automatically determine the best way to divide your query job into smaller chunks, helping to avoid failures or timeouts.

To determine whether an object supports PK chunking, refer to the isPkChunkingSupported field in the response body of the [Get Information About a Query Job](atlas.en-us.api_asynch.meta/api_asynch/query_get_one_job.htm "Gets information about one query job.") query.

## SOQL Considerations

LIMIT and ORDER BY disable PKChunking for SOQL queries. With PKChunking disabled, queries take longer to execute, and potentially result in query timeouts. If ORDER BY or LIMIT is used, and you experience query time outs, then remove the ORDER BY or LIMIT clause before any subsequent troubleshooting.

Bulk API 2.0 doesn’t support SOQL queries that include any of these items:

-   GROUP BY, OFFSET, or TYPEOF clauses.
-   Aggregate Functions such as COUNT().
-   Date functions in GROUP BY clauses. (Date functions in WHERE clauses are supported.)
-   Compound address fields or compound geolocation fields. (Instead, query the individual components of compound fields.)
-   Parent-to-child [relationship queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_understanding.htm "HTML (New Window)"). (Child-to-parent relationship queries are supported.)

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")

## Related Topics

- Get Information About a Query Job (atlas.en-us.api_asynch.meta/api_asynch/query_get_one_job.htm)
