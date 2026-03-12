---
title: "QueueableContext Interface"
domain: apex-reference
topic: queueablecontext-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.207Z
estimatedTokens: 303
namespace: System
keywords: [QueueableContext, submitted, job, uses, Queueable, getJobId]
---

# QueueableContext Interface

> Returns the ID of the submitted job that uses the Queueable interface.

**Namespace:** `System`

# QueueableContext Interface

Represents the parameter type of the execute() method in a class that implements the Queueable interface and contains the job ID. This interface is implemented internally by Apex.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## QueueableContext Methods

The following are methods for QueueableContext.

-   **[getJobId()](atlas.en-us.apexref.meta/apexref/apex_interface_system_queueablecontext.htm#apex_System_QueueableContext_getJobId)**
    Returns the ID of the submitted job that uses the Queueable interface.

### getJobId()

Returns the ID of the submitted job that uses the Queueable interface.

#### Signature

public ID getJobId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the submitted job.

#### See Also

-   [*Apex Developer Guide*: Queueable Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_queueing_jobs.htm "Apex Developer Guide: Queueable Apex - HTML (New Window)")

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- getJobId() (atlas.en-us.apexref.meta/apexref/apex_interface_system_queueablecontext.htm)
