---
title: "JobInfo"
domain: api-asynch
topic: jobinfo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.291Z
estimatedTokens: 2074
keywords: [JobInfo, job, batches, data, submit, Salesforce, processing, created, state, Open]
---

# JobInfo

> A job contains one or more batches of data for you to submit to Salesforce for
		processing. When a job is created, Salesforce sets the job state to Open.

# JobInfo

A job contains one or more batches of data for you to submit to Salesforce for processing. When a job is created, Salesforce sets the job state to Open.

You can create a job, get information about a job, close a job, or abort a job using the JobInfo resource.

## Fields

| Name | Type | Request | Description |
| --- | --- | --- | --- |
| apiVersion | string | Read only. Don’t set for new job. | The API version of the job set in the URI when the job was created. The earliest supported version is 17.0. |
| apexProcessingTime | long | Don’t specify for new job. | The number of milliseconds taken to process triggers and other processes related to the job data. This number is the sum of the equivalent times in all batches in the job. This doesn't include the time used for processing asynchronous and batch Apex operations. If there are no triggers, the value is 0. See also apiActiveProcessingTime and totalProcessingTime.This field is available in API version 19.0 and later. |
| apiActiveProcessingTime | long | Don’t specify for new job. | The number of milliseconds taken to actively process the job. It includes apexProcessingTime, but doesn't include the time the job waited in the queue to be processed or the time required for serialization and deserialization. This is the sum of the equivalent times in all batches in the job. See also apexProcessingTime and totalProcessingTime.This field is available in API version 19.0 and later. |
| assignmentRuleId | string | Can't update after creation. | The ID of a specific assignment rule to run for a case or a lead. The assignment rule can be active or inactive. The ID can be retrieved by using the SOAP-based SOAP API to query the AssignmentRule object. |
| concurrencyMode | ConcurrencyModeEnum |  | The concurrency mode for the job. The valid values are:Parallel: Process batches in Parallel mode. Default value. Batches from the same job, and from other jobs submitted with parallel mode, are processed simultaneously. Parallel processing, though, has the potential to cause lock contention on records. When record locking is severe, the job can fail. Any failed records must be resubmitted.Serial: Process batches in Serial mode. If parallel mode results in too many failed records or failed jobs, submit the job with Serial concurrency mode. In this mode, batches from the job and batches from other serial mode jobs are processed one at a time. However, Serial mode can significantly increase the processing time. |
| contentType | ContentType |  | The content type for the job. The valid values are:CSV—data in CSV format (default and only supported content type for Bulk V2 type jobs)JSON—data in JSON formatXML—data in XML format (default option for Bulk V1 type jobs)ZIP_CSV—data in CSV format in a zip file containing binary attachmentsZIP_JSON—data in JSON format in a zip file containing binary attachmentsZIP_XML—data in XML format in a zip file containing binary attachments |
| createdById | string | System field | The ID of the user who created this job. All batches must be created by this same user. |
| createdDate | dateTime | System field | The date and time in the UTC time zone when the job was created. |
| externalIdFieldName | string | Required with upsert | The name of the external ID field for an upsert(). |
| id | string | Don’t specify for new job. | Unique ID for this job.All GET operations return this value in results. |
| numberBatchesCompleted | int | Don’t specify for new job. | The number of batches that have been completed for this job. |
| numberBatchesQueued | int | Don’t specify for new job. | The number of batches queued for this job. |
| numberBatchesFailed | int | Don’t specify for new job. | The number of batches that have failed for this job. |
| numberBatchesInProgress | int | Don’t specify for new job. | The number of batches that are in progress for this job. |
| numberBatchesTotal | int | Don’t specify for new job. | The number of total batches currently in the job. This value increases as more batches are added to the job. When the job state is Closed or Failed, this number represents the final total.The job is complete when numberBatchesTotal equals the sum of numberBatchesCompleted and numberBatchesFailed. |
| numberRecordsFailed | long | Don’t specify for new job. | The number of records that weren’t processed successfully in this job.This field is available in API version 19.0 and later. |
| numberRecordsProcessed | long | Don’t specify for new job. | The number of records already processed. This number increases as more batches are processed. |
| numberRetries | int |  | The number of times that Salesforce attempted to save the results of an operation. The repeated attempts are due to a problem, such as a lock contention. |
| object | string | Required | The object type for the data being processed. All data in a job must be of a single object type. |
| operation | OperationEnum | Required | The processing operation for all the batches in the job. The valid values are:deletehardDeleteinsertqueryqueryAllupdateupsertWarningThe operation value must match that shown here. For example, you get an error if you use INSERT instead of insert.To ensure referential integrity, the delete operation supports cascading deletions. If you delete a parent record, you delete its children automatically, as long as each child record can be deleted. For example, if you delete a Case record, the Bulk API automatically deletes any child records, such as CaseComment, CaseHistory, and CaseSolution records associated with that case. However, if a CaseComment isn’t deletable or is being used, then the delete operation on the parent Case record fails.WarningWhen the hardDelete value is specified, the deleted records aren't stored in the Recycle Bin. Instead, they become immediately eligible for deletion. The permission for this operation, “Bulk API Hard Delete,” is disabled by default and must be enabled by an administrator. A Salesforce user license is required for hard delete. |
| state | JobStateEnum | Required if creating, closing, or aborting a job. | The current state of processing for the job:Open: The job has been created, and data can be added to the job.Closed: No new data can be added to this job. Data associated with the job may be processed after a job is closed. You can’t edit or save a closed job.Aborted: The job has been aborted. You can abort a job if you created it or if you’ve the “Manage Data Integrations” permission.Failed: The job has failed. Batches that were successfully processed can't be rolled back. The BatchInfoList contains a list of all batches for the job. From the results of BatchInfoList, results can be retrieved for completed batches. The results indicate which records have been processed. The numberRecordsFailed field contains the number of records that weren’t processed successfully. |
| systemModstamp | dateTime | System field | Date and time in the UTC time zone when the job finished. |
| totalProcessingTime | long | Don’t specify for new job. | The number of milliseconds taken to process the job. This number is the sum of the total processing times for all batches in the job. See also apexProcessingTime and apiActiveProcessingTime.This field is available in API version 19.0 and later. |

#### See Also

-   [Quick Start: Bulk API](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_intro.htm "You process a set of records by creating a job that contains one or more batches. The job specifies which object is being processed and what type of operation is being used. Ingest jobs are defined by CSV, XML, JSON, or binary attachments. Query jobs are defined by a SOQL statement.")

-   [Quick Start: Bulk API 2.0](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart.htm "Get up and running with Bulk API 2.0 by sending a few requests to Salesforce. This Quick Start takes you from setting up a basic environment to inserting, upserting, and querying records using Bulk API 2.0. Experience how to use Bulk API 2.0 via cURL in a free Salesforce Developer Edition org by authenticating and following the examples.")

-   [SOAP API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/ "SOAP API Developer Guide - html (New Window)")

## Related Topics

- Quick Start: Bulk API (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_intro.htm)
- Quick Start: Bulk API 2.0 (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart.htm)
