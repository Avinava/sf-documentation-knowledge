---
title: "Get Information About All Ingest Jobs"
domain: api-asynch
topic: get-information-about-all-ingest-jobs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.484Z
estimatedTokens: 953
keywords: [Ingest, Jobs, Retrieves, detailed, org, Job, records, indeterminate, order]
---

# Get Information About All Ingest Jobs

> Retrieves detailed information about all jobs in the org. Job records are returned in
		an indeterminate order.

# Get Information About All Ingest Jobs

Retrieves detailed information about all jobs in the org. Job records are returned in an indeterminate order.

URI

/services/data/vXX.X/jobs/ingest

Availability

This resource is available in API version 41.0 and later.

Formats

JSON

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| isPkChunkingEnabled | If set to true, filters jobs with PK chunking enabled. |
| jobType | Filters jobs based on job type. Valid values include:BigObjectIngest—BigObjects jobClassic—Bulk API 1.0 jobV2Ingest—Bulk API 2.0 job |
| queryLocator | Use queryLocator with a locator value to get a specific set of job results. Get All Jobs returns up to 1000 result rows per request, along with a nextRecordsUrl value that contains the locator value used to get the next set of results. |

Request Body

None required.

Response Body

| Property | Type | Description |
| --- | --- | --- |
| done | boolean | Indicates whether there are more jobs to get. If false, use the nextRecordsUrl value to retrieve the next group of jobs. |
| records | JobInfo[ ] | Contains information for each retrieved job. |
| nextRecordsUrl | URL | A URL that contains a query locator used to get the next set of results in a subsequent request if done isn’t true. |

**JobInfo**

| Property | Type | Description |
| --- | --- | --- |
| apiVersion | string | The API version that the job was created in. |
| columnDelimiter | ColumnDelimiterEnum | The column delimiter used for CSV job data. Values include:BACKQUOTE—backquote character (`)CARET—caret character (^)COMMA—comma character (,) which is the default delimiterPIPE—pipe character (\|)SEMICOLON—semicolon character (;)TAB—tab character |
| concurrencyMode | ConcurrencyModeEnum | For future use. How the request was processed. Currently only parallel mode is supported. (When other modes are added, the mode will be chosen automatically by the API and will not be user configurable.) |
| contentType | ContentType | The format of the data being processed. Only CSV is supported. |
| contentUrl | URL | The URL to use for Upload Job Data requests for this job. Only valid if the job is in Open state. |
| createdById | string | The ID of the user who created the job. Create the batch with the same user. |
| createdDate | dateTime | The date and time in the UTC time zone when the job was created. |
| id | string | Unique ID for this job. |
| jobType | JobTypeEnum | The job’s type. Values include:BigObjectIngest: BigObjects jobClassic: Bulk API 1.0 jobV2Ingest: Bulk API 2.0 job |
| lineEnding | LineEndingEnum | The line ending used for CSV job data. Values include:LF—linefeed characterCRLF—carriage return character followed by a linefeed character |
| object | string | The object type for the data being processed. |
| operation |  | The processing operation for the job. Values include:insertdeletehardDeleteupdateupsert |
| state | JobStateEnum | The current state of processing for the job. Values include:Open—The job has been created, and data can be added to the job.UploadComplete—No new data can be added to this job. You can’t edit or save this job, as Salesforce is processing it.Aborted—The job has been aborted. You can abort a job if you created it or if you have the “Manage Data Integrations” permission.JobComplete—The job was processed by Salesforce.Failed—Some records in the job failed. Job data that was successfully processed isn’t rolled back. |
| systemModstamp | dateTime | Date and time in the UTC time zone when the job finished. |

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")

## Related Topics

- Upload Job Data (atlas.en-us.api_asynch.meta/api_asynch/upload_job_data.htm)
