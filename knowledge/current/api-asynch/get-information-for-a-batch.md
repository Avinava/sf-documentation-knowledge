---
title: "Get Information for a Batch"
domain: api-asynch
topic: get-information-for-a-batch
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.068Z
estimatedTokens: 829
keywords: [Batch, sending, URI]
---

# Get Information for a Batch

> Get information about an existing batch by sending a GET request to this
    URI.

# Get Information for a Batch

Get information about an existing batch by sending a GET request to this URI.

URI

/services/async/APIversion/job/jobid/batch/batchId

Example request body

No request body is allowed.

Example XML response body

```

```

Example JSON response body

```

```

-   [← Previous](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_monitor.htm "Monitor a Batch")
-   [Next →](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info_all.htm "Get Information for All Batches in a Job")

#### See Also

-   [Add a Batch to a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_create.htm "Add a new batch to a job by sending a POST request to this URI. The request body contains a list of records for processing.")

-   [Monitor a Batch](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_monitor.htm "You can monitor a Bulk API batch in Salesforce.")

-   [Get Information for All Batches in a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info_all.htm "Get information about all batches in a job by sending a GET request to this URI.")

-   [Interpret Batch State](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_interpret_status.htm "This list gives you more details about the various states, also known as statuses, of a batch. The batch state informs you whether to proceed to get the results, or whether you must wait or fix errors related to your request.")

-   [Get a Batch Request](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_request.htm "Get a batch request by sending a GET request to the following URI. This is available in API version 19.0 and later.")

-   [Get Batch Results](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm "Get results of a batch that completed processing by sending a GET request to this URI. If the batch is a CSV file, the response is in CSV format. If the batch is an XML or JSON file, the response is in XML or JSON format, respectively.")

-   [Limits](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm "Note the following limits specific to Bulk API.")

-   [BatchInfo](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_batchinfo.htm "A BatchInfo contains one batch of data for you to submit to Salesforce for processing.")

-   [About URIs](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_basics_about_uri.htm "You send HTTP requests to a URI to perform operations with Bulk API.")

-   [Quick Start: Bulk API](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_intro.htm "You process a set of records by creating a job that contains one or more batches. The job specifies which object is being processed and what type of operation is being used. Ingest jobs are defined by CSV, XML, JSON, or binary attachments. Query jobs are defined by a SOQL statement.")

-   [Quick Start: Bulk API 2.0](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart.htm "Get up and running with Bulk API 2.0 by sending a few requests to Salesforce. This Quick Start takes you from setting up a basic environment to inserting, upserting, and querying records using Bulk API 2.0. Experience how to use Bulk API 2.0 via cURL in a free Salesforce Developer Edition org by authenticating and following the examples.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<batchInfo
   xmlns="http://www.force.com/2009/06/asyncapi/dataload">
 <id>751D0000000004rIAA</id>
 <jobId>750D0000000002lIAA</jobId>
 <state>InProgress</state>
 <createdDate>2009-04-14T18:15:59.000Z</createdDate>
 <systemModstamp>2009-04-14T18:15:59.000Z</systemModstamp>
 <numberRecordsProcessed>0</numberRecordsProcessed>
 <numberRecordsFailed>0</numberRecordsFailed>
 <totalProcessingTime>0</totalProcessingTime>
 <apiActiveProcessingTime>0</apiActiveProcessingTime>
 <apexProcessingTime>0</apexProcessingTime>
</batchInfo>
```

```
{
   "apexProcessingTime" : 0,
   "apiActiveProcessingTime" : 0,
   "createdDate" : "2015-12-15T22:52:49.000+0000",
   "id" : "751D00000004YGeIAM",
   "jobId" : "750D00000004SkVIAU",
   "numberRecordsFailed" : 0,
   "numberRecordsProcessed" : 0,
   "state" : "InProgress",
   "systemModstamp" : "2015-12-15T22:52:49.000+0000",
   "totalProcessingTime" : 0
}
```

## Related Topics

- ← Previous (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_monitor.htm)
- Next → (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info_all.htm)
- Add a Batch to a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_create.htm)
- Monitor a Batch (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_monitor.htm)
- Get Information for All Batches in a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info_all.htm)
- Interpret Batch State (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_interpret_status.htm)
- Get a Batch Request (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_request.htm)
- Get Batch Results (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm)
- Limits (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm)
- BatchInfo (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_batchinfo.htm)
