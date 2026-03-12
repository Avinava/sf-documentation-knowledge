---
title: "Delete a Job"
domain: api-asynch
topic: delete-a-job
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.475Z
estimatedTokens: 228
keywords: [Job, Deletes, deleted, state, UploadComplete, JobComplete, Aborted, Failed]
---

# Delete a Job

> Deletes a job. To be deleted, a job must have a state of UploadComplete, JobComplete, Aborted, or Failed.

# Delete a Job

Deletes a job. To be deleted, a job must have a state of UploadComplete, JobComplete, Aborted, or Failed.

URI

/services/data/vXX.X/jobs/ingest/jobID

Availability

This resource is available in API version 41.0 and later.

Formats

JSON

HTTP Method

DELETE

Authentication

Authorization: Bearer token

Parameters

None.

Request Body

None required.

Response Body

None. Returns a status code of 204 (No Content), which indicates that the job was successfully deleted.

Usage Notes

When a job is deleted, job data stored by Salesforce is also deleted and job metadata information is removed. The job will no longer display in the Bulk Data Load Jobs page in Salesforce.

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")
