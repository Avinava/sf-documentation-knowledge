---
title: "UnavailableTimeslot Class"
domain: salesforce-scheduler-developer-guide
topic: unavailabletimeslot-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.214Z
estimatedTokens: 577
namespace: LxScheduler
keywords: [UnavailableTimeslot, pass, unavailable, time, slots, lxscheduler.ServiceResourceSchedule, Timezones, differ, across, operating, hours, handled, results, always, UTC]
---

# UnavailableTimeslot Class

> Use this class to pass the unavailable time slots to the
      lxscheduler.ServiceResourceSchedule class. Timezones that differ across operating hours are
      handled and results are always returned in UTC.

**Namespace:** `LxScheduler`

# UnavailableTimeslot Class

Use this class to pass the unavailable time slots to the lxscheduler.ServiceResourceSchedule class. Timezones that differ across operating hours are handled and results are always returned in UTC.

## Namespace

LxScheduler

-   **[UnavailableTimeslot Constructors](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_lxscheduler_UnavailableTimeslot_constructors)**

-   **[UnavailableTimeslot Properties](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_lxscheduler_UnavailableTimeslot_properties)**


## UnavailableTimeslot Constructors

The following are constructors for UnavailableTimeslot.

-   **[UnavailableTimeslot(timeMin, timeMax)](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_lxscheduler_UnavailableTimeslot_ctor)**
    Creates an instance of lxscheduler.UnavailableTimeslot class.

### UnavailableTimeslot(timeMin, timeMax)

Creates an instance of lxscheduler.UnavailableTimeslot class.

#### Signature

public UnavailableTimeslot(Datetime timeMin, Datetime timeMax)

#### Parameters

timeMin

Type: Datetime

Start time of an unavailable time slot.

timeMax

Type: Datetime

End time of an unavailable time slot.

## UnavailableTimeslot Properties

The following are properties for UnavailableTimeslot.

-   **[timeMax](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_lxscheduler_UnavailableTimeslot_timeMax)**
    End time of an unavailable time slot.
-   **[timeMin](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_lxscheduler_UnavailableTimeslot_timeMin)**
    Start time of an unavailable time slot.

### timeMax

End time of an unavailable time slot.

#### Signature

public Datetime timeMax {get; set;}

#### Property Value

Type: Datetime

### timeMin

Start time of an unavailable time slot.

#### Signature

public Datetime timeMin {get; set;}

#### Property Value

Type: Datetime

## Related Topics

- UnavailableTimeslot Constructors (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_UnavailableTimeslot.htm)
- UnavailableTimeslot Properties (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_UnavailableTimeslot.htm)
- UnavailableTimeslot(timeMin, timeMax) (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_UnavailableTimeslot.htm)
- timeMax (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_UnavailableTimeslot.htm)
- timeMin (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_UnavailableTimeslot.htm)
