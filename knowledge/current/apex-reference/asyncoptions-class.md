---
title: "AsyncOptions Class"
domain: apex-reference
topic: asyncoptions-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.082Z
estimatedTokens: 735
namespace: System
keywords: [AsyncOptions, Contains, maximum, stack, depths, queueable, transactions, minimum, delay, minutes., Passed, System.enqueueJob, define, unique, job, depth, DuplicateSignature, MaximumQueueableStackDepth, MinimumQueueableDelayInMinutes]
---

# AsyncOptions Class

> Contains maximum stack depths for queueable transactions and the minimum queueable delay
    in minutes. Passed as parameter to the System.enqueueJob()
    method to define a unique queueable job signature, the maximum stack depth for queueable
    transactions and the minimum queueable delay in minutes.

**Namespace:** `System`

# AsyncOptions Class

Contains maximum stack depths for queueable transactions and the minimum queueable delay in minutes. Passed as parameter to the System.enqueueJob() method to define a unique queueable job signature, the maximum stack depth for queueable transactions and the minimum queueable delay in minutes.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

-   **[AsyncOptions Properties](atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm#apex_System_AsyncOptions_properties)**


#### See Also

-   [*Apex Developer Guide*: Queueable Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_queueing_jobs.htm "Apex Developer Guide: Queueable Apex - HTML (New Window)")

-   [*Apex Developer Guide*: Detecting Duplicate Queueable Jobs](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dedupe_queueable.htm "Apex Developer Guide: Detecting Duplicate Queueable Jobs - HTML (New Window)")


## AsyncOptions Properties

The following are properties for AsyncOptions.

-   **[DuplicateSignature](atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm#apex_System_AsyncOptions_DuplicateSignature)**
    A unique signature for a Queueable job.
-   **[MaximumQueueableStackDepth](atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm#apex_System_AsyncOptions_MaximumQueueableStackDepth)**
    Maximum stack depth for queueable transactions.
-   **[MinimumQueueableDelayInMinutes](atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm#apex_System_AsyncOptions_MinimumQueueableDelayInMinutes)**
    Minimum queueable delay for queueable transactions.

### DuplicateSignature

A unique signature for a Queueable job.

#### Signature

public System.QueueableDuplicateSignature DuplicateSignature {get; set;}

#### Property Value

Type: [QueueableDuplicateSignature Class](atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature.htm#apex_class_System_QueueableDuplicateSignature "Used in the AsyncOptions class to store the queueable job signature in the DuplicateSignature property.")

### MaximumQueueableStackDepth

Maximum stack depth for queueable transactions.

#### Signature

public Integer MaximumQueueableStackDepth {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### MinimumQueueableDelayInMinutes

Minimum queueable delay for queueable transactions.

#### Signature

public Integer MinimumQueueableDelayInMinutes {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- AsyncOptions Properties (atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm)
- DuplicateSignature (atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm)
- MaximumQueueableStackDepth (atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm)
- MinimumQueueableDelayInMinutes (atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm)
- QueueableDuplicateSignature Class (atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
