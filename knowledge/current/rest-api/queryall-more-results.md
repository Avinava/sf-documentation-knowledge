---
title: "QueryAll More Results"
domain: rest-api
topic: queryall-more-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.846Z
estimatedTokens: 729
keywords: [QueryAll, Results, next, batch, results, request, query, locator., API, resource, executes, specified, request., REST, version, 29.0, later., Note, Syntax, Example]
---

# QueryAll More Results

> Returns the next batch of results from a QueryAll request using a query locator. This
		API resource executes the specified QueryAll request. This resource is available in REST API
		version 29.0 and later.

# QueryAll More Results

Returns the next batch of results from a QueryAll request using a query locator. This API resource executes the specified QueryAll request. This resource is available in REST API version 29.0 and later.

If the number of results returned from a SOQL query exceeds the number of requested records or the limit, the response contains a batch of results, a false value for done, and a query locator. Use the query locator in a QueryAll More Results request to retrieve the next batch of records. If there are still more records to be returned, the response contains a new query locator and done is false. You can continue retrieving results from the initial QueryAll request until done is true, which indicates that all results are returned.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

The URI specified in the nextRecordsUrl field of a QueryAll response body contains query instead of queryAll. To retrieve the next set of results, you can use either the Query More Results or the QueryAll More Results resources with the same query locator. The remaining results include deleted records that match the initial query.

For example, if the response body of a QueryAll request contains "nextRecordsUrl": "/services/data/v66.0/query/01g5e00001AH2dOAAT-4000", you can retrieve the next set of QueryAll results with either URI.

-   /services/data/v66.0/query/01g5e00001AH2dOAAT-4000
-   /services/data/v66.0/queryAll/01g5e00001AH2dOAAT-4000

The response contains the total number of records returned by the QueryAll request (totalSize), a boolean indicating whether there are no more results (done), the URI of the next set of records (nextRecordsUrl), and an array of query result records (records).

## Syntax

URI

/services/data/vXX.X/queryAll/queryLocator

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| queryLocator | A string used to retrieve the next set of query results. If there are more results to be retrieved, the previous set of QueryAll results contains the query locator in the nextRecordsUrl field. |

## Example

Example Response Body

```

```

## Resources for Executing SOQL Queries

-   To send a QueryAll request that includes deleted items, see [Execute a SOQL Query that Includes Deleted Items](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_queryall.htm "HTML (New Window)").
-   To increase the batch size of query results use the [Query Options Header](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/headers_queryoptions.htm "HTML (New Window)").
-   For more information about SOQL generally, see the [SOQL and SOSL Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_sosl_intro.htm).

## Code Examples

```
{
  "totalSize": 3222,
  "done": false,
  "nextRecordsUrl": "/services/data/v66.0/query/01gRO0000016PIAYA2-500",
  "records": [
    {
      "attributes": {
        "type": "Contact",
        "url": "/services/data/v66.0/sobjects/Contact/003RO0000035WQgYAM"
      },
      "Id": "003RO0000035WQgYAM",
      "Name": "John Smith"
    },
    ...
  ]
}
```
