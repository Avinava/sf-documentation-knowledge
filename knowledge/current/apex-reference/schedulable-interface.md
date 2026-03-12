---
title: "Schedulable Interface"
domain: apex-reference
topic: schedulable-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.163Z
estimatedTokens: 316
namespace: System
keywords: [Schedulable, implements, scheduled, run, different, intervals., execute, context]
---

# Schedulable Interface

> The class that implements this interface can be scheduled
to run at different intervals.

**Namespace:** `System`

# Schedulable Interface

The class that implements this interface can be scheduled to run at different intervals.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

#### See Also

-   [*Apex Developer Guide*: Scheduler](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_scheduler.htm "Apex Developer Guide: Scheduler - HTML (New Window)")


## Schedulable Methods

The following are methods for Schedulable.

-   **[execute(context)](atlas.en-us.apexref.meta/apexref/apex_interface_system_schedulable.htm#apex_System_Schedulable_execute)**
    Executes the scheduled Apex job.

### execute(context)

Executes the scheduled Apex job.

#### Signature

public Void execute(SchedulableContext context)

#### Parameters

context

Type: [System.SchedulableContext](atlas.en-us.apexref.meta/apexref/apex_interface_system_schedulablecontext.htm#apex_interface_system_schedulablecontext "Represents the parameter type of a method in a class that implements the Schedulable interface and contains the scheduled job ID. This interface is implemented internally by Apex.")

Contains the job ID.

#### Return Value

Type: Void

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- execute(context) (atlas.en-us.apexref.meta/apexref/apex_interface_system_schedulable.htm)
- System.SchedulableContext (atlas.en-us.apexref.meta/apexref/apex_interface_system_schedulablecontext.htm)
