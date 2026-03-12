---
title: "Quick Start: Bulk API"
domain: api-asynch
topic: quick-start-bulk-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.207Z
estimatedTokens: 605
keywords: [Quick, Start, Bulk, API, process, records, creating, job, batches, processed, operation, Ingest, jobs, defined, CSV]
---

# Quick Start: Bulk API

> You process a set of records by creating a job that contains one or more batches. The
    job specifies which object is being processed and what type of operation is being used. Ingest
    jobs are defined by CSV, XML, JSON, or binary attachments. Query jobs are defined by a SOQL
    statement.

# Quick Start: Bulk API

You process a set of records by creating a job that contains one or more batches. The job specifies which object is being processed and what type of operation is being used. Ingest jobs are defined by CSV, XML, JSON, or binary attachments. Query jobs are defined by a SOQL statement.

A job is represented by the JobInfo resource. This resource is used to create a new job, get status for an existing job, and change status for a job.

For information about Bulk API job and batch lifespan, batch allocations, and other limits, see Bulk API and Bulk API 2.0 Limits and Allocations in the *Salesforce Developer Limits and Allocations Quick Reference*.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

Salesforce provides an additional API, Bulk API 2.0, which uses the REST API framework to provide similar capabilities to Bulk API. Bulk API 2.0 simplifies the job creation and monitoring process. For more information on Bulk API 2.0, see the [Bulk API 2.0 Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_asynch.meta/api_bulk_v2).

1.  [Step One: Create a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_create.htm)
    Create a job by sending a POST request to this URI. The request body identifies the type of object processed in all associated batches.
2.  [Step Two: Monitor a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_monitor.htm)
    You can monitor a Bulk API job in Salesforce. The monitoring page tracks jobs and batches created by any client application, including Data Loader or any client application that you write.
3.  [Step Three: Close a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_close.htm)
    Close a job by sending a POST request to this URI. The request URI identifies the job to close. When a job is closed, no more batches can be added.
4.  [Step Four: Get Job Details](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_get_details.htm)
    Get all details for an existing job by sending a GET request to this URI.
5.  [Step Five: Abort a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_abort.htm)
    Abort an existing job by sending a POST request to this URI. The request URI identifies the job to abort. When a job is aborted, no more records are processed. If changes to data have been committed, they aren’t rolled back.

## Related Topics

- Step One: Create a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_create.htm)
- Step Two: Monitor a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_monitor.htm)
- Step Three: Close a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_close.htm)
- Step Four: Get Job Details (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_get_details.htm)
- Step Five: Abort a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_abort.htm)
