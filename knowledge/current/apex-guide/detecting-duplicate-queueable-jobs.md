---
title: "Detecting Duplicate Queueable Jobs"
domain: apex-guide
topic: detecting-duplicate-queueable-jobs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.217Z
estimatedTokens: 930
keywords: [Detecting, Duplicate, Queueable, Jobs, Reduce, resource, contention, race, conditions, enqueuing, instance, async, job, Attempting, add]
---

# Detecting Duplicate Queueable Jobs

> Reduce resource contention and race conditions by enqueuing only a
        single instance of your async Queueable job based on its signature. Attempting to add more
        than one Queueable job to the processing queue with the same signature results in a
        DuplicateMessageException when you try to enqueue subsequent jobs.

# Detecting Duplicate Queueable Jobs

Reduce resource contention and race conditions by enqueuing only a single instance of your async Queueable job based on its signature. Attempting to add more than one Queueable job to the processing queue with the same signature results in a DuplicateMessageException when you try to enqueue subsequent jobs.

## Build a Queueable Signature

To create a unique queuable signature, first declare an instance of the [AsyncOptions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_AsyncOptions.htm "HTML (New Window)") class. Then set the value of the instance’s DuplicateSignature property to a [QueueableDuplicateSignature](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature.htm) object, which is built using the inner [QueueableDuplicateSignature.Builder](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm) class.

To build the queueable signature, add different strings, IDs, or integers using these methods from QueueableDuplicateSignature.Builder.

-   addString(inputString)
-   addId(inputId)
-   addInteger(inputInteger)

As you build the signature, you can find the size, remaining size, and maximum size of the queueable job signature in bytes using these methods from the QueueableDuplicateSignature.Builder class.

-   getSize()
-   getRemainingSize()
-   getMaxSize()

When the signature has the required components, call the .build() method and assign the signature to the DuplicateSignature property.

## Enqueue a Job with a Queueable Signature

After you build a queuable signature, enqueue a new job using the [System.enqueueJob(queueable, asyncOptions)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_system_enqueueJob) method. Set the asyncOptions parameter to the AsyncOptions instance with the queueable signature that identifies the unique job. When the new job is enqueued, the system checks for existing enqueued jobs with the same signature. If other enqueued jobs with the same signature are found, then the enqueue operation for the new job fails, and a DuplicateMessageException is thrown.

However, if other jobs with the same signature are already running when the new job is enqueued, then the enqueue operation for the new job succeeds. Therefore, duplicates of already running jobs can still occur in this case. This behavior occurs because the queuable signature is removed from the job when it’s first dequeued, so a running job no longer has a signature. This removal guarantees that at least one job instance for a given signature runs.

## Examples

This example builds the async job signature using the User Id and the string MyQueueable.

AsyncOptions options = new AsyncOptions(); options.DuplicateSignature = QueueableDuplicateSignature.Builder() .addId(UserInfo.getUserId()) .addString('MyQueueable') .build(); try { System.enqueueJob(new MyQueueable(), options); } catch (DuplicateMessageException ex) { //Exception is thrown if there is already an enqueued job with the same //signature Assert.areEqual('Attempt to enqueue job with duplicate queueable signature', ex.getMessage()); }

This example builds the async job signature using the ApexClass Id and the hash value of an sObject.

AsyncOptions options = new AsyncOptions(); options.DuplicateSignature = QueueableDuplicateSignature.Builder() .addInteger(System.hashCode(someAccount)) .addId(\[SELECT Id FROM ApexClass WHERE Name='MyQueueable'\].Id) .build(); System.enqueueJob(new MyQueueable(), options);
