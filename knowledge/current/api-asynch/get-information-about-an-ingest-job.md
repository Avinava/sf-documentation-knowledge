---
title: "Get Information About an Ingest Job"
domain: api-asynch
topic: get-information-about-an-ingest-job
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.498Z
estimatedTokens: 1312
keywords: [Ingest, Job, Retrieves, detailed]
---

# Get Information About an Ingest Job

> Retrieves detailed information about a job.

# Get Information About an Ingest Job

Retrieves detailed information about a job.

URI

/services/data/vXX.X/jobs/ingest/jobID

Availability

This resource is available in API version 41.0 and later.

Formats

JSON

HTTP Method

GET

Authentication

Authorization: Bearer token

Request parameters

| Parameter | Description | Required or Optional |
| --- | --- | --- |
| jobId | The ID of the job. | Required |

Request Body

None required.

Response Body

| Property | Type | Description |
| --- | --- | --- |
| apexProcessingTime | long | The number of milliseconds taken to process triggers and other processes related to the job data. This doesn't include the time used for processing asynchronous and batch Apex operations. If there are no triggers, the value is 0. |
| apiActiveProcessingTime | long | The number of milliseconds taken to actively process the job and includes apexProcessingTime, but doesn't include the time the job waited to be processed. |
| apiVersion | string | The API version that the job was created in. |
| assignmentRuleId | string | The ID of an assignment rule to run for a Case or a Lead. |
| columnDelimiter | ColumnDelimiterEnum | The column delimiter used for CSV job data. Values include:BACKQUOTE—backquote character (`)CARET—caret character (^)COMMA—comma character (,) which is the default delimiterPIPE—pipe character (\|)SEMICOLON—semicolon character (;)TAB—tab character |
| concurrencyMode | ConcurrencyModeEnum | For future use. How the request was processed. Currently only parallel mode is supported. (When other modes are added, the mode will be chosen automatically by the API and will not be user configurable.) |
| contentType | ContentType | The format of the data being processed. Only CSV is supported. |
| contentUrl | URL | The URL to use for Upload Job Data requests for this job. Only valid if the job is in Open state. |
| createdById | string | The ID of the user who created the job. |
| createdDate | dateTime | The date and time in the UTC time zone when the job was created. |
| errorMessage | string | The error message shown for jobs with errors. For more details, see Errors and Status Codes and Error Responses. |
| externalIdFieldName | string | The name of the external ID field for an upsert. |
| id | string | Unique ID for this job. |
| jobType | JobTypeEnum | The job’s type. Values include:BigObjectIngest: BigObjects jobClassic: Bulk API 1.0 jobV2Ingest: Bulk API 2.0 job |
| lineEnding | LineEndingEnum | The line ending used for CSV job data. Values include:LF—linefeed characterCRLF—carriage return character followed by a linefeed character |
| numberRecordsFailed | long | The number of records that were not processed successfully in this job.This property is of type int in API version 46.0 and earlier. |
| numberRecordsProcessed | long | The number of records already processed.This property is of type int in API version 46.0 and earlier. |
| object | string | The object type for the data being processed. |
| operation | OperationEnum | The processing operation for the job. Values include:insertdeletehardDeleteupdateupsert |
| retries | int | The number of times that Salesforce attempted to save the results of an operation. The repeated attempts are due to a problem, such as a lock contention. |
| state | JobStateEnum | The current state of processing for the job. Values include:Open: The job has been created, and job data can be uploaded to the job.UploadComplete: No new data can be added to this job. You can’t edit or save this job, as Salesforce is processing it.InProgress: The job is being processed by Salesforce. This includes automatically optimized chunking of job data and processing of job operations.JobComplete: The job was processed by Salesforce.Aborted: The job has been aborted. You can abort a job if you created it or if you have the “Manage Data Integrations” permission.Failed: Some records in the job failed. Job data that was successfully processed isn’t rolled back. |
| systemModstamp | dateTime | Date and time in the UTC time zone when the job finished. |
| totalProcessingTime | long | The number of milliseconds taken to process the job. |

Response Body - For an Unsuccessful Request

If the request fails, the server returns a non-200 status, and the request body shows details of the error. For example, if the [job has been deleted](atlas.en-us.api_asynch.meta/api_asynch/delete_job.htm#delete_job "Deletes a job. To be deleted, a job must have a state of UploadComplete, JobComplete, Aborted, or Failed.") the status is 404 (Not Found) and the response body is:

```

```

For details about error codes and messages, see [Errors](atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_errors.htm "Operations that you perform with Bulk API 2.0 can trigger error codes. This list shows the most common error codes and the Bulk API 2.0 action that possibly triggered them.").

## Example

This example gets information about the job with ID 7506g00000DhRA2AAN:

```

```

The response is:

```

```

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")

## Code Examples

```
[{
	"errorCode": "NOT_FOUND",
	"message": "The requested resource does not exist"
}]
```

```
curl --include --request GET \
--header "Authorization: Bearer token" \
"https://instance.salesforce.com/services/data/vXX.X/jobs/query/7506g00000DhRA2AAN
```

```
{
  "id" : "7506g00000DhRA2AAN",
  "operation" : "insert",
  "object" : "Account",
  "createdById" : "0056g000005HQPyAAO",
  "createdDate" : "2018-12-18T22:51:36.000+0000",
  "systemModstamp" : "2018-12-18T22:51:58.000+0000",
  "state" : "Open",
  "concurrencyMode" : "Parallel",
  "contentType" : "CSV",
  "apiVersion" : 66.0,
  "jobType" : "V2Ingest",
  "contentUrl" : "services/data/v66.0/jobs/ingest/7506g00000DhRA2AAN/batches",
  "lineEnding" : "LF",
  "columnDelimiter" : "COMMA",
  "retries" : 0,
  "totalProcessingTime" : 0,
  "apiActiveProcessingTime" : 0,
  "apexProcessingTime" : 0
}
```

## Related Topics

- Upload Job Data (atlas.en-us.api_asynch.meta/api_asynch/upload_job_data.htm)
- Errors (atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_errors.htm)
- job has been
              deleted (atlas.en-us.api_asynch.meta/api_asynch/delete_job.htm)
