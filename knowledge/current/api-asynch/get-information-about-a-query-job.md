---
title: "Get Information About a Query Job"
domain: api-asynch
topic: get-information-about-a-query-job
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.571Z
estimatedTokens: 1085
keywords: [Query, Job]
---

# Get Information About a Query Job

> Gets information about one query job.

# Get Information About a Query Job

Gets information about one query job.

## Syntax

URI

/services/data/vXX.X/jobs/query/queryJobId

Available since release

This resource is available in API version 47.0 and later.

Formats

JSON

HTTP methods

GET

Authentication

Authorization: Bearer token

Request parameters

| Parameter | Description | Required or Optional |
| --- | --- | --- |
| queryJobId | The ID of the query job. | Required |

Response Body

```

```

Response Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| id | string | The unique ID for this job. |
| operation | OperationEnum | The type of query. Possible values are:query—Returns data that hasn’t been deleted or archived. For more information, see query() in SOAP API Developer Guide.queryAll—Returns records that have been deleted because of a merge or delete, and returns information about archived Task and Event records. For more information, see queryAll() in SOAP API Developer Guide. |
| object | string | The object type being queried. |
| createdById | string | The ID of the user who created the job. |
| createdDate | dateTime | The UTC date and time when the job was created. |
| systemModstamp | dateTime | The UTC date and time when the API last updated the job information. |
| state | JobStateEnum | The current state of processing for the job. Possible values are:UploadComplete—The job is ready to be processed and Salesforce has put the job in the queue.InProgress—Salesforce is processing the job.Aborted—The job has been aborted. See Abort a Query Job.JobComplete—Salesforce has finished processing the job.Failed—The job failed. |
| concurrencyMode | ConcurrencyModeEnum | Reserved for future use. How the request is processed. Currently only parallel mode is supported. (When other modes are added, the API chooses the mode automatically. The mode isn’t user configurable.) |
| contentType | ContentType | The format that is used for the results. Currently the only supported value is CSV. |
| apiVersion | string | The API version that the job was created in. |
| jobType | JobTypeEnum | The job’s type. For a query job, the type is always V2Query. |
| lineEnding | LineEndingEnum | The line ending used for CSV job data, marking the end of a data row. The default is LF. Possible values are:LF—linefeed characterCRLF—carriage return character followed by a linefeed character |
| columnDelimiter | ColumnDelimiterEnum | The column delimiter used for CSV job data. The default value is COMMA. Possible values are:BACKQUOTE—back quote character (`)CARET—caret character (^)COMMA—comma character (,)PIPE—pipe character (\|)SEMICOLON—semicolon character (;)TAB—tab character |
| numberRecordsProcessed | long | The number of records processed in this job. |
| retries | int | The number of times that Salesforce attempted to save the results of an operation. Repeated attempts indicate a problem such as a lock contention. |
| totalProcessingTime | long | The number of milliseconds taken to process the job. |
| isPkChunkingSupported | boolean | Whether PK chunking is supported for the queried object (true), or isn't supported (false). |

Response Body - For an Unsuccessful Request

If the request fails, the server returns a non-200 status, and the request body shows details of the error. For example, if the [job has been deleted](atlas.en-us.api_asynch.meta/api_asynch/query_delete_job.htm#query_delete_job "Deletes a query job. When a job is deleted, job data stored by Salesforce is deleted and job metadata information is removed. The job no longer displays in the Bulk Data Load Jobs page in Salesforce.") the status is 404 (Not Found) and the response body is:

```

```

For details about error codes and messages, see [Errors](atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_errors.htm "Operations that you perform with Bulk API 2.0 can trigger error codes. This list shows the most common error codes and the Bulk API 2.0 action that possibly triggered them.").

## Example

This example gets information about the job with ID 750R0000000zxikIAA:

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
   "id" : "750R0000000zlh9IAA",
   "operation" : "query",
   "object" : "Account",
   "createdById" : "005R0000000GiwjIAC",
   "createdDate" : "2018-12-10T17:50:19.000+0000",
   "systemModstamp" : "2018-12-10T17:51:27.000+0000",
   "state" : "JobComplete",
   "concurrencyMode" : "Parallel",
   "contentType" : "CSV",
   "apiVersion" : 46.0,
   "jobType" : "V2Query",
   "lineEnding" : "LF",
   "columnDelimiter" : "COMMA",
   "numberRecordsProcessed" : 500,
   "retries" : 0,
   "totalProcessingTime" : 334,
   "isPkChunkingSupported": true
}
```

```
[{
	"errorCode": "NOT_FOUND",
	"message": "The requested resource does not exist"
}]
```

```
curl --include --request GET \
--header "Authorization: Bearer token" \
"https://instance.salesforce.com/services/data/vXX.X/jobs/query/750R0000000zxikIAA
```

```
{
   "id" : "750R0000000zxikIAA",
   "operation" : "query",
   "object" : "Account",
   "createdById" : "005R0000000GiwjIAC",
   "createdDate" : "2018-12-18T22:51:36.000+0000",
   "systemModstamp" : "2018-12-18T22:51:58.000+0000",
   "state" : "JobComplete",
   "concurrencyMode" : "Parallel",
   "contentType" : "CSV",
   "apiVersion" : 46.0,
   "jobType" : "V2Query",
   "lineEnding" : "LF",
   "columnDelimiter" : "COMMA",
   "numberRecordsProcessed" : 740003,
   "retries" : 0,
   "totalProcessingTime" : 21046,
   "isPkChunkingSupported": true
}
```

## Related Topics

- Abort a Query Job (atlas.en-us.api_asynch.meta/api_asynch/query_abort_job.htm)
- job has been
							deleted (atlas.en-us.api_asynch.meta/api_asynch/query_delete_job.htm)
- Errors (atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_errors.htm)
