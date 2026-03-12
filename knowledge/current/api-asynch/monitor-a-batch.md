---
title: "Monitor a Batch"
domain: api-asynch
topic: monitor-a-batch
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.093Z
estimatedTokens: 1058
keywords: [Monitor, Batch, Bulk, API, Salesforce]
---

# Monitor a Batch

> You can monitor a Bulk API batch in Salesforce.

# Monitor a Batch

You can monitor a Bulk API batch in Salesforce.

To track the status of bulk data load jobs and their associated batches, from Setup, in the Quick Find box, enter Bulk Data Load Jobs, then select **Bulk Data Load Jobs**. Click the **Job ID** to view the job detail page.

The job detail page includes a related list of all the batches for the job. The related list provides **View Request** and **View Response** links for each batch. If the batch is a CSV file, the links return the request or response in CSV format. If the batch is an XML or JSON file, the links return the request or response in XML or JSON format, respectively. These links are available for batches created in API version 19.0 and later. For Bulk V2 type jobs, batch information is unavailable.

-   [← Previous](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_create.htm "Add a Batch to a Job")
-   [Next →](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info.htm "Get Information for a Batch")

#### See Also

-   [Get Information for a Batch](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info.htm "Get information about an existing batch by sending a GET request to this URI.")

-   [Add a Batch to a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_create.htm "Add a new batch to a job by sending a POST request to this URI. The request body contains a list of records for processing.")

-   [Get Information for All Batches in a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info_all.htm "Get information about all batches in a job by sending a GET request to this URI.")

-   [Interpret Batch State](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_interpret_status.htm "This list gives you more details about the various states, also known as statuses, of a batch. The batch state informs you whether to proceed to get the results, or whether you must wait or fix errors related to your request.")

-   [Get a Batch Request](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_request.htm "Get a batch request by sending a GET request to the following URI. This is available in API version 19.0 and later.")

-   [Get Batch Results](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm "Get results of a batch that completed processing by sending a GET request to this URI. If the batch is a CSV file, the response is in CSV format. If the batch is an XML or JSON file, the response is in XML or JSON format, respectively.")

-   [Handle Failed Records in Batches](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_failed_records.htm "A batch can have a Completed state even if some or all of the records failed. If a subset of records failed, the successful records aren't rolled back. Likewise, even if the batch has a Failed state or if a job is aborted, some records could have completed successfully.")

-   [Quick Start: Bulk API](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_intro.htm "You process a set of records by creating a job that contains one or more batches. The job specifies which object is being processed and what type of operation is being used. Ingest jobs are defined by CSV, XML, JSON, or binary attachments. Query jobs are defined by a SOQL statement.")

-   [Limits](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm "Note the following limits specific to Bulk API.")

-   [About URIs](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_basics_about_uri.htm "You send HTTP requests to a URI to perform operations with Bulk API.")

-   [BatchInfo](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_batchinfo.htm "A BatchInfo contains one batch of data for you to submit to Salesforce for processing.")

-   [Quick Start: Bulk API 2.0](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart.htm "Get up and running with Bulk API 2.0 by sending a few requests to Salesforce. This Quick Start takes you from setting up a basic environment to inserting, upserting, and querying records using Bulk API 2.0. Experience how to use Bulk API 2.0 via cURL in a free Salesforce Developer Edition org by authenticating and following the examples.")

## Related Topics

- ← Previous (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_create.htm)
- Next → (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info.htm)
- Get Information for a Batch (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info.htm)
- Add a Batch to a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_create.htm)
- Get Information for All Batches in a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info_all.htm)
- Interpret Batch State (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_interpret_status.htm)
- Get a Batch Request (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_request.htm)
- Get Batch Results (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm)
- Handle Failed Records in Batches (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_failed_records.htm)
- Quick Start: Bulk API (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_intro.htm)
