---
title: "Delete a Job"
domain: data-cloud
topic: delete-a-job
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.101Z
estimatedTokens: 281
keywords: [Delete, Job, delete, job, must, state, UploadComplete, JobComplete, Aborted, Failed., stored, data, deleted, its, metadata, removed., Example, Usage, Notes]
---

# Delete a Job

> To delete, a job must have a state of UploadComplete,
   JobComplete, Aborted, or Failed. When
  you delete a job, the stored job data is also deleted and its metadata is removed.

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

## Code Examples

```
curl --location --request DELETE '
https://{instance_url}/api/v1/ingest/jobs/{id}' \
--header 'Authorization: Bearer {access_token'

HTTP/1.1 204 No Content
```

## Related Topics

- Create a Job (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_create_a_job.htm)
- Get Job Info (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_job_info.htm)
- Get All Jobs (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_all_jobs.htm)
