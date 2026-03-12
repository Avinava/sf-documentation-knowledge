---
title: "UnavailableTimeslot Class"
domain: apex-reference
topic: unavailabletimeslot-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.704Z
estimatedTokens: 707
namespace: LxScheduler
keywords: [UnavailableTimeslot, pass, unavailable, time, slots, lxscheduler.ServiceResourceSchedule, class., Timezones, differ, across, operating, hours, handled, results, always, returned, UTC., timeMin, timeMax]
---

# UnavailableTimeslot Class

> Use this class to pass the unavailable time slots to the
      lxscheduler.ServiceResourceSchedule class. Timezones that differ across operating hours are
      handled and results are always returned in UTC.

**Namespace:** `LxScheduler`

# UnavailableTimeslot Class

Use this class to pass the unavailable time slots to the lxscheduler.ServiceResourceSchedule class. Timezones that differ across operating hours are handled and results are always returned in UTC.

## Namespace

[LxScheduler](atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm "The LxScheduler namespace provides an interface and classes for integrating Salesforce Scheduler with external calendars.")

-   **[UnavailableTimeslot Constructors](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_lxscheduler_UnavailableTimeslot_constructors)**

-   **[UnavailableTimeslot Properties](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_lxscheduler_UnavailableTimeslot_properties)**


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

## UnavailableTimeslot Properties

The following are properties for UnavailableTimeslot.

-   **[timeMax](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_lxscheduler_UnavailableTimeslot_timeMax)**
    End time of an unavailable time slot.
-   **[timeMin](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_lxscheduler_UnavailableTimeslot_timeMin)**
    Start time of an unavailable time slot.

### timeMax

End time of an unavailable time slot.

#### Signature

public Datetime timeMax {get; set;}

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### timeMin

Start time of an unavailable time slot.

#### Signature

public Datetime timeMin {get; set;}

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

## Related Topics

- LxScheduler (atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm)
- UnavailableTimeslot Constructors (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_UnavailableTimeslot.htm)
- UnavailableTimeslot Properties (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_UnavailableTimeslot.htm)
- UnavailableTimeslot(timeMin, timeMax) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_UnavailableTimeslot.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- timeMax (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_UnavailableTimeslot.htm)
- timeMin (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_UnavailableTimeslot.htm)
