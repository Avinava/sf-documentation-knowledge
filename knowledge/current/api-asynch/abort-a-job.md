---
title: "Abort a Job"
domain: api-asynch
topic: abort-a-job
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.014Z
estimatedTokens: 734
keywords: [Abort, Job, Salesforce, doesn’t, process]
---

# Abort a Job

> If you abort a job, Salesforce doesn’t process the job.

# Abort a Job

If you abort a job, Salesforce doesn’t process the job.

URI

/services/data/vXX.X/jobs/ingest/jobID

Availability

This resource is available in API version 41.0 and later.

Formats

JSON

HTTP Method

PATCH

Authentication

Authorization: Bearer token

Parameters

None.

Request Body

| Property | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| state | JobStateEnum | The state to update the job to. Use Aborted to abort a job. | Required |

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

## Related Topics

- Upload Job Data (atlas.en-us.api_asynch.meta/api_asynch/upload_job_data.htm)
