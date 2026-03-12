---
title: "Query"
domain: rest-api
topic: query
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.671Z
estimatedTokens: 581
keywords: [Query, Runs, SOQL, Resources, Running, Queries]
---

# Query

> Runs the specified SOQL query.

# Query

Runs the specified SOQL query.

When a SOQL query is executed, up to 2,000 records can be returned at a time in a synchronous request. However, to optimize performance, the returned batch can include fewer records than the limit or what's set in the request, based on the size and complexity of records queried. If the total number of results exceeds the limit or the requested number of results, the response contains the first batch of records, a false value for done, and a query locator. You can use the query locator with the [Query More Results](atlas.en-us.api_rest.meta/api_rest/resources_query_more_results.htm "Returns the next batch of results from a SOQL query using a query locator.") resource to retrieve the next batch of records.

The response contains the total number of records returned by the Query request (totalSize), a boolean indicating whether there are no more results (done), the URI of the next set of records (nextRecordsUrl), and an array of query result records (records).

## Syntax

URI

/services/data/vXX.X/query?q=query

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| q | A SOQL query. To create a valid URI, replace spaces in the query string with a plus sign + or with %20. For example: SELECT+Name+FROM+MyObject. If the SOQL query string is invalid, a MALFORMED_QUERY response is returned. |

## Example

Example Response Body

```

```

## Resources for Running SOQL Queries

-   For an example, see [Execute a SOQL Query.](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_query.htm "HTML (New Window)")
-   To change the batch size, see [Query Options Header](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/headers_queryoptions.htm "HTML (New Window)").
-   To get feedback on a query and a report by using the explain parameter, see [Get Feedback on Query Performance](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_query_explain.htm "HTML (New Window)").
-   For more information on SOQL in general, see the [SOQL and SOSL Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_sosl_intro.htm "HTML (New Window)").

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

## Related Topics

- Query More Results (atlas.en-us.api_rest.meta/api_rest/resources_query_more_results.htm)
