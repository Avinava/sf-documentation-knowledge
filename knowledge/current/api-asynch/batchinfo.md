---
title: "BatchInfo"
domain: api-asynch
topic: batchinfo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.273Z
estimatedTokens: 1399
keywords: [BatchInfo, batch, data, submit, Salesforce, processing, HTTP, BatchInfoList]
---

# BatchInfo

> A BatchInfo contains one batch of data for you to submit to Salesforce for
    processing.

# BatchInfo

A BatchInfo contains one batch of data for you to submit to Salesforce for processing.

## BatchInfo

| Name | Type | Request | Description |
| --- | --- | --- | --- |
| apexProcessingTime | long | System field | The number of milliseconds taken to process triggers and other processes related to the batch data. If there are no triggers, the value is 0. This doesn't include the time used for processing asynchronous and batch Apex operations. See also apiActiveProcessingTime and totalProcessingTime.This field is available in API version 19.0 and later. |
| apiActiveProcessingTime | long | System field | The number of milliseconds taken to actively process the batch, and includes apexProcessingTime. This doesn't include the time the batch waited in the queue to be processed or the time required for serialization and deserialization. See also totalProcessingTime.This field is available in API version 19.0 and later. |
| createdDate | dateTime | System field | The date and time in the UTC time zone when the batch was created. This is not the time processing began, but the time the batch was added to the job. |
| id | string | Required | The ID of the batch. May be globally unique, but does not have to be. |
| jobId | string | Required | The unique, 18–character ID for the job associated with this batch. |
| numberRecordsFailed | int | System field | The number of records that were not processed successfully in this batch.This field is available in API version 19.0 and later. |
| numberRecordsProcessed | int | System field | The number of records processed in this batch at the time the request was sent. This number increases as more batches are processed. |
| state | BatchStateEnum | System field | The current state of processing for the batch:Queued: Processing of the batch hasn’t started yet. If the job associated with this batch is aborted, the batch isn’t processed and its state is set to NotProcessed.InProgress: The batch is being processed. If the job associated with the batch is aborted, the batch is still processed to completion. You must close the job associated with the batch so that the batch can finish processing.Completed: The batch has been processed completely, and the result resource is available. The result resource indicates if some records failed. A batch can be completed even if some or all the records failed. If a subset of records failed, the successful records aren’t rolled back.Failed: The batch failed to process the full request due to an unexpected error, such as the request is compressed with an unsupported format, or an internal server error. The stateMessage element could contain more details about any failures. Even if the batch failed, some records could have completed successfully. The numberRecordsProcessed field tells you how many records were processed. The numberRecordsFailed field contains the number of records that were not processed successfully.NotProcessed: The batch won’t be processed. This state is assigned when a job is aborted while the batch is queued. For bulk queries, if the job has PK chunking enabled, this state is assigned to the original batch that contains the query when the subsequent batches are created. After the original batch is changed to this state, you can monitor the subsequent batches and retrieve each batch’s results when it’s completed. Then you can safely close the job. |
| stateMessage | string | System field | When the state value is Failed, this field contains the reasons for failure. If there are multiple failures, the message may be truncated. If so, fix the known errors and re-submit the batch. Even if the batch failed, some records could have completed successfully. |
| systemModstamp | dateTime | System field | The date and time in the UTC time zone that processing ended. This is only valid when the state is Completed. |
| totalProcessingTime | long | System field | The number of milliseconds taken to process the job. This is the sum of the total processing times for all batches in the job. See also apexProcessingTime and apiActiveProcessingTime.This field is available in API version 19.0 and later. |

## HTTP BatchInfoList

| Name | Type | Description |
| --- | --- | --- |
| batchInfo | BatchInfo | One BatchInfo resource for each batch in the associated job. For the structure of BatchInfo, see Get Information for a Batch . |

#### See Also

-   [Work with Batches](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_intro.htm "A batch is a set of records sent to the server in an HTTP POST request. Each batch is processed independently by the server, not necessarily in the order it’s received.")

-   [Interpret Batch State](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_interpret_status.htm "This list gives you more details about the various states, also known as statuses, of a batch. The batch state informs you whether to proceed to get the results, or whether you must wait or fix errors related to your request.")

-   [Quick Start: Bulk API 2.0](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart.htm "Get up and running with Bulk API 2.0 by sending a few requests to Salesforce. This Quick Start takes you from setting up a basic environment to inserting, upserting, and querying records using Bulk API 2.0. Experience how to use Bulk API 2.0 via cURL in a free Salesforce Developer Edition org by authenticating and following the examples.")

-   [SOAP API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/ "SOAP API Developer Guide - html (New Window)")

## Related Topics

- Get Information for a Batch (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info.htm)
- Work with Batches (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_intro.htm)
- Interpret Batch State (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_interpret_status.htm)
- Quick Start: Bulk API 2.0 (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart.htm)
