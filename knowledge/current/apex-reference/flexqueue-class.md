---
title: "FlexQueue Class"
domain: apex-reference
topic: flexqueue-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.399Z
keywords: [FlexQueue, Class, Moves, specified, job, front, flex, queue, index, position, jobs, move, back, spot., isn’t, throws, element-not-found, exception., Returns, true]
---

# FlexQueue Class

> Moves the specified job to the front of the flex queue, to index
      position 0. All other jobs move back one spot. If the
      job isn’t in the queue, it throws an element-not-found exception. Returns true if the job is moved, or false if the job is already at the front of the queue, so no change is
    made.

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