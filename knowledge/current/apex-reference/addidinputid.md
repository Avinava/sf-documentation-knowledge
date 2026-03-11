---
title: "addId(inputId)"
domain: apex-reference
topic: addidinputid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.509Z
keywords: [addId, inputId, Adds, build, unique, signature, queueable, job., then, enqueue, job, AsyncOptions, parameter, System.enqueueJob, Signature, Parameters, Return, Value]
---

# addId(inputId)

> Adds an ID to build a unique signature for a queueable job. You can then enqueue the
    job by using the signature as the AsyncOptions parameter to
      System.enqueueJob().

### addId(inputId)

Adds an ID to build a unique signature for a queueable job. You can then enqueue the job by using the signature as the AsyncOptions parameter to System.enqueueJob().

#### Signature

public System.QueueableDuplicateSignature.Builder addId(Id id)

#### Parameters

inputId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: [QueueableDuplicateSignature.Builder](#apex_class_System_QueueableDuplicateSignature_Builder "Build a unique signature for your queueable job using this inner builder class. The build() class method builds a QueueableDuplicateSignature object, with input from the addId(), addInteger(), and addString() methods. Use the DuplicateSignature property in the AsyncOptions class to store the queueable job signature. Enqueue your job by using the System.enqueueJob() with the AsyncOptions parameter.")