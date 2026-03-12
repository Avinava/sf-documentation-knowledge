---
title: "Create a Query Job"
domain: api-asynch
topic: create-a-query-job
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.535Z
estimatedTokens: 1091
keywords: [Query, Job, Creates]
---

# Create a Query Job

> Creates a query job.

# Create a Query Job

Creates a query job.

## Syntax

URI

/services/data/vXX.X/jobs/query

Available since release

This resource is available in API version 47.0 and later.

Format

application/json

HTTP method

POST

Authentication

Authorization:Bearer token

Headers

Optionally, use the Sforce-Call-Options header to specify a [default namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/headers_calloptions.htm "HTML (New Window)").

Request body

The request body specifies the query to be performed.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

Bulk API 2.0 doesn’t support SOQL queries that include any of these items:

-   GROUP BY, OFFSET, or TYPEOF clauses.
-   Aggregate Functions such as COUNT().
-   Date functions in GROUP BY clauses. (Date functions in WHERE clauses are supported.)
-   Compound address fields or compound geolocation fields. (Instead, query the individual components of compound fields.)
-   Parent-to-child [relationship queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_understanding.htm "HTML (New Window)"). (Child-to-parent relationship queries are supported.)

You can also specify some optional parameters. For example:

```

```

Request parameters

| Parameter | Description | Required or Optional |
| --- | --- | --- |
| operation | The type of query. Possible values are:query—Returns data that hasn’t been deleted or archived. For more information, see query() in SOAP API Developer Guide.queryAll—Returns records that have been deleted because of a merge or delete, and returns information about archived Task and Event records. For more information, see queryAll() in SOAP API Developer Guide. | Required |
| query | The query to be performed. | Required |
| contentType | The format to be used for the results. Currently the only supported value is CSV (comma-separated variables). Defaults to CSV.NoteThe actual separator can be a character other than a comma. The columnDelimiter parameter specifies what character to use. | Optional |
| columnDelimiter | The column delimiter used for CSV job data. The default value is COMMA. Possible values are:BACKQUOTE—back quote character (`)CARET—caret character (^)COMMA—comma character (,)PIPE—pipe character (\|)SEMICOLON—semicolon character (;)TAB—tab character | Optional |
| lineEnding | The line ending used for CSV job data, marking the end of a data row. The default is LF. Possible values are:LF—linefeed characterCRLF—carriage return character followed by a linefeed character | Optional |

Response Body

```

```

Response Parameters

| Parameter | Description |
| --- | --- |
| id | The unique ID for this job. |
| operation | The type of query. |
| object | The object type being queried. |
| createdById | The ID of the user who created the job. |
| createdDate | The UTC date and time when the job was created. |
| systemModstamp | The UTC date and time when the API last updated the job information. |
| state | The current state of processing for the job. Possible values are:UploadComplete—The job is ready to be processed and Salesforce has put the job in the queue.InProgress—Salesforce is processing the job.Aborted—The job has been aborted. See Abort a Query Job.JobComplete—Salesforce has finished processing the job.Failed—The job failed. |
| concurrencyMode | Reserved for future use. How the request is processed. Currently only parallel mode is supported. (When other modes are added, the API chooses the mode automatically. The mode isn’t user configurable.) |
| contentType | The format to be used for the results. Currently the only supported value is CSV.NoteJunctionIdList fields and embedded lists can't be returned. |
| apiVersion | The API version that the job was created in. |
| lineEnding | The line ending used for CSV job data, marking the end of a data row. |
| columnDelimiter | The column delimiter used for CSV job data. |

## Example

This example creates a job that queries Accounts.

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
  "operation": "query",
  "query": "SELECT Id FROM Account"
}
```

```
{
  "operation" : "query",
  "query" : "SELECT Id FROM Account",
  "contentType" : "CSV",
  "columnDelimiter" : "CARET",
  "lineEnding" : "CRLF"
}
```

```
{
   "id" : "750R0000000zlh9IAA",
   "operation" : "query",
   "object" : "Account",
   "createdById" : "005R0000000GiwjIAC",
   "createdDate" : "2018-12-10T17:50:19.000+0000",
   "systemModstamp" : "2018-12-10T17:50:19.000+0000",
   "state" : "UploadComplete",
   "concurrencyMode" : "Parallel",
   "contentType" : "CSV",
   "apiVersion" : 46.0,
   "lineEnding" : "LF",
   "columnDelimiter" : "COMMA"
}
```

```
curl --include --request POST \
--header "Authorization: Bearer token" \
--header "Accept: application/json " \
--header "Content-Type: application/json" \
--data '{
  "operation": "query",
  "query": "SELECT Id, Name FROM Account"
}' \
https://instance.salesforce.com/services/data/vXX.X/jobs/query
```

```
HTTP/1.1 200 OK
{
   "id" : "750R0000000zw4yIAA",
   "operation" : "query",
   "object" : "Account",
   "createdById" : "005R0000000GiwjIAC",
   "createdDate" : "2018-12-17T21:00:17.000+0000",
   "systemModstamp" : "2018-12-17T21:00:17.000+0000",
   "state" : "UploadComplete",
   "concurrencyMode" : "Parallel",
   "contentType" : "CSV",
   "apiVersion" : 46.0,
   "lineEnding" : "LF",
   "columnDelimiter" : "COMMA"
}
```

## Related Topics

- Abort a Query Job (atlas.en-us.api_asynch.meta/api_asynch/query_abort_job.htm)
