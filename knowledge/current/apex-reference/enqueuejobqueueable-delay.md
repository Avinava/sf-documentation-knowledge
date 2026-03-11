---
title: "enqueueJob(queueable, delay)"
domain: apex-reference
topic: enqueuejobqueueable-delay
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.927Z
keywords: [enqueueJob, queueable, delay, Adds, job, Apex, queue, corresponds, specified, class, returns, ID., scheduled, minimum, 0–10, minutes, ignored, during, testing., Signature]
---

# enqueueJob(queueable, delay)

> Adds a job to the Apex job queue that corresponds to the specified queueable class and
        returns the job ID. The job is scheduled with a specified minimum delay (0–10
        minutes). The delay is ignored during Apex testing.

### enqueueJob(queueable, delay)

Adds a job to the Apex job queue that corresponds to the specified queueable class and returns the job ID. The job is scheduled with a specified minimum delay (0–10 minutes). The delay is ignored during Apex testing.

#### Signature

public static Id enqueueJob(Object queueable, Integer delay)

#### Parameters

queueable

Type: Object

An instance of the class that implements the [Queueable Interface](atlas.en-us.apexref.meta/apexref/apex_class_System_Queueable.htm#apex_class_System_Queueable "Enables the asynchronous execution of Apex jobs that can be monitored.").

delay

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The minimum delay (0–10 minutes) before the queueable job is scheduled for execution.

The delay is ignored during Apex testing.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexref)

#### Warning

When you set the delay to 0 (zero), the Queueable job is run as quickly as possible. With chained queueable jobs, implement a mechanism to slow down or halt the job if necessary. Without such a fail-safe mechanism in place, you can rapidly reach the daily async Apex limit.

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The job ID, which corresponds to the ID of an AsyncApexJob record.

#### Example

This example adds a job for delayed asynchronous execution by passing in an instance of your class implementation of the Queueable interface for execution. There’s a minimum delay of 5 minutes before the job is executed.

Integer delayInMinutes = 5; ID jobID = System.enqueueJob(new MyQueueableClass(), delayInMinutes);

For more information about Queueable Apex, including information about limits, see [Queueable Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_queueing_jobs.htm).