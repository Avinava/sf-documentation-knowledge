---
title: "Step Five: Abort a Job"
domain: api-asynch
topic: step-five-abort-a-job
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.188Z
estimatedTokens: 517
keywords: [Step, Five, Abort, Job, sending, POST, URI, identifies, aborted, records, processed, changes, data, committed, they]
---

# Step Five: Abort a Job

> Abort an existing job by sending a POST request to this URI. The request URI identifies
    the job to abort. When a job is aborted, no more records are processed. If changes to data have
    been committed, they aren’t rolled back.

# Step Five: Abort a Job

Abort an existing job by sending a POST request to this URI. The request URI identifies the job to abort. When a job is aborted, no more records are processed. If changes to data have been committed, they aren’t rolled back.

URI

/services/async/APIversion/job/jobId

Example XML request body

```

```

Example XML response body

```

```

Example JSON request body

```

```

Example JSON response body

```

```

-   [← Previous](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_get_details.htm "Step Four: Get Job Details")

#### See Also

-   [Step Four: Get Job Details](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_get_details.htm "Get all details for an existing job by sending a GET request to this URI.")

-   [Step One: Create a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_create.htm "Create a job by sending a POST request to this URI. The request body identifies the type of object processed in all associated batches.")

-   [Step Two: Monitor a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_monitor.htm "You can monitor a Bulk API job in Salesforce. The monitoring page tracks jobs and batches created by any client application, including Data Loader or any client application that you write.")

-   [Step Three: Close a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_close.htm "Close a job by sending a POST request to this URI. The request URI identifies the job to close. When a job is closed, no more batches can be added.")

-   [Limits](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm "Note the following limits specific to Bulk API.")

-   [About URIs](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_basics_about_uri.htm "You send HTTP requests to a URI to perform operations with Bulk API.")

-   [JobInfo](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_jobinfo.htm "A job contains one or more batches of data for you to submit to Salesforce for processing. When a job is created, Salesforce sets the job state to Open.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<jobInfo
   xmlns="http://www.force.com/2009/06/asyncapi/dataload">
 <state>Aborted</state>
</jobInfo>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<jobInfo
   xmlns="http://www.force.com/2009/06/asyncapi/dataload">
 <id>750D0000000002lIAA</id>
 <operation>insert</operation>
 <object>Account</object>
 <createdById>005D0000001ALVFIA4</createdById>
 <createdDate>2009-04-14T18:15:59.000Z</createdDate>
 <systemModstamp>2009-04-14T18:16:00.000Z</systemModstamp>
 <state>Aborted</state>
 <concurrencyMode>Parallel</concurrencyMode>
 <contentType>XML</contentType>
 <numberBatchesQueued>0</numberBatchesQueued>
 <numberBatchesInProgress>0</numberBatchesInProgress>
 <numberBatchesCompleted>1</numberBatchesCompleted>
 <numberBatchesFailed>0</numberBatchesFailed>
 <numberBatchesTotal>1</numberBatchesTotal>
 <numberRecordsProcessed>2</numberRecordsProcessed>
 <numberRetries>0</numberRetries>
 <apiVersion>36.0</apiVersion>
 <numberRecordsFailed>0</numberRecordsFailed>
 <totalProcessingTime>3647</totalProcessingTime>
 <apiActiveProcessingTime>2136</apiActiveProcessingTime>
 <apexProcessingTime>0</apexProcessingTime>
</jobInfo>
```

```
{
   "state" : "Aborted"
}
```

```
{
   "apexProcessingTime" : 0,
   "apiActiveProcessingTime" : 2166,
   "apiVersion" : 36.0,
   "concurrencyMode" : "Parallel",
   "contentType" : "JSON",
   "createdById" : "005D0000001b0fFIAQ",
   "createdDate" : "2015-12-15T21:54:29.000+0000",
   "id" : "750D00000004SkVIAU",
   "numberBatchesCompleted" : 2,
   "numberBatchesFailed" : 0,
   "numberBatchesInProgress" : 0,
   "numberBatchesQueued" : 0,
   "numberBatchesTotal" : 2,
   "numberRecordsFailed" : 0,
   "numberRecordsProcessed" : 2,
   "numberRetries" : 0,
   "object" : "Account",
   "operation" : "insert",
   "state" : "Aborted",
   "systemModstamp" : "2015-12-15T21:54:29.000+0000",
   "totalProcessingTime" : 2870
}
```

## Related Topics

- ← Previous (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_get_details.htm)
- Step Four: Get Job Details (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_get_details.htm)
- Step One: Create a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_create.htm)
- Step Two: Monitor a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_monitor.htm)
- Step Three: Close a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_close.htm)
- Limits (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm)
- About URIs (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_basics_about_uri.htm)
- JobInfo (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_jobinfo.htm)
