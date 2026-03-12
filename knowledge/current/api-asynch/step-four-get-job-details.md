---
title: "Step Four: Get Job Details"
domain: api-asynch
topic: step-four-get-job-details
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.205Z
estimatedTokens: 700
keywords: [Step, Four, Job, sending, URI]
---

# Step Four: Get Job Details

> Get all details for an existing job by sending a GET request to this URI.

# Step Four: Get Job Details

Get all details for an existing job by sending a GET request to this URI.

URI

/services/async/APIversion/job/jobId

Example request body

No request body is allowed.

Example XML response body

```

```

Example JSON response body

```

```

-   [← Previous](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_close.htm "Step Three: Close a Job")
-   [Next →](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_abort.htm "Step Five: Abort a Job")

#### See Also

-   [Step One: Create a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_create.htm "Create a job by sending a POST request to this URI. The request body identifies the type of object processed in all associated batches.")

-   [Step Two: Monitor a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_monitor.htm "You can monitor a Bulk API job in Salesforce. The monitoring page tracks jobs and batches created by any client application, including Data Loader or any client application that you write.")

-   [Step Three: Close a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_close.htm "Close a job by sending a POST request to this URI. The request URI identifies the job to close. When a job is closed, no more batches can be added.")

-   [Step Five: Abort a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_abort.htm "Abort an existing job by sending a POST request to this URI. The request URI identifies the job to abort. When a job is aborted, no more records are processed. If changes to data have been committed, they aren’t rolled back.")

-   [Add a Batch to a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_create.htm "Add a new batch to a job by sending a POST request to this URI. The request body contains a list of records for processing.")

-   [Limits](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm "Note the following limits specific to Bulk API.")

-   [About URIs](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_basics_about_uri.htm "You send HTTP requests to a URI to perform operations with Bulk API.")

-   [JobInfo](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_jobinfo.htm "A job contains one or more batches of data for you to submit to Salesforce for processing. When a job is created, Salesforce sets the job state to Open.")

-   [Quick Start: Bulk API 2.0](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart.htm "Get up and running with Bulk API 2.0 by sending a few requests to Salesforce. This Quick Start takes you from setting up a basic environment to inserting, upserting, and querying records using Bulk API 2.0. Experience how to use Bulk API 2.0 via cURL in a free Salesforce Developer Edition org by authenticating and following the examples.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<jobInfo
    xmlns="http://www.force.com/2009/06/asyncapi/dataload">
  <id>750D00000004SkLIAU</id>
  <operation>insert</operation>
  <object>Account</object>
  <createdById>005D0000001b0fFIAQ</createdById>
  <createdDate>2015-12-15T21:41:45.000Z</createdDate>
  <systemModstamp>2015-12-15T21:41:45.000Z</systemModstamp>
  <state>Open</state>
  <concurrencyMode>Parallel</concurrencyMode>
  <contentType>CSV</contentType>
  <numberBatchesQueued>0</numberBatchesQueued>
  <numberBatchesInProgress>0</numberBatchesInProgress>
  <numberBatchesCompleted>0</numberBatchesCompleted>
  <numberBatchesFailed>0</numberBatchesFailed>
  <numberBatchesTotal>0</numberBatchesTotal>
  <numberRecordsProcessed>0</numberRecordsProcessed>
  <numberRetries>0</numberRetries>
  <apiVersion>36.0</apiVersion>
  <numberRecordsFailed>0</numberRecordsFailed>
  <totalProcessingTime>0</totalProcessingTime>
  <apiActiveProcessingTime>0</apiActiveProcessingTime>
  <apexProcessingTime>0</apexProcessingTime>
</jobInfo>
```

```
{
   "apexProcessingTime" : 0,
   "apiActiveProcessingTime" : 0,
   "apiVersion" : 36.0,
   "concurrencyMode" : "Parallel",
   "contentType" : "JSON",
   "createdById" : "005D0000001b0fFIAQ",
   "createdDate" : "2015-12-15T20:45:25.000+0000",
   "id" : "750D00000004SkGIAU",
   "numberBatchesCompleted" : 0,
   "numberBatchesFailed" : 0,
   "numberBatchesInProgress" : 0,
   "numberBatchesQueued" : 0,
   "numberBatchesTotal" : 0,
   "numberRecordsFailed" : 0,
   "numberRecordsProcessed" : 0,
   "numberRetries" : 0,
   "object" : "Account",
   "operation" : "insert",
   "state" : "Open",
   "systemModstamp" : "2015-12-15T20:45:25.000+0000",
   "totalProcessingTime" : 0
}
```

## Related Topics

- ← Previous (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_close.htm)
- Next → (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_abort.htm)
- Step One: Create a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_create.htm)
- Step Two: Monitor a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_monitor.htm)
- Step Three: Close a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_close.htm)
- Step Five: Abort a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_abort.htm)
- Add a Batch to a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_create.htm)
- Limits (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm)
- About URIs (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_basics_about_uri.htm)
- JobInfo (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_jobinfo.htm)
