---
title: "FlexQueueItem"
domain: object-reference
topic: flexqueueitem
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.230Z
estimatedTokens: 407
keywords: [FlexQueueItem, asynchronous, Apex, job, flex, queue, position, AsyncApexJob, Calls, Special, Access, Rules, Usage]
---

# FlexQueueItem

> Represents an asynchronous Apex job in the Apex flex
    queue. Provides information about the job type and flex queue position of the AsyncApexJob.

# FlexQueueItem

Represents an asynchronous Apex job in the Apex flex queue. Provides information about the job type and flex queue position of the AsyncApexJob. This object is available in API version 36.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

In API version 49.0 and later, users must have the View Setup and Configuration permission to access this object.

## Fields

| Field Name | Description |
| --- | --- |
| AsyncApexJobId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of an AsyncApexJob that’s waiting in the flex queue.This is a relationship field.Relationship NameAsyncApexJobRelationship TypeLookupRefers ToAsyncApexJob |
| FlexQueueItemId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe primary key for this FlexQueueItem. |
| JobPosition | TypeintPropertiesFilter, Group, SortDescriptionThe position in the flex queue of the waiting job. The highest-priority job in the queue is at position 0. |
| JobType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of the job. Valid values are:ApexTokenBatchApexBatchApexWorkerFutureQueueableScheduledApexSharingRecalculationTestRequestTestWorkerCurrently, queries are supported only on BatchApex jobs. |

## Usage

To find the position of an AsyncApexJob in the flex queue, query JobPosition. For example:

```

```

To find the job at a given position, query AsyncApexJobId. For example:

```

```

To find all batch jobs in the flex queue, query JobType. To get other information about the jobs, include AsyncApexJob in your query. For example:

```

```

## Code Examples

```
SELECT JobPosition FROM FlexQueueItem WHERE JobType = 'BatchApex' AND AsyncApexJobId = '707xx000000DABC'
```

```
SELECT AsyncApexJobId FROM FlexQueueItem WHERE JobType = 'BatchApex' AND JobPosition = '2'
```

```
SELECT JobType, JobPosition, AsyncApexJob.ApexClass.Name, AsyncApexJob.CreatedDate,
    AsyncApexJob.CreatedById FROM FlexQueueItem WHERE JobType='BatchApex' AND
    AsyncApexJob.ApexClass.Name LIKE '%BatchAJob%' ORDER BY JobPosition DESC
```

## Related Topics

- AsyncApexJob (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_asyncapexjob.htm)
