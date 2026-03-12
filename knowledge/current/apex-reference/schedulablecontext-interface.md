---
title: "SchedulableContext Interface"
domain: apex-reference
topic: schedulablecontext-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.165Z
estimatedTokens: 295
namespace: System
keywords: [SchedulableContext, Represents, implements, Schedulable, contains, scheduled, job, ID., implemented, internally, Apex., getTriggerId]
---

# SchedulableContext Interface

> Represents the parameter type of a method in a class that implements the Schedulable interface and contains the scheduled job ID. This
  interface is implemented internally by Apex.

**Namespace:** `System`

# SchedulableContext Interface

Represents the parameter type of a method in a class that implements the Schedulable interface and contains the scheduled job ID. This interface is implemented internally by Apex.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

#### See Also

-   [Schedulable Interface](atlas.en-us.apexref.meta/apexref/apex_interface_system_schedulable.htm#apex_interface_system_schedulable "The class that implements this interface can be scheduled to run at different intervals.")


## SchedulableContext Methods

The following are methods for SchedulableContext.

-   **[getTriggerId()](atlas.en-us.apexref.meta/apexref/apex_interface_system_schedulablecontext.htm#apex_System_SchedulableContext_getTriggerId)**
    Returns the ID of the CronTrigger scheduled job.

### getTriggerId()

Returns the ID of the CronTrigger scheduled job.

#### Signature

public Id getTriggerId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- Schedulable Interface (atlas.en-us.apexref.meta/apexref/apex_interface_system_schedulable.htm)
- getTriggerId() (atlas.en-us.apexref.meta/apexref/apex_interface_system_schedulablecontext.htm)
