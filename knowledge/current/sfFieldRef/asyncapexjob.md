---
title: "AsyncApexJob"
domain: sfFieldRef
topic: asyncapexjob
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:48.832Z
estimatedTokens: 407
keywords: [AsyncApexJob, individual, Apex, sharing, recalculation, job, batch, future, annotation, implements, Queueable, Schedulable, query, jobs, organization]
---

# AsyncApexJob

> Represents an individual Apex sharing
    recalculation job, a batch Apex job, a method with the future annotation, or a job that implements Queueable or Schedulable. Use this
   object to query Apex batch jobs in your organization.

# AsyncApexJob

Represents an individual Apex sharing recalculation job, a batch Apex job, a method with the future annotation, or a job that implements Queueable or Schedulable. Use this object to query Apex batch jobs in your organization.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AsyncApexJob](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_asyncapexjob.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApexClassId | Class ID | reference |  | 18 |  |  |
| CompletedDate | Completion Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CronTriggerId | Scheduled Job ID | reference |  | 18 |  |  |
| ExtendedStatus | Status Detail | string |  | 255 |  |  |
| Id | Apex Job ID | id |  | 18 |  |  |
| JobItemsProcessed | Batches Processed | int | 9 |  |  |  |
| JobType | Job Type | picklist |  | 40 |  |  |
| LastProcessed | Last ID processed and committed | string |  | 15 |  |  |
| LastProcessedOffset | Offset of last ID processed and committed | int | 9 |  |  |  |
| MethodName | Apex Method | string |  | 255 |  |  |
| NumberOfErrors | Failures | int | 9 |  |  |  |
| ParentJobId | Apex Job ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| TotalJobItems | Total Batches | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
