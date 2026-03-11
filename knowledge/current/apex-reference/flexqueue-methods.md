---
title: "FlexQueue Methods"
domain: apex-reference
topic: flexqueue-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.399Z
keywords: [FlexQueue, Methods, Moves, job, jobToMoveId, immediately, after, jobInQueueId, flex, queue., move, forward, backward, either, isn’t, queue, throws, element-not-found, exception., Returns]
---

# FlexQueue Methods

> Moves the job with the ID jobToMoveId immediately
      after the job with the ID jobInQueueId in the flex queue. You can move
        jobToMoveId forward or backward in the queue. If either job isn’t in the
      queue, it throws an element-not-found exception. Returns true if the job is moved, or false if
        jobToMoveId is already immediately after jobInQueueId,
      so no change is made.

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