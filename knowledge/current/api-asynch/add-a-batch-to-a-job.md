---
title: "Add a Batch to a Job"
domain: api-asynch
topic: add-a-batch-to-a-job
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.060Z
estimatedTokens: 1189
keywords: [Add, Batch, Job, new, sending, POST, URI, records, processing]
---

# Add a Batch to a Job

> Add a new batch to a job by sending a POST request to this URI. The request body
    contains a list of records for processing.

# Add a Batch to a Job

Add a new batch to a job by sending a POST request to this URI. The request body contains a list of records for processing.

URI

/services/async/APIversion/job/jobid/batch

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

The API version in the URI for all batch operations must match the API version for the associated job.

Example XML request body

```

```

In this sample, the batch data is in XML format because the contentType field of the associated job was set to XML. For alternative formats for batch data, such as CSV or JSON, see [JobInfo](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_jobinfo.htm "A job contains one or more batches of data for you to submit to Salesforce for processing. When a job is created, Salesforce sets the job state to Open.").

Example XML response body

```

```

Example JSON request body

```

```

In this sample, the batch data is in JSON format because the contentType field of the associated job was set to JSON.

Example JSON response body

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

You can add batch jobs using non-Bulk API-compliant CSV files. See [Map Data Fields](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_mapping.htm "To use Bulk API to import data that was exported directly from Microsoft Outlook, Google Contacts, and other third-party sources, map data fields in any CSV import file to Salesforce data fields. It's not necessary for the CSV import file to be Bulk API-compatible.").

-   [Next →](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_monitor.htm "Monitor a Batch")

#### See Also

-   [Create a Batch with Binary Attachments](atlas.en-us.api_asynch.meta/api_asynch/binary_create_batch.htm "After creating the job, you’re ready to create a batch of Attachment records. You send data in batches in separate HTTP POST requests. In this example, you create and submit one batch.")

-   [Get Information for a Batch](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info.htm "Get information about an existing batch by sending a GET request to this URI.")

-   [Monitor a Batch](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_monitor.htm "You can monitor a Bulk API batch in Salesforce.")

-   [Get Information for All Batches in a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info_all.htm "Get information about all batches in a job by sending a GET request to this URI.")

-   [Interpret Batch State](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_interpret_status.htm "This list gives you more details about the various states, also known as statuses, of a batch. The batch state informs you whether to proceed to get the results, or whether you must wait or fix errors related to your request.")

-   [Get a Batch Request](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_request.htm "Get a batch request by sending a GET request to the following URI. This is available in API version 19.0 and later.")

-   [Get Batch Results](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm "Get results of a batch that completed processing by sending a GET request to this URI. If the batch is a CSV file, the response is in CSV format. If the batch is an XML or JSON file, the response is in XML or JSON format, respectively.")

-   [Quick Start: Bulk API](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_intro.htm "You process a set of records by creating a job that contains one or more batches. The job specifies which object is being processed and what type of operation is being used. Ingest jobs are defined by CSV, XML, JSON, or binary attachments. Query jobs are defined by a SOQL statement.")

-   [Limits](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm "Note the following limits specific to Bulk API.")

-   [About URIs](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_basics_about_uri.htm "You send HTTP requests to a URI to perform operations with Bulk API.")

-   [BatchInfo](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_batchinfo.htm "A BatchInfo contains one batch of data for you to submit to Salesforce for processing.")

-   [Quick Start: Bulk API 2.0](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart.htm "Get up and running with Bulk API 2.0 by sending a few requests to Salesforce. This Quick Start takes you from setting up a basic environment to inserting, upserting, and querying records using Bulk API 2.0. Experience how to use Bulk API 2.0 via cURL in a free Salesforce Developer Edition org by authenticating and following the examples.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<sObjects xmlns="http://www.force.com/2009/06/asyncapi/dataload">
  <sObject>
    <description>Created from Bulk API</description>
    <name>[Bulk API] Account 0 (batch 0)</name>
  </sObject>
  <sObject>
    <description>Created from Bulk API</description>
    <name>[Bulk API] Account 1 (batch 0)</name>
  </sObject>
</sObjects>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<batchInfo
   xmlns="http://www.force.com/2009/06/asyncapi/dataload">
 <id>751D0000000004rIAA</id>
 <jobId>750D0000000002lIAA</jobId>
 <state>Queued</state>
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
[
   {
      "Name":"[Bulk API] Account 0 (batch 0)",
      "description" : "Created from Bulk API"
   },
   {
      "Name":"[Bulk API] Account 1 (batch 0)",
      "description" : "Created from Bulk API"
   }
]
```

```
{
   "apexProcessingTime":0,
   "apiActiveProcessingTime":0,
   "createdDate":"2015-12-15T21:56:43.000+0000",
   "id":"751D00000004YGZIA2",
   "jobId":"750D00000004SkVIAU",
   "numberRecordsFailed":0,
   "numberRecordsProcessed":0,
   "state":"Queued",
   "systemModstamp":"2015-12-15T21:56:43.000+0000",
   "totalProcessingTime":0
}
```

## Related Topics

- JobInfo (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_jobinfo.htm)
- Map Data Fields (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_mapping.htm)
- Next → (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_monitor.htm)
- Create a Batch with Binary Attachments (atlas.en-us.api_asynch.meta/api_asynch/binary_create_batch.htm)
- Get Information for a Batch (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info.htm)
- Monitor a Batch (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_monitor.htm)
- Get Information for All Batches in a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info_all.htm)
- Interpret Batch State (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_interpret_status.htm)
- Get a Batch Request (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_request.htm)
- Get Batch Results (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm)
