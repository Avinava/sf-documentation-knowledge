---
title: "Abort a Query Job"
domain: api-asynch
topic: abort-a-query-job
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.520Z
estimatedTokens: 728
keywords: [Abort, Query, Job, Aborts]
---

# Abort a Query Job

> Aborts a query job.

# Abort a Query Job

Aborts a query job.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

-   To abort a job, you must be the job’s creator or have the Manage Data Integrations permission.
-   You can only abort jobs that are in the following states:
    -   UploadComplete
    -   InProgress

## Syntax

URI

/services/data/vXX.X/jobs/query/queryJobId

Available since release

This resource is available in API version 47.0 and later.

Formats

JSON

HTTP methods

PATCH

Authentication

Authorization: Bearer token

Request body

The request body must be the following:

```

```

Request parameters

| Parameter | Description | Required or Optional |
| --- | --- | --- |
| queryJobId | The ID of the query job to be deleted. | Required |

Response Body

If the request is successful, the status code is 200 (OK). The response body has the state Aborted. For example:

```

```

Response Parameters

| Parameter | Description |
| --- | --- |
| id | The unique ID for this job. |
| operation | The type of query. Possible values are:query—Returns data that hasn’t been deleted or archived. For more information, see query() in SOAP API Developer Guide.queryAll—Returns records that have been deleted because of a merge or delete, and returns information about archived Task and Event records. For more information, see queryAll() in SOAP API Developer Guide. |
| object | The object type being queried. |
| createdById | The ID of the user who created the job. |
| createdDate | The UTC date and time when the job was created. |
| systemModstamp | The UTC date and time when the API last updated the job information. |
| state | The current state of processing for the job. Possible values are:UploadComplete—The job is ready to be processed and Salesforce has put the job in the queue.InProgress—Salesforce is processing the job.Aborted—The job has been aborted. See Abort a Query Job.JobComplete—Salesforce has finished processing the job.Failed—The job failed. |
| concurrencyMode | Reserved for future use. How the request is processed. Currently only parallel mode is supported. (When other modes are added, the API chooses the mode automatically. The mode isn’t user configurable.) |
| contentType | The format that is used for the results. Currently the only supported value is CSV. |
| apiVersion | The API version that the job was created in. |

Response Body - For an Unsuccessful Request

If the request fails, the server returns a non-200 status, and the request body shows details of the error. For example:

```

```

## Example

This example aborts the job with ID 750R000000146UvIAI:

```

```

The response is:

```

```

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")

## Code Examples

```
{
  "state": "Aborted"
}
```

```
{
   "id" : "750R000000146UvIAI",
   "operation" : "query",
   "object" : "Account",
   "createdById" : "005R0000000GiwjIAC",
   "createdDate" : "2018-12-18T16:15:31.000+0000",
   "systemModstamp" : "2018-12-18T16:15:32.000+0000",
   "state" : "Aborted",
   "concurrencyMode" : "Parallel",
   "contentType" : "CSV",
   "apiVersion" : 46.0
}
```

```
HTTP/1.1 400 Bad Request
[{
	"errorCode": "INVALIDJOBSTATE",
	"message": "Aborting already Completed Job not allowed"
}]
```

```
curl  --request PATCH \
--header "Authorization: Bearer token" \
--header "Content-Type: application/json" \
--data '{
  "state": "Aborted"
}' \
https://instance.salesforce.com/services/data/vXX.X/jobs/query/750R000000146UvIAI
```

```
{
  "id": "750R000000146UvIAI",
  "operation": "query",
  "object": "Account",
  "createdById": "005R0000000GiwjIAC",
  "createdDate": "2018-12-18T20:51:39.000+0000",
  "systemModstamp": "2018-12-18T20:51:41.000+0000",
  "state": "Aborted",
  "concurrencyMode": "Parallel",
  "contentType": "CSV",
  "apiVersion": 46.0
}
```
