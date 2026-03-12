---
title: "FlexQueue Class"
domain: apex-reference
topic: flexqueue-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.610Z
estimatedTokens: 1863
namespace: System
keywords: [FlexQueue, reorder, batch, jobs, Apex, flex, queue, Usage, moveAfterJob, jobToMoveId, jobInQueueId, moveBeforeJob, moveJobToEnd, jobId, moveJobToFront]
---

# FlexQueue Class

> Contains methods that reorder batch jobs in the Apex flex
      queue.

**Namespace:** `System`

# FlexQueue Class

Contains methods that reorder batch jobs in the Apex flex queue.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

You can place up to 100 batch jobs in a holding status for future execution. When system resources become available, the jobs are taken from the top of the Apex flex queue and moved to the batch job queue. Up to five queued or active jobs can be processed simultaneously for each org. When a job is moved out of the flex queue for processing, its status changes from Holding to Queued. Queued jobs are executed when the system is ready to process new jobs.

Use this class’s methods to reorder your Holding jobs in the flex queue. As best practice and for safe usage, a FlexQueue reorder method must be the final statement in a transaction.

## Example

This example moves a job to the front of the flex queue so that it’s executed immediately. The job is moved by calling the System.FlexQueue.moveJobToFront() method with the high priority job ID as the parameter.

```

```

-   **[FlexQueue Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_FlexQueue.htm#apex_System_FlexQueue_methods)**


#### See Also

-   [Monitoring the Apex Flex Queue](https://help.salesforce.com/HTViewHelpDoc?id=code_apex_flex_queue.htm&language=en_US "Monitoring the Apex Flex Queue - HTML (New Window)")

-   [*Apex Developer Guide*: Using Batch Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_batch_interface.htm "Apex Developer Guide: Using Batch Apex - HTML (New Window)")


## FlexQueue Methods

The following are methods for FlexQueue.

-   **[moveAfterJob(jobToMoveId, jobInQueueId)](atlas.en-us.apexref.meta/apexref/apex_class_System_FlexQueue.htm#apex_System_FlexQueue_moveAfterJob)**
    Moves the job with the ID jobToMoveId immediately after the job with the ID jobInQueueId in the flex queue. You can move jobToMoveId forward or backward in the queue. If either job isn’t in the queue, it throws an element-not-found exception. Returns true if the job is moved, or false if jobToMoveId is already immediately after jobInQueueId, so no change is made.
-   **[moveBeforeJob(jobToMoveId, jobInQueueId)](atlas.en-us.apexref.meta/apexref/apex_class_System_FlexQueue.htm#apex_System_FlexQueue_moveBeforeJob)**
    Moves the job with the ID jobToMoveId immediately before the job with the ID jobInQueueId in the flex queue. You can move jobToMoveId forward or backward in the queue. If either job isn’t in the queue, it throws an element-not-found exception. Returns true if the job is moved, or false if jobToMoveId is already immediately before jobInQueueId, so no change is made.
-   **[moveJobToEnd(jobId)](atlas.en-us.apexref.meta/apexref/apex_class_System_FlexQueue.htm#apex_System_FlexQueue_moveJobToEnd)**
    Moves the specified job the end of the flex queue, to index position (size - 1). All jobs after the job’s starting position move one spot forward. If the job isn’t in the queue, it throws an element-not-found exception. Returns true if the job is moved, or false if the job is already at the end of the queue, so no change is made.
-   **[moveJobToFront(jobId)](atlas.en-us.apexref.meta/apexref/apex_class_System_FlexQueue.htm#apex_System_FlexQueue_moveJobToFront)**
    Moves the specified job to the front of the flex queue, to index position 0. All other jobs move back one spot. If the job isn’t in the queue, it throws an element-not-found exception. Returns true if the job is moved, or false if the job is already at the front of the queue, so no change is made.

### moveAfterJob(jobToMoveId, jobInQueueId)

Moves the job with the ID jobToMoveId immediately after the job with the ID jobInQueueId in the flex queue. You can move jobToMoveId forward or backward in the queue. If either job isn’t in the queue, it throws an element-not-found exception. Returns true if the job is moved, or false if jobToMoveId is already immediately after jobInQueueId, so no change is made.

#### Signature

public static Boolean moveAfterJob(Id jobToMoveId, Id jobInQueueId)

#### Parameters

jobToMoveId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the job to move.

jobInQueueId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the job to move after.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### moveBeforeJob(jobToMoveId, jobInQueueId)

Moves the job with the ID jobToMoveId immediately before the job with the ID jobInQueueId in the flex queue. You can move jobToMoveId forward or backward in the queue. If either job isn’t in the queue, it throws an element-not-found exception. Returns true if the job is moved, or false if jobToMoveId is already immediately before jobInQueueId, so no change is made.

#### Signature

public static Boolean moveBeforeJob(Id jobToMoveId, Id jobInQueueId)

#### Parameters

jobToMoveId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the job to move.

jobInQueueId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the job to use as a reference point.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### moveJobToEnd(jobId)

Moves the specified job the end of the flex queue, to index position (size - 1). All jobs after the job’s starting position move one spot forward. If the job isn’t in the queue, it throws an element-not-found exception. Returns true if the job is moved, or false if the job is already at the end of the queue, so no change is made.

#### Signature

public static Boolean moveJobToEnd(Id jobId)

#### Parameters

jobId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the job to move.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### moveJobToFront(jobId)

Moves the specified job to the front of the flex queue, to index position 0. All other jobs move back one spot. If the job isn’t in the queue, it throws an element-not-found exception. Returns true if the job is moved, or false if the job is already at the front of the queue, so no change is made.

#### Signature

public static Boolean moveJobToFront(Id jobId)

#### Parameters

jobId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the job to move.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Code Examples

```apex
ID highPriorityJobId = Database.executeBatch(new HighPriorityBatchClass(), 200);
boolean jobMovedToFrontOfQueue = FlexQueue.moveJobToFront(highPriorityJobId);
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- FlexQueue Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_FlexQueue.htm)
- moveAfterJob(jobToMoveId, jobInQueueId) (atlas.en-us.apexref.meta/apexref/apex_class_System_FlexQueue.htm)
- moveBeforeJob(jobToMoveId, jobInQueueId) (atlas.en-us.apexref.meta/apexref/apex_class_System_FlexQueue.htm)
- moveJobToEnd(jobId) (atlas.en-us.apexref.meta/apexref/apex_class_System_FlexQueue.htm)
- moveJobToFront(jobId) (atlas.en-us.apexref.meta/apexref/apex_class_System_FlexQueue.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
