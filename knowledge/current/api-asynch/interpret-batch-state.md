---
title: "Interpret Batch State"
domain: api-asynch
topic: interpret-batch-state
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.086Z
estimatedTokens: 1213
keywords: [Interpret, Batch, State, gives, various, states, known, statuses, informs, whether, proceed, results, wait, fix, errors]
---

# Interpret Batch State

> This list gives you more details about the various states, also known as statuses, of a
  batch. The batch state informs you whether to proceed to get the results, or whether you must wait
  or fix errors related to your request.

# Interpret Batch State

This list gives you more details about the various states, also known as statuses, of a batch. The batch state informs you whether to proceed to get the results, or whether you must wait or fix errors related to your request.

Queued

Processing of the batch hasn’t started yet. If the job associated with this batch is aborted, the batch isn’t processed and its state is set to NotProcessed.

InProgress

The batch is being processed. If the job associated with the batch is aborted, the batch is still processed to completion. You must close the job associated with the batch so that the batch can finish processing.

Completed

The batch has been processed completely, and the result resource is available. The result resource indicates if some records failed. A batch can be completed even if some or all the records failed. If a subset of records failed, the successful records aren’t rolled back.

Failed

The batch failed to process the full request due to an unexpected error, such as the request is compressed with an unsupported format, or an internal server error. Even if the batch failed, some records could have completed successfully. If the numberRecordsProcessed field in the response is greater than zero, you should get the results to see which records were processed, and if they were successful.

NotProcessed

The batch won’t be processed. This state is assigned when a job is aborted while the batch is queued. For bulk queries, if the job has PK chunking enabled, this state is assigned to the original batch that contains the query when the subsequent batches are created. After the original batch is changed to this state, you can monitor the subsequent batches and retrieve each batch’s results when it’s completed.

-   [← Previous](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info_all.htm "Get Information for All Batches in a Job")
-   [Next →](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_request.htm "Get a Batch Request")

#### See Also

-   [Add a Batch to a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_create.htm "Add a new batch to a job by sending a POST request to this URI. The request body contains a list of records for processing.")

-   [Monitor a Batch](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_monitor.htm "You can monitor a Bulk API batch in Salesforce.")

-   [Get Information for All Batches in a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info_all.htm "Get information about all batches in a job by sending a GET request to this URI.")

-   [Get a Batch Request](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_request.htm "Get a batch request by sending a GET request to the following URI. This is available in API version 19.0 and later.")

-   [Get Batch Results](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm "Get results of a batch that completed processing by sending a GET request to this URI. If the batch is a CSV file, the response is in CSV format. If the batch is an XML or JSON file, the response is in XML or JSON format, respectively.")

-   [Handle Failed Records in Batches](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_failed_records.htm "A batch can have a Completed state even if some or all of the records failed. If a subset of records failed, the successful records aren't rolled back. Likewise, even if the batch has a Failed state or if a job is aborted, some records could have completed successfully.")

-   [Limits](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm "Note the following limits specific to Bulk API.")

-   [BatchInfo](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_batchinfo.htm "A BatchInfo contains one batch of data for you to submit to Salesforce for processing.")

-   [About URIs](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_basics_about_uri.htm "You send HTTP requests to a URI to perform operations with Bulk API.")

-   [Quick Start: Bulk API](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_intro.htm "You process a set of records by creating a job that contains one or more batches. The job specifies which object is being processed and what type of operation is being used. Ingest jobs are defined by CSV, XML, JSON, or binary attachments. Query jobs are defined by a SOQL statement.")

-   [Quick Start: Bulk API 2.0](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart.htm "Get up and running with Bulk API 2.0 by sending a few requests to Salesforce. This Quick Start takes you from setting up a basic environment to inserting, upserting, and querying records using Bulk API 2.0. Experience how to use Bulk API 2.0 via cURL in a free Salesforce Developer Edition org by authenticating and following the examples.")

## Related Topics

- ← Previous (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info_all.htm)
- Next → (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_request.htm)
- Add a Batch to a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_create.htm)
- Monitor a Batch (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_monitor.htm)
- Get Information for All Batches in a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info_all.htm)
- Get a Batch Request (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_request.htm)
- Get Batch Results (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm)
- Handle Failed Records in Batches (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_failed_records.htm)
- Limits (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm)
- BatchInfo (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_batchinfo.htm)
