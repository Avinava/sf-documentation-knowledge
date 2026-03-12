---
title: "Get Information About All Query Jobs"
domain: api-asynch
topic: get-information-about-all-query-jobs
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:59.551Z
estimatedTokens: 1398
keywords: [Query, Jobs, org, Rules, Guidelines]
---

# Get Information About All Query Jobs

> Gets information about all query jobs in the org.

# Get Information About All Query Jobs

Gets information about all query jobs in the org. The information includes Bulk API 2.0 query jobs and all Bulk API jobs. Job records are returned in an indeterminate order.

## Syntax

URI

/services/data/vXX.X/jobs/query

```

```

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
| isPkChunkingEnabled | If set to true, the request only returns information about jobs where PK Chunking is enabled. This only applies to Bulk API (not Bulk API 2.0) jobs.For more information on PK Chunking, see Use PK Chunking to Extract Large Data Sets from Salesforce. | Optional |
| jobType | Gets information only about jobs matching the specified job type. Possible values are:Classic—Bulk API jobs. This includes both query jobs and ingest jobs.V2Query—Bulk API 2.0 query jobs.V2Ingest—Bulk API 2.0 ingest (upload and upsert) jobs. | Optional |
| concurrencyMode | For future use. Gets information only about jobs matching the specified concurrency mode. Possible values are serial and parallel.NoteCurrently only parallel mode is supported. | Optional |
| queryLocator | Gets information about jobs starting with that locator value.NoteDo not enter your own value here. Always use the value from the nextRecordsUrl from the previous set.See Example and Rules and Guidelines. | Optional |

Response Body

The response contains a completion flag, an array of records, and a locator value to be used to obtain more records. For example:

```

```

Response Parameters

| Parameter | Description |
| --- | --- |
| done | This is true if this is the last (or only) set of results. It is false if there are more records to fetch. See Example and Rules and Guidelines. |
| records | An array of record objects. |
| nextRecordsUrl | The URI to get the next set of records (if there are any).This method returns up to 1,000 result rows per request. If there are more than 1,000 records, use the nextRecordsUrl to get the next set of records. See Example and Rules and Guidelines.This parameter is null if there are no more records to fetch. |

Record Objects

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
| contentType | The format to be used for the results. Currently the only supported value is CSV (comma-separated variables). Defaults to CSV.NoteThe actual separator can be a character other than a comma. The columnDelimiter parameter specifies what character to use. |
| apiVersion | The API version that the job was created in. |
| lineEnding | The line ending used for CSV job data, marking the end of a data row. The default is LF. Possible values are:LF—linefeed characterCRLF—carriage return character followed by a linefeed character |
| columnDelimiter | The column delimiter used for CSV job data. The default value is COMMA. Possible values are:BACKQUOTE—back quote character (`)CARET—caret character (^)COMMA—comma character (,)PIPE—pipe character (\|)SEMICOLON—semicolon character (;)TAB—tab character |

## Example

This example shows how to use the nextRecordsUrl query parameter.

The first request doesn’t use nextRecordsUrl, because we don’t know what value to use yet.

```

```

The response body is:

```

```

Because there are more records than can be returned in a single response, the value of done in the response isn’t true. We use the value of nextRecordsUrl, /services/data/v*XX.X*/jobs/ingest?queryLocator=01gRM000000NS1vYAG-1000, as the URI to get the next set of records:

```

```

Repeat this process until done is true, indicating that there are no more results to fetch.

## Rules and Guidelines

To use this URI, follow these rules and guidelines.

1.  Use /services/data/vXX.X/jobs/query to get the first set of records.
2.  If there are more records than can be listed, the response body has done set to false. Use the value of nextRecordsUrl to get the next set of records.
3.  Repeat this process until done is true. That set is the last set of records.

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")

## Code Examples

```
/services/data/vXX.X/jobs/query/
   ?isPkChunkingEnabled=isPkChunkingEnabled
   &jobType=jobType
   &concurrencyMode=concurrencyMode
   &queryLocator=queryLocator
```

```
{
   "done" : false,
   "records" : [
      {
         "id" : "750R0000000zhfdIAA",
         "operation" : "query",
         "object" : "Account",
         "createdById" : "005R0000000GiwjIAC",
         "createdDate" : "2018-12-07T19:58:09.000+0000",
         "systemModstamp" : "2018-12-07T19:59:14.000+0000",
         "state" : "JobComplete",
         "concurrencyMode" : "Parallel",
         "contentType" : "CSV",
         "apiVersion" : 66.0,
         "jobType" : "V2Query",
         "lineEnding" : "LF",
         "columnDelimiter" : "COMMA"
      },
      {
         "id" : "750R0000000zhjzIAA",
         "operation" : "query",
         "object" : "Account",
         "createdById" : "005R0000000GiwjIAC",
         "createdDate" : "2018-12-07T20:52:28.000+0000",
         "systemModstamp" : "2018-12-07T20:53:15.000+0000",
         "state" : "JobComplete",
         "concurrencyMode" : "Parallel",
         "contentType" : "CSV",
         "apiVersion" : 66.0,
         "jobType" : "V2Query",
         "lineEnding" : "LF",
         "columnDelimiter" : "COMMA"
      },
    ...
   ],
   "nextRecordsUrl" : "/services/data/v66.0/jobs/ingest?queryLocator=01gR0000000opRTIAY-2000"
}
```

```
curl --request GET \
--header "Authorization: Bearer token"  
https://instance.salesforce.com/services/data/vXX.X/jobs/query
```

```
{
    "done": false,
    "nextRecordsUrl": "/services/data/vXX.X/jobs/ingest?queryLocator=01gRM000000NS1vYAG-1000",
    "records": [
        {
           ...
        }
   ]
}
```

```
curl --request GET \
--header "Authorization: Bearer token"  
https://instance.salesforce.com/services/data/vXX.X/jobs/query?queryLocator=01gRM000000NS1vYAG-1000
```

## Related Topics

- Abort a Query Job (atlas.en-us.api_asynch.meta/api_asynch/query_abort_job.htm)
