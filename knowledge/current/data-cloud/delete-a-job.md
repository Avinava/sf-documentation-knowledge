---
title: "Delete a Job"
domain: data-cloud
topic: delete-a-job
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.156Z
keywords: [Delete, Job, Example, Usage, Notes]
---

# Delete a Job

# Delete a Job

To delete, a job must have a state of UploadComplete, JobComplete, Aborted, or Failed. When you delete a job, the stored job data is also deleted and its metadata is removed.

URI

/api/v1/ingest/jobs/{id}

Available since release

Data Cloud v1.0, Salesforce v51.0

Formats

JSON

HTTP methods

DELETE

Authentication

Authorization: Bearer access\_token

Request body

None required.

Request parameters

| Parameter | Description |
| --- | --- |
| id | The job id that is returned in the response body from the Create a Job request. |

Response body

Returns a status code of 204 (No Content), which indicates that the job was successfully deleted.

## Example

```

```

## Usage Notes

When a job is deleted, job data stored by Salesforce is also deleted and job metadata information is removed. You can no longer discover the job in [Get Job Info](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_job_info.htm "Retrieves detailed information about the specified job.") or [Get All Jobs](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_all_jobs.htm "Retrieves all jobs in Data Cloud.").