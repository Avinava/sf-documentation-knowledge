---
title: "Work with Batches"
domain: api-asynch
topic: work-with-batches
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.090Z
estimatedTokens: 902
keywords: [Work, Batches, batch, records, sent, server, HTTP, POST, processed, independently, necessarily, order, it’s, received]
---

# Work with Batches

> A batch is a set of records sent to the server in an HTTP POST
      request. Each batch is processed independently by the server, not necessarily in the order
      it’s received.

# Work with Batches

A batch is a set of records sent to the server in an HTTP POST request. Each batch is processed independently by the server, not necessarily in the order it’s received.

A batch is created by submitting a CSV, XML, or JSON representation of a set of records and any references to binary attachments in an HTTP POST request. When created, the status of a batch is represented by a BatchInfo resource. When a batch is complete, the result for each record is available in a result set resource.

Batches can be processed in parallel. It's up to the client to decide how to divide the entire data set into a suitable number of batches.

Adjust batch sizes based on processing times. Start with 5000 records and adjust the batch size based on processing time. If it takes more than 5 minutes to process a batch, it can be beneficial to reduce the batch size. If it takes a few seconds, increase the batch size. If you get a timeout error when processing a batch, split your batch into smaller batches, and try again.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

Salesforce provides an additional API, Bulk API 2.0, which uses the REST API framework to provide similar capabilities to Bulk API. Bulk API 2.0 removes the need for creating and monitoring batches, and it lets you load record data for a job directly. For more information on Bulk API 2.0, see the [Bulk API 2.0 Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_asynch.meta/api_bulk_v2).

1.  [Add a Batch to a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_create.htm)
    Add a new batch to a job by sending a POST request to this URI. The request body contains a list of records for processing.
2.  [Monitor a Batch](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_monitor.htm)
    You can monitor a Bulk API batch in Salesforce.
3.  [Get Information for a Batch](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info.htm)
    Get information about an existing batch by sending a GET request to this URI.
4.  [Get Information for All Batches in a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info_all.htm)
    Get information about all batches in a job by sending a GET request to this URI.
5.  [Interpret Batch State](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_interpret_status.htm)
    This list gives you more details about the various states, also known as statuses, of a batch. The batch state informs you whether to proceed to get the results, or whether you must wait or fix errors related to your request.
6.  [Get a Batch Request](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_request.htm)
    Get a batch request by sending a GET request to the following URI. This is available in API version 19.0 and later.
7.  [Get Batch Results](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm)
    Get results of a batch that completed processing by sending a GET request to this URI. If the batch is a CSV file, the response is in CSV format. If the batch is an XML or JSON file, the response is in XML or JSON format, respectively.
8.  [Handle Failed Records in Batches](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_failed_records.htm)
    A batch can have a Completed state even if some or all of the records failed. If a subset of records failed, the successful records aren't rolled back. Likewise, even if the batch has a Failed state or if a job is aborted, some records could have completed successfully.

## Related Topics

- Add a Batch to a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_create.htm)
- Monitor a Batch (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_monitor.htm)
- Get Information for a Batch (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info.htm)
- Get Information for All Batches in a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info_all.htm)
- Interpret Batch State (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_interpret_status.htm)
- Get a Batch Request (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_request.htm)
- Get Batch Results (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm)
- Handle Failed Records in Batches (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_failed_records.htm)
