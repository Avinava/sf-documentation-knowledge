---
title: "Create a Job"
domain: api-asynch
topic: create-a-job
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.410Z
estimatedTokens: 1417
keywords: [Job, Creates, representing, bulk, operation, associated, data, sent, Salesforce, asynchronous, processing, Provide, via, Upload, part]
---

# Create a Job

> Creates a job representing a bulk operation and its associated data that is sent to
		Salesforce for asynchronous processing. Provide job data via an Upload Job Data
		request or as part of a multipart create job request.

# Create a Job

Creates a job representing a bulk operation and its associated data that is sent to Salesforce for asynchronous processing. Provide job data via an **Upload Job Data** request or as part of a multipart create job request.

URI

/services/data/vXX.X/jobs/ingest

Availability

This resource is available in API version 41.0 and later.

Formats

JSON

HTTP Method

POST

Authentication

Authorization: Bearer token

Parameters

None.

Headers

Optionally, use the Sforce-Call-Options header to specify a [default namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/headers_calloptions.htm "HTML (New Window)").

Request Body

| Property | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| assignmentRuleId | string | The ID of an assignment rule to run for a Case or a Lead. The assignment rule can be active or inactive. The ID can be retrieved by using the Lightning Platform SOAP API or the Lightning Platform REST API to query the AssignmentRule object.This property is available in API version 49.0 and later. | Optional |
| columnDelimiter | ColumnDelimiterEnum | The column delimiter used for CSV job data. The default value is COMMA. Valid values are:BACKQUOTE—backquote character (`)CARET—caret character (^)COMMA—comma character (,) which is the default delimiterPIPE—pipe character (\|)SEMICOLON—semicolon character (;)TAB—tab character | Optional |
| contentType | ContentType | The content type for the job. The only valid value (and the default) is CSV. | Optional |
| externalIdFieldName | string | The external ID field in the object being updated. Only needed for upsert operations. Field values must also exist in CSV job data. | Required for upsert operations |
| lineEnding | LineEndingEnum | The line ending used for CSV job data, marking the end of a data row. The default is LF. Valid values are:LF—linefeed characterCRLF—carriage return character followed by a linefeed character | Optional |
| object | string | The object type for the data being processed. Use only a single object type per job. | Required |
| operation | OperationEnum | The processing operation for the job. Valid values are:insertdeletehardDeleteupdateupsertNoteWhen the hardDelete value is specified, the deleted records aren't stored in the Recycle Bin. Instead, they become immediately eligible for deletion. The permission for this operation, “Bulk API Hard Delete,” is disabled by default and must be enabled by an administrator. A Salesforce user license is required for hard delete. | Required |

For multipart requests, the request body can also include CSV record data. See [Usage Notes](#upload_multipart) for more details.

Response Body

| Property | Type | Description |
| --- | --- | --- |
| apiVersion | string | The API version that the job was created in. |
| assignmentRuleId | id | The ID of the assignment rule. This property is only shown if an assignment rule is specified when the job is created. |
| columnDelimiter | ColumnDelimiterEnum | The column delimiter used for CSV job data. Values include:BACKQUOTE—backquote character (`)CARET—caret character (^)COMMA—comma character (,) which is the default delimiterPIPE—pipe character (\|)SEMICOLON—semicolon character (;)TAB—tab character |
| concurrencyMode | ConcurrencyModeEnum | For future use. How the request was processed. Currently only parallel mode is supported. (When other modes are added, the mode will be chosen automatically by the API and will not be user configurable.) |
| contentType | ContentType | The format of the data being processed. Only CSV is supported. |
| contentUrl | URL | The URL to use for Upload Job Data requests for this job. Only valid if the job is in Open state. |
| createdById | string | The ID of the user who created the job. |
| createdDate | dateTime | The date and time in the UTC time zone when the job was created. |
| externalIdFieldName | string | The name of the external ID field for an upsert. |
| id | string | Unique ID for this job. |
| jobType | JobTypeEnum | The job’s type. Values include:BigObjectIngest—BigObjects jobClassic—Bulk API 1.0 jobV2Ingest—Bulk API 2.0 job |
| lineEnding | LineEndingEnum | The line ending used for CSV job data. Values include:LF—linefeed characterCRLF—carriage return character followed by a linefeed character |
| object | string | The object type for the data being processed. |
| operation |  | The processing operation for the job. Values include:insertdeletehardDeleteupdateupsert |
| state | JobStateEnum | The current state of processing for the job. Values include:Open—The job has been created, and data can be added to the job.UploadComplete—No new data can be added to this job. You can’t edit or save this job, as Salesforce is processing it.Aborted—The job has been aborted. You can abort a job if you created it or if you have the “Manage Data Integrations” permission.JobComplete—The job was processed by Salesforce.Failed—Some records in the job failed. Job data that was successfully processed isn’t rolled back. |
| systemModstamp | dateTime | Date and time in the UTC time zone when the job finished. |

Usage Notes

For small amounts of job data (100,000 characters or less), you can create a job and upload all the data for a job using a multipart request. The following example request header and body uses a multipart format to contain both job information and job data.

```

```

```

```

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")

## Code Examples

```
Content-Type: multipart/form-data; boundary=BOUNDARY
```

```
--BOUNDARY
Content-Type: application/json
Content-Disposition: form-data; name="job"

{
  "object":"Contact",
  "contentType":"CSV",
  "operation":"insert"
}

--BOUNDARY
Content-Type: text/csv
Content-Disposition: form-data; name="content"; filename="content"

(Content of your CSV file)
--BOUNDARY--
```

## Related Topics

- Upload Job Data (atlas.en-us.api_asynch.meta/api_asynch/upload_job_data.htm)
