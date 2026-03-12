---
title: "How Bulk API Works"
domain: api-asynch
topic: how-bulk-api-works
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.023Z
estimatedTokens: 473
keywords: [How, Bulk, API, Works, process, records, creating, job, batches]
---

# How Bulk API Works

> You process a set of records by creating a job that contains one or more
    batches.

# How Bulk API Works

You process a set of records by creating a job that contains one or more batches.

The job specifies which object is being processed and what type of operation is being used. A batch is a set of records sent to the server in an HTTP POST request. Each batch is processed independently by the server, not necessarily in the order it’s received. Batches can be processed in parallel. It's up to the client to decide how to divide the entire data set into a suitable number of batches.

A job is represented by the JobInfo resource. This resource is used to create a new job, get status for an existing job, and change status for a job. A batch is created by submitting a CSV, XML, or JSON representation of a set of records and any references to binary attachments in an HTTP POST request. When created, the status of a batch is represented by a BatchInfo resource. When a batch is complete, the result for each record is available in a result set resource.

Processing data typically consists of these steps.

1.  Create a new job that specifies the object and action.
2.  Send data to the server in a number of batches.
3.  After all data has been submitted, close the job. When closed, no more batches can be sent as part of the job.

    If using PK chunking, don't close the job until after you retrieve the results from all of the batches.

4.  Check status of all batches at a reasonable interval. Each status check returns the state of each batch.
5.  When all batches have completed or failed, retrieve the result for each batch.
6.  Match the result sets with the original data set to determine which records failed and succeeded, and take appropriate action.

You can abort the job at any point in this process. Aborting a job has the effect of preventing any unprocessed batches from being processed. It doesn't undo the effects of batches already processed.
