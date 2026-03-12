---
title: "Bulk API and Bulk API 2.0 Limits and Allocations"
domain: salesforce-app-limits-cheatsheet
topic: bulk-api-and-bulk-api-20-limits-and-allocations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.206Z
estimatedTokens: 1625
keywords: [Bulk, API, 2.0, Limits, Allocations, Any, data, operation, includes, records, good, candidate, successfully, prepare, execute]
---

# Bulk API and Bulk API 2.0 Limits and Allocations

> Any data operation that includes more than 2,000 records is a good candidate for Bulk API
			2.0 to successfully prepare, execute, and manage an asynchronous workflow that
			makes use of the Bulk framework. Jobs with fewer than 2,000 records should involve
			“bulkified” synchronous calls in REST (for example, Composite) or SOAP.

# Bulk API and Bulk API 2.0 Limits and Allocations

Any data operation that includes more than 2,000 records is a good candidate for Bulk API 2.0 to successfully prepare, execute, and manage an *asynchronous* workflow that makes use of the Bulk framework. Jobs with fewer than 2,000 records should involve “bulkified” *synchronous* calls in REST (for example, Composite) or SOAP.

## Batch Allocations

You can submit up to 15,000 batches per rolling 24-hour period. This allocation is shared between Bulk API and Bulk API 2.0, so every batch that is processed in Bulk API or Bulk API 2.0 counts towards this allocation.

In Bulk API 2.0, only ingest jobs consume batches. Query jobs don’t. For details, see How Requests Are Processed in the Bulk API 2.0 Developer Guide.

In Bulk API 2.0, batches are created for you automatically. In Bulk API, you must create the batches yourself.

## General Limits

| Item | Bulk API Limit | Bulk API 2.0 Limit |
| --- | --- | --- |
| Batch and job lifespan | Batches and jobs that are older than seven days are removed from the queue if batches are in a terminal state (completed, aborted, or failed), regardless of their respective job status. The seven days are measured from the youngest batch associated with a job, or the age of the job if there are no batches. You can’t create batches associated with a job that is more than 24 hours old. Batches in a non-terminal state that are older than seven days are periodically cleaned up with their respective jobs. | Jobs in a terminal state (completed, aborted, or failed) that are older than seven days are deleted. Jobs in a non-terminal state that are older than seven days are periodically cleaned up. |
| Binary content | The length of any file name can’t exceed 512 bytes.A zip file can’t exceed 10 MB.The total size of the unzipped content can’t exceed 20 MB.A maximum of 1,000 files can be contained in a zip file. Directories don’t count toward this total. | N/A |
| Maximum time that a job can remain open | 24 hours | The same. (But this only applies to ingest jobs, not query jobs.) |

## Limits Specific to Ingest Jobs

| Item | Bulk API Limit | Bulk API 2.0 Limit |
| --- | --- | --- |
| Maximum number of records uploaded per 24-hour rolling period | 150,000,000 (15,000 batches x 10,000 records per batch maximum) | 150,000,000 |
| Batch processing time | Batches are processed in chunks. The chunk size depends on the API version. In API version 20.0 and earlier, the chunk size is 100 records. In API version 21.0 and later, the chunk size is 200 records. Start with the maximum batch size of 10,000 records. Salesforce processes each batch asynchronously. Adjust batch sizes based on processing times. If processing a batch takes too long, then the batch times out and an error is returned. If that happens, reduce the batch size and resubmit. Likewise, if a job only takes a few seconds, increase up the batch size toward the maximum size. Avoid using smaller batches as this increases the total number of batches, and therefore, increases the risk of hitting your daily batch limit. | Same as Bulk API |
| Maximum time before a batch is retried | 5 minutes | The API automatically handles retries. If you receive a message that the API retried more than 20 times, use a smaller upload file and try again. |
| Results lifespan | You can retrieve the ingest job's results (success, failed, and unprocessed records) within 7 days of job completion, unless the job has been deleted explicitly. | Same as Bulk API |
| Maximum file size | 10 MB per batch | 150 MB per jobNoteA request can provide CSV data that does not in total exceed 150 MB of base64 encoded content. When job data is uploaded, it is converted to base64. This conversion can increase the data size by approximately 50%. To account for the base64 conversion increase, upload data that does not exceed 100 MB. |
| Maximum number of characters in a field | 131072 | Same as Bulk API |
| Maximum number of fields in a record | 5,000 | Same as Bulk API |
| Maximum number of characters in a record | 400,000 | Same as Bulk API |
| Maximum number of records in a batch | 10,000 | N/A |
| Maximum number of characters for all the data in a batch | 10,000,000 | N/A |

## Limits Specific to Query Jobs

| Item | Bulk API Limit | Bulk API 2.0 Limit |
| --- | --- | --- |
| Number of attempts to query | 30 attempts at 5 minutes each to process the batch. There’s also a 2-minute limit on the time to process the query. If more than 30 attempts are made for the query, an error message of “Tried more than thirty times” is returned. If the query takes more than 2 minutes to process, a QUERY_TIMEOUT error is returned. | The API automatically handles retries. If you receive a message that the API retried more than 15 times, apply a filter criteria and try again. |
| Batch size | Without PK chunking enabled, only one batch is created. If you create a batch with PK chunking enabled, batches are broken up based on the number of records in the chunk. This can range from 100,000 to 250,000 records. A chunk size between 100,000 and 250,000 is recommended because smaller chunk sizes can cause empty batches to be created and sent. | The API automatically handles "batch" management. |
| Number of retrieved files | 15 files. If the query returns more than 15 files, add filters to the query to return less data. Bulk batch sizes aren’t used for bulk queries. | N/A |
| Timeout for retrieving query results | 20 minutes | Same as Bulk API |
| Results lifespan | You can retrieve the query job's results within 7 days of job completion. | Same as Bulk API |
| Maximum retrieved file size | 1 GB. If processing of the batch results in 1 GB of retrieved data, then those results are saved to disk, and then the batch is put back on the queue to be resumed later. This also counts as one of the 15 retries. | Same as Bulk API.Additionally, the API client can navigate through the full set of results by using the locator and maxRecords query parameters. The client isn’t bound to a set of files. |
| Number of query jobs that can be submitted per 24-hour rolling window | See Batch Allocations. | 10,000The current number can be seen in the DailyBulkV2QueryJobs value in the response to the /vXX.X/limits/ REST API method. |
| Total query results that can be generated per 24 hour rolling window | N/A | 1 TB.The current size can be seen in the DailyBulkV2QueryFileStorageMB value in the response to the /vXX.X/limits/ REST API method. |
