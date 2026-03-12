---
title: "Get Parallel Results for a Query Job"
domain: api-asynch
topic: get-parallel-results-for-a-query-job
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.578Z
estimatedTokens: 646
keywords: [Parallel, Results, Query, Job, five, URIs, state, jobComplete]
---

# Get Parallel Results for a Query Job

> Returns up to five URIs in one response to use to get results for a query job. The job
  must have the state jobComplete.

# Get Parallel Results for a Query Job

Returns up to five URIs in one response to use to get results for a query job. The job must have the state jobComplete.

## Syntax

URI

/services/data/vXX.X/jobs/query/queryJobId/resultPages

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_asynch)

#### Important

To get query results, use the same API version that you used to create the query. Otherwise, the call returns a 409 error.

Available since release

This resource is available in API version 58.0 and later.

Formats

JSON

HTTP Methods

GET

Authentication

Authorization: Bearer token

Request Parameters

| Parameter | Description | Required or Optional |
| --- | --- | --- |
| queryJobId | The ID of the query job. The ID is retrieved when you create the query job. | Required |

## Response Body with Request Parameters

The JSON response body contains multiple request URIs that you use to request data in parallel.

| Element | Description |
| --- | --- |
| resultPages | Contains the resultUrl URIs. |
| resultUrl | The request URI with the locator for getting data. |
| nextRecordUrl | The URI used to get a response body with the next resultPages element. |
| done | A Boolean value that indicates whether more resultUrl URIs are available. |

## Example

This example retrieves the results for a job with the ID 750R0000000zxr8IAA. We start by sending an initial request to retrieve the first set of result links.

Example Request

```

```

Example Response Body

{ "resultPages": \[ { "resultUrl": "/services/data/vXX.X/jobs/query/750R0000000zxr8IAA/results?locator=aBcDeFg4N" }, { "resultUrl": "/services/data/vXX.X/jobs/query/750R0000000zxr8IAA/results?locator=HiJkLmN4N" }, { "resultUrl": "/services/data/vXX.X/jobs/query/750R0000000zxr8IAA/results?locator=oPQrStU4N" }, { "resultUrl": "/services/data/vXX.X/jobs/query/750R0000000zxr8IAA/results?locator=vWxYzz4N" }, { "resultUrl": "/services/data/vXX.X/jobs/query/750R0000000zxr8IAA/results?locator=NiKmABC4N" } \], "nextRecordsUrl": "/services/data/vXX.X/jobs/query/750R0000000zxr8IAA/resultpages?locator=YcApWm4N", "done": false }

The value of nextRecordsUrl is the URI for getting the next set of resultUrl URIs. The value of done is true if there are no more resultUrl URIs. The value of each resultUrl is a URI that you send as a request to get a set of results.

#### See Also

-   [Get Results for a Query Job](atlas.en-us.api_asynch.meta/api_asynch/query_get_job_results.htm "Gets the results for a query job. The job must have the state JobComplete.")

## Code Examples

```
curl --include --request GET \
--header "Authorization: Bearer token" \
--header "Accept: application/json" \
https://MyDomainName.my.salesforce.com\ 
/services/data/vXX.X/jobs/query/750R0000000zxr8IAA/resultPages
```

## Related Topics

- Get Results for a Query Job (atlas.en-us.api_asynch.meta/api_asynch/query_get_job_results.htm)
