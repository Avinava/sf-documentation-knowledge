---
title: "UnavailableTimeslot Constructors"
domain: apex-reference
topic: unavailabletimeslot-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.595Z
keywords: [UnavailableTimeslot, Constructors, Creates, instance, lxscheduler.UnavailableTimeslot, class., timeMin, timeMax, Signature, Parameters]
---

# UnavailableTimeslot Constructors

> Creates an instance of lxscheduler.UnavailableTimeslot
    class.

## UnavailableTimeslot Constructors

The following are constructors for UnavailableTimeslot.

-   **[UnavailableTimeslot(timeMin, timeMax)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_lxscheduler_UnavailableTimeslot_ctor)**  
    Creates an instance of lxscheduler.UnavailableTimeslot class.

### UnavailableTimeslot(timeMin, timeMax)

Creates an instance of lxscheduler.UnavailableTimeslot class.

#### Signature

public UnavailableTimeslot(Datetime timeMin, Datetime timeMax)

#### Parameters

timeMin

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

Start time of an unavailable time slot.

timeMax

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

End time of an unavailable time slot.