---
title: "enqueueJob(queueable, asyncOptions)"
domain: apex-reference
topic: enqueuejobqueueable-asyncoptions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.927Z
keywords: [enqueueJob, queueable, asyncOptions, Adds, job, Apex, queue, corresponds, specified, class, returns, ID., Specify, unique, signature, maximum, stack, depth, minimum, delay]
---

# enqueueJob(queueable, asyncOptions)

> Adds a job to the Apex job queue that corresponds to the specified queueable class and
    returns the job ID. Specify a unique signature for your queueable job, the maximum stack depth
    or the minimum queue delay in the asyncOptions parameter.

### enqueueJob(queueable, asyncOptions)

Adds a job to the Apex job queue that corresponds to the specified queueable class and returns the job ID. Specify a unique signature for your queueable job, the maximum stack depth or the minimum queue delay in the asyncOptions parameter.

#### Signature

public static Id enqueueJob(Object queueable, Object asyncoptions)

#### Parameters

queueable

Type: Object

An instance of the class that implements the [Queueable Interface](atlas.en-us.apexref.meta/apexref/apex_class_System_Queueable.htm#apex_class_System_Queueable "Enables the asynchronous execution of Apex jobs that can be monitored.").

asyncoptions

Type: [AsyncOptions](atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm#apex_class_System_AsyncOptions "Contains maximum stack depths for queueable transactions and the minimum queueable delay in minutes. Passed as parameter to the System.enqueueJob() method to define a unique queueable job signature, the maximum stack depth for queueable transactions and the minimum queueable delay in minutes.")

Specify a unique signature for your queueable job, the maximum stack depth, or a minimum queue delay in the AsyncOptions class properties.

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The job ID, which corresponds to the ID of an AsyncApexJob record.

#### Usage

The [System.AsyncInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_AsyncInfo.htm "HTML (New Window)") class methods help you determine if maximum stack depth is set in your Queueable request and get the stack depths and queue delay for queueables that are currently running. Use information about the current queueable execution to make decisions on adjusting delays on subsequent calls.

These are methods in the System.AsyncInfo class.

-   hasMaxStackDepth()
-   getCurrentQueueableStackDepth()
-   getMaximumQueueableStackDepth()
-   getMinimumQueueableDelayInMinutes()

For more information about Queueable Apex, including information about limits, see [Queueable Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_queueing_jobs.htm).