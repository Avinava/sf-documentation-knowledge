---
title: "QueryResult"
domain: api
topic: queryresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.464Z
estimatedTokens: 489
keywords: [QueryResult, read-only, SObject, query, results, additional, data, queryMore, call]
---

# QueryResult

> A read-only SObject that contains query results and additional data about the query,
    returned in response to a query() or queryMore() call.

# QueryResult

A read-only SObject that contains query results and additional data about the query, returned in response to a query() or queryMore() call.

QueryResult only returns responses to queries that don't use an [aggregate function](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm), such as MAX(). For queries with an aggregate function, results are returned in [AggregateResult](atlas.en-us.api.meta/api/sforce_api_calls_query_aggregateresult.htm "A read-only SObject that returns query results only if a query call contains an aggregate function, such as MAX().").

The QueryResult object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| queryLocator | QueryLocator | Points to a server-side cursor in the database. Tracks the current processing location in the query results set and indicates the location of additional results, A query locator is a specialized string, similar to an ID, and is 18 characters long and begins with the prefix 0r8. Used in queryMore() for retrieving subsequent sets of objects from the query results, if needed. |
| done | boolean | Indicates whether additional rows must be retrieved from the query results (false) using queryMore(), or not (true). Use this value as a loop condition while iterating through the query results. |
| records | sObject[] | Array of sObjects representing individual objects of the specified object and containing data defined in the field list specified in the queryString. |
| size | int | Total number of rows retrieved in the query. Use this value to determine whether the query retrieved any rows (size > 0) or not (size = 0). Querying external objects is supported, but an external data source doesn’t provide a count of the number of rows retrieved. When the number of rows retrieved from an external data source is unknown, the value is automatically set to size = -1. |

## Related Topics

- AggregateResult (atlas.en-us.api.meta/api/sforce_api_calls_query_aggregateresult.htm)
- QueryLocator (atlas.en-us.api.meta/api/sforce_api_calls_query_querylocator.htm)
- queryMore() (atlas.en-us.api.meta/api/sforce_api_calls_querymore.htm)
- sObjects (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- queryString (atlas.en-us.api.meta/api/sforce_api_calls_query.htm)
