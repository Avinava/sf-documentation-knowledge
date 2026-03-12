---
title: "AsyncApexJob"
domain: object-reference
topic: asyncapexjob
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:05.110Z
estimatedTokens: 907
keywords: [AsyncApexJob, individual, Apex, sharing, recalculation, job, batch, future, annotation, implements, Queueable, Schedulable, query, jobs, organization]
---

# AsyncApexJob

> Represents an individual Apex sharing
    recalculation job, a batch Apex job, a method with the future annotation, or a job that implements Queueable or Schedulable. Use this
   object to query Apex batch jobs in your organization.

# AsyncApexJob

Represents an individual Apex sharing recalculation job, a batch Apex job, a method with the future annotation, or a job that implements Queueable or Schedulable. Use this object to query Apex batch jobs in your organization.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

If Apex isn’t running in system mode, users must have the View Setup and Configuration permission to access this object and to enqueue asynchronous Apex jobs.

## Fields

| Field Name | Details |
| --- | --- |
| ApexClassId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Apex class executing the job. Label is Class ID.This is a relationship field.Relationship NameApexClassRelationship TypeLookupRefers ToApexClass |
| CompletedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the job was completed. |
| CronTriggerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the CronTrigger for the AsyncApexJob. This field only applies to ScheduledApex job type. This field is available in API version 53.0 and later. For scheduled jobs created before version 53.0, this field is populated on subsequent execution.This is a relationship field.Relationship NameCronTriggerRelationship TypeLookupRefers ToCronTrigger |
| ExtendedStatus | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf one or more errors occurred during the batch processing, this field contains a short description of the first error. A more detailed description of that error, along with any subsequent errors, is emailed to the last user who modified the batch class. This field is available in API version 19.0 and later. |
| JobItemsProcessed | TypeintPropertiesFilter, Group, SortDescriptionNumber of job items processed. Label is Batches Processed. |
| JobType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of job being processed. Valid values are:ApexTokenBatchApexBatchApexWorkerFutureQueueableScheduledApexSharingRecalculationTestRequestTestWorker |
| LastProcessed | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLast ID that was processed and committed. |
| LastProcessedOffset | TypeintPropertiesFilter, Group, Nillable, SortDescriptionOffset of the last ID that was processed and committed. |
| MethodName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the Apex method being executed. Label is Apex Method. |
| NumberOfErrors | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of batches with a failure. A batch is considered transactional, so any unhandled exceptions constitute an entire failure of the batch. Label is Failures. |
| ParentJobId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionFor batch Apex jobs that run using chunking implementation, multiple child jobs of type BatchApexWorker are created. Each of these child job records contains the job Id of the parent Apex job that started their execution. For batch Apex jobs that run using a non-chunking implementation, child jobs aren’t created. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the job. Valid values are:AbortedCompletedFailedHolding1PreparingProcessingQueued1 This status applies to batch jobs in the Apex flex queue. |
| TotalJobItems | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of batches processed. Each batch contains a set of records. Label is Total Batches. |

## Usage

Use this object to query Apex batch jobs in your organization.
