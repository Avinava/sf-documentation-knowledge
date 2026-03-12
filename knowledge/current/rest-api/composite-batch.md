---
title: "Composite Batch"
domain: rest-api
topic: composite-batch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.255Z
estimatedTokens: 670
keywords: [Composite, Batch, Executes, subrequests, bodies, HTTP, statuses, subrequest, counts, against, rate, limits]
---

# Composite Batch

> Executes up to 25 subrequests in a single request. The
    response bodies and HTTP statuses of the subrequests in the batch are returned in a single
    response body. Each subrequest counts against rate limits.

# Composite Batch

Executes up to 25 subrequests in a single request. The response bodies and HTTP statuses of the subrequests in the batch are returned in a single response body. Each subrequest counts against rate limits.

The requests in a batch are called subrequests. All subrequests are executed in the context of the same user. Subrequests are independent, and you can’t pass information between them. Subrequests execute serially in their order in the request body. When a subrequest executes successfully, it commits its data. Commits are reflected in the output of later subrequests. If a subrequest fails, commits made by previous subrequests aren’t rolled back. If a batch request doesn’t complete within 10 minutes, the batch times out and the remaining subrequests aren’t executed.

Batching for the following resources and resource groups is available in API version 34.0 and later.

-   Limits—/services/data/vXX.X/limits
-   sObject resources (except sObject Blob Retrieve and sObject Rich Text Image Retrieve)—/services/data/vXX.X/sobjects/
-   Query—/services/data/vXX.X/query/?q=*soql*
-   QueryAll—/services/data/vXX.X/queryAll/?q=*soql*
-   Search—/services/data/vXX.X/search/?q=*sosl*
-   Connect resources—/services/data/vXX.X/connect/
-   Chatter resources—/services/data/vXX.X/chatter/

Batching for the following resources and resource groups is available in API version 35.0 and later.

-   Actions—vXX.X/actions

The API version of the resource accessed in each subrequest must be no earlier than 34.0 and no later than the Batch version in the top-level request. For example, if you post a Batch request to /services/data/v35.0/composite/batch, you can include subrequests that access version 34.0 or 35.0 resources. But if you post a Batch request to /services/data/v34.0/composite/batch, you can only include subrequests that access version 34.0 resources.

## Syntax

URI

/services/data/vXX.X/composite/batch

Formats

JSON, XML

HTTP method

POST

Authentication

Authorization: Bearer token

Parameters

None required

Request body

[Batch Request Body](atlas.en-us.api_rest.meta/api_rest/requests_composite_batch.htm "Describes a collection of subrequests to execute with the Composite Batch resource.")

Response body

[Batch Response Body](atlas.en-us.api_rest.meta/api_rest/responses_composite_batch.htm "Describes the result of a Composite Batch request.")

## Example

For an example of using the Composite Batch resource, see [Update a Record and Get Its Field Values in a Single Request](atlas.en-us.api_rest.meta/api_rest/dome_composite_batch.htm "Use the Composite Batch resource to execute multiple requests in a single API call.").

## Related Topics

- Batch Request Body (atlas.en-us.api_rest.meta/api_rest/requests_composite_batch.htm)
- Batch Response Body (atlas.en-us.api_rest.meta/api_rest/responses_composite_batch.htm)
- Update a Record and
          Get Its Field Values in a Single Request (atlas.en-us.api_rest.meta/api_rest/dome_composite_batch.htm)
