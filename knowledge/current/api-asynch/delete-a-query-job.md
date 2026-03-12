---
title: "Delete a Query Job"
domain: api-asynch
topic: delete-a-query-job
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.540Z
estimatedTokens: 354
keywords: [Query, Job, Deletes]
---

# Delete a Query Job

> Deletes a query job.

# Delete a Query Job

Deletes a query job. When a job is deleted, job data stored by Salesforce is deleted and job metadata information is removed. The job no longer displays in the Bulk Data Load Jobs page in Salesforce.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

You can only delete a job if its state is JobComplete, Aborted, or Failed.

## Syntax

URI

/services/data/vXX.X/jobs/query/queryJobId

Available since release

This resource is available in API version 47.0 and later.

Formats

None

HTTP methods

DELETE

Authentication

Authorization: Bearer token

Request parameters

| Parameter | Description | Required or Optional |
| --- | --- | --- |
| queryJobId | The ID of the query job to be deleted. | Required |

Response Body

If the method is successful, the status code is 204 (No Content) and there is no response body.

Response Body - For an Unsuccessful Request

If the request fails, the server returns a 400 (Bad Request) status, and the request body shows details of the error. For example:

```

```

## Example

This example deletes the job with ID 750R0000000zxnaIAA.

```

```

The response status is

```

```

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")

## Code Examples

```
HTTP/1.1 400 Bad Request
[{
	"errorCode": "API_ERROR",
	"message": "Error encountered when deleting the job because the job is not terminated"
}]
```

```
curl --include --request DELETE \
--header "Authorization: Bearer token \
--header "Content-Type: " \
https://instance.salesforce.com/services/data/vXX.X/jobs/query/750R0000000zxnaIAA
```

```
204 No Content
```
